import './globals.css';

export const metadata = {
  title: 'Babu Aravindh | Fullstack Developer',
  description: 'Portfolio of Babu Aravindh — a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and get in touch.',
  keywords: ['Babu Aravindh', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Babu Aravindh' }],
  openGraph: {
    title: 'Babu Aravindh | Fullstack Developer',
    description: 'Passionate Full Stack Developer building modern web experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Babu Aravindh | Fullstack Developer',
    description: 'Passionate Full Stack Developer building modern web experiences.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio/icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
