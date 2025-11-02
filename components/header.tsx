import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-t border-b border-[#8B4513] bg-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="앨런's 레시피 로고" 
            width={56} 
            height={56} 
            className="object-contain"
          />
          <span className="text-2xl font-serif font-bold text-[#8B4513]">
            앨런's 레시피
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/recipes" className="text-sm text-[#8B4513] hover:text-[#A0522D] transition-colors">
            레시피
          </Link>
          <Link href="/signatures" className="text-sm text-[#8B4513] hover:text-[#A0522D] transition-colors">
            시그니쳐
          </Link>
          <Link href="/about" className="text-sm text-[#8B4513] hover:text-[#A0522D] transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  )
}
