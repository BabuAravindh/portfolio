'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { HiOutlineCode } from 'react-icons/hi';
import { VscGithubAlt } from 'react-icons/vsc';

const navLinks = [
  { id: '#home', icon: <AiOutlineHome />, label: 'Home' },
  { id: '#about', icon: <AiOutlineUser />, label: 'About' },
  { id: '#skills', icon: <BiBook />, label: 'Skills' },
  { id: '#projects', icon: <HiOutlineCode />, label: 'Projects' },
  { id: '#github', icon: <VscGithubAlt />, label: 'GitHub' },
  { id: '#contact', icon: <BiMessageSquareDetail />, label: 'Contact' },
];

export default function Navigation() {
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section detection
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = id === '#home' ? document.body : document.querySelector(id);
    if (target) {
      const offset = id === '#home' ? 0 : target.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className={styles.logoAccent}>B</span>abu
            <span className={styles.logoDot}>.</span>
          </a>

          <nav className={`${styles.navLinks} ${mobileOpen ? styles.navOpen : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                className={`${styles.navLink} ${activeNav === link.id ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span className={styles.navIcon}>{link.icon}</span>
                <span className={styles.navLabel}>{link.label}</span>
              </a>
            ))}
          </nav>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
