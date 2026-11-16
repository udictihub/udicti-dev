// app/layout.tsx
import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://udicti.dev'),
  title: 'UDICTI | Community, Technology & Real-World Systems',
  description:
    'Meet UDICTI, a community of students, builders, and founders at the University of Dar es Salaam. Explore sessions on technology, business, and social impact.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/udicti_logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hostGrotesk.className}>{children}</body>
    </html>
  );
}
