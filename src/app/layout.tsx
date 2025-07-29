import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Connvo - AI-Powered Phone Training Platform',
  description: 'Improve cold calling, interviews, and small talk with real-time AI phone practice. No login required.',
  keywords: 'AI phone practice, cold calling, interview prep, small talk, communication training',
  authors: [{ name: 'Connvo Team' }],
  openGraph: {
    type: 'website',
    url: 'https://connvo.app',
    title: 'Connvo - AI Phone Training',
    description: 'Practice phone conversations with AI',
    images: [{ url: '/assets/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connvo - AI Phone Training',
    description: 'Practice phone conversations with AI',
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
