import { useEffect, useRef, useState } from 'react'

function Contact() {
    const [visible, setVisible] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('https://formspree.io/f/maqrkjqz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        if (res.ok) setSubmitted(true)
    }

    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1rem',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#ffffff',
        fontSize: '0.875rem',
        fontFamily: 'Inter, sans-serif',
        outline: 'none',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        boxSizing: 'border-box',
    }

    const labelStyle = {
        display: 'block',
        fontSize: '0.72rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#6b7280',
        marginBottom: '0.5rem',
        fontWeight: '500',
    }

    return (
        <section
            ref={sectionRef}
            id="contact"
            style={{ position: 'relative', backgroundColor: '#080808' }}
        >

            {/* Gradient fade from white skills to dark */}
            <div style={{
                height: '20px',
                background: 'linear-gradient(to bottom, #0e0d0d 100%)',
                marginTop: '-1px',
                position: 'relative',
                zIndex: 1,
            }} />

            {/* Noise grain — same as Hero */}
            <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.14'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Scratch lines — same as Hero */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
          repeating-linear-gradient(-55deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px),
          repeating-linear-gradient(40deg, transparent, transparent 4px, rgba(255,255,255,0.008) 4px, rgba(255,255,255,0.008) 5px)
        `,
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            {/* Vignette — same as Hero */}
            <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            <div style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px 40px 120px',
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
                    color: '#4b5563',
                    marginBottom: '0.5rem',
                }}>
                    Get In Touch
                </p>

                {/* Heading */}
                <h2 style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.6s ease 0.2s',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    letterSpacing: '-0.03em',
                    marginBottom: '0.75rem',
                    textShadow: '0 0 40px rgba(255,255,255,0.08)',
                }}>
                    Contact
                </h2>

                {/* Subtext */}
                <p style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.6s ease 0.3s',
                    fontSize: '0.9rem',
                    color: '#4b5563',
                    fontWeight: '300',
                    lineHeight: '1.7',
                    marginBottom: '3rem',
                }}>
                    Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.
                </p>

                {/* Form or success message */}
                {submitted ? (
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transition: 'all 0.6s ease',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(12px)',
                    }}>
                        <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>👋</p>
                        <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '500', marginBottom: '0.4rem' }}>
                            Message sent!
                        </p>
                        <p style={{ color: '#4b5563', fontSize: '0.85rem', fontWeight: '300' }}>
                            Thanks for reaching out — I'll get back to you soon.
                        </p>
                    </div>
                ) : (
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.6s ease 0.4s',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(12px)',
                            textAlign: 'left',
                        }}
                    >
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={labelStyle}>Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                style={inputStyle}
                                onFocus={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                                    e.target.style.background = 'rgba(255,255,255,0.08)'
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.target.style.background = 'rgba(255,255,255,0.05)'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={labelStyle}>Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                style={inputStyle}
                                onFocus={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                                    e.target.style.background = 'rgba(255,255,255,0.08)'
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.target.style.background = 'rgba(255,255,255,0.05)'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                name="message"
                                placeholder="What's on your mind?"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                style={{
                                    ...inputStyle,
                                    resize: 'vertical',
                                    minHeight: '120px',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                                    e.target.style.background = 'rgba(255,255,255,0.08)'
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.target.style.background = 'rgba(255,255,255,0.05)'
                                }}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            style={{
                                width: '100%',
                                padding: '0.9rem',
                                borderRadius: '10px',
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                fontFamily: 'Inter, sans-serif',
                                letterSpacing: '0.08em',
                                fontWeight: '400',
                                cursor: 'pointer',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                            }}
                        >
                            Send Message →
                        </button>
                    </div>
                )}

                {/* Footer note */}
                <p style={{
                    opacity: visible ? 1 : 0,
                    transition: 'all 0.6s ease 0.6s',
                    marginTop: '3rem',
                    fontSize: '0.75rem',
                    color: '#374151',
                    letterSpacing: '0.05em',
                }}>
                    Based in Bengaluru · Open to opportunities
                </p>

            </div>
        </section>
    )
}

export default Contact