import Link from "next/link"

export default function Header() {
  return (
    <header className="border-t border-b border-[#8B4513] bg-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-black">
          앨런 레시피
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/recipes" className="text-sm text-black hover:text-gray-700 transition-colors">
            레시피
          </Link>
          <Link href="/curations" className="text-sm text-black hover:text-gray-700 transition-colors">
            큐레이션
          </Link>
          <Link href="/about" className="text-sm text-black hover:text-gray-700 transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  )
}
