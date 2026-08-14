'use client';

import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const navLinks = [
  { id: '#home', label: 'Home' },
  { id: '#about', label: 'About' },
  { id: '#skills', label: 'Skills' },
  { id: '#projects', label: 'Projects' },
  { id: '#github', label: 'GitHub' },
  { id: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/BabuAravindh',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/babu-aravindh-88a97421a/',
    label: 'LinkedIn',
  },
  {
    icon: <FaInstagram />,
    href: 'https://instagram.com/_babuaravindh_',
    label: 'Instagram',
  },
];

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = id === '#home' ? document.body : document.querySelector(id);
    if (target) {
      const offset = id === '#home' ? 0 : target.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.accentLine}></div>
      <div className={`container ${styles.footerContainer}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          <span className={styles.logoAccent}>B</span>abu
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Nav Links */}
        <nav className={styles.footerNav}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className={styles.footerLink}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Copyright */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Babu Aravindh. All rights reserved.
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            <HiArrowUp />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
