import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, GraduationCap, Briefcase, Award, Languages, Download, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6">
              <FileText className="h-8 w-8 text-slate-700 dark:text-slate-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Resume
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              学歴、スキル、経験についての詳細情報です。
            </p>
            <Button
              variant="outline"
              className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent"
              disabled
            >
              <Download className="h-4 w-4 mr-2" />
              PDF版をダウンロード（準備中）
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Summary */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-slate-800 dark:bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-white dark:text-slate-800">RN</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">長山凌汰</h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">Ryota Nagayama</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      UC Berkeleyで環境経済学と政策を専攻する学生です。持続可能な社会の実現に向けて、
                      経済学の視点から環境問題にアプローチしています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-500">2025 - 現在</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        University of California, Berkeley
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">Environmental Economics & Policy</p>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        在学中
                      </Badge>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-slate-800" />

                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-32 flex-shrink-0">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-500">2023 - 2025</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Diablo Valley College</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">Economics Major</p>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        修了
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Skills</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-500 mb-3">専門分野</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-slate-900 dark:bg-white text-white dark:text-slate-900">環境経済学</Badge>
                      <Badge className="bg-slate-900 dark:bg-white text-white dark:text-slate-900">政策分析</Badge>
                      <Badge className="bg-slate-900 dark:bg-white text-white dark:text-slate-900">データ分析</Badge>
                      <Badge className="bg-slate-900 dark:bg-white text-white dark:text-slate-900">
                        経済モデリング
                      </Badge>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-slate-800" />

                  <div>
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-500 mb-3">ツール・技術</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      >
                        Excel
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      >
                        統計分析
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      >
                        リサーチ
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <Languages className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Languages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <span className="font-medium text-slate-900 dark:text-white">日本語</span>
                    <Badge
                      variant="secondary"
                      className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      ネイティブ
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <span className="font-medium text-slate-900 dark:text-white">英語</span>
                    <Badge
                      variant="secondary"
                      className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      ビジネスレベル
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience - Coming Soon */}
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Experience</h2>
                </div>

                <div className="text-center py-8">
                  <Construction className="h-10 w-10 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-500">職歴・インターン経験は準備中です</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
