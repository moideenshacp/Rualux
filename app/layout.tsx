import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Luxe Interiors | Award-Winning Interior Design',
  description: 'Transform your space into art with our award-winning interior design solutions. Residential and commercial design services that bring your vision to life.',
  keywords: ['interior design', 'home decor', 'residential design', 'commercial design', 'luxury interiors'],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#2C3E50',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
