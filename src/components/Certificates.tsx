import React from 'react';
import FadeIn from './FadeIn';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "Certified Laravel Developer",
      issuer: "Laravel Certification",
      date: "2023",
      icon: "🏆",
      description: "Advanced proficiency in modern Laravel ecosystem, architecture, and deployment strategies."
    },
    {
      id: 2,
      name: "AI & Machine Learning Foundations",
      issuer: "DeepLearning.AI",
      date: "2024",
      icon: "🧠",
      description: "Core principles of AI agents, LangChain, autonomous systems, and LLM integration."
    },
    {
      id: 3,
      name: "Advanced PHP Programming",
      issuer: "Zend Certified Engineer",
      date: "2022",
      icon: "📜",
      description: "Mastery of PHP, object-oriented design, security, and performance optimization."
    }
  ];

  return (
    <section id="certificates" style={certSectionStyle}>
      <h2 style={sectionTitleStyle}><span className="text-gradient">05.</span> Certifications</h2>
      <div style={gridStyle}>
        {certificates.map((cert, i) => (
          <FadeIn key={cert.id} delay={i * 0.15} y={20}>
            <div style={cardStyle} className="glass-panel glow-on-hover">
              <div style={iconStyle}>{cert.icon}</div>
              <h3 style={titleStyle}>{cert.name}</h3>
              <div style={issuerStyle}>{cert.issuer} • {cert.date}</div>
              <p style={descStyle}>{cert.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Styles
const certSectionStyle: React.CSSProperties = {
  padding: '80px 0',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
  gap: '24px',
};

const cardStyle: React.CSSProperties = {
  padding: '30px',
  borderRadius: '20px',
  backgroundColor: '#13141c',
  border: '1px solid rgba(139, 92, 246, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const iconStyle: React.CSSProperties = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '8px',
  fontFamily: 'var(--font-poppins)',
};

const issuerStyle: React.CSSProperties = {
  color: 'var(--accent-cyan)',
  fontSize: '0.9rem',
  fontWeight: 600,
  marginBottom: '16px',
};

const descStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
  fontSize: '0.95rem',
  margin: 0,
};
