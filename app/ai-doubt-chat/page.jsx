'use client'

import { useEffect, useRef, useState } from 'react'
import AppShell from '@/components/AppShell'
import Icon from '@/components/Icon'
import { CHAT_SUGGESTIONS } from '@/lib/data'

const REPLIES = [
  "Great question! Let's break it down step by step so it's easy to remember.",
  "Here's a simple way to think about it: focus on the underlying principle first, then the formula.",
  "That's a common doubt. The key idea is to connect it to something you already know.",
  "Good thinking! Try working through one example, and the pattern should click.",
]

export default function AIDoubtChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: "Hi Martin! I'm your AI study buddy. Ask me anything about Physics, Chemistry, Math, Biology or English." },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function send(text) {
    const content = (text ?? input).trim()
    if (!content) return
    setMessages((m) => [...m, { id: Date.now(), role: 'user', text: content }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)]
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'bot', text: reply }])
      setTyping(false)
    }, 1100)
  }

  return (
    <AppShell>
      <div className="card flex flex-col h-[calc(100vh-150px)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-line">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
            <Icon name="chat" size={18} />
          </div>
          <div>
            <p className="font-display font-semibold text-ink text-sm">AI Doubt Assistant</p>
            <p className="text-xs text-brand flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" /> Online</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' ? 'bg-brand text-white rounded-br-sm' : 'bg-ink text-white rounded-bl-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-ink text-white px-4 py-3 rounded-2xl rounded-bl-sm text-sm">typing…</div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {messages.length < 2 && (
          <div className="px-6 pb-3 flex flex-wrap gap-2">
            {CHAT_SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} className="text-xs bg-brand-light text-brand-dark px-3 py-2 rounded-full hover:bg-brand hover:text-white transition-colors">
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="px-6 py-4 border-t border-line flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Type your doubt here..."
            className="flex-1 bg-canvas rounded-xl px-4 py-3 text-sm outline-none text-ink placeholder:text-muted"
          />
          <button onClick={() => send()} className="w-11 h-11 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 hover:bg-brand-dark transition-colors">
            <Icon name="send" size={17} />
          </button>
        </div>
      </div>
    </AppShell>
  )
}
