import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={brandStyle}>
          <Logo />
          <p style={descStyle}>Backend & AI Developer</p>
        </div>
        <div style={linksStyle}>
          <a href="https://github.com/AhmadHabib24" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/habibdev24/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LinkedIn
          </a>
        </div>
      </div>
      <div style={copyStyle}>
        &copy; {new Date().getFullYear()} M Habib Ahmad. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  borderTop: '1px solid var(--border-color)',
  padding: '40px 20px 20px',
  marginTop: '80px',
  backgroundColor: 'var(--bg-secondary)',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: '20px',
};

const brandStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const descStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
};

const linksStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
};

const linkStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontSize: '0.9rem',
};

const copyStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'var(--text-muted)',
  fontSize: '0.8rem',
  marginTop: '40px',
};
