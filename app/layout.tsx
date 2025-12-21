import type { Metadata } from 'next'
import './globals.css'
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
        {children}
      </body>
    </html>
  )
}

