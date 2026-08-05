import pool from './db'

let schemaReady = false

const DEFAULT_COUNTRY_CODE = String(process.env.WHATSAPP_DEFAULT_COUNTRY_CODE || '+91').trim()
const DEFAULT_MINOR_UPDATE_POLICY = String(process.env.WHATSAPP_NOTIFY_MINOR_UPDATES || 'false').toLowerCase() === 'true'
const DEFAULT_TEACHER_WHATSAPP_NUMBER = String(process.env.TEACHER_WHATSAPP_NUMBER || '+918860395017').trim()
const DEFAULT_NON_PROD_TEST_RECIPIENT = String(process.env.WHATSAPP_NON_PROD_TEST_RECIPIENT || '+918077727669').trim()

function isDbConfigured() {
  return Boolean(String(process.env.DATABASE_URL || '').trim())
}

function isEnabled() {
  const raw = String(process.env.WHATSAPP_NOTIFICATIONS_ENABLED || '').trim().toLowerCase()
  if (raw === 'true') return true
  if (raw === 'false') return false
  return !isProductionEnvironment()
}

function getProvider() {
  return String(process.env.WHATSAPP_PROVIDER || 'twilio').trim().toLowerCase()
}

function isProductionEnvironment() {
  return String(process.env.NODE_ENV || '').toLowerCase() === 'production'
    || String(process.env.VERCEL_ENV || '').toLowerCase() === 'production'
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizePhone(phone) {
  const raw = String(phone || '').trim()
  if (!raw) return null

  if (raw.startsWith('+')) {
    const normalizedPlus = `+${raw.slice(1).replace(/\D/g, '')}`
    return normalizedPlus.length > 8 ? normalizedPlus : null
  }

  const digits = raw.replace(/\D/g, '')
  if (!digits) return null

  if (digits.length === 10) {
    const countryDigits = DEFAULT_COUNTRY_CODE.replace(/\D/g, '')
    return `+${countryDigits}${digits}`
  }

  if (digits.length >= 11) return `+${digits}`
  return null
}

function getAppBaseUrl() {
  const explicit = String(process.env.NEXT_PUBLIC_APP_URL || process.env.APP_BASE_URL || '').trim()
  if (explicit) return explicit.replace(/\/$/, '')

  const vercelUrl = String(process.env.VERCEL_URL || '').trim()
  if (vercelUrl) return `https://${vercelUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}`

  return ''
}

function buildAttemptLink(assignment) {
  const classSlug = slugify(assignment?.classId || assignment?.className || assignment?.subjectId || 'all-subjects')
  const testId = encodeURIComponent(String(assignment?.id || ''))
  const path = `/class-test/${encodeURIComponent(classSlug)}/${testId}`
  const baseUrl = getAppBaseUrl()
  return baseUrl ? `${baseUrl}${path}` : path
}

function formatDateForMessage(value) {
  if (!value) return ''
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return String(value)
  return parsed.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function buildMessage({ assignment, eventType }) {
  const actionText = eventType === 'updated' ? 'updated' : 'live'
  const title = String(assignment?.title || 'Assigned Test').trim()
  const subject = String(assignment?.subjectLabel || assignment?.subjectId || 'Subject').trim()
  const className = String(assignment?.className || assignment?.classId || 'Your class').trim()
  const deadline = formatDateForMessage(assignment?.dueAt)
  const deadlineLine = deadline ? `\nDeadline: ${deadline}` : ''
  const link = buildAttemptLink(assignment)

  return [
    `WeOne Aviation Update`,
    `A test is now ${actionText}.`,
    `Test: ${title}`,
    `Subject: ${subject}`,
    `Class: ${className}${deadlineLine}`,
    `Attempt here: ${link}`,
  ].join('\n')
}

async function ensureSchema() {
  if (schemaReady || !isDbConfigured()) return

  await pool.query(`
    ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS whatsapp_opt_in BOOLEAN DEFAULT false;
    ALTER TABLE IF EXISTS users ADD COLUMN IF NOT EXISTS whatsapp_opt_in_at TIMESTAMPTZ;

    CREATE TABLE IF NOT EXISTS whatsapp_notification_logs (
      id SERIAL PRIMARY KEY,
      test_id TEXT,
      event_type TEXT NOT NULL,
      update_severity TEXT DEFAULT 'major',
      recipient_email TEXT,
      recipient_phone TEXT,
      recipient_batch TEXT,
      provider TEXT,
      status TEXT NOT NULL,
      attempts INTEGER NOT NULL DEFAULT 0,
      provider_message_id TEXT,
      message_text TEXT NOT NULL,
      error_message TEXT,
      metadata JSONB DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_wa_logs_test_id ON whatsapp_notification_logs(test_id);
    CREATE INDEX IF NOT EXISTS idx_wa_logs_status ON whatsapp_notification_logs(status);
    CREATE INDEX IF NOT EXISTS idx_wa_logs_created_at ON whatsapp_notification_logs(created_at);
  `)

  schemaReady = true
}

async function fetchRecipients({ classId, className }) {
  await ensureSchema()

  const filters = [String(className || '').trim(), String(classId || '').trim()]
    .map((value) => value.toLowerCase())
    .filter(Boolean)

  if (!filters.length) return []

  const params = filters
  const placeholders = filters.map((_, index) => `$${index + 1}`).join(', ')

  const { rows } = await pool.query(
    `SELECT name, email, phone, batch, COALESCE(whatsapp_opt_in, false) AS whatsapp_opt_in
     FROM users
     WHERE LOWER(COALESCE(batch, '')) IN (${placeholders})`,
    params
  )

  return rows.map((row) => ({
    name: row.name || 'Student',
    email: row.email || '',
    batch: row.batch || className || classId || '',
    phoneRaw: row.phone || '',
    phone: normalizePhone(row.phone),
    whatsappOptIn: row.whatsapp_opt_in === true,
  }))
}

async function sendViaTwilio({ to, message }) {
  const accountSid = String(process.env.TWILIO_ACCOUNT_SID || '').trim()
  const authToken = String(process.env.TWILIO_AUTH_TOKEN || '').trim()
  const from = String(process.env.TWILIO_WHATSAPP_FROM || DEFAULT_TEACHER_WHATSAPP_NUMBER).trim()

  if (!accountSid || !authToken || !from) {
    throw new Error('Twilio WhatsApp credentials are missing.')
  }

  const body = new URLSearchParams({
    From: from.startsWith('whatsapp:') ? from : `whatsapp:${from}`,
    To: to.startsWith('whatsapp:') ? to : `whatsapp:${to}`,
    Body: message,
  })

  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  const payload = await response.json()
  if (!response.ok) {
    throw new Error(payload?.message || `Twilio request failed with status ${response.status}`)
  }

  return { providerMessageId: payload?.sid || '' }
}

async function sendViaMeta({ to, message }) {
  const token = String(process.env.META_WHATSAPP_TOKEN || '').trim()
  const phoneNumberId = String(process.env.META_WHATSAPP_PHONE_NUMBER_ID || '').trim()

  if (!token || !phoneNumberId) {
    throw new Error('Meta WhatsApp Cloud API credentials are missing.')
  }

  const response = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: to.replace(/^\+/, ''),
      type: 'text',
      text: { body: message },
    }),
  })

  const payload = await response.json()
  if (!response.ok) {
    const details = payload?.error?.message || `Meta request failed with status ${response.status}`
    throw new Error(details)
  }

  return { providerMessageId: payload?.messages?.[0]?.id || '' }
}

async function sendByProvider(args) {
  const provider = getProvider()
  if (provider === 'meta') return sendViaMeta(args)
  return sendViaTwilio(args)
}

async function writeLog({
  assignment,
  eventType,
  updateSeverity,
  recipient,
  provider,
  status,
  attempts,
  providerMessageId,
  message,
  errorMessage,
  metadata,
}) {
  if (!isDbConfigured()) return

  await ensureSchema()

  await pool.query(
    `INSERT INTO whatsapp_notification_logs
      (test_id, event_type, update_severity, recipient_email, recipient_phone, recipient_batch, provider, status, attempts, provider_message_id, message_text, error_message, metadata, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13::jsonb, NOW(), NOW())`,
    [
      String(assignment?.id || ''),
      eventType,
      updateSeverity,
      recipient?.email || null,
      recipient?.phone || null,
      recipient?.batch || null,
      provider,
      status,
      attempts,
      providerMessageId || null,
      message,
      errorMessage || null,
      JSON.stringify(metadata || {}),
    ]
  )
}

export async function sendAssignedTestWhatsAppNotifications({
  assignment,
  eventType = 'created',
  updateSeverity = 'major',
  notifyStudents,
  notifyMinorUpdates,
}) {
  const provider = getProvider()
  const enabled = isEnabled()

  if (!isDbConfigured()) {
    return {
      enabled,
      skipped: true,
      reason: 'database-not-configured',
      sent: 0,
      failed: 0,
      recipients: 0,
    }
  }

  await ensureSchema()

  if (!enabled) {
    return {
      enabled,
      skipped: true,
      reason: 'whatsapp-notifications-disabled',
      sent: 0,
      failed: 0,
      recipients: 0,
    }
  }

  const shouldNotifyMinor = notifyMinorUpdates !== undefined ? notifyMinorUpdates === true : DEFAULT_MINOR_UPDATE_POLICY
  const shouldNotify = notifyStudents !== false && (eventType === 'created' || updateSeverity === 'major' || shouldNotifyMinor)

  if (!shouldNotify) {
    return {
      enabled,
      skipped: true,
      reason: 'minor-update-notification-disabled',
      sent: 0,
      failed: 0,
      recipients: 0,
    }
  }

  const recipients = await fetchRecipients({ classId: assignment?.classId, className: assignment?.className })
  const message = buildMessage({ assignment, eventType })
  const fetchedStudentNumbers = recipients
    .map((recipient) => recipient.phoneRaw)
    .filter(Boolean)

  const intendedStudentNumbers = recipients
    .filter((recipient) => recipient.whatsappOptIn && Boolean(recipient.phone))
    .map((recipient) => recipient.phone)

  const nonProdRecipient = normalizePhone(DEFAULT_NON_PROD_TEST_RECIPIENT)
  const useNonProdOverride = !isProductionEnvironment()

  if (useNonProdOverride && !nonProdRecipient) {
    return {
      enabled,
      provider,
      skipped: true,
      reason: 'invalid-non-prod-test-recipient',
      sent: 0,
      failed: 0,
      recipients: recipients.length,
      fetchedStudentNumbers,
      intendedStudentNumbers,
      targetedStudentNumbers: [],
    }
  }

  const dispatchRecipients = useNonProdOverride
    ? [{
        name: 'Non-production test recipient',
        email: 'non-prod-recipient@local',
        batch: assignment?.className || assignment?.classId || '',
        phoneRaw: DEFAULT_NON_PROD_TEST_RECIPIENT,
        phone: nonProdRecipient,
        whatsappOptIn: true,
      }]
    : recipients

  const targetedStudentNumbers = dispatchRecipients
    .filter((recipient) => recipient.whatsappOptIn && Boolean(recipient.phone))
    .map((recipient) => recipient.phone)

  const senderNumber = provider === 'twilio'
    ? String(process.env.TWILIO_WHATSAPP_FROM || DEFAULT_TEACHER_WHATSAPP_NUMBER).trim()
    : String(process.env.META_WHATSAPP_PHONE_NUMBER_ID || '').trim()

  let sent = 0
  let failed = 0
  let skippedNoConsent = 0
  let skippedNoPhone = 0
  const deliveryIssues = []

  for (const recipient of dispatchRecipients) {
    if (!recipient.whatsappOptIn) {
      skippedNoConsent += 1
      deliveryIssues.push(`Skipped ${recipient.phoneRaw || recipient.email || 'recipient'}: no consent`)
      await writeLog({
        assignment,
        eventType,
        updateSeverity,
        recipient,
        provider,
        status: 'skipped',
        attempts: 0,
        providerMessageId: '',
        message,
        errorMessage: 'Student did not provide WhatsApp consent.',
        metadata: { reason: 'no-consent' },
      })
      continue
    }

    if (!recipient.phone) {
      skippedNoPhone += 1
      deliveryIssues.push(`Skipped ${recipient.phoneRaw || recipient.email || 'recipient'}: invalid phone`)
      await writeLog({
        assignment,
        eventType,
        updateSeverity,
        recipient,
        provider,
        status: 'skipped',
        attempts: 0,
        providerMessageId: '',
        message,
        errorMessage: `Invalid phone number format: ${recipient.phoneRaw || 'empty'}`,
        metadata: { reason: 'invalid-phone' },
      })
      continue
    }

    let attempts = 0
    let delivered = false
    let lastError = ''
    let providerMessageId = ''

    while (attempts < 2 && !delivered) {
      attempts += 1
      try {
        const response = await sendByProvider({ to: recipient.phone, message })
        providerMessageId = response?.providerMessageId || ''
        delivered = true
      } catch (error) {
        lastError = String(error?.message || error || 'Unknown WhatsApp provider error')
      }
    }

    if (delivered) {
      sent += 1
      await writeLog({
        assignment,
        eventType,
        updateSeverity,
        recipient,
        provider,
        status: 'sent',
        attempts,
        providerMessageId,
        message,
        errorMessage: '',
        metadata: {},
      })
    } else {
      failed += 1
      deliveryIssues.push(`Failed ${recipient.phone || recipient.phoneRaw || recipient.email || 'recipient'}: ${lastError}`)
      await writeLog({
        assignment,
        eventType,
        updateSeverity,
        recipient,
        provider,
        status: 'failed',
        attempts,
        providerMessageId: '',
        message,
        errorMessage: lastError,
        metadata: { reason: 'provider-failure' },
      })
    }
  }

  return {
    enabled,
    provider,
    senderNumber,
    nonProductionOverride: useNonProdOverride,
    nonProductionRecipient: useNonProdOverride ? nonProdRecipient : null,
    skipped: false,
    recipients: dispatchRecipients.length,
    sent,
    failed,
    skippedNoConsent,
    skippedNoPhone,
    fetchedStudentNumbers,
    intendedStudentNumbers,
    targetedStudentNumbers,
    deliveryIssues,
  }
}
