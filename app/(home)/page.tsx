import Landing from "@/app/(home)/components/Landing";
import Memories from "@/app/(home)/components/Memories";
import Counter from "@/app/(home)/components/Counter";
import Header from "@/components/Header"

export const revalidate = 60

export default function Home() {
    return (
        <>
            <Header />
            <Landing />
            <Memories />
        </>
    )
}