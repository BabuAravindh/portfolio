'use client';

import { useState, useEffect } from 'react';
import styles from './TerminalOutput.module.css';

export default function TerminalOutput({ output, isLast }) {
  const [visibleText, setVisibleText] = useState('');
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (output.type === 'ascii' || output.type === 'neofetch' || !isLast) {
      setComplete(true);
      return;
    }

    // Combine all parts of the line to type it out
    const fullText = output.type === 'link' 
      ? output.text 
      : output.parts?.map(p => p.text).join('') || '';

    let index = 0;
    const interval = setInterval(() => {
      setVisibleText(prev => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setComplete(true);
      }
    }, 8); // Fast typing effect

    return () => clearInterval(interval);
  }, [output, isLast]);

  // For older lines or immediate renders (like neofetch / ascii art)
  if (output.type === 'ascii') {
    return <pre className={styles.ascii}>{output.text}</pre>;
  }

  if (output.type === 'neofetch') {
    return (
      <div className={styles.neofetchContainer}>
        <pre className={styles.neofetchArt}>{output.art}</pre>
        <div className={styles.neofetchInfo}>
          {output.info.map((item, i) => (
            <div key={i} className={styles.neofetchRow}>
              <span className={`${styles.label} color-purple text-bold`}>{item.label}:</span>
              <span className={item.color}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (output.type === 'link') {
    const textToShow = complete ? output.text : visibleText;
    return (
      <div className={styles.line}>
        <a 
          href={output.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="color-cyan text-bold"
          aria-label={output.label}
        >
          {textToShow}
        </a>
      </div>
    );
  }

  // Standard line render
  if (output.type === 'line') {
    if (!complete) {
      // Find which part the current typed text matches
      let currentLength = 0;
      return (
        <div className={styles.line}>
          {output.parts.map((part, i) => {
            const partStart = currentLength;
            const partEnd = currentLength + part.text.length;
            currentLength += part.text.length;

            if (visibleText.length <= partStart) return null;
            
            const partTextToShow = visibleText.slice(partStart, partEnd);
            const classes = part.classes.map(c => styles[c] || c).join(' ');

            return (
              <span key={i} className={classes}>
                {partTextToShow}
              </span>
            );
          })}
        </div>
      );
    }

    return (
      <div className={styles.line}>
        {output.parts.map((part, i) => {
          const classes = part.classes.map(c => styles[c] || c).join(' ');
          return (
            <span key={i} className={classes}>
              {part.text}
            </span>
          );
        })}
      </div>
    );
  }

  return null;
}
