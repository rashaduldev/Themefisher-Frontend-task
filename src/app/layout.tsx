// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'
import { DM_Sans } from 'next/font/google'

// Load the font
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Md Rashadul Islam – Portfolio",
  description: "Frontend Developer Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}