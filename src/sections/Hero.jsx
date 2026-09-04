import { useEffect, useState } from 'react'
import resumePDF from '../assets/Nandan_S_Rajeevan_Resume.pdf'

function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const fadeDown = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >

      {/* Texture layer — noise grain */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.14'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Scratch lines overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -55deg,
              transparent,
              transparent 3px,
              rgba(255,255,255,0.012) 3px,
              rgba(255,255,255,0.012) 4px
            ),
            repeating-linear-gradient(
              40deg,
              transparent,
              transparent 4px,
              rgba(255,255,255,0.008) 4px,
              rgba(255,255,255,0.008) 5px
            )
          `,
        }}
      />

      {/* Vignette — darkens edges */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">

        {/* Greeting */}
        <p
          style={{
            ...fadeDown(0.2),
            letterSpacing: '0.35em',
            color: '#6b7280',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          style={{
            ...fadeDown(0.4),
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            textShadow: '0 0 40px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: '0.6rem',
          }}
        >
          Nandan S Rajeevan
        </h1>

        {/* Role */}
        <h2
          style={{
            ...fadeDown(0.6),
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: '300',
            color: '#4b5563',
            letterSpacing: '0.08em',
            marginBottom: '2.5rem',
          }}
        >
          Python Web Developer
        </h2>

        {/* Divider line */}
        <div
          style={{
            ...fadeUp(0.7),
            width: visible ? '60px' : '0px',
            height: '1px',
            background: 'rgba(255,255,255,0.2)',
            margin: '0 auto 2.5rem',
            transition: 'width 0.8s ease 0.7s, opacity 0.8s ease 0.7s',
          }}
        />

        {/* Buttons */}
        <div
          style={{
            ...fadeUp(0.9),
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >

          <a href="#projects"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('projects')
              if (!el) return
              const top = el.getBoundingClientRect().top + window.scrollY - 70
              window.scrollTo({ top, behavior: 'smooth' })
            }}
            className="transition-all duration-300"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              color: '#e5e7eb',
              fontWeight: '400',
              fontSize: '0.875rem',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            }}
          >
            View Projects
          </a>


          <a href={resumePDF}
            download="Nandan_S_Rajeevan_Resume.pdf"
            className="transition-all duration-300"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              color: '#c7d2fe',
              fontWeight: '400',
              fontSize: '0.875rem',
              textDecoration: 'none',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.22)'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero