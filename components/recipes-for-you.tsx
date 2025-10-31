"use client"

import Link from "next/link"
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
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 헤더 */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-wider text-foreground mb-4 uppercase">
                RECIPES FOR YOU
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl">
                맞춤추천 레시피를 둘러보세요.
              </p>
            </div>
            <Link
              href="/recipes"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-sans text-sm md:text-base whitespace-nowrap self-center sm:self-start"
            >
              <span>더 많은 레시피 보러가기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
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
