import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Style Chat',
  description: 'A Discord-style chat app built with Next.js, Socket.IO, and MongoDB.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-discord-900 text-white min-h-screen">{children}</body>
    </html>
  );
}
