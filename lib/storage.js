export function getUser() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function getSubscription() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem('subscription')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveSubscription(sub) {
  if (typeof window === 'undefined') return
  try {
    if (sub === null) {
      localStorage.removeItem('subscription')
    } else {
      localStorage.setItem('subscription', JSON.stringify(sub))
    }
  } catch {
    // ignore
  }
}

export async function fetchAndStoreUser({ email, phone }) {
  if (!email && !phone) return null
  const params = new URLSearchParams()
  if (email) params.append('email', email)
  if (phone) params.append('phone', phone)
  try {
    const res = await fetch(`/api/user?${params.toString()}`)
    if (!res.ok) return null
    const data = await res.json()
    if (!data) return null
    return data
  } catch {
    return null
  }
}

export function openPayment({ planId, user, onSuccess, onFailure, onDismiss }) {
  setTimeout(() => {
    if (!user) {
      onFailure('User not logged in')
      return
    }
    onSuccess({ planId, expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), planLabel: planId })
  }, 500)
}

export function grantSubscription(email, selectedPlanId) {
  return {
    planId: selectedPlanId,
    planLabel: selectedPlanId,
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  }
}
