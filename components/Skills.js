'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import SectionHeading from './SectionHeading';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';

const frontendSkills = [
  { name: 'HTML', icon: <FaHtml5 />, level: 90, color: '#e34c26' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 85, color: '#264de4' },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 85, color: '#f7df1e' },
  { name: 'React', icon: <FaReact />, level: 80, color: '#61dafb' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 80, color: '#38bdf8' },
];

const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs />, level: 75, color: '#68a063' },
  { name: 'Python', icon: <FaPython />, level: 70, color: '#3776ab' },
  { name: 'PHP', icon: <FaPhp />, level: 65, color: '#8993be' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: '#4db33d' },
  { name: 'MySQL', icon: <SiMysql />, level: 70, color: '#00758f' },
];

function SkillRing({ skill, index, isVisible }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <div
      className={styles.skillCard}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <div className={styles.ringWrapper}>
        <svg className={styles.ring} viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={skill.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            className={styles.progressCircle}
            style={{
              filter: `drop-shadow(0 0 6px ${skill.color}40)`,
            }}
          />
        </svg>
        <div className={styles.ringIcon} style={{ color: skill.color }}>
          {skill.icon}
        </div>
      </div>
      <h4 className={styles.skillName}>{skill.name}</h4>
      <span className={styles.skillLevel}>{skill.level}%</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            // Force re-render by dispatching a custom event
            entry.target.dispatchEvent(new CustomEvent('sectionVisible'));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (frontendRef.current) observer.observe(frontendRef.current);
    if (backendRef.current) observer.observe(backendRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
      <div className="container">
        <SectionHeading subtitle="What Skills I Have" title="My Technical Skills" />

        <div className={styles.skillsGrid}>
          {/* Frontend */}
          <div className={`glass-card ${styles.skillGroup}`} ref={frontendRef}>
            <div className={styles.groupHeader}>
              <span className={styles.groupDot} style={{ background: 'var(--emerald-400)' }}></span>
              <h3 className={styles.groupTitle}>Frontend Development</h3>
            </div>
            <div className={styles.skillsRow}>
              {frontendSkills.map((skill, i) => (
                <SkillRingObserved key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className={`glass-card ${styles.skillGroup}`} ref={backendRef}>
            <div className={styles.groupHeader}>
              <span className={styles.groupDot} style={{ background: 'var(--gold-400)' }}></span>
              <h3 className={styles.groupTitle}>Backend Development</h3>
            </div>
            <div className={styles.skillsRow}>
              {backendSkills.map((skill, i) => (
                <SkillRingObserved key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Wrapper that uses IntersectionObserver per card for visibility
function SkillRingObserved({ skill, index }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <SkillRing skill={skill} index={index} isVisible={isVisible} />
    </div>
  );
}
