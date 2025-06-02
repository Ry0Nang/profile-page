"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-6 z-50 rounded-full w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-purple-600" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
      <span className="sr-only">テーマを切り替え</span>
    </Button>
  )
}
