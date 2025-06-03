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
  const { theme, setTheme } = useTheme()
  const [previewTheme, setPreviewTheme] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePreview = (newTheme: string) => {
    setPreviewTheme(newTheme)
    document.documentElement.setAttribute("data-theme-preview", newTheme)
  }

  const handleApplyTheme = (newTheme: string) => {
    setTheme(newTheme)
    setPreviewTheme(null)
    document.documentElement.removeAttribute("data-theme-preview")
  }

  const handleCancelPreview = () => {
    setPreviewTheme(null)
    document.documentElement.removeAttribute("data-theme-preview")
  }

  if (!mounted) {
    return null
  }

  const currentIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor

  return (
    <div className="fixed top-6 right-6 z-50">
      {previewTheme && (
        <div className="mb-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-200 dark:border-purple-700">
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            プレビュー中: {previewTheme === "light" ? "ライト" : previewTheme === "dark" ? "ダーク" : "システム"}テーマ
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => handleApplyTheme(previewTheme)}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              適用
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancelPreview}
              className="border-purple-200 dark:border-purple-700"
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
            className="rounded-full w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {currentIcon === Sun && <Sun className="h-6 w-6 text-purple-600" />}
            {currentIcon === Moon && <Moon className="h-6 w-6 text-purple-400" />}
            {currentIcon === Monitor && <Monitor className="h-6 w-6 text-purple-500" />}
            <span className="sr-only">テーマを切り替え</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-purple-200 dark:border-purple-700 rounded-2xl shadow-xl"
        >
          <div className="p-2">
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300 px-2 py-1 mb-2">
              テーマプレビュー
            </div>

            <DropdownMenuItem
              onClick={() => handlePreview("light")}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer"
            >
              <Sun className="h-4 w-4 text-amber-500" />
              <span>ライトテーマ</span>
              {theme === "light" && <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handlePreview("dark")}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer"
            >
              <Moon className="h-4 w-4 text-blue-500" />
              <span>ダークテーマ</span>
              {theme === "dark" && <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handlePreview("system")}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer"
            >
              <Monitor className="h-4 w-4 text-green-500" />
              <span>システム設定</span>
              {theme === "system" && <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />}
            </DropdownMenuItem>

            <DropdownMenuSeparator className="my-2 bg-purple-200 dark:bg-purple-700" />

            <div className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
              テーマを選択してプレビューできます
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
