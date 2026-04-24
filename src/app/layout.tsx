// app/layout.tsx
import { Host_Grotesk } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'UDICTI',
  description: 'Building real world Systems',
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
