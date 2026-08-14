'use client';

import styles from './SectionHeading.module.css';
import { useEffect, useRef } from 'react';

export default function SectionHeading({ subtitle, title }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.heading} ref={headingRef}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}>
        <div className={styles.underlineFill}></div>
      </div>
    </div>
  );
}
