export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mha-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-purple)" />
            <stop offset="100%" stopColor="var(--accent-cyan)" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Hexagon Border */}
        <polygon 
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
          fill="rgba(139, 92, 246, 0.1)" 
          stroke="url(#mha-gradient)" 
          strokeWidth="6" 
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        
        {/* Stylized MHA Text */}
        <text 
          x="50" 
          y="58" 
          fontFamily="var(--font-geist-mono), monospace" 
          fontSize="28" 
          fontWeight="800" 
          fill="var(--text-primary)" 
          textAnchor="middle" 
          letterSpacing="1"
        >
          MHA
        </text>
      </svg>
      <span style={textStyle}>
        Habib <span style={{ color: 'var(--accent-cyan)' }}>Dev</span>
      </span>
    </div>
  );
}

const textStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 700,
  letterSpacing: '0.5px',
  color: 'var(--text-primary)',
};
