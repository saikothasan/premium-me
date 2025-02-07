"use client"

import type React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
  children: React.ReactNode
}

export default function ErrorBoundary({ error, reset, children }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <Button onClick={reset}>Try again</Button>
      </div>
    )
  }

  return <>{children}</>
}

