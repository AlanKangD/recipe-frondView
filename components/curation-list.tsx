import CurationCard from "./curation-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// 샘플 데이터 - 실제로는 API에서 가져옵니다
const curations = [
  {
    id: 1,
    title: "주말 브런치 특집",
    description: "여유로운 주말 아침을 위한 브런치 레시피",
    image: "/weekend-brunch-spread.jpg",
    recipeCount: 12,
  },
  {
    id: 2,
    title: "한 그릇 요리",
    description: "간편하게 한 그릇으로 완성하는 요리",
    image: "/one-bowl-meal-korean.jpg",
    recipeCount: 18,
  },
  {
    id: 3,
    title: "건강한 샐러드",
    description: "신선하고 영양 가득한 샐러드 모음",
    image: "/healthy-fresh-salad.jpg",
    recipeCount: 15,
  },
  {
    id: 4,
    title: "집들이 요리",
    description: "손님 초대에 완벽한 요리 레시피",
    image: "/party-food-spread.jpg",
    recipeCount: 20,
  },
]

export default function CurationList() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider text-foreground mb-4">
            CURATION LIST
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            우리의식탁만의 큐레이션으로 고민 없이 맛있는 식탁을 차려보세요.
          </p>

          <Link
            href="/curations"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group"
          >
            더 많은 큐레이션 보러가기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {curations.map((curation) => (
            <CurationCard key={curation.id} curation={curation} />
          ))}
        </div>
      </div>
    </section>
  )
}
