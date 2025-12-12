import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, MapPin, Calendar, Heart, ExternalLink, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Avatar Placeholder */}
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-500 dark:to-blue-600 rounded-full mx-auto mb-8 shadow-lg flex items-center justify-center">
              <span className="text-4xl font-bold text-white">RN</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              長山凌汰
            </h1>
            <h2 className="text-3xl text-slate-700 dark:text-slate-300 mb-8 font-medium">Ryota Nagayama</h2>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 dark:border-slate-700/20 mb-8 inline-block">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-xl text-slate-700 dark:text-slate-300 font-medium">
                  UC Berkeley, Environmental Economics & Policy
                </span>
              </div>
            </div>

            <p className="text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              環境経済学と政策を学ぶ学生として、持続可能な未来の創造に貢献したいと考えています。
            </p>

            <div className="flex gap-6 justify-center flex-col sm:flex-row">
              <Button
                size="lg"
                className="rounded-full px-8 py-4 text-lg font-medium bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Ry0Nang" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 text-lg font-medium border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-3 h-5 w-5" />
                  連絡する
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">自己紹介</h2>
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden">
              <CardContent className="p-6 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                      茨城県出身の長山凌汰です。現在はUC Berkeleyで環境経済学と政策を専攻しており、
                      環境問題と経済の関係について深く学んでいます。
                    </p>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                      持続可能な社会の実現に向けて、経済学の視点から環境問題にアプローチし、
                      将来的には政策立案や研究分野で貢献したいと考えています。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-3xl p-8 text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">持続可能な未来</h3>
                    <p className="text-slate-600 dark:text-slate-400">環境と経済の調和を目指して</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-purple-900/20"
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">経歴</h2>
            <div className="space-y-8">
              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-6 w-6" />
                    <CardTitle className="text-xl md:text-2xl font-bold">2025年8月 - 現在</CardTitle>
                  </div>
                  <CardDescription className="text-purple-100 dark:text-purple-200 text-xl">
                    University of California, Berkeley
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-8">
                  <Badge className="mb-4 px-4 py-2 text-lg bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full">
                    Environmental Economics & Policy
                  </Badge>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    環境経済学と政策を専攻し、持続可能な発展について学んでいます。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-green-500 dark:from-teal-600 dark:to-green-600 text-white p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-6 w-6" />
                    <CardTitle className="text-xl md:text-2xl font-bold">2023年8月 - 2025年8月</CardTitle>
                  </div>
                  <CardDescription className="text-teal-100 dark:text-teal-200 text-xl">
                    Diablo Valley College
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-8">
                  <Badge className="mb-4 px-4 py-2 text-lg bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full">
                    Economics Major
                  </Badge>
                  <p className="text-lg text-slate-700 dark:text-slate-300">
                    経済学を専攻し、UC Berkeleyへの編入を目指して学習しました。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-500 dark:to-pink-500 text-white p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-6 w-6" />
                    <CardTitle className="text-xl md:text-2xl font-bold">2002年4月</CardTitle>
                  </div>
                  <CardDescription className="text-orange-100 dark:text-orange-200 text-xl">
                    茨城県で生まれる
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">趣味</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-500 dark:to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">バドミントン</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                    学生時代から続けているスポーツで、体力維持とストレス発散に役立っています。
                    戦略性と瞬発力が求められるところが魅力です。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">ドライブ</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                    新しい場所を探索したり、自然の中をドライブすることでリフレッシュしています。
                    カリフォルニアの美しい景色を楽しんでいます。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">☕</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200">カフェ巡り</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                    新しいカフェを訪れて、美味しいコーヒーと心地よい空間を楽しんでいます。
                    勉強や読書の場所としても活用しています。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 dark:from-slate-900 dark:via-black dark:to-purple-950"
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">連絡先</h2>
            <p className="text-2xl mb-12 text-slate-300 dark:text-slate-400">お気軽にご連絡ください</p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-medium bg-white dark:bg-slate-200 text-slate-900 dark:text-slate-800 hover:bg-slate-100 dark:hover:bg-slate-300 shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Ry0Nang" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-4 h-6 w-6" />
                  GitHub: Ry0nang
                  <ExternalLink className="ml-4 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-slate-950 dark:bg-black">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 dark:text-slate-500 text-lg">© 2025 Ryota Nagayama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
