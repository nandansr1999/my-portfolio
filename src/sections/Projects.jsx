import { useEffect, useRef, useState } from 'react'
import weatherImg from '../assets/weather-app.png'
import movieImg from '../assets/movie-app.png'
import autoImg from '../assets/velocia.png'
import expenseImg from '../assets/expense.png'
import webImg from '../assets/web.png'

const projects = [
    {
        title: 'Fruits & Herbs Online Shopping Platform',
        description: 'Built a full-stack e-commerce web application using React (frontend) and Django REST Framework (backend) for buying fresh fruits and medicinal herbs. Features include product listing, cart management, user authentication and order tracking.',
        tags: ['Python', 'Django', 'DRF', 'MySQL'],
        year: '2023',
        image: null,
        gradient: 'linear-gradient(135deg, #1a4a2e 0%, #2d7a4f 40%, #1a3a1a 100%)',
    },
    {
        title: 'Hotel Management System',
        description: 'Developed a desktop-based hotel management system streamlining room booking, guest check-in/checkout, and billing processes. Integrated MySQL for efficient data storage and retrieval, reducing manual processing time significantly.',
        tags: ['Python', 'MySQL'],
        year: '2023',
        image: null,
        gradient: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #0d2140 100%)',
    },
    {
        title: 'Weather Forecasting Application',
        description: 'Built a responsive weather app fetching real-time data via OpenWeatherMap API with location-based search, temperature, humidity, and 5-day forecast. Applied async JavaScript and API integration best practices for optimal performance.',
        tags: ['JavaScript', 'OpenWeatherMap API'],
        year: '2024',
        image: weatherImg,
        gradient: null,
    },
    {
        title: 'Movie Discovery & Tracking Application',
        description: 'Developed a movie discovery platform using React integrated with TMDb API for search, cast details, ratings, reviews, and personalized watchlists. Features include dynamic filtering and responsive design across all screen sizes.',
        tags: ['React', 'TMDb API'],
        year: '2025',
        image: movieImg,
        gradient: null,
    },
    {
        title: 'GenDev — Web Dev Agency Landing Page',
        description: 'Designed and built a web development agency landing page with a coffee brown and beige color palette, glassmorphism UI components, and a clean modern layout built with React, Vite and Tailwind.',
        tags: ['JavaScript','React', 'HTML', 'Tailwind'],
        year: '2026',
        image: webImg,
        gradient: null,
    },
    
    {
        title: 'Expense tracking system',
        description: 'Built a full-stack expense management system with Django REST Framework as the backend API and React on the frontend. Features include expense tracking, categorization, and data visualization.',
        tags: ['JavaScript', 'Python', 'Django', 'React', 'Tailwind', 'HTML'],
        year: '2026',
        image: expenseImg,
        gradient: null,
    },
    {
        title: 'Luxury Automobile Brand',
        description: 'Built a premium cinematic website for a luxury automobile brand featuring 3D-style visuals, scroll storytelling, and a booking modal with date selection, car selection, customer details and confirmation flow.',
        tags: ['Python', 'Django', 'React', 'Tailwind', 'JavaScript'],
        year: '2026',
        image: autoImg,
        gradient: null,
    },
]

const GAP = 24

function Modal({ project, index, onClose, onPrev, onNext, total }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
        }
        window.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.1)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                animation: 'fadeIn 0.25s ease',
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '680px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    borderRadius: '20px',
                    background: 'rgba(18,18,18,0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
                    animation: 'slideUp 0.3s cubic-bezier(0.4,0,0.2,1)',
                    scrollbarWidth: 'none',
                }}
            >
                {/* Image or gradient placeholder */}
                <div style={{
                    width: '100%',
                    height: '280px',
                    borderRadius: '20px 20px 0 0',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                }}>
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top',
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: project.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <p style={{
                                fontSize: '0.7rem',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.25)',
                            }}>
                                {project.tags[0]}
                            </p>
                        </div>
                    )}

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: '#ffffff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                    >
                        ×
                    </button>

                    {/* Navigation arrows on image */}
                    <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        display: 'flex',
                        gap: '8px',
                    }}>
                        <button
                            onClick={(e) => { e.stopPropagation(); onPrev() }}
                            disabled={index === 0}
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: index === 0 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: index === 0 ? 'rgba(255,255,255,0.2)' : '#ffffff',
                                cursor: index === 0 ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(8px)',
                                fontSize: '0.85rem',
                            }}
                        >←</button>
                        <button
                            onClick={(e) => { e.stopPropagation(); onNext() }}
                            disabled={index === total - 1}
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: index === total - 1 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: index === total - 1 ? 'rgba(255,255,255,0.2)' : '#ffffff',
                                cursor: index === total - 1 ? 'default' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(8px)',
                                fontSize: '0.85rem',
                            }}
                        >→</button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>

                    {/* Year */}
                    <p style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        color: '#4f46e5',
                        fontWeight: '500',
                        marginBottom: '0.5rem',
                    }}>
                        {project.year}
                    </p>

                    {/* Title */}
                    <h2 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        marginBottom: '1rem',
                        lineHeight: 1.3,
                    }}>
                        {project.title}
                    </h2>

                    {/* Description */}
                    <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.8',
                        color: '#9ca3af',
                        fontWeight: '300',
                        marginBottom: '1.5rem',
                    }}>
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                        {project.tags.map((tag) => (
                            <span key={tag} style={{
                                fontSize: '0.75rem',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '9999px',
                                background: 'rgba(79,70,229,0.12)',
                                border: '1px solid rgba(79,70,229,0.25)',
                                color: '#a5b4fc',
                                letterSpacing: '0.05em',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Dot indicators */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
                        {projects.map((_, i) => (
                            <div key={i} style={{
                                width: i === index ? '24px' : '6px',
                                height: '6px',
                                borderRadius: '9999px',
                                background: i === index ? '#ffffff' : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease',
                            }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [visible, setVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [modalIndex, setModalIndex] = useState(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const CARD_WIDTH = isMobile ? Math.floor(window.innerWidth * 0.72) : 320
    const visibleCount = isMobile ? 1 : 3

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const prev = () => setActiveIndex(i => Math.max(0, i - 1))
    const next = () => setActiveIndex(i => Math.min(projects.length - 1, i + 1))

    const windowStart = isMobile
        ? activeIndex
        : Math.min(Math.max(activeIndex - 1, 0), projects.length - 3)
    const translateX = -(windowStart * (CARD_WIDTH + GAP))

    const arrowStyle = (disabled) => ({
        width: isMobile ? '32px' : '40px',
        height: isMobile ? '32px' : '40px',
        borderRadius: '50%',
        background: disabled ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${disabled ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)'}`,
        color: disabled ? 'rgba(255,255,255,0.15)' : '#ffffff',
        cursor: disabled ? 'default' : 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        outline: 'none',
    })

    return (
        <>
            {modalIndex !== null && (
                <Modal
                    project={projects[modalIndex]}
                    index={modalIndex}
                    total={projects.length}
                    onClose={() => setModalIndex(null)}
                    onPrev={() => setModalIndex(i => Math.max(0, i - 1))}
                    onNext={() => setModalIndex(i => Math.min(projects.length - 1, i + 1))}
                />
            )}

            <section
                ref={sectionRef}
                id="projects"
                style={{ position: 'relative', backgroundColor: '#080808' }}
            >
                {/* Noise grain */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.14'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    pointerEvents: 'none',
                    zIndex: 0,
                }} />

                {/* Scratch lines */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            repeating-linear-gradient(-55deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px),
            repeating-linear-gradient(40deg, transparent, transparent 4px, rgba(255,255,255,0.008) 4px, rgba(255,255,255,0.008) 5px)
          `,
                    pointerEvents: 'none',
                    zIndex: 0,
                }} />

                {/* Vignette */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }} />

                <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '20px 8px 60px' : '20px 40px 80px' }}>

                    <p style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.6s ease 0.1s',
                        fontSize: '0.75rem',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: '#4b5563',
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                    }}>
                        What I've Built
                    </p>

                    <h2 style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.6s ease 0.2s',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '700',
                        color: '#ffffff',
                        letterSpacing: '-0.03em',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        textShadow: '0 0 40px rgba(255,255,255,0.08)',
                    }}>
                        Projects
                    </h2>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '8px' : '20px' }}>
                        <button onClick={prev}
                            disabled={activeIndex === 0}
                            style={arrowStyle(activeIndex === 0)}
                            onMouseEnter={e => {
                                if (activeIndex !== 0) {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                                    e.currentTarget.style.transform = 'scale(1.1)'
                                }
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >←</button>

                        <div style={{
                            width: `${CARD_WIDTH * visibleCount + GAP * (visibleCount - 1)}px`,
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                display: 'flex',
                                gap: `${GAP}px`,
                                transform: `translateX(${translateX}px)`,
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                alignItems: 'center',
                                padding: '16px 0',
                            }}>
                                {projects.map((project, i) => {
                                    const isActive = i === activeIndex
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => setModalIndex(i)}
                                            style={{
                                                flexShrink: 0,
                                                width: `${CARD_WIDTH}px`,
                                                minHeight: '300px',
                                                borderRadius: '16px',
                                                background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                                                border: isActive ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                opacity: visible ? (isActive ? 1 : 0.4) : 0,
                                                transform: isActive ? 'scale(1)' : 'scale(0.94)',
                                                transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s ease, border-color 0.5s ease',
                                                boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {/* Card image / gradient */}
                                            <div style={{
                                                width: '100%',
                                                height: '160px',
                                                flexShrink: 0,
                                                overflow: 'hidden',
                                            }}>
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            objectPosition: 'top',
                                                            transition: 'transform 0.4s ease',
                                                        }}
                                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: project.gradient,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <p style={{
                                                            fontSize: '0.65rem',
                                                            letterSpacing: '0.3em',
                                                            textTransform: 'uppercase',
                                                            color: 'rgba(255,255,255,0.2)',
                                                        }}>
                                                            {project.tags[0]}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Card content */}
                                            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                                                <p style={{
                                                    fontSize: '0.7rem',
                                                    letterSpacing: '0.2em',
                                                    color: '#4f46e5',
                                                    fontWeight: '500',
                                                }}>
                                                    {project.year}
                                                </p>

                                                <h3 style={{
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    color: isActive ? '#ffffff' : '#6b7280',
                                                    letterSpacing: '-0.02em',
                                                    transition: 'color 0.5s ease',
                                                    lineHeight: 1.3,
                                                }}>
                                                    {project.title}
                                                </h3>

                                                <p style={{
                                                    fontSize: '0.8rem',
                                                    lineHeight: '1.7',
                                                    color: isActive ? '#9ca3af' : '#374151',
                                                    fontWeight: '300',
                                                    flexGrow: 1,
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    transition: 'color 0.5s ease',
                                                }}>
                                                    {project.description}
                                                </p>

                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                    {project.tags.map((tag) => (
                                                        <span key={tag} style={{
                                                            fontSize: '0.65rem',
                                                            padding: '0.18rem 0.55rem',
                                                            borderRadius: '9999px',
                                                            background: 'rgba(79,70,229,0.1)',
                                                            border: '1px solid rgba(79,70,229,0.2)',
                                                            color: isActive ? '#a5b4fc' : '#4b5563',
                                                            letterSpacing: '0.05em',
                                                            transition: 'color 0.5s ease',
                                                        }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <p style={{
                                                    fontSize: '0.72rem',
                                                    color: 'rgba(255,255,255,0.25)',
                                                    letterSpacing: '0.05em',
                                                    marginTop: '0.25rem',
                                                }}>
                                                    Click to view details →
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <button onClick={next}
                            disabled={activeIndex === projects.length - 1}
                            style={arrowStyle(activeIndex === projects.length - 1)}
                            onMouseEnter={e => {
                                if (activeIndex !== projects.length - 1) {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                                    e.currentTarget.style.transform = 'scale(1.1)'
                                }
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >→</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
                        {projects.map((_, i) => (
                            <div key={i} style={{
                                width: activeIndex === i ? '28px' : '8px',
                                height: '8px',
                                borderRadius: '9999px',
                                background: activeIndex === i ? '#ffffff' : 'rgba(255,255,255,0.2)',
                                transition: 'all 0.35s ease',
                            }} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects