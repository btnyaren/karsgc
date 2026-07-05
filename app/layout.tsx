import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

type RootLayoutProps = {
  children: ReactNode
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800','900']})

export const metadata: Metadata = {
    title: 'Kars Gençlik Çalıştayı',
    description: 'Kars’a konferans kültürü kazandıran, kalitesinden asla taviz vermeyen, Türkiye’nin en köklü ve iyi konferanslarından biri olan Kars Gençlik Çalıştayı tekrardan sizlerle!',
    keywords: ["karsgc", "kars", "çalıştay", "gençlik çalıştayı", "konferans", "conference"],
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-32x32.png', type: 'image/png' }
        ],
        apple: '/favicon.ico'
    }
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
      <html className={poppins.className} lang='tr'>
        <body className="flex flex-col items-center overflow-x-hidden">
            {children}
        <Navbar />
        </body>
      </html>
  )
}
