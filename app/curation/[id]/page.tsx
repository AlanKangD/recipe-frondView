import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import RecipeCard from "@/components/recipe-card"

// 샘플 데이터
const curations: Record<string, any> = {
  "1": {
    id: 1,
    title: "주말 브런치 특집",
    description:
      "여유로운 주말 아침을 위한 브런치 레시피 모음입니다. 가족과 함께 즐기기 좋은 다양한 메뉴를 준비했습니다.",
    image: "/weekend-brunch-spread.jpg",
    recipes: [
      {
        id: 101,
        title: "프렌치 토스트",
        image: "/french-toast-with-berries.jpg",
        cookTime: "20분",
        difficulty: "쉬움",
      },
      {
        id: 102,
        title: "에그 베네딕트",
        image: "/eggs-benedict.png",
        cookTime: "25분",
        difficulty: "보통",
      },
      {
        id: 103,
        title: "팬케이크",
        image: "/fluffy-pancakes.jpg",
        cookTime: "15분",
        difficulty: "쉬움",
      },
    ],
  },
}

export default function CurationPage({ params }: { params: { id: string } }) {
  const curation = curations[params.id]

  if (!curation) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] md:h-[500px]">
        <Image src={curation.image || "/placeholder.svg"} alt={curation.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              홈으로 돌아가기
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 text-balance">{curation.title}</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed text-pretty">
              {curation.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curation.recipes.map((recipe: any) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  )
}
