import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground">
          우리의식탁
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/recipes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            레시피
          </Link>
          <Link href="/curations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            큐레이션
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  )
}
