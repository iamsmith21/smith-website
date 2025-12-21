'use client'

import { useEffect, useState } from 'react'
import { SmoothCursor } from '@/components/ui/smooth-cursor'

export default function SmoothCursorWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <SmoothCursor />
}
