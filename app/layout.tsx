import { Inter, Playfair_Display } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "앨런's 레시피",
  description: "맞춤 추천 레시피와 큐레이션으로 맛있는 식탁을 차려보세요",
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "앨런's 레시피",
    description: "맞춤 추천 레시피와 큐레이션으로 맛있는 식탁을 차려보세요",
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
