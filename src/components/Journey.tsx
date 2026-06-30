import React from 'react';
import FadeIn from './FadeIn';

export default function Journey() {
  const steps = [
    {
      id: 3,
      role: "Chief Technology Officer (CTO)",
      company: "Tecveq",
      companyUrl: "https://tecveq.com/",
      location: "United Kingdom · Remote",
      desc: "Leading the technical strategy, system architecture, and engineering initiatives. Overseeing product development, scalable infrastructure, and aligning advanced technology solutions with core business goals.",
      skills: ["Technical Leadership", "System Architecture", "Cloud Infrastructure", "Strategic Planning", "AI Integration"]
    },
    {
      id: 0,
      role: "Software Engineer | PHP Laravel Developer",
      company: "GulfGotTalent",
      companyUrl: "https://gulfgottalents.com/",
      location: "Dubai, UAE · Remote",
      desc: "Architecting and building full stack web applications end-to-end. Handling complete server configurations, CI/CD pipelines, and managing live production deployments independently.",
      skills: ["PHP", "Laravel", "Full Stack Development", "CI/CD", "Server Deployment"]
    },
    {
      id: 1,
      role: "Software Engineer | PHP Laravel Developer",
      company: "Web Excels",
      companyUrl: "https://webexcels.com/",
      location: "Lahore, Pakistan · On-site",
      desc: "Spearheading backend web development and architecture. Integrating modern AI features, AJAX, and building scalable enterprise systems.",
      skills: ["Laravel", "PHP", "AJAX", "Backend Web Development", "AI Automation"]
    },
    {
      id: 2,
      role: "PHP Developer",
      company: "Emerald Telecom",
      companyUrl: "https://emeraldtelecom.com/",
      location: "Lahore, Pakistan · On-site",
      desc: "Developed and maintained VOIP systems to ensure seamless communication services. Built the Emerald VOIP Portal featuring high-quality voice calls, call routing, voicemail, and platform integrations.",
      skills: ["PHP", "Web Application Development", "VOIP Systems", "API Integration"]
    }
  ];

  return (
    <section id="journey" style={journeySectionStyle}>
      <div style={containerStyle}>
        <h2 style={sectionTitleStyle}><span className="text-gradient">04.</span> Professional Experience</h2>
        
        <div style={timelineStyle}>
          {steps.map((step, idx) => (
            <FadeIn key={step.id} delay={0.2 + (idx * 0.15)} y={20}>
              <div style={stepStyle} className="glass-panel glow-on-hover">
                <div style={headerStyle}>
                  <div>
                    <h3 style={titleStyle}>{step.role}</h3>
                    <div style={companyStyle}>
                      <a href={step.companyUrl} target="_blank" rel="noopener noreferrer" style={companyLinkStyle}>
                        {step.company} 🔗
                      </a>
                    </div>
                  </div>
                </div>
                
                <div style={locationStyle}>📍 {step.location}</div>
                <p style={descStyle}>{step.desc}</p>
                
                <div style={skillsStyle}>
                  {step.skills.map(skill => (
                    <span key={skill} style={skillPillStyle}>{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// Styles
const journeySectionStyle: React.CSSProperties = {
  padding: '100px 0',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const timelineStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  position: 'relative',
  paddingLeft: '20px',
  borderLeft: '2px solid rgba(139, 92, 246, 0.2)',
};

const stepStyle: React.CSSProperties = {
  position: 'relative',
  padding: '30px',
  borderRadius: '20px',
  backgroundColor: '#13141c',
  border: '1px solid rgba(139, 92, 246, 0.1)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '10px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: '#ffffff',
  margin: 0,
  fontFamily: 'var(--font-poppins)',
};

const companyStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'var(--accent-cyan)',
  marginTop: '4px',
};

const periodStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  backgroundColor: 'rgba(255,255,255,0.05)',
  padding: '4px 12px',
  borderRadius: '20px',
  fontFamily: 'var(--font-geist-mono)',
};

const locationStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  marginBottom: '16px',
};

const descStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  marginBottom: '20px',
};

const skillsStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
};

const skillPillStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  padding: '4px 12px',
  borderRadius: '12px',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  color: '#a78bfa',
  border: '1px solid rgba(139, 92, 246, 0.2)',
};

const companyLinkStyle: React.CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};
