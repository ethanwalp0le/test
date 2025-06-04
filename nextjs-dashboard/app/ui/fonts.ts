import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });
export const bolton = localFont({ src: '../../public/fonts/f37bolton-regular-webfont.woff2' })