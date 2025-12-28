"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [previewTheme, setPreviewTheme] = useState<string | null>(null)
  const [originalTheme, setOriginalTheme] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePreview = (newTheme: string) => {
    if (!previewTheme) {
      setOriginalTheme(theme || "system")
    }
    setPreviewTheme(newTheme)
    setTheme(newTheme)
  }

  const handleApplyTheme = () => {
    setPreviewTheme(null)
    setOriginalTheme(null)
  }

  const handleCancelPreview = () => {
    if (originalTheme) {
      setTheme(originalTheme)
    }
    setPreviewTheme(null)
    setOriginalTheme(null)
  }

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="rounded-full w-12 h-12 bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
    )
  }

  const currentIcon = resolvedTheme === "dark" ? Moon : Sun

  return (
    <div className="fixed top-6 right-6 z-50">
      {previewTheme && (
        <div className="mb-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            プレビュー中: {previewTheme === "light" ? "ライト" : previewTheme === "dark" ? "ダーク" : "システム"}テーマ
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleApplyTheme}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white"
            >
              適用
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancelPreview}
              className="border-slate-300 dark:border-slate-600 bg-transparent"
            >
              キャンセル
            </Button>
          </div>
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {currentIcon === Sun && <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
            {currentIcon === Moon && <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />}
            <span className="sr-only">テーマを切り替え</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-52 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl"
        >
          <div className="p-2">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-1 mb-1">テーマを選択</div>

            <DropdownMenuItem
              onClick={() => handlePreview("light")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Sun className="h-4 w-4 text-amber-500" />
              <span className="text-slate-700 dark:text-slate-300">ライト</span>
              {theme === "light" && !previewTheme && (
                <div className="ml-auto w-2 h-2 bg-slate-900 dark:bg-white rounded-full" />
              )}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handlePreview("dark")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Moon className="h-4 w-4 text-blue-500" />
              <span className="text-slate-700 dark:text-slate-300">ダーク</span>
              {theme === "dark" && !previewTheme && (
                <div className="ml-auto w-2 h-2 bg-slate-900 dark:bg-white rounded-full" />
              )}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handlePreview("system")}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Monitor className="h-4 w-4 text-green-500" />
              <span className="text-slate-700 dark:text-slate-300">システム</span>
              {theme === "system" && !previewTheme && (
                <div className="ml-auto w-2 h-2 bg-slate-900 dark:bg-white rounded-full" />
              )}
            </DropdownMenuItem>

            <DropdownMenuSeparator className="my-2 bg-slate-200 dark:bg-slate-700" />

            <div className="text-xs text-slate-400 dark:text-slate-500 px-2 py-1">選択するとプレビューされます</div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
