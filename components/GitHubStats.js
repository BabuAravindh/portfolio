'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GitHubStats.module.css';
import SectionHeading from './SectionHeading';
import { FaGithub } from 'react-icons/fa';

const GITHUB_USERNAME = 'BabuAravindh';

export default function GitHubStats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className={`section ${styles.github}`} ref={sectionRef}>
      <div className="container">
        <SectionHeading subtitle="My Open Source" title="GitHub Activity" />

        <div
          className={styles.statsGrid}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* GitHub Stats */}
          <div className={`glass-card ${styles.statCard}`}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=10b981&text_color=a3a3a3&icon_color=f59e0b&bg_color=00000000`}
              alt="GitHub Stats"
              loading="lazy"
              className={styles.statImage}
            />
          </div>

          {/* Top Languages */}
          <div className={`glass-card ${styles.statCard}`}>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=10b981&text_color=a3a3a3&bg_color=00000000`}
              alt="Top Languages"
              loading="lazy"
              className={styles.statImage}
            />
          </div>

          {/* Streak Stats */}
          <div className={`glass-card ${styles.statCard} ${styles.streakCard}`}>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=10b981&fire=f59e0b&currStreakLabel=10b981&sideLabels=a3a3a3&dates=737373&currStreakNum=f5f5f5&sideNums=f5f5f5&background=00000000`}
              alt="GitHub Streak"
              loading="lazy"
              className={styles.statImage}
            />
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div
          className={styles.profileLink}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
