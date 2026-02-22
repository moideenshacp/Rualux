import React from "react"
import type { Metadata, Viewport } from 'next'
import { Urbanist, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LoadingScreen } from "@/components/layout/loading-screen"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { StickyCTA } from "@/components/ui/sticky-cta"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: 'Rualux - Rualux Design and Build',
  description: 'Transform your space into art with our award-winning interior design solutions. Residential and commercial design services that bring your vision to life.',
  keywords: ['interior design', 'home decor', 'residential design', 'commercial design', 'luxury interiors'],
  icons: {
    icon: '/Rua-favicon.jpg',
    apple: '/Rua-favicon.jpg',
  },
  openGraph: {
    title: 'Rualux - Rualux Design and Build',
    description: 'Transform your space into art with our award-winning interior design solutions. Residential and commercial design services that bring your vision to life.',
    url: 'https://rualux.vercel.app',
    siteName: 'Rualux',
    images: [
      {
        url: '/Rualux-logo.png', // Ideally this should be a large preview image (1200x630)
        width: 1200,
        height: 630,
        alt: 'Rualux Design and Build',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rualux - Rualux Design and Build',
    description: 'Transform your space into art with our award-winning interior design solutions.',
    images: ['/Rualux-logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-auto">
      <body className={`${urbanist.variable} ${cormorant.variable} font-sans antialiased`}>
        <LoadingScreen />
        {children}
        <WhatsAppButton />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  )
}
