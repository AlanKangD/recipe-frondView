import Header from "@/components/header"
import { ArrowLeft, ChefHat, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// 샘플 데이터
const recipes: Record<string, any> = {
  "1": {
    id: 1,
    title: "크리미 토마토 파스타",
    image: "/creamy-tomato-pasta-dish.jpg",
    cookTime: "30분",
    difficulty: "쉬움",
    servings: "2인분",
    description: "부드럽고 크리미한 토마토 소스가 일품인 파스타입니다.",
    ingredients: [
      "파스타 면 200g",
      "토마토 소스 1컵",
      "생크림 1/2컵",
      "마늘 3쪽",
      "올리브 오일 2큰술",
      "파마산 치즈",
      "바질",
    ],
    steps: [
      "끓는 물에 소금을 넣고 파스타를 삶습니다.",
      "팬에 올리브 오일을 두르고 마늘을 볶습니다.",
      "토마토 소스를 넣고 중불에서 끓입니다.",
      "생크림을 넣고 잘 섞어줍니다.",
      "삶은 파스타를 소스에 넣고 버무립니다.",
      "파마산 치즈와 바질을 올려 완성합니다.",
    ],
  },
  "2": {
    id: 2,
    title: "한식 비빔밥",
    image: "/korean-bibimbap-bowl.jpg",
    cookTime: "25분",
    difficulty: "보통",
    servings: "1인분",
    description: "색깔 고운 나물과 고추장을 함께 버무려 먹는 한국의 대표 요리입니다.",
    ingredients: [
      "밥 1공기",
      "시금치 100g",
      "콩나물 100g",
      "당근 1/4개",
      "고사리 50g",
      "버섯 3개",
      "고추장 2큰술",
      "참기름 1큰술",
      "계란 1개",
      "들기름 1큰술",
    ],
    steps: [
      "시금치는 데친 후 물기를 꽉 짜고 참기름과 소금으로 양념합니다.",
      "콩나물은 끓는 물에 데쳐 물기를 제거하고 소금과 참기름으로 양념합니다.",
      "당근은 채썰어 볶고, 고사리와 버섯도 볶아냅니다.",
      "달군 팬에 기름을 두르고 계란을 프라이합니다.",
      "밥을 그릇에 담고 나물들을 돌려가며 담습니다.",
      "프라이한 계란을 올리고 고추장과 참기름을 넣어 비빕니다.",
    ],
  },
  "3": {
    id: 3,
    title: "치킨 샐러드",
    image: "/fresh-chicken-salad.jpg",
    cookTime: "15분",
    difficulty: "쉬움",
    servings: "2인분",
    description: "신선한 채소와 구운 닭가슴살이 만나 건강하고 든든한 샐러드입니다.",
    ingredients: [
      "닭가슴살 200g",
      "양상추 1/4통",
      "토마토 1개",
      "오이 1/2개",
      "양파 1/4개",
      "올리브 오일 2큰술",
      "레몬즙 1큰술",
      "꿀 1작은술",
      "소금, 후추",
      "파프리카 (선택)",
    ],
    steps: [
      "닭가슴살은 소금과 후추로 간을 하고 팬에 구워냅니다.",
      "양상추는 먹기 좋게 손으로 찢고, 토마토와 오이는 슬라이스합니다.",
      "양파는 얇게 썰어 찬물에 담가 씁쓸함을 제거합니다.",
      "드레싱은 올리브 오일, 레몬즙, 꿀을 섞어 만듭니다.",
      "그릇에 채소들을 담고 구운 닭가슴살을 올립니다.",
      "드레싱을 뿌려 완성합니다.",
    ],
  },
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const recipe = recipes[id]

  if (!recipe) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8B4513]/70 hover:text-[#8B4513] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative aspect-[16/9]">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" priority />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-6">{recipe.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8 text-[#8B4513]/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span>{recipe.difficulty}</span>
              </div>
              <div>
                <span>{recipe.servings}</span>
              </div>
            </div>

            <p className="text-lg text-[#8B4513]/70 mb-12 leading-relaxed">{recipe.description}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif text-[#8B4513] mb-6">재료</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#8B4513] mt-1">•</span>
                      <span className="text-[#8B4513]/80">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-[#8B4513] mb-6">조리 순서</h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B4513] text-white flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-[#8B4513]/80 leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
