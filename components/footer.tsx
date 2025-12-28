import { Github, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-slate-900 dark:bg-black border-t border-slate-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-medium text-white mb-1">Ryota Nagayama</p>
              <p className="text-sm text-slate-400">Environmental Economics & Policy @ UC Berkeley</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Ry0Nang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-500">© 2025 Ryota Nagayama. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
