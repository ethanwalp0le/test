import '@/app/ui/global.css';
import { bolton } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bolton.className} antialiased`}>{children}</body>
    </html>
  );
}
