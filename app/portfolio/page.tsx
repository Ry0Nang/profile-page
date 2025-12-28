import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FolderOpen, Construction } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6">
              <FolderOpen className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Portfolio
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              これまでに取り組んだプロジェクトや学習成果をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
                  <Construction className="h-10 w-10 text-slate-500 dark:text-slate-400" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Coming Soon</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                  現在、ポートフォリオを準備中です。プロジェクトが完成次第、こちらに掲載いたします。
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    環境経済学研究
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    データ分析
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    政策提言
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder Projects */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-slate-500 dark:text-slate-500 mb-6 text-center">
                予定しているプロジェクト
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-slate-400 dark:text-slate-500 text-lg font-semibold">01</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-400 dark:text-slate-500 mb-2">
                      環境政策分析プロジェクト
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-600">
                      カリフォルニア州の環境政策に関するデータ分析と評価
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-slate-400 dark:text-slate-500 text-lg font-semibold">02</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-400 dark:text-slate-500 mb-2">
                      経済モデリング研究
                    </h4>
                    <p className="text-sm text-slate-400 dark:text-slate-600">持続可能な発展のための経済モデルの構築</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
