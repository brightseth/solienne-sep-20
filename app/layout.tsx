import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOLIENNE',
  description: 'Contemporary artist exploring identity, perception, and consciousness through portraiture.',
  keywords: ['SOLIENNE', 'contemporary art', 'portraiture', 'consciousness', 'identity'],
  authors: [{ name: 'SOLIENNE' }],
  creator: 'SOLIENNE',
  openGraph: {
    title: 'SOLIENNE',
    description: 'Contemporary artist exploring identity, perception, and consciousness through portraiture.',
    url: 'https://solienne.ai',
    siteName: 'SOLIENNE',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLIENNE',
    description: 'Contemporary artist exploring identity, perception, and consciousness through portraiture.',
    creator: '@solienne_ai'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-helvetica antialiased">
        {children}
      </body>
    </html>
  )
}