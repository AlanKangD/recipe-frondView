import Image from "next/image"
import Link from "next/link"

type Props = {
  id: number
  title: string
  image: string
}

export default function CurationCard({ id, title, image }: Props) {
  return (
    <Link
      href={`/curation/${id}`}
      className="group relative block overflow-hidden rounded-lg aspect-[16/10] min-w-[280px] sm:min-w-0"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* 제목 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-lg md:text-xl font-sans line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  )
}
