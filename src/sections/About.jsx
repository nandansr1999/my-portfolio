import { useEffect, useRef, useState } from 'react'

const words = [
  'Clean Code', 'Performance', 'Accessibility', 'Consistency',
  'Scalability', 'Readability', 'Minimal UI', 'Fast Load',
  'Responsive', 'Intuitive UX', 'Maintainable', 'Semantic HTML',
]

const timeline = [
  {
    year: '2024 — 2025',
    title: 'Python Web Developer Intern',
    place: 'Softroniics',
    description: 'Built and maintained web applications using Python, Django and Flask. Worked on REST APIs, third-party integrations, and frontend with React and JavaScript.',
    type: 'work',
  },
  {
    year: '2023-2024',
    title: 'Digital Forensics Evidence Examiner',
    place: 'SysTools Software Pvt. Ltd.',
    description: 'Examined and analyzed digital evidence for forensic investigations. Worked with proprietary forensic tools and documented findings for legal and technical reports.',
    type: 'work',
  },
  {
    year: '2018 — 2022',
    title: 'B.TECH Computer Science Specialized in Sofware Engineering',
    place: 'Jain School of Engineering and Technology',
    description: 'Studied core computer science fundamentals — data structures, databases, networking, and software engineering. Developed early interest in web development and Python.',
    type: 'education',
  },
]

function About() {
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
      id="about"
      style={{ position: 'relative', backgroundColor: '#f5f5f0' }}
    >
      {/* Gradient fade from hero to about */}
      <div style={{
        height: '220px',
        background: 'linear-gradient(to bottom, #080808 0%, #1a1a1a 20%, #6b6b6b 50%, #d4d4cc 80%, #f5f5f0 100%)',
        marginTop: '-1px',
      }} />
      <div style={{ position: 'relative' }}>

        {/* Noise grain */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Scratch lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(-55deg, transparent, transparent 3px, rgba(0,0,0,0.015) 3px, rgba(0,0,0,0.015) 4px),
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
          padding: '60px 40px 100px',
          textAlign: 'center',
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
          }}>
            Who I Am
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
            marginBottom: '1.5rem',
          }}>
            About Me
          </h2>

          {/* Bio */}
          <p style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.6s ease 0.3s',
            fontSize: '1rem',
            lineHeight: '1.9',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto 1rem',
            fontWeight: '300',
          }}>
            I'm Nandan, a Full Stack Developer based in Bengaluru. I build web experiences
            that are fast, clean, and purposeful — where every decision has a reason.
          </p>

          {/* Formula label */}
          <p style={{
            opacity: visible ? 1 : 0,
            transition: 'all 0.6s ease 0.4s',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#d1d5db',
            marginBottom: '1.8rem',
          }}>
            My formula for a great website
          </p>

          {/* Floating words */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '80px' }}>
            {words.map((word, i) => (
              <span key={word} style={{
                opacity: visible ? 1 : 0,
                transform: visible ? `translateY(${Math.sin(i * 0.9) * 8}px)` : 'translateY(20px)',
                transition: `opacity 0.5s ease ${0.5 + i * 0.07}s, transform 0.5s ease ${0.5 + i * 0.07}s`,
                animation: visible ? `wave-float ${2.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.2}s infinite alternate` : 'none',
                display: 'inline-block',
                padding: '0.45rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: '400',
                letterSpacing: '0.04em',
                color: i % 3 === 0 ? '#1a1a1a' : i % 3 === 1 ? '#6b7280' : '#4f46e5',
                border: i % 3 === 0 ? '1px solid rgba(0,0,0,0.15)' : i % 3 === 1 ? '1px solid rgba(107,114,128,0.2)' : '1px solid rgba(79,70,229,0.25)',
                background: i % 3 === 2 ? 'rgba(79,70,229,0.05)' : 'transparent',
              }}>
                {word}
              </span>
            ))}
          </div>

          {/* Timeline heading */}
          <p style={{
            opacity: visible ? 1 : 0,
            transition: 'all 0.6s ease 0.5s',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#9ca3af',
            marginBottom: '3rem',
          }}>
            Experience & Education
          </p>

          {/* Timeline */}
          <div style={{ position: 'relative', textAlign: 'left', maxWidth: '680px', margin: '0 auto' }}>

            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '16px',
              top: '6px',
              bottom: '6px',
              width: '1px',
              background: 'rgba(0,0,0,0.1)',
            }} />

            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.6s ease ${0.6 + i * 0.15}s`,
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: i < timeline.length - 1 ? '3rem' : 0,
                  paddingLeft: '48px',
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '10px',
                  top: '6px',
                  width: '13px',
                  height: '13px',
                  borderRadius: '50%',
                  background: item.type === 'work' ? '#4f46e5' : '#0a0a0a',
                  border: '2px solid #f5f5f0',
                  boxShadow: item.type === 'work' ? '0 0 0 2px rgba(79,70,229,0.3)' : '0 0 0 2px rgba(0,0,0,0.1)',
                  zIndex: 1,
                }} />

                <div>
                  {/* Year */}
                  <p style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: item.type === 'work' ? '#4f46e5' : '#9ca3af',
                    marginBottom: '0.3rem',
                    fontWeight: '500',
                  }}>
                    {item.year}
                  </p>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0a0a0a',
                    marginBottom: '0.2rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </h3>

                  {/* Place */}
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#9ca3af',
                    marginBottom: '0.6rem',
                    fontWeight: '400',
                  }}>
                    {item.place}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.7',
                    color: '#6b7280',
                    fontWeight: '300',
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div style={{
  height: '220px',
  background: 'linear-gradient(to bottom, #f5f5f0 0%, #d4d4cc 20%, #6b6b6b 50%, #1a1a1a 80%, #080808 100%)',
}} />
    </section>
  )
}

export default About