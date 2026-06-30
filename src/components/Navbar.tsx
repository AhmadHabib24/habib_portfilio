import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        
        {/* Left Side: Logo */}
        <Link href="/" style={logoLinkStyle}>
          <Logo />
        </Link>
        
        {/* Middle: Links */}
        <nav style={navStyle}>
          <Link href="#home" style={linkStyle}>Home</Link>
          <Link href="#about" style={linkStyle}>About me</Link>
          <Link href="#projects" style={linkStyle}>Work</Link>
          <Link href="#skills" style={linkStyle}>Skills</Link>
        </nav>

        {/* Right Side: CTA Button */}
        <a 
          href="https://www.linkedin.com/in/habibdev24/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={btnStyle}
        >
          Let's chat
        </a>
      </div>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '900px',
  backgroundColor: '#0c1b16', // Dark green tint to match screenshot
  borderRadius: '50px', // Perfect pill shape
  padding: '8px 8px 8px 32px', // Less padding right to tightly hug the button
  zIndex: 100,
  fontFamily: 'var(--font-poppins), sans-serif',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '36px', // Increased gap to match screenshot
  alignItems: 'center',
};

const linkStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 400,
  fontSize: '15px',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
};

const btnStyle: React.CSSProperties = {
  padding: '12px 32px',
  backgroundColor: '#ffffff',
  color: '#000000',
  borderRadius: '40px',
  fontWeight: 600,
  fontSize: '15px',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
};
