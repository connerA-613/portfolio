import "./globals.css";
import { Metadata } from 'next';
import QueryProvider from './QueryProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://connerarmour.com'),
  title: 'Conner Armour | Software Engineer',
  description: 'Portfolio of Conner Armour, showcasing modern projects and technical skills.',
  openGraph: {
    title: 'Conner Armour | Software Engineer',
    description: 'Check out my portfolio showcasing React, Node.js, and more.',
    url: 'https://www.connerarmour.com',
    siteName: 'Conner Armour Portfolio',
    images: [
      {
        url: '/social-preview.png', // Place in public/
        width: 1200,
        height: 630,
        alt: 'Conner Armour Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conner Armour | Software Engineer',
    description: 'Explore my full-stack developer portfolio.',
    images: ['/social-preview.png'],
  },
  icons: {
    icon: '/icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
      <body
        className="bg-background-dark text-gray-900"
      >
        {children}
      </body>
      </QueryProvider>
    </html>
  );
}
