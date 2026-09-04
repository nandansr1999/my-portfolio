import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Socials from './components/Socials'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
   const [loading, setLoading] = useState (true)

   useState(()=>{
    const timer =setTimeout(()=>setLoading(false),800)
    return ()=> clearTimeout(timer)
   },[])
  return (
    <>
     {/* Page loader */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#080808',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'all' : 'none',
        transition: 'opacity 0.6s ease',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}>
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            Nandan S Rajeevan
          </p>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              left: '-100%',
              top: 0,
              height: '100%',
              width: '100%',
              background: 'rgba(255,255,255,0.8)',
              animation: 'loadBar 0.8s ease forwards',
            }} />
          </div>
        </div>
      </div> 
    <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.6s ease 0.2s',
      }}>
      <Navbar/>
      <Socials/>
      <section id='hero' ><Hero/></section>
      <section id='about'><About/></section>
      <section id='projects'><Projects/></section>
      <section id='skills'><Skills/></section>
      <section id='contact'><Contact/></section>
      <Footer/>
    </div>
    </>
  )
}

export default App
