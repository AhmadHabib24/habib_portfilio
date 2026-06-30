import Link from "next/link";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Journey from "@/components/Journey";
import Certificates from "@/components/Certificates";
import Products from "@/components/Products";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <FadeIn delay={0.1} y={30}>
          <div style={heroContentStyle}>
            <p style={heroTaglineStyle}>Building Intelligence &amp; Scalability.</p>
            <h1 style={heroTitleStyle}>
              Hi, I&apos;m <span className="text-gradient">M Habib Ahmad</span>
            </h1>
            <h2 style={heroSubtitleStyle}>
              Backend &amp; AI Developer based in Pakistan.
            </h2>
            <p style={heroDescStyle}>
              Specializing in building robust backend architectures, advanced AI solutions, intelligent bots, and autonomous agents from scratch.
            </p>
            <div style={heroButtonsStyle}>
              <Link href="#projects" style={primaryBtnStyle} className="glow-on-hover">
                View Projects
              </Link>
              <Link href="https://github.com/AhmadHabib24" target="_blank" style={secondaryBtnStyle}>
                GitHub Profile
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section id="about" style={aboutSectionStyle}>
        <FadeIn delay={0.2} y={30}>
          <h2 style={sectionTitleStyle}><span className="text-gradient">01.</span> About Me</h2>
          <div style={aboutContentStyle} className="glass-panel">
            <p style={aboutTextStyle}>
              Hello! My name is <strong>M Habib Ahmad</strong>, and I am a passionate Backend Developer hailing from Pakistan. 
              My journey in software engineering has been driven by a relentless curiosity to solve problems—starting from simple logic puzzles to architecting complex AI-driven systems.
            </p>
            <p style={aboutTextStyle}>
              Today, my expertise spans across cutting-edge technologies. I don&apos;t just build APIs; I engineer intelligent bots, multi-agent systems, and highly scalable backends that power modern web applications. 
              I thrive in the intersection of traditional backend engineering and the new frontier of Artificial Intelligence.
            </p>
            <div style={skillsGridStyle}>
              {['Backend Architecture', 'Artificial Intelligence', 'Intelligent Bots', 'Autonomous Agents', 'API Development', 'Database Design'].map((skill, i) => (
                <FadeIn key={skill} delay={0.3 + (i * 0.1)} y={10} duration={0.4}>
                  <div style={skillTagStyle}>
                    {skill}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
      
      {/* Tech Stack Section */}
      <TechStack />

      {/* Journey Section */}
      <Journey />
      
      {/* Certificates Section */}
      <Certificates />
      
      {/* Products Section */}
      <Products />
      
      {/* Projects Section */}
      <Projects />
    </div>
  );
}

// Styles
const pageStyle: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px',
};

// Hero Styles
const heroSectionStyle: React.CSSProperties = {
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '60px',
};

const heroContentStyle: React.CSSProperties = {
  maxWidth: '800px',
};

const heroTaglineStyle: React.CSSProperties = {
  color: 'var(--accent-cyan)',
  fontFamily: 'var(--font-geist-mono)',
  fontWeight: 600,
  letterSpacing: '1px',
  marginBottom: '20px',
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: 'clamp(40px, 8vw, 80px)',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: '20px',
  color: 'var(--text-primary)',
};

const heroSubtitleStyle: React.CSSProperties = {
  fontSize: 'clamp(20px, 4vw, 32px)',
  fontWeight: 600,
  color: 'var(--text-secondary)',
  marginBottom: '30px',
};

const heroDescStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: 'var(--text-muted)',
  maxWidth: '600px',
  marginBottom: '40px',
  lineHeight: 1.8,
};

const heroButtonsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
};

const primaryBtnStyle: React.CSSProperties = {
  padding: '16px 32px',
  backgroundColor: 'transparent',
  border: '2px solid var(--accent-purple)',
  color: 'var(--accent-purple)',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1rem',
};

const secondaryBtnStyle: React.CSSProperties = {
  padding: '16px 32px',
  backgroundColor: 'var(--bg-secondary)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-primary)',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1rem',
};

// Section Shared Styles
const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

// About Styles
const aboutSectionStyle: React.CSSProperties = {
  padding: '100px 0',
};

const aboutContentStyle: React.CSSProperties = {
  padding: '40px',
};

const aboutTextStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  fontSize: '1.1rem',
  marginBottom: '20px',
  lineHeight: 1.8,
};

const skillsGridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  marginTop: '30px',
};

const skillTagStyle: React.CSSProperties = {
  padding: '8px 16px',
  backgroundColor: 'rgba(6, 182, 212, 0.1)',
  color: 'var(--accent-cyan)',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-geist-mono)',
  border: '1px solid rgba(6, 182, 212, 0.2)',
};

const projectsPlaceholderStyle: React.CSSProperties = {
  padding: '100px 0',
  minHeight: '40vh',
};
