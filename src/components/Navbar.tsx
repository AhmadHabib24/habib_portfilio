"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Left Side: Logo */}
        <Link href="/" className={styles.logoLink} onClick={closeMobileMenu}>
          <Logo />
        </Link>
        
        {/* Middle: Desktop Links */}
        <nav className={styles.nav}>
          <Link href="#home" className={styles.link}>Home</Link>
          <Link href="#about" className={styles.link}>About me</Link>
          <Link href="#projects" className={styles.link}>Work</Link>
          <Link href="#skills" className={styles.link}>Skills</Link>
        </nav>

        {/* Right Side: CTA Button (Desktop) */}
        <a 
          href="https://www.linkedin.com/in/habibdev24/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btn}
        >
          Let's chat
        </a>

        {/* Mobile Hamburger Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <Link href="#home" className={styles.link} onClick={closeMobileMenu}>Home</Link>
        <Link href="#about" className={styles.link} onClick={closeMobileMenu}>About me</Link>
        <Link href="#projects" className={styles.link} onClick={closeMobileMenu}>Work</Link>
        <Link href="#skills" className={styles.link} onClick={closeMobileMenu}>Skills</Link>
        
        <a 
          href="https://www.linkedin.com/in/habibdev24/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btn}
          onClick={closeMobileMenu}
        >
          Let's chat
        </a>
      </div>
    </header>
  );
}
