/*
 * This file is part of docs.plexcord.club.
 * Copyright (c) 2026 Plexcord.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.plexcord.club'),
  title: {
    default: 'Plexcord Documentation',
    template: '%s | Plexcord Docs',
  },
  description: 'Official documentation for Plexcord - an open-source Discord mod by MutanPlex',
  keywords: ['plexcord', 'documentation', 'discord', 'mod', 'api', 'guides'],
  authors: [{ name: 'MutanPlex', url: 'https://github.com/MutanPlex' }],
  creator: 'MutanPlex',
  publisher: 'Plexcord',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Plexcord Documentation',
    title: 'Plexcord Documentation',
    description: 'Official documentation for Plexcord - an open-source Discord mod by MutanPlex',
    url: 'https://docs.plexcord.club',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Plexcord',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Plexcord Documentation',
    description: 'Official documentation for Plexcord - an open-source Discord mod by MutanPlex',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
