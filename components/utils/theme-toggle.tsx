"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100 dark:rotate-90 dark:opacity-0 dark:scale-100 text-primary" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100 dark:opacity-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
