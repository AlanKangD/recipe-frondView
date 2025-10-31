import RecipesForYou from "@/components/recipes-for-you"
import CurationList from "@/components/curation-list"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <RecipesForYou />
      <CurationList />
    </main>
  )
}
