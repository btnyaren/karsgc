import Image from "next/image";
import Banner from "@/public/bahcesehir-koleji-kars.jpg"
import Committee from "@/app/committees/components/Committee";
import CommitteeGuide from "@/app/committees/components/CommitteeGuide";
import {Metadata} from "next"
import Header from "@/components/Header"

const committees: {name: string, guide: string, description: string}[] = [
    {name: "Spor", guide: "", description: ""},
    {name: "Çevre", guide: "", description: ""},
    {name: "Sağlık", guide: "", description: ""},
    {name: "Aile ve Sosyal Güvenlik", guide: "", description: ""},
    {name: "Eğitim", guide: "", description: ""},
    {name: "Kriz: Kıbrıs Savaşı", guide: "", description: ""},
]


export const metadata: Metadata = {
    title: "Komitelerimiz | Kars Gençlik Çalıştayı",
    description: "Güncel ve yaratıcı konuları ele alan komitelerimize bir göz atın."
}

export default function CommitteesPage() {
    return (
        <>
            <Header/>
            <section className="min-h-[max(100dvh,860px)] w-full">
                <div className="fixed min-h-screen w-full">
                    <Image fill src={Banner} alt="banner" className="object-cover z-20"/>
                    <div className="absolute min-h-[max(100dvh,860px)] w-full bg-[rgba(8,8,8,0.55)] z-30"></div>
                </div>
                <div
                    className="relative flex flex-col justify-center z-40 max-w-screen-2xl min-h-[max(100dvh,860px)] mx-auto pt-32 pb-32 px-3 sm:pt-0 sm:pb-2 xsm:px-10">
                    <h2 className="text-[#500000] font-bold text-[clamp(28px,3dvw,40px)] mb-10">Komitelerimiz</h2>
                    <div className="grid grid-cols-2 gap-7 sm:gap-10 [&>div]:col-span-2 sm:[&>div]:col-span-1">
                        {committees.map(committee => (
                            committee.guide ? <CommitteeGuide key={committee.name} name={committee.name}
                                                              description={committee.description}
                                                              guide={committee.guide}/> :
                                <Committee key={committee.name} name={committee.name}
                                           description={committee.description}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}