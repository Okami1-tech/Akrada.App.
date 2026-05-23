// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akrada - Campus Navigation & Intelligence',
  description: 'Campus navigation and location intelligence platform for universities. Start with UNIJOS.',
  keywords: ['campus navigation', 'university map', 'location finder', 'UNIJOS', 'Nigeria university'],
  openGraph: {
    title: 'Akrada - Campus Navigation & Intelligence',
    description: 'Campus navigation and location intelligence platform for universities',
    type: 'website',
    locale: 'en_NG',
    url: 'https://akrada.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akrada - Campus Navigation & Intelligence',
    description: 'Campus navigation and location intelligence platform for universities',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}