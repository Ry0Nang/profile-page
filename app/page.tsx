import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, GraduationCap, Briefcase, Coffee, Car, Activity, Instagram } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <ThemeToggle />

      {/* Hero Section - より洗練されたデザインに */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-36 h-36 md:w-44 md:h-44 bg-slate-800 dark:bg-slate-200 rounded-full flex-shrink-0 shadow-2xl flex items-center justify-center ring-4 ring-slate-200 dark:ring-slate-700">
                <span className="text-4xl md:text-5xl font-semibold text-white dark:text-slate-800">RN</span>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  長山凌汰
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-4 font-medium tracking-wide">
                  Ryota Nagayama
                </h2>

                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <GraduationCap className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-lg text-slate-600 dark:text-slate-400">
                    UC Berkeley | Environmental Economics & Policy
                  </span>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
                  環境経済学を専攻し、持続可能な未来の創造に貢献したいと考えています。
                </p>

                <div className="flex gap-4 justify-center md:justify-start flex-col sm:flex-row">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 max-w-4xl mx-auto" />
      </div>

      {/* About Section - よりクリーンなレイアウト */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">About</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                茨城県出身の長山凌汰です。現在はUC Berkeleyで環境経済学と政策を専攻しており、
                環境問題と経済の関係について深く学んでいます。
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                持続可能な社会の実現に向けて、経済学の視点から環境問題にアプローチし、
                将来的には政策立案や研究分野で貢献したいと考えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 max-w-4xl mx-auto" />
      </div>

      {/* Education Section - タイムラインスタイル */}
      <section id="education" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Education</h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-slate-900 dark:bg-white rounded-full" />
                <div className="mb-1">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-500">2025年8月 - 現在</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  University of California, Berkeley
                </h3>
                <Badge
                  variant="secondary"
                  className="mb-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Environmental Economics & Policy
                </Badge>
                <p className="text-slate-600 dark:text-slate-400">
                  環境経済学と政策を専攻し、持続可能な発展について学んでいます。
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-slate-400 dark:bg-slate-600 rounded-full" />
                <div className="mb-1">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-500">2023年8月 - 2025年8月</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Diablo Valley College</h3>
                <Badge
                  variant="secondary"
                  className="mb-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Economics Major
                </Badge>
                <p className="text-slate-600 dark:text-slate-400">
                  経済学を専攻し、UC Berkeleyへの編入を目指して学習しました。
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-transparent">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full" />
                <div className="mb-1">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-500">2002年4月</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">茨城県で生まれる</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 max-w-4xl mx-auto" />
      </div>

      {/* Hobbies Section - シンプルなグリッド */}
      <section id="hobbies" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Activity className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Interests</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">バドミントン</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    学生時代から続けているスポーツ。戦略性と瞬発力が求められるところが魅力です。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">ドライブ</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    新しい場所を探索したり、カリフォルニアの美しい景色を楽しんでいます。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <Coffee className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">カフェ巡り</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    新しいカフェを訪れて、勉強や読書の場所としても活用しています。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - アイコンのみのシンプルなソーシャルリンク */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-slate-900 dark:bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
            <p className="text-lg mb-8 text-slate-400">お気軽にご連絡ください</p>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/Ry0Nang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-slate-950 dark:bg-black border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-sm text-slate-500">© 2025 Ryota Nagayama</p>
        </div>
      </footer>
    </div>
  )
}
