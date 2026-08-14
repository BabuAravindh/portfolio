'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { BiMessageSquareDetail } from 'react-icons/bi';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation for hero
    let gsapInstance;
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        gsapInstance = gsapModule.gsap;

        const tl = gsapInstance.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          `.${styles.greeting}`,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        )
          .fromTo(
            `.${styles.name}`,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            '-=0.3'
          )
          .fromTo(
            `.${styles.role}`,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
          )
          .fromTo(
            `.${styles.description}`,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.3'
          )
          .fromTo(
            `.${styles.cta}`,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            '-=0.3'
          )
          .fromTo(
            `.${styles.imageWrapper}`,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8 },
            '-=0.6'
          )
          .fromTo(
            `.${styles.socials} a`,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
            '-=0.4'
          )
          .fromTo(
            `.${styles.scrollIndicator}`,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            '-=0.2'
          );
      } catch (err) {
        // Fallback: just make everything visible
        if (heroRef.current) {
          heroRef.current.style.opacity = '1';
        }
      }
    };

    loadGSAP();
  }, []);

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      {/* Background gradient blobs */}
      <div className={styles.bgBlob1}></div>
      <div className={styles.bgBlob2}></div>
      <div className={styles.bgGrid}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content} ref={textRef}>
          <span className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hello, I&apos;m
          </span>

          <h1 className={styles.name}>
            Babu <span className={styles.nameAccent}>Aravindh</span>
          </h1>

          <div className={styles.roleWrapper}>
            <span className={styles.roleLabel}>{'<'}</span>
            <h2 className={styles.role}>Fullstack Developer</h2>
            <span className={styles.roleLabel}>{'/>'}</span>
          </div>

          <p className={styles.description}>
            Crafting modern web experiences with clean code and creative design.
            Passionate about building scalable, user-centric applications.
          </p>

          <div className={styles.cta}>
            <a href="/portfolio/images/resume.pdf" className="btn btn-primary" download>
              <HiDownload />
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <BiMessageSquareDetail />
              Let&apos;s Talk
            </a>
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            <a
              href="https://github.com/BabuAravindh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/babu-aravindh-88a97421a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/_babuaravindh_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageRing}></div>
            <div className={styles.imageContainer}>
              <img src="/portfolio/images/m4.png" alt="Babu Aravindh" />
            </div>
          </div>
          {/* Floating tech tags */}
          <div className={`${styles.floatingTag} ${styles.tag1}`}>React</div>
          <div className={`${styles.floatingTag} ${styles.tag2}`}>Node.js</div>
          <div className={`${styles.floatingTag} ${styles.tag3}`}>Next.js</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
