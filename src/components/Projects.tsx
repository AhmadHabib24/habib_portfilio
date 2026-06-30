"use client";
import React from 'react';
import FadeIn from './FadeIn';

const projects = [
  {
    id: 0,
    name: "Excels Tech Solution LLC",
    url: "https://www.excels-tech.com/",
    description: "A forward-thinking digital solutions agency offering cutting-edge tech innovation and transformation services.",
    tags: ["Digital Agency", "Web Development", "AI Solutions"],
    image: "/projects/excels-tech.png"
  },
  {
    id: 1,
    name: "Velocrosshairs",
    url: "https://velocrosshairs.com/",
    description: "A comprehensive Valorant crosshair database featuring pro player codes, community submissions, and an interactive preview tool.",
    tags: ["Laravel", "MySQL", "SEO", "AI Agent"],
    image: "/projects/velocross.png"
  },
  {
    id: 2,
    name: "Gulf Got Talents",
    url: "https://gulfgottalents.com/",
    description: "A talent acquisition and recruitment platform for the Gulf region, featuring a robust backend and admin panel.",
    tags: ["Laravel", "Python", "MySQL", "AI Tools"],
    image: "/projects/gulf.png"
  },
  {
    id: 4,
    name: "Gulf Got Talents Admin Panel",
    url: "https://api.gulfgottalents.com/",
    description: "Robust API backend and Admin panel powering the Gulf Got Talents recruitment platform.",
    tags: ["API Development", "Backend Architecture", "Admin Panel"],
    image: "/projects/gulf-admin.png"
  },
  {
    id: 5,
    name: "Findigit",
    url: "https://findigit.org/",
    description: "A digital solutions platform focusing on modern web presence and IT services.",
    tags: ["Web App", "API Development"],
    image: "/projects/findigit.png"
  },
  {
    id: 6,
    name: "Global Capiteus Consulting",
    url: "https://globalcapiteusconsulting.com/",
    description: "Corporate consulting website featuring a professional design and scalable architecture.",
    tags: ["Corporate", "SEO Optimization"],
    image: "/projects/global.png"
  },
  {
    id: 7,
    name: "Al Hafiz Electronics",
    url: "https://www.alhafizelectronics.com/",
    description: "An e-commerce platform for electronics, featuring product catalogs, cart management, and secure checkout.",
    tags: ["E-Commerce", "Payment Gateway"],
    image: "/projects/alhafiz.png"
  },
  {
    id: 8,
    name: "Web Excels DRM",
    url: "https://webexcels.pk/drm/",
    description: "A Digital Rights Management or document management system for secure data handling.",
    tags: ["DRM", "Security", "Backend"],
    image: "/projects/drm.png"
  },
  {
    id: 9,
    name: "WLD Connect",
    url: "https://github.com/AhmadHabib24/wldconnectlatest",
    description: "A comprehensive connectivity and networking platform built with modern web technologies.",
    tags: ["Web Development", "Backend Architecture"],
    image: "/projects/wldconnect.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={projectsSectionStyle}>
      <h2 style={sectionTitleStyle}><span className="text-gradient">04.</span> Featured Work</h2>
      <div style={gridStyle}>
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={0.1 * (i % 3)} y={30}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={cardStyle} className="glass-panel glow-on-hover">
              {/* Image Preview */}
              <div style={imageContainerStyle}>
                <img
                  src={project.image || `https://placehold.co/600x400/14161c/8b5cf6?text=${encodeURIComponent(project.name)}`}
                  alt={`${project.name} preview`}
                  style={imageStyle}
                  loading="lazy"
                />
              </div>
              <div style={cardContentStyle}>
                <h3 style={repoTitleStyle}>{project.name}</h3>
                <p style={repoDescStyle}>{project.description}</p>
                <div style={tagsStyle}>
                  {project.tags.map(tag => (
                    <span key={tag} style={tagStyle}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Styles
const projectsSectionStyle: React.CSSProperties = {
  padding: '100px 0',
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
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
  gap: '24px',
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  color: 'inherit',
  overflow: 'hidden',
  height: '100%',
};

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  backgroundColor: 'var(--bg-secondary)',
  borderBottom: '1px solid var(--border-color)',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const cardContentStyle: React.CSSProperties = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const repoTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  color: 'var(--text-primary)',
  marginBottom: '12px',
  fontWeight: 600,
};

const repoDescStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  marginBottom: '20px',
  flexGrow: 1,
  lineHeight: 1.6,
};

const tagsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
};

const tagStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  padding: '4px 10px',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  color: 'var(--accent-purple)',
  borderRadius: '4px',
  fontFamily: 'var(--font-geist-mono)',
};
