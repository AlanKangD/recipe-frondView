import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, ChefHat } from "lucide-react"

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
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes[params.id]

  if (!recipe) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>

        <div className="bg-card rounded-lg overflow-hidden shadow-sm">
          <div className="relative aspect-[16/9]">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" priority />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{recipe.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
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

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{recipe.description}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">재료</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">조리 순서</h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-foreground leading-relaxed pt-0.5">{step}</span>
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
