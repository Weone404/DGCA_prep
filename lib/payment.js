const STORAGE_KEY = 'subscription'

export const PLANS = {
  monthly: {
    id: 'monthly',
    label: 'Monthly',
    price: 299,
    originalPrice: 499,
    durationDays: 30,
    badge: '',
    features: ['All recorded lectures', 'Short videos', 'Personalysis', 'Live class access'],
  },
  quarterly: {
    id: 'quarterly',
    label: 'Quarterly',
    price: 699,
    originalPrice: 1299,
    durationDays: 90,
    badge: 'Most Popular',
    features: ['Everything in Monthly', 'Priority doubt support', 'Mock test access'],
  },
  yearly: {
    id: 'yearly',
    label: 'Yearly',
    price: 1999,
    originalPrice: 4999,
    durationDays: 365,
    badge: 'Best Value',
    features: ['Everything in Quarterly', 'Lowest price/month', '1-on-1 mentor session'],
  },
}

function readStoredSubscription() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed?.expiresAt && new Date(parsed.expiresAt) > new Date()) return parsed
    window.localStorage.removeItem(STORAGE_KEY)
    return null
  } catch {
    return null
  }
}

function writeStoredSubscription(sub) {
  if (typeof window === 'undefined') return
  try {
    if (sub === null) {
      window.localStorage.removeItem(STORAGE_KEY)
    } else {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sub))
    }
  } catch {
    // ignore storage issues
  }
}

export function getSubscription() {
  return readStoredSubscription()
}

export function isSubscribed() {
  return !!readStoredSubscription()
}

export function daysRemaining() {
  const sub = readStoredSubscription()
  if (!sub?.expiresAt) return 0
  const diff = new Date(sub.expiresAt).getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / 86400000))
}

export function openPayment({ planId, user, onSuccess, onFailure, onDismiss }) {
  setTimeout(() => {
    if (!user) {
      onFailure?.('User not logged in')
      return
    }
    const plan = PLANS[planId]
    const expiresAt = new Date(Date.now() + (plan?.durationDays || 30) * 86400000).toISOString()
    onSuccess?.({ planId, planLabel: plan?.label || planId, expiresAt })
  }, 500)
}

export function grantSubscription(email, selectedPlanId) {
  const plan = PLANS[selectedPlanId]
  const sub = {
    planId: selectedPlanId,
    planLabel: plan?.label || selectedPlanId,
    expiresAt: new Date(Date.now() + (plan?.durationDays || 30) * 86400000).toISOString(),
    email,
  }
  writeStoredSubscription(sub)
  return sub
}
