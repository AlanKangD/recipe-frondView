"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Curation {
  id: number
  title: string
  description: string
  image: string
  recipeCount: number
}

export default function CurationCard({ curation }: { curation: Curation }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/curation/${curation.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-card">
        <Image
          src={curation.image || "/placeholder.svg"}
          alt={curation.title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-105 brightness-90" : "scale-100 brightness-100"
          }`}
          loading="lazy"
        />

        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* 텍스트 콘텐츠 */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 text-balance">{curation.title}</h3>
          <p className="text-white/90 text-sm md:text-base mb-3 leading-relaxed text-pretty">{curation.description}</p>
          <p className="text-white/70 text-sm">{curation.recipeCount}개의 레시피</p>
        </div>

        {/* 호버 효과 */}
        <div
          className={`absolute inset-0 border-2 border-white/30 rounded-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Link>
  )
}
