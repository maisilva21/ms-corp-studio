import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MS Corp Studio',
  description: 'A graphic design studio for identity, packaging, and digital design work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
