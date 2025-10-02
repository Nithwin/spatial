import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import './landing.css';
import './dynamichero.css';
import SmoothScroller from '@/components/Landing/SmoothScroller';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'SF',
  description: 'The app is in development by Nithwin',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SmoothScroller />
        {children}</body>
    </html>
  );
}