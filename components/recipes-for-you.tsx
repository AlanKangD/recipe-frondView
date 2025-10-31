import RecipeCard from "./recipe-card"

// 샘플 데이터 - 실제로는 API에서 가져옵니다
const recipes = [
  {
    id: 1,
    title: "크리미 토마토 파스타",
    image: "/creamy-tomato-pasta-dish.jpg",
    cookTime: "30분",
    difficulty: "쉬움",
  },
  {
    id: 2,
    title: "한식 비빔밥",
    image: "/korean-bibimbap-bowl.jpg",
    cookTime: "25분",
    difficulty: "보통",
  },
  {
    id: 3,
    title: "치킨 샐러드",
    image: "/fresh-chicken-salad.jpg",
    cookTime: "15분",
    difficulty: "쉬움",
  },
]

export default function RecipesForYou() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wider text-foreground mb-4">
            RECIPES FOR YOU
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            맞춤추천 레시피를 둘러보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
