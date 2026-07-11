const DEFAULT_AVATAR = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Student'

export const PUBLIC_APP_CONFIG = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'WeOne aviation',
  appTagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Learn From Home',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@example.com',
}

export const DEFAULT_ENV_USER = {
  name: process.env.NEXT_PUBLIC_DEFAULT_USER_NAME || 'Demo User',
  email: process.env.NEXT_PUBLIC_DEFAULT_USER_EMAIL || 'demo@example.com',
  password: process.env.NEXT_PUBLIC_DEFAULT_USER_PASSWORD || 'Demo@1234',
  role: process.env.NEXT_PUBLIC_DEFAULT_USER_ROLE || 'Student',
  avatar: process.env.NEXT_PUBLIC_DEFAULT_USER_AVATAR || DEFAULT_AVATAR,
  coursesInProgress: 0,
  coursesComplete: 0,
}

export function getEnvUsers() {
  const users = [DEFAULT_ENV_USER]

  const rawUsers = process.env.NEXT_PUBLIC_SAMPLE_USERS_JSON
  if (!rawUsers) return users

  try {
    const parsed = JSON.parse(rawUsers)
    if (Array.isArray(parsed)) {
      parsed.forEach((user) => {
        if (!user?.email) return
        users.push({
          name: user.name || 'Student',
          email: user.email,
          password: user.password || DEFAULT_ENV_USER.password,
          avatar: user.avatar || DEFAULT_AVATAR,
          role: user.role || 'Student',
          coursesInProgress: Number(user.coursesInProgress || 0),
          coursesComplete: Number(user.coursesComplete || 0),
          mobile: user.mobile || '',
        })
      })
    }
  } catch {
    return users
  }

  return users
}
