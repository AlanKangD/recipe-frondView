"use client"

import Link from "next/link"
import CurationCard from "./curation-card"

// 샘플 데이터 - 실제로는 API에서 가져옵니다
const curations = [
  {
    id: 1,
    title: "주말 브런치 특집",
    image: "/weekend-brunch-spread.jpg",
  },
  {
    id: 2,
    title: "한 그릇 요리",
    image: "/one-bowl-meal-korean.jpg",
  },
  {
    id: 3,
    title: "건강한 샐러드",
    image: "/healthy-fresh-salad.jpg",
  },
  {
    id: 4,
    title: "집들이 요리",
    image: "/party-food-spread.jpg",
  },
]

export default function CurationList() {
  const scrollLeft = () => {
    const container = document.getElementById("curation-slider")
    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("curation-slider")
    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 헤더 */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-wider text-[#8B4513] mb-4 uppercase">
                CURATION LIST
              </h2>
              <p className="text-base md:text-lg text-[#8B4513]/80 leading-relaxed font-sans max-w-2xl">
                저희만의 레시피의 큐레이션으로 고민 없이 맛있는 식탁을 차려보세요.
              </p>
            </div>
            <Link
              href="/curations"
              className="flex items-center gap-2 text-[#8B4513] hover:text-[#A0522D] transition-colors font-sans text-sm md:text-base whitespace-nowrap self-center sm:self-start"
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

        {/* 큐레이션 카드 슬라이더 */}
        <div className="relative">
          {/* 데스크톱: 그리드 레이아웃 */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {curations.map((curation) => (
              <CurationCard key={curation.id} id={curation.id} title={curation.title} image={curation.image} />
            ))}
          </div>

          {/* 모바일/태블릿: 슬라이더 */}
          <div className="lg:hidden relative">
            <div
              id="curation-slider"
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            >
              {curations.map((curation) => (
                <div key={curation.id} className="snap-start flex-shrink-0">
                  <CurationCard id={curation.id} title={curation.title} image={curation.image} />
                </div>
              ))}
            </div>

            {/* 네비게이션 버튼 */}
            {curations.length > 2 && (
              <>
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 z-10 hidden sm:block"
                  aria-label="이전 큐레이션 보기"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#8B4513"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg rounded-full p-2 z-10 hidden sm:block"
                  aria-label="다음 큐레이션 보기"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#8B4513"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
