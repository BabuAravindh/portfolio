'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';
import TerminalOutput from './TerminalOutput';
import {
  AVAILABLE_COMMANDS,
  getBanner,
  getHelp,
  getAbout,
  getSkills,
  getProjects,
  getContact,
  getGithub,
  getResume,
  getSocial,
  getWhoami,
  getNeofetch,
  getDate,
  getEcho,
  getThemeHelp,
  getError,
} from './commands';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [outputs, setOutputs] = useState([]);
  const [theme, setTheme] = useState('vscode');
  const [isFocused, setIsFocused] = useState(true);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Initialize with welcome banner
  useEffect(() => {
    setOutputs(getBanner());
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();
      const newOutputs = [...outputs];

      // Add the command prompt line to outputs
      newOutputs.push({
        type: 'line',
        parts: [
          { text: 'visitor@aravindh:~$ ', classes: ['color-green', 'text-bold'] },
          { text: input, classes: [] },
        ],
      });

      if (trimmedInput) {
        // Add to history
        const updatedHistory = [...commandHistory, trimmedInput];
        setCommandHistory(updatedHistory);
        setHistoryIndex(-1);

        // Process command
        const parts = trimmedInput.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');

        switch (cmd) {
          case 'help':
            newOutputs.push(...getHelp());
            break;
          case 'clear':
            setOutputs([]);
            setInput('');
            return;
          case 'about':
            newOutputs.push(...getAbout());
            break;
          case 'skills':
            newOutputs.push(...getSkills());
            break;
          case 'projects':
            newOutputs.push(...getProjects());
            break;
          case 'contact':
            newOutputs.push(...getContact());
            break;
          case 'github':
            newOutputs.push(...getGithub());
            break;
          case 'resume':
            newOutputs.push(...getResume());
            break;
          case 'social':
            newOutputs.push(...getSocial());
            break;
          case 'whoami':
            newOutputs.push(...getWhoami());
            break;
          case 'neofetch':
            newOutputs.push(...getNeofetch());
            break;
          case 'date':
            newOutputs.push(...getDate());
            break;
          case 'banner':
            newOutputs.push(...getBanner());
            break;
          case 'echo':
            newOutputs.push(...getEcho(args));
            break;
          case 'history':
            newOutputs.push(
              emptyLine(),
              { type: 'line', parts: [{ text: '  Command History:', classes: ['color-purple', 'text-bold'] }] }
            );
            updatedHistory.forEach((h, i) => {
              newOutputs.push({
                type: 'line',
                parts: [
                  { text: `  ${(i + 1).toString().padStart(3)}  `, classes: ['color-dim'] },
                  { text: h, classes: [] },
                ],
              });
            });
            newOutputs.push(emptyLine());
            break;
          case 'theme':
            const newTheme = args.trim().toLowerCase();
            if (['vscode', 'matrix', 'dracula'].includes(newTheme)) {
              setTheme(newTheme);
              newOutputs.push({
                type: 'line',
                parts: [
                  { text: '  Theme changed to: ', classes: ['color-green'] },
                  { text: newTheme, classes: ['color-yellow', 'text-bold'] },
                ],
              });
            } else {
              newOutputs.push(...getThemeHelp());
            }
            break;
          default:
            newOutputs.push(...getError(cmd));
        }
      }

      setOutputs(newOutputs);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = input.trim().toLowerCase();
      if (!currentInput) return;

      // Find matching commands
      const matches = AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(currentInput));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        // Display options
        const matchLine = {
          type: 'line',
          parts: [{ text: `  ${matches.join('    ')}`, classes: ['color-dim'] }],
        };
        setOutputs([...outputs, matchLine]);
      }
    }
  };

  const emptyLine = () => ({ type: 'line', parts: [{ text: ' ', classes: [] }] });

  return (
    <div 
      className={`${styles.window} ${styles[theme]}`}
      onClick={handleTerminalClick}
    >
      {/* Title Bar */}
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.closeDot}></span>
          <span className={styles.minimizeDot}></span>
          <span className={styles.expandDot}></span>
        </div>
        <div className={styles.title}>visitor@aravindh: ~/portfolio</div>
        <div className={styles.techStack}>bash</div>
      </div>

      {/* Output Console */}
      <div className={styles.console}>
        {outputs.map((out, i) => (
          <TerminalOutput 
            key={i} 
            output={out} 
            isLast={i === outputs.length - 1} 
          />
        ))}
        
        {/* Active Input Line */}
        <div className={styles.inputLine}>
          <span className={`${styles.prompt} color-green text-bold`}>
            visitor@aravindh:~$
          </span>
          <div className={styles.inputWrapper}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className={styles.input}
              autoFocus
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              aria-label="Terminal input"
            />
            <span className={styles.typedText}>{input}</span>
            <span className={`${styles.cursor} ${isFocused ? styles.blinking : ''}`}></span>
          </div>
        </div>
        
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
