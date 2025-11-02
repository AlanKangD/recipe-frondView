import Header from "@/components/header"
import RecipesForYou from "@/components/recipes-for-you"
import SignatureList from "@/components/signature-list"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <RecipesForYou />
      <SignatureList />
    </main>
  )
}
