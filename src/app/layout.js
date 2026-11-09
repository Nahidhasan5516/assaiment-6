import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navber from '@/component/Navber';
import Footer from '@/component/Homepage/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'FitLog',
  description: 'Workout Library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0b0d12]">
        <Navber />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
