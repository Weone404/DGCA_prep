'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

function getSessionCookie() {
  if (typeof document === 'undefined') return ''
  const cookies = document.cookie.split(';').map((part) => part.trim())
  const match = cookies.find((part) => part.startsWith('estudy_session='))
  if (!match) return ''
  return decodeURIComponent(match.slice('estudy_session='.length))
}

function setSessionCookie(userData) {
  if (typeof document === 'undefined') return
  const value = encodeURIComponent(JSON.stringify(userData))
  document.cookie = `estudy_session=${value}; path=/; max-age=604800; SameSite=Lax`
}

function clearSessionCookie() {
  if (typeof document === 'undefined') return
  document.cookie = 'estudy_session=; path=/; max-age=0; SameSite=Lax'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        setUser(parsed)
        setSessionCookie(parsed)
      } catch (e) {
        setUser(null)
      }
    } else {
      const cookieValue = getSessionCookie()
      if (cookieValue) {
        try {
          const parsed = JSON.parse(cookieValue)
          setUser(parsed)
          localStorage.setItem('user', JSON.stringify(parsed))
        } catch (e) {
          setUser(null)
        }
      }
    }
    setLoading(false)
  }, [])

  const login = (userData) => {
    const normalizedUser = {
      ...userData,
      role: String(userData?.role || 'student').toLowerCase(),
    }
    setUser(normalizedUser)
    localStorage.setItem('user', JSON.stringify(normalizedUser))
    setSessionCookie(normalizedUser)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    clearSessionCookie()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
