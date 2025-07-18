import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Venture Tech Group',
  description: '',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  console.log('testing');
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
