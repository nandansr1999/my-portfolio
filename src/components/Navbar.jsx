import { useEffect, useState } from 'react'

const links = ['Hero', 'About', 'Projects', 'Skills', 'Contact']

function Navbar() {
  const [activeSection, setActiveSection] = useState('Hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Track active section
      const offsets = links.map(link => {
        const el = document.getElementById(link.toLowerCase())
        if (!el) return { link, top: Infinity }
        return { link, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => a.top < b.top ? a : b)
      setActiveSection(closest.link)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, link) => {
    e.preventDefault()
    const el = document.getElementById(link.toLowerCase())
    if (!el) return
    const navbarHeight = 70
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 48px',
      borderRadius: '9999px',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      boxShadow: `
    0 0 0 0.5px rgba(255,255,255,0.08) inset,
    0 1px 0 rgba(255,255,255,0.15) inset,
    0 -1px 0 rgba(0,0,0,0.2) inset,
    0 8px 32px rgba(0,0,0,0.5),
    0 2px 8px rgba(0,0,0,0.3)
  `,
      transition: 'all 0.4s ease',
      maxWidth: 'calc(100vw - 32px)',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      whiteSpace: 'nowrap',
    }}>
      {links.map((link) => {
        const isActive = activeSection === link
        return (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleClick(e, link)}
            style={{
              color: isActive ? '#d6d2d2' : 'rgba(94, 93, 93, 0.45)',
              textDecoration: 'none',
              fontSize: isActive ? '0.82rem' : '0.78rem',
              fontWeight: isActive ? '500' : '400',
              letterSpacing: '0.06em',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
              transition: 'all 0.3s ease',
              textShadow: isActive ? '0 0 20px rgba(255,255,255,0.4)' : 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                e.currentTarget.style.fontSize = '0.82rem'
                e.currentTarget.style.textShadow = '0 0 16px rgba(255,255,255,0.25)'
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.fontSize = '0.78rem'
                e.currentTarget.style.textShadow = 'none'
              }
            }}
          >
            {link}
          </a>
        )
      })}
    </div>
  )
}

export default Navbar