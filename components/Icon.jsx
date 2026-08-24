export default function Icon({ name, size = 20, className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }
  switch (name) {
    case 'grid':
      return <svg {...props}><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></svg>
    case 'menu':
      return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    case 'book':
      return <svg {...props}><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z" /><path d="M18 4v16" /></svg>
    case 'edit':
      return <svg {...props}><path d="M4 20h4l11-11-4-4L4 16v4Z" /><path d="M13.5 6.5l4 4" /></svg>
    case 'chat':
      return <svg {...props}><path d="M21 12a8 8 0 1 1-3.4-6.5" /><path d="M21 5v5h-5" /></svg>
    case 'chat-bubble':
      return <svg {...props}><path d="M4 4h16v12H8l-4 4V4Z" /></svg>
    case 'chart':
      return <svg {...props}><path d="M4 20V10" /><path d="M11 20V4" /><path d="M18 20v-7" /></svg>
    case 'video':
      return <svg {...props}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg>
    case 'play':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M10 9l5 3-5 3V9Z" fill="currentColor" stroke="none" /></svg>
    case 'mic':
      return <svg {...props}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg>
    case 'target':
      return <svg {...props}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></svg>
    case 'compass':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></svg>
    case 'settings':
      return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6.4v-2.6h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.1H15v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1V14h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>
    case 'plane':
      return <svg {...props}><path d="M3 13h18" /><path d="m12 3 2 10-2 8-2-8 2-10Z" /><path d="m5 13 3-2M19 13l-3-2" /></svg>
    case 'cloud':
      return <svg {...props}><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" /></svg>
    case 'bookmark':
      return <svg {...props}><path d="M6 4h12v17l-6-4-6 4V4Z" /></svg>
    case 'user':
      return <svg {...props}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
    case 'bell':
      return <svg {...props}><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>
    case 'search':
      return <svg {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
    case 'sun':
      return <svg {...props}><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
    case 'moon':
      return <svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
    case 'chevron-down':
      return <svg {...props}><path d="m6 9 6 6 6-6" /></svg>
    case 'send':
      return <svg {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
    case 'star':
      return <svg {...props} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L6 21l1.7-7L2.3 9.2l7.1-.6L12 2Z" /></svg>
    case 'check':
      return <svg {...props}><path d="M5 12l5 5 9-10" /></svg>
    case 'plus':
      return <svg {...props}><path d="M12 5v14M5 12h14" /></svg>
    case 'download':
      return <svg {...props}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
    case 'upload':
      return <svg {...props}><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" /></svg>
    case 'close':
      return <svg {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>
    case 'file':
      return <svg {...props}><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4" /></svg>
    case 'lock':
      return <svg {...props}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
    case 'camera':
      return <svg {...props}><path d="M4 8h3l2-2h6l2 2h3v11H4V8Z" /><circle cx="12" cy="13" r="3.5" /></svg>
    case 'arrow-right':
      return <svg {...props}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
    case 'left':
      return <svg {...props}><path d="m15 18-6-6 6-6" /></svg>
    case 'right':
      return <svg {...props}><path d="m9 18 6-6-6-6" /></svg>
    case 'mail':
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
    case 'shield':
      return <svg {...props}><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" /></svg>
    case 'logout':
      return <svg {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></svg>
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>
  }
}
