'use client';

import { useEffect, useState } from 'react';
import styles from './TerminalIntro.module.css';

export default function TerminalIntro({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: glitched code, 1: title reveal, 2: progress loading, 3: completed

  useEffect(() => {
    // Stage timings
    const timers = [
      setTimeout(() => setStage(1), 800),   // Code lines scan → Reveal Title
      setTimeout(() => setStage(2), 2200),  // Title → Show decrypt progress bar
      setTimeout(() => setStage(3), 3800),  // Progress complete → Trigger fade-out
      setTimeout(() => onComplete(), 4400)  // Animation fully ended
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`${styles.overlay} ${stage === 3 ? styles.fadeOut : ''}`}>
      {/* Glitched scanning code background */}
      {stage === 0 && (
        <div className={styles.codeScan}>
          <div>SYS_INIT: loading module.core... [OK]</div>
          <div>NET_BOUND: established socket_v2... [OK]</div>
          <div>DECRYPT_KEY: initializing handshake... [PENDING]</div>
          <div>WARN: buffer overflow protection enabled.</div>
          <div>SEC_AUTH: bypass credentials injected... [GRANT]</div>
        </div>
      )}

      {/* Main Cinematic Title */}
      {(stage === 1 || stage === 2) && (
        <div className={styles.titleContainer}>
          <div className={styles.movieTitle} data-text="BABU ARAVINDH">
            BABU ARAVINDH
          </div>
          <div className={styles.movieSubtitle}>
            // OPERATING SYSTEM PORTFOLIO v2.0 //
          </div>
        </div>
      )}

      {/* Retro Loading Progress Bar */}
      {stage === 2 && (
        <div className={styles.progressContainer}>
          <div className={styles.progressLabel}>DECRYPTING FILES...</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      )}

      {/* Scanning Laser Line Effect */}
      <div className={styles.laser}></div>
    </div>
  );
}
