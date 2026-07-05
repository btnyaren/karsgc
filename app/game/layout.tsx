import {ReactNode} from "react"
import {Metadata} from "next"
import {notFound} from "next/navigation"

type GameLayoutProps = {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Kars Gençlik Çalıştayı",
    description: "Konferansımızın resmi oyununu deneyin!",
}

export default function GameLayout({ children } : GameLayoutProps) {

    return notFound()

    //return children
}