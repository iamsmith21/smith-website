import type { Metadata } from 'next'
import './globals.css'
import SmoothCursorWrapper from '@/components/SmoothCursorWrapper'

export const metadata: Metadata = {
  title: 'Smith Portfolio',
  description: 'Personal portfolio website showcasing skills and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <SmoothCursorWrapper />
        {children}
      </body>
    </html>
  )
}

