import type { Metadata } from 'next'
import './globals.css'
import CanvasCursor from '@/components/CanvasCursor'

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
    <html lang="en">
      <body>
        <CanvasCursor />
        {children}
      </body>
    </html>
  )
}

