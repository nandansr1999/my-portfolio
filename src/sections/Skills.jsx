import { useEffect, useRef, useState } from 'react' 

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', color: '#61dafb' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'HTML5', color: '#e34f26' },
      { name: 'CSS3', color: '#1572b6' },
      { name: 'Tailwind', color: '#38bdf8' },
      { name: 'Vite', color: '#646cff' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python', color: '#3776ab' },
      { name: 'Django', color: '#44b78b' },
      { name: 'Rest', color: '#888888' },
    ],
  },
  {
    category: 'Tools & DB',
    skills: [
      { name: 'Git', color: '#f05032' },
      { name: 'GitHub', color: '#333333' },
      { name: 'Postman', color: '#ff6c37' },
      { name: 'MySQL', color: '#4479a1' },
      { name: 'SQLite', color: '#003b57' },
    ],
  },
]

function TiltGroupCard({ group, visible, delay }) {
  const cardRef = useRef(null)
  const rafRef = useRef(null)

  const handleMouseMove = (e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      card.style.boxShadow = `
        ${rotateY * 2}px ${-rotateX * 2}px 30px rgba(0,0,0,0.1),
        0 12px 40px rgba(0,0,0,0.08)
      `
    })
  }

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s ease'
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    card.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
    setTimeout(() => {
      if (cardRef.current) cardRef.current.style.transition = 'transform 0.1s linear, box-shadow 0.1s linear'
    }, 500)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, box-shadow 0.1s linear`,
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(0,0,0,0.07)',
        backdropFilter: 'blur(12px)',
        padding: '2rem',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        cursor: 'default',
      }}
    >
      {/* Category label */}
      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#c4c4c4',
        marginBottom: '1.4rem',
        fontWeight: '500',
        transform: 'translateZ(20px)',
      }}>
        {group.category}
      </p>

      {/* Skill pills */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        transform: 'translateZ(30px)',
      }}>
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.5rem 1rem',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <div style={{
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: skill.color,
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: '0.82rem',
              fontWeight: '500',
              color: '#1a1a1a',
              letterSpacing: '0.02em',
            }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ position: 'relative', backgroundColor: '#f5f5f0' }}
    >

      {/* Gradient fade from dark to white */}
      <div style={{
        height: '220px',
        background: 'linear-gradient(to bottom, #080808 0%, #1a1a1a 20%, #6b6b6b 50%, #d4d4cc 80%, #f5f5f0 100%)',
        marginTop: '-1px',
      }} />

      {/* Noise grain */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Scratch lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(-55deg, transparent, transparent 3px, rgba(0,0,0,0.012) 3px, rgba(0,0,0,0.012) 4px),
          repeating-linear-gradient(40deg, transparent, transparent 4px, rgba(0,0,0,0.008) 4px, rgba(0,0,0,0.008) 5px)
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px 40px 100px',
      }}>

        {/* Label */}
        <p style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.6s ease 0.1s',
          fontSize: '0.75rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#9ca3af',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}>
          What I Work With
        </p>

        {/* Heading */}
        <h2 style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.6s ease 0.2s',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          color: '#0a0a0a',
          letterSpacing: '-0.03em',
          marginBottom: '4rem',
          textAlign: 'center',
        }}>
          Skills
        </h2>

        {/* One big tilt card per group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {skillGroups.map((group, gi) => (
            <TiltGroupCard
              key={group.category}
              group={group}
              visible={visible}
              delay={0.3 + gi * 0.15}
            />
          ))}
        </div>

      </div>
      <div style={{
        height: '220px',
        background: 'linear-gradient(to bottom, #f5f5f0 0%, #d4d4cc 25%, #6b6b6b 55%, #1a1a1a 80%, #080808 100%)',
      }} />
    </section>
  )
}

export default Skills