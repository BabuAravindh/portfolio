'use client';

import { useEffect, useRef } from 'react';
import styles from './MatrixRain.module.css';

export default function MatrixRain({ opacity = 0.15 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*+-=';
    const charArr = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = `rgba(10, 10, 15, 0.1)`; // Match terminal bg with transparency for tail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981'; // Emerald primary color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw character
        ctx.fillText(text, x, y);

        // Reset drop or move it down
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={styles.canvas} 
      style={{ opacity }}
    />
  );
}
