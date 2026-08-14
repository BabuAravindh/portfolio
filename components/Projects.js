'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import SectionHeading from './SectionHeading';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'College Website',
    description: 'A comprehensive college website with modern UI, student portal, and dynamic content management system.',
    image: '/portfolio/images/portfolio1.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/BabuAravindh',
    live: 'https://github.com/BabuAravindh',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with instant messaging, user authentication, and responsive design.',
    image: '/portfolio/images/porfolio2.png',
    tags: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/BabuAravindh',
    live: 'https://github.com/BabuAravindh',
  },
  {
    title: 'Gym React Website',
    description: 'A dynamic fitness website built with React featuring smooth animations and interactive workout sections.',
    image: '/portfolio/images/porfolio3.png',
    tags: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/BabuAravindh',
    live: 'https://babuaravindh.github.io/react-gym-website/',
  },
  {
    title: 'Travelix Website',
    description: 'Travel booking platform with destination search, itinerary planning, and beautiful gallery sections.',
    image: '/portfolio/images/porfolio4.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/BabuAravindh',
    live: '#',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
  };

  return (
    <article
      ref={cardRef}
      className={`glass-card ${styles.projectCard}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
          : 'translateY(40px)',
      }}
    >
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayLinks}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtn}
              aria-label={`${project.title} GitHub`}
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtn}
              aria-label={`${project.title} Live Demo`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.cardActions}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeading subtitle="My Recent Work" title="Featured Projects" />

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
