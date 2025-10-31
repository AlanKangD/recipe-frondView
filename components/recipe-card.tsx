"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Recipe {
  id: number
  title: string
  image: string
  cookTime: string
  difficulty: string
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group block transition-transform duration-200 ease-in-out hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-200">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
          }`}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{recipe.cookTime}</span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  )
}
