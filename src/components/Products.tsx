import React from 'react';
import FadeIn from './FadeIn';

const products = [
  {
    id: 1,
    name: "XLSERP ERP System",
    url: "https://xlserp.com/Bluehands/",
    description: "A full-fledged Enterprise Resource Planning (ERP) system encompassing Project, Account, HRM, CRM, Website, and POS systems.",
    tags: ["ERP", "SaaS", "Enterprise", "Backend Architecture"],
    image: "/projects/xlserp.png"
  },
  {
    id: 2,
    name: "XLSERP Customer Support System",
    url: "https://customer.xlserp.com/",
    description: "A comprehensive customer support portal featuring ticket management, daily follow-ups, and late reply audit trails.",
    tags: ["Customer Support", "Dashboard", "Analytics"],
    image: "/projects/customer-support.png"
  },
  {
    id: 3,
    name: "Office Management System (OMS)",
    url: "https://oms.tecveq.com/",
    description: "A complete office management system featuring salary details, email marketing tools, team management, employee tracker, AI agents, WhatsApp automation, and lead generation.",
    tags: ["OMS", "AI Automation", "Team Management", "WhatsApp API"],
    image: "/projects/oms.png"
  }
];

export default function Products() {
  return (
    <section id="products" style={productsSectionStyle}>
      <FadeIn y={20}>
        <div style={headerStyle}>
          <h2 style={sectionTitleStyle}>
            <span className="text-gradient">06.</span> Live Products
          </h2>
          <p style={subtitleStyle}>
            Comprehensive systems and platforms I've architected that are currently live and serving users.
          </p>
        </div>
      </FadeIn>

      <div style={gridStyle}>
        {products.map((product, i) => (
          <FadeIn key={product.id} delay={i * 0.1} y={30}>
            <div style={cardStyle} className="glass-panel glow-on-hover">
              {product.image && (
                <div style={imageContainerStyle}>
                  <img src={product.image} alt={product.name} style={imageStyle} />
                </div>
              )}
              <div style={contentStyle}>
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={descStyle}>{product.description}</p>
                <div style={tagsContainerStyle}>
                  {product.tags.map((tag) => (
                    <span key={tag} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={linkContainerStyle}>
                  <a href={product.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    View Live Product →
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Styles
const productsSectionStyle: React.CSSProperties = {
  padding: '100px 0',
};

const headerStyle: React.CSSProperties = {
  marginBottom: '50px',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const subtitleStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  fontSize: '1.1rem',
  maxWidth: '600px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '30px',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '20px',
  overflow: 'hidden',
  backgroundColor: '#13141c',
  border: '1px solid rgba(139, 92, 246, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
  transition: 'transform 0.5s ease',
};

const contentStyle: React.CSSProperties = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '12px',
  fontFamily: 'var(--font-poppins)',
};

const descStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  fontSize: '0.95rem',
  lineHeight: 1.5,
  marginBottom: '20px',
  flexGrow: 1,
};

const tagsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '24px',
};

const tagStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  padding: '4px 10px',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: 'var(--accent-cyan)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

const linkContainerStyle: React.CSSProperties = {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'flex-end',
};

const linkStyle: React.CSSProperties = {
  color: 'var(--accent-purple)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
};
