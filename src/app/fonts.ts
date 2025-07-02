import { Poppins } from 'next/font/google';

export const fontSans = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  fallback: ['system-ui', 'sans-serif'],
});

export default fontSans;
