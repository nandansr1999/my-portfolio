function Footer() {
  return (
    <footer style={{
      backgroundColor: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2rem 40px',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '0.75rem',
        color: '#f7faff',
        letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} Nandan S Rajeevan · Built with React & Vite
      </p>
    </footer>
  )
}

export default Footer