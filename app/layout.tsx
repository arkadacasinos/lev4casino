import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Lev Casino — официальный сайт, зеркало и бонус",
  description: "Lev Casino: официальный сайт, рабочее зеркало, регистрация, бонус новым игрокам и онлайн-игры.",
  keywords: ["lev casino", "лев казино", "lev casino зеркало", "лев казино официальный сайт"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <title>Lev Casino — официальный сайт, зеркало и бонус</title>
        <meta
          name="description"
          content="Lev Casino: официальный сайт, рабочее зеркало, регистрация, бонус новым игрокам и онлайн-игры."
        />
        <meta name="keywords" content="lev casino, лев казино, lev casino зеркало, лев казино официальный сайт" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Lev Casino — официальный сайт, зеркало и бонус" />
        <meta
          property="og:description"
          content="Официальный сайт Lev Casino: рабочее зеркало, регистрация и бонус новым игрокам."
        />
        <meta property="og:image" content="/lev-casino-hero.png" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  )
}
