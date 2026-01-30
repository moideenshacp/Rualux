import React from "react"
import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LoadingScreen } from "@/components/layout/loading-screen"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: 'Rualux - Rualux Design and Build',
  description: 'Transform your space into art with our award-winning interior design solutions. Residential and commercial design services that bring your vision to life.',
  keywords: ['interior design', 'home decor', 'residential design', 'commercial design', 'luxury interiors'],
  generator: 'v0.app'
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
    <html lang="en" className="scroll-smooth">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        <LoadingScreen />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
