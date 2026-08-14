'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import SectionHeading from './SectionHeading';
import { HiOutlineCode } from 'react-icons/hi';
import { FaProjectDiagram } from 'react-icons/fa';
import { BiLayer } from 'react-icons/bi';

const stats = [
  {
    icon: <FaProjectDiagram />,
    value: '4+',
    label: 'Projects Completed',
  },
  {
    icon: <HiOutlineCode />,
    value: '10+',
    label: 'Technologies',
  },
  {
    icon: <BiLayer />,
    value: 'Full',
    label: 'Stack Developer',
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let gsapInstance, ScrollTrigger;
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const scrollModule = await import('gsap/ScrollTrigger');
        gsapInstance = gsapModule.gsap;
        ScrollTrigger = scrollModule.ScrollTrigger;
        gsapInstance.registerPlugin(ScrollTrigger);

        gsapInstance.fromTo(
          sectionRef.current.querySelectorAll(`.${styles.statCard}`),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        gsapInstance.fromTo(
          sectionRef.current.querySelector(`.${styles.aboutText}`),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      } catch (err) {
        // Fallback visibility
        if (sectionRef.current) {
          sectionRef.current.querySelectorAll(`.${styles.statCard}`).forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        }
      }
    };
    loadGSAP();
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="container">
        <SectionHeading subtitle="Get To Know" title="About Me" />

        <div className={styles.aboutGrid}>
          {/* Stats Cards */}
          <div className={styles.statsRow}>
            {stats.map((stat, i) => (
              <div key={i} className={`glass-card ${styles.statCard}`}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* About Text */}
          <div className={styles.aboutText}>
            <p>
              I am a passionate <span className={styles.highlight}>Full Stack Developer</span> with
              a strong interest in both front-end and back-end development. I specialize in building
              modern, responsive web applications using technologies like{' '}
              <span className={styles.highlight}>React</span>,{' '}
              <span className={styles.highlight}>Next.js</span>,{' '}
              <span className={styles.highlight}>Node.js</span>, and{' '}
              <span className={styles.highlight}>MongoDB</span>.
            </p>
            <p>
              I&apos;m driven by the desire to create digital experiences that are not only functional
              but also visually stunning and intuitive. I constantly learn new technologies and
              best practices to stay at the cutting edge of web development.
            </p>
            <div className={styles.aboutCta}>
              <a href="#contact" className="btn btn-primary">
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
