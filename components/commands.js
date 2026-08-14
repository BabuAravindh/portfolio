// ============================================
// TERMINAL PORTFOLIO — COMMAND DATA & HANDLERS
// ============================================

const ASCII_BANNER = `
 ██████╗  █████╗ ██████╗ ██╗   ██╗
 ██╔══██╗██╔══██╗██╔══██╗██║   ██║
 ██████╔╝███████║██████╔╝██║   ██║
 ██╔══██╗██╔══██║██╔══██╗██║   ██║
 ██████╔╝██║  ██║██████╔╝╚██████╔╝
 ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝
  █████╗ ██████╗  █████╗ ██╗   ██╗██╗███╗   ██╗██████╗ ██╗  ██╗
 ██╔══██╗██╔══██╗██╔══██╗██║   ██║██║████╗  ██║██╔══██╗██║  ██║
 ███████║██████╔╝███████║██║   ██║██║██╔██╗ ██║██║  ██║███████║
 ██╔══██║██╔══██╗██╔══██║╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██╔══██║
 ██║  ██║██║  ██║██║  ██║ ╚████╔╝ ██║██║ ╚████║██████╔╝██║  ██║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝
`;

const AVAILABLE_COMMANDS = [
  'help', 'about', 'skills', 'projects', 'contact',
  'github', 'resume', 'social', 'clear', 'history',
  'whoami', 'neofetch', 'theme', 'echo', 'date', 'banner',
];

// Color classes for styling
const C = {
  green: 'color-green',
  blue: 'color-blue',
  purple: 'color-purple',
  peach: 'color-peach',
  red: 'color-red',
  cyan: 'color-cyan',
  yellow: 'color-yellow',
  dim: 'color-dim',
  bold: 'text-bold',
};

function span(text, ...classes) {
  return { text, classes };
}

function line(...parts) {
  return { type: 'line', parts: parts.map(p => typeof p === 'string' ? { text: p, classes: [] } : p) };
}

function emptyLine() {
  return { type: 'line', parts: [{ text: ' ', classes: [] }] };
}

function linkLine(text, url, label) {
  return { type: 'link', text, url, label };
}

function asciiBlock(text) {
  return { type: 'ascii', text };
}

// ── COMMAND HANDLERS ──

function getBanner() {
  return [
    asciiBlock(ASCII_BANNER),
    emptyLine(),
    line(span('Welcome to my interactive terminal portfolio!', C.green)),
    line(span('Type ', C.dim), span('help', C.yellow), span(' to see available commands.', C.dim)),
    emptyLine(),
  ];
}

function getHelp() {
  return [
    emptyLine(),
    line(span('  Available Commands:', C.purple, C.bold)),
    line(span('  ─────────────────────────────────────', C.dim)),
    emptyLine(),
    line(span('  about', C.blue), span('       — ', C.dim), span('Learn about me')),
    line(span('  skills', C.blue), span('      — ', C.dim), span('My technical skills')),
    line(span('  projects', C.blue), span('    — ', C.dim), span('View my projects')),
    line(span('  contact', C.blue), span('     — ', C.dim), span('How to reach me')),
    line(span('  github', C.blue), span('      — ', C.dim), span('My GitHub profile & stats')),
    line(span('  resume', C.blue), span('      — ', C.dim), span('Download my resume')),
    line(span('  social', C.blue), span('      — ', C.dim), span('Social media links')),
    line(span('  whoami', C.blue), span('      — ', C.dim), span('Quick intro')),
    line(span('  neofetch', C.blue), span('    — ', C.dim), span('System-info style display')),
    line(span('  banner', C.blue), span('      — ', C.dim), span('Show welcome banner')),
    line(span('  theme', C.blue), span('       — ', C.dim), span('Switch theme (vscode/matrix/dracula)')),
    line(span('  echo', C.blue), span('        — ', C.dim), span('Echo text back')),
    line(span('  date', C.blue), span('        — ', C.dim), span('Current date & time')),
    line(span('  history', C.blue), span('     — ', C.dim), span('Command history')),
    line(span('  clear', C.blue), span('       — ', C.dim), span('Clear terminal')),
    emptyLine(),
  ];
}

function getAbout() {
  return [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('About Me', C.purple, C.bold), span('                                    │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
    line(span('  Hey! I\'m ', C.dim), span('Babu Aravindh', C.green, C.bold), span(' 👋', C.dim)),
    emptyLine(),
    line(span('  I am a passionate '), span('Full Stack Developer', C.cyan, C.bold)),
    line(span('  with a strong interest in both front-end')),
    line(span('  and back-end development.')),
    emptyLine(),
    line(span('  I specialize in building modern, responsive')),
    line(span('  web applications using technologies like')),
    line(span('  React', C.blue), span(', '), span('Next.js', C.blue), span(', '), span('Node.js', C.green), span(', and '), span('MongoDB', C.green), span('.')),
    emptyLine(),
    line(span('  I\'m driven by the desire to create digital')),
    line(span('  experiences that are not only functional but')),
    line(span('  also visually stunning and intuitive.')),
    emptyLine(),
    line(span('  📍 Location: ', C.dim), span('India')),
    line(span('  💼 Role: ', C.dim), span('Fullstack Developer', C.peach)),
    line(span('  🎓 Status: ', C.dim), span('Open to opportunities', C.green)),
    emptyLine(),
  ];
}

function getSkills() {
  const skills = [
    { name: 'HTML', level: 90, color: C.peach },
    { name: 'CSS', level: 85, color: C.blue },
    { name: 'JavaScript', level: 85, color: C.yellow },
    { name: 'React', level: 80, color: C.cyan },
    { name: 'Tailwind', level: 80, color: C.cyan },
    { name: 'Node.js', level: 75, color: C.green },
    { name: 'Python', level: 70, color: C.blue },
    { name: 'PHP', level: 65, color: C.purple },
    { name: 'MongoDB', level: 70, color: C.green },
    { name: 'MySQL', level: 70, color: C.cyan },
  ];

  const lines = [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('Technical Skills', C.purple, C.bold), span('                             │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
    line(span('  Frontend', C.green, C.bold)),
    line(span('  ────────', C.dim)),
  ];

  skills.slice(0, 5).forEach(s => {
    const filled = Math.round(s.level / 10);
    const empty = 10 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const name = s.name.padEnd(12);
    lines.push(line(
      span(`  ${name}`, s.color),
      span(bar, s.color),
      span(` ${s.level}%`, C.dim)
    ));
  });

  lines.push(emptyLine());
  lines.push(line(span('  Backend', C.peach, C.bold)));
  lines.push(line(span('  ───────', C.dim)));

  skills.slice(5).forEach(s => {
    const filled = Math.round(s.level / 10);
    const empty = 10 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const name = s.name.padEnd(12);
    lines.push(line(
      span(`  ${name}`, s.color),
      span(bar, s.color),
      span(` ${s.level}%`, C.dim)
    ));
  });

  lines.push(emptyLine());
  return lines;
}

function getProjects() {
  const projects = [
    {
      name: 'College Website',
      tech: 'HTML, CSS, JavaScript',
      desc: 'Comprehensive college website with modern UI',
      github: 'https://github.com/BabuAravindh',
      live: 'https://github.com/BabuAravindh',
    },
    {
      name: 'Chat Application',
      tech: 'React, Node.js, Socket.io',
      desc: 'Real-time chat with instant messaging',
      github: 'https://github.com/BabuAravindh',
      live: 'https://github.com/BabuAravindh',
    },
    {
      name: 'Gym React Website',
      tech: 'React, CSS, JavaScript',
      desc: 'Dynamic fitness website with animations',
      github: 'https://github.com/BabuAravindh',
      live: 'https://babuaravindh.github.io/react-gym-website/',
    },
    {
      name: 'Travelix Website',
      tech: 'HTML, CSS, JavaScript, PHP',
      desc: 'Travel booking platform with gallery',
      github: 'https://github.com/BabuAravindh',
      live: '#',
    },
  ];

  const lines = [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('My Projects', C.purple, C.bold), span('                                 │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
  ];

  projects.forEach((p, i) => {
    lines.push(line(span(`  ${i + 1}. `, C.dim), span(p.name, C.green, C.bold)));
    lines.push(line(span('     ', C.dim), span(p.desc)));
    lines.push(line(span('     Tech: ', C.dim), span(p.tech, C.cyan)));
    lines.push(linkLine(`     🔗 GitHub`, p.github, 'GitHub'));
    if (p.live !== '#') {
      lines.push(linkLine(`     🌐 Live Demo`, p.live, 'Live Demo'));
    }
    lines.push(emptyLine());
  });

  return lines;
}

function getContact() {
  return [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('Contact Me', C.purple, C.bold), span('                                  │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
    line(span('  📧 Email: ', C.dim), span('BabuAravindh637@gmail.com', C.green)),
    linkLine('     → Send an email', 'mailto:BabuAravindh637@gmail.com', 'Email'),
    emptyLine(),
    line(span('  💼 LinkedIn: ', C.dim), span('Babu Aravindh', C.cyan)),
    linkLine('     → Connect on LinkedIn', 'https://www.linkedin.com/in/babu-aravindh-88a97421a/', 'LinkedIn'),
    emptyLine(),
    line(span('  📸 Instagram: ', C.dim), span('@_babuaravindh_', C.purple)),
    linkLine('     → Follow on Instagram', 'https://instagram.com/_babuaravindh_', 'Instagram'),
    emptyLine(),
    line(span('  Feel free to reach out! I\'m always open to', C.dim)),
    line(span('  new opportunities and collaborations.', C.dim)),
    emptyLine(),
  ];
}

function getGithub() {
  return [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('GitHub Profile', C.purple, C.bold), span('                              │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
    line(span('  👤 Username: ', C.dim), span('BabuAravindh', C.green)),
    linkLine('     → View Profile', 'https://github.com/BabuAravindh', 'GitHub Profile'),
    emptyLine(),
    line(span('  📊 Stats:', C.dim)),
    line(span('     Repositories: ', C.dim), span('10+', C.peach)),
    line(span('     Languages:    ', C.dim), span('JavaScript, Python, PHP, HTML, CSS', C.cyan)),
    line(span('     Focus:        ', C.dim), span('Full Stack Web Development', C.green)),
    emptyLine(),
    line(span('  ⭐ Check out my pinned repositories for', C.dim)),
    line(span('     highlighted projects!', C.dim)),
    emptyLine(),
  ];
}

function getResume() {
  return [
    emptyLine(),
    line(span('  📄 Resume / CV', C.purple, C.bold)),
    emptyLine(),
    linkLine('     → Download Resume (PDF)', '/portfolio/v2/images/resume.pdf', 'Download Resume'),
    linkLine('     → Download CV (PDF)', '/portfolio/v2/images/cv.pdf', 'Download CV'),
    emptyLine(),
    line(span('  Tip: ', C.dim), span('Click the links above to download.', C.dim)),
    emptyLine(),
  ];
}

function getSocial() {
  return [
    emptyLine(),
    line(span('  ╭──────────────────────────────────────────────╮', C.dim)),
    line(span('  │  ', C.dim), span('Social Links', C.purple, C.bold), span('                                │', C.dim)),
    line(span('  ╰──────────────────────────────────────────────╯', C.dim)),
    emptyLine(),
    linkLine('  🐙 GitHub        → github.com/BabuAravindh', 'https://github.com/BabuAravindh', 'GitHub'),
    linkLine('  💼 LinkedIn      → linkedin.com/in/babu-aravindh', 'https://www.linkedin.com/in/babu-aravindh-88a97421a/', 'LinkedIn'),
    linkLine('  📸 Instagram     → @_babuaravindh_', 'https://instagram.com/_babuaravindh_', 'Instagram'),
    linkLine('  📧 Email         → BabuAravindh637@gmail.com', 'mailto:BabuAravindh637@gmail.com', 'Email'),
    emptyLine(),
  ];
}

function getWhoami() {
  return [
    emptyLine(),
    line(
      span('  Babu Aravindh', C.green, C.bold),
      span(' — '),
      span('Fullstack Developer', C.cyan),
      span(' from '),
      span('India', C.peach)
    ),
    line(span('  Building modern web experiences with clean code.', C.dim)),
    emptyLine(),
  ];
}

function getNeofetch() {
  const art = `
        .--.         
       |o_o |        
       |:_/ |        
      //   \\ \\      
     (|     | )      
    /'\\_   _/\`\\    
    \\___)=(___/     
  `;
  
  return [
    emptyLine(),
    { type: 'neofetch', art, info: [
      { label: 'Name', value: 'Babu Aravindh', color: C.green },
      { label: 'Role', value: 'Fullstack Developer', color: C.cyan },
      { label: 'Location', value: 'India', color: C.peach },
      { label: 'Languages', value: 'JS, Python, PHP', color: C.blue },
      { label: 'Frontend', value: 'React, Next.js, Tailwind', color: C.cyan },
      { label: 'Backend', value: 'Node.js, MongoDB, MySQL', color: C.green },
      { label: 'Tools', value: 'Git, VS Code, Figma', color: C.purple },
      { label: 'Status', value: 'Open to work ✨', color: C.green },
    ]},
    emptyLine(),
  ];
}

function getDate() {
  const now = new Date();
  return [
    emptyLine(),
    line(span('  📅 ', C.dim), span(now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }), C.green)),
    emptyLine(),
  ];
}

function getEcho(args) {
  if (!args.trim()) {
    return [line(span('  Usage: echo <text>', C.dim))];
  }
  return [line(span(`  ${args}`, C.green))];
}

function getThemeHelp() {
  return [
    emptyLine(),
    line(span('  Available themes:', C.purple, C.bold)),
    line(span('    vscode', C.blue), span('   — Modern dark (default)', C.dim)),
    line(span('    matrix', C.green), span('   — Green on black', C.dim)),
    line(span('    dracula', C.purple), span('  — Purple/pink aesthetic', C.dim)),
    emptyLine(),
    line(span('  Usage: ', C.dim), span('theme <name>', C.yellow)),
    emptyLine(),
  ];
}

function getError(cmd) {
  return [
    line(
      span(`  Command not found: `, C.red),
      span(cmd, C.red, C.bold),
    ),
    line(span('  Type ', C.dim), span('help', C.yellow), span(' for available commands.', C.dim)),
  ];
}

export {
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
};
