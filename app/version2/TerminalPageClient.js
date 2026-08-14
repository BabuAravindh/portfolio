'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import MatrixRain from '@/components/MatrixRain';
import TerminalIntro from '@/components/TerminalIntro';
import './terminal-page.css';

export default function TerminalPageClient() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Cinematic Intro Screen */}
      {!introComplete && (
        <TerminalIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Background Matrix Rain Animation */}
      <MatrixRain opacity={0.12} />
      
      {/* CRT Scanline and Screen Glow Overlay Effects */}
      <div className="crt-glow-overlay"></div>
      
      {/* Terminal Interface Container (fades in once intro completes) */}
      <main className={`terminal-container ${introComplete ? 'fade-in-active' : 'hidden'}`}>
        <Terminal />
      </main>
    </>
  );
}
