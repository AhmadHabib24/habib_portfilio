import React from 'react';
import FadeIn from './FadeIn';
import { 
  SiPhp, SiLaravel, SiNodedotjs, SiPython, SiGo, SiExpress, SiNestjs, SiGraphql, 
  SiHtml5, SiCss, SiJavascript, SiNextdotjs, SiTailwindcss, SiReact, SiFramer,
  SiMysql, SiPostgresql, SiMongodb, SiRedis, SiTelegram, SiDiscord 
} from "react-icons/si";
import { FaRobot, FaServer, FaDatabase, FaNetworkWired, FaBrain, FaCogs, FaProjectDiagram } from "react-icons/fa";

export default function TechStack() {
  const iconMap: Record<string, React.ReactNode> = {
    "PHP": <SiPhp />,
    "Laravel": <SiLaravel />,
    "Node.js": <SiNodedotjs />,
    "Python": <SiPython />,
    "Go": <SiGo />,
    "Express.js": <SiExpress />,
    "NestJS": <SiNestjs />,
    "RESTful APIs": <FaServer />,
    "GraphQL": <SiGraphql />,
    "Microservices": <FaNetworkWired />,

    "AI Automation": <FaRobot />,
    "LLM Integration": <FaBrain />,
    "LangChain": <FaCogs />,
    "Autonomous Agents": <FaRobot />,
    "RAG Systems": <FaDatabase />,
    "Telegram Bots": <SiTelegram />,
    "Discord Bots": <SiDiscord />,

    "HTML": <SiHtml5 />,
    "CSS": <SiCss />,
    "JavaScript": <SiJavascript />,
    "Next.js": <SiNextdotjs />,
    "Livewire": <FaProjectDiagram />,
    "Tailwind CSS": <SiTailwindcss />,
    "React": <SiReact />,
    "Framer Motion": <SiFramer />,

    "MySQL": <SiMysql />,
    "PostgreSQL": <SiPostgresql />,
    "MongoDB": <SiMongodb />,
    "Redis": <SiRedis />,
    "Database Design": <FaDatabase />,
    "System Architecture": <FaNetworkWired />
  };

  const categories = [
    {
      title: "Backend Core",
      skills: ["PHP", "Laravel", "Node.js", "Python", "Go", "Express.js", "NestJS", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      title: "AI, Bots & Agents",
      skills: ["AI Automation", "LLM Integration", "LangChain", "Autonomous Agents", "RAG Systems", "Telegram Bots", "Discord Bots"]
    },
    {
      title: "Frontend & Fullstack",
      skills: ["HTML", "CSS", "JavaScript", "Next.js", "Livewire", "Tailwind CSS", "React", "Framer Motion"]
    },
    {
      title: "Database & Architecture",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "System Architecture"]
    }
  ];

  return (
    <section id="skills" style={techSectionStyle}>
      <h2 style={sectionTitleStyle}><span className="text-gradient">03.</span> Tech Stack</h2>
      <div style={gridStyle}>
        {categories.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.1} y={30}>
            <div style={categoryCardStyle} className="glass-panel">
              <h3 style={categoryTitleStyle}>{category.title}</h3>
              <div style={skillsContainerStyle}>
                {category.skills.map((skill) => (
                  <span key={skill} style={skillPillStyle} className="glow-on-hover">
                    {iconMap[skill] && <span style={iconStyle}>{iconMap[skill]}</span>}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// Styles
const techSectionStyle: React.CSSProperties = {
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
  gap: '24px',
};

const categoryCardStyle: React.CSSProperties = {
  padding: '32px',
  borderRadius: '24px',
  backgroundColor: '#13141c',
  border: '1px solid rgba(139, 92, 246, 0.1)',
  height: '100%',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
};

const categoryTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '24px',
  fontFamily: 'var(--font-poppins)',
};

const skillsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
};

const skillPillStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  backgroundColor: 'rgba(139, 92, 246, 0.15)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  borderRadius: '24px',
  color: '#a78bfa',
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: 'var(--font-geist-mono), monospace',
  cursor: 'default',
  transition: 'all 0.3s ease',
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center',
};
