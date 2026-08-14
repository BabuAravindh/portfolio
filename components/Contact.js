'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Contact.module.css';
import SectionHeading from './SectionHeading';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { HiCheck, HiX } from 'react-icons/hi';

const contactOptions = [
  {
    icon: <MdOutlineEmail />,
    title: 'Email',
    value: 'BabuAravindh637@gmail.com',
    link: 'mailto:BabuAravindh637@gmail.com',
    linkText: 'Send an email',
    color: 'var(--emerald-400)',
  },
  {
    icon: <FaLinkedinIn />,
    title: 'LinkedIn',
    value: 'Babu Aravindh',
    link: 'https://www.linkedin.com/in/babu-aravindh-88a97421a/',
    linkText: 'Connect on LinkedIn',
    color: '#0a66c2',
  },
  {
    icon: <FaInstagram />,
    title: 'Instagram',
    value: '@_babuaravindh_',
    link: 'https://instagram.com/_babuaravindh_',
    linkText: 'Follow on Instagram',
    color: '#e1306c',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const emailjs = (await import('emailjs-com')).default;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_sm08p8q',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_9a0hii6',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '7ih0lCIDpw_nNYe6o'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email failed:', error);
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      <div className="container">
        <SectionHeading subtitle="Get In Touch" title="Contact Me" />

        <div className={styles.contactGrid}>
          {/* Contact Options */}
          <div className={styles.contactOptions}>
            {contactOptions.map((option, i) => (
              <a
                key={option.title}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.contactCard}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                }}
              >
                <div
                  className={styles.cardIcon}
                  style={{ color: option.color }}
                >
                  {option.icon}
                </div>
                <div className={styles.cardInfo}>
                  <h4 className={styles.cardTitle}>{option.title}</h4>
                  <p className={styles.cardValue}>{option.value}</p>
                  <span className={styles.cardLink}>{option.linkText} &rarr;</span>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`glass-card ${styles.form}`}
            autoComplete="off"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.6s 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                name="user_name"
                id="contact-name"
                required
                placeholder=" "
                className={styles.formInput}
              />
              <label htmlFor="contact-name" className={styles.formLabel}>Your Full Name</label>
              <div className={styles.formLine}></div>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="user_email"
                id="contact-email"
                required
                placeholder=" "
                className={styles.formInput}
              />
              <label htmlFor="contact-email" className={styles.formLabel}>Your Email</label>
              <div className={styles.formLine}></div>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                id="contact-message"
                rows="5"
                required
                placeholder=" "
                className={`${styles.formInput} ${styles.formTextarea}`}
              ></textarea>
              <label htmlFor="contact-message" className={styles.formLabel}>Your Message</label>
              <div className={styles.formLine}></div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={sending}
            >
              {sending ? (
                <>Sending...</>
              ) : (
                <>
                  <BiSend /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Toast notification */}
        {status && (
          <div className={`${styles.toast} ${styles[status]}`}>
            <span className={styles.toastIcon}>
              {status === 'success' ? <HiCheck /> : <HiX />}
            </span>
            <span>
              {status === 'success'
                ? 'Message sent successfully!'
                : 'Failed to send. Please try again.'}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
