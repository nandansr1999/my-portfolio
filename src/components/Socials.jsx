import { useEffect, useState } from 'react'

function Socials() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkSection = () => {
      const scrollY = window.scrollY + window.innerHeight
      const about = document.getElementById('about')
      const projects = document.getElementById('projects')
      const skills = document.getElementById('skills')
      const contact = document.getElementById('contact')

      if (!about || !projects || !skills || !contact) return

      const aboutTop = about.offsetTop
      const projectsTop = projects.offsetTop
      const skillsTop = skills.offsetTop
      const contactTop = contact.offsetTop

      const bottomY = window.scrollY + window.innerHeight - 100

      // White sections: about and skills
      const inAbout = bottomY >= aboutTop && bottomY < projectsTop
      const inSkills = bottomY >= skillsTop && bottomY < contactTop

      setIsDark(!(inAbout || inSkills))
    }

    checkSection()
    window.addEventListener('scroll', checkSection)
    return () => window.removeEventListener('scroll', checkSection)
  }, [])

  const iconColor = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'
  const iconBg = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const iconBorder = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
  const iconShadow = isDark
    ? '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
    : '0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'
  const lineColor = isDark
    ? 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))'
    : 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.15))'

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/nandansr1999',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nandan-s-rajeevan-025999199',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:nandansr12345@gmail.com',
      icon: (
        <svg width="17" height="17" fill="currentColor"  viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ]

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      left: '24px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    }}>

      <div style={{
        width: '1px',
        height: '50px',
        background: lineColor,
        transition: 'background 0.4s ease',
      }} />

      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.label === 'Email' ? '_self': '_blank'}
          rel={social.label === 'Email'? undefined: 'noopener noreferrer'}
          title={social.label}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: iconBg,
            border: `1px solid ${iconBorder}`,
            backdropFilter: 'blur(12px) saturate(150%)',
            WebkitBackdropFilter: 'blur(12px) saturate(150%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor,
            textDecoration: 'none',
            transition: 'all 0.4s ease',
            boxShadow: iconShadow,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.12)'
            e.currentTarget.style.color = isDark ? '#ffffff' : '#000000'
            e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.12)'
            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.color = iconColor
            e.currentTarget.style.background = iconBg
            e.currentTarget.style.borderColor = iconBorder
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials