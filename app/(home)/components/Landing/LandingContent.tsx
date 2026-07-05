import Link from "next/link";
import AnimationContainer from "@/components/AnimatonContainer";

const LandingContent = () => {
    return (
        <div className="absolute inset-0 max-w-screen-2xl h-full mx-auto px-3 mt-5 xsm:px-10 xsm:mt-0 flex flex-col justify-center items-start">
            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2}}
            >
                <h1 style={{fontSize: "clamp(24px, 3.5dvw, 42px)"}} className="font-bold tracking-[0.02em] text-white">
                    Kars Gençlik Çalıştayı
                </h1>
            </AnimationContainer>

            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.2}}
            >
                <p style={{fontSize: "clamp(12px, 2dvw, 20px)", textWrap: "balance"} as object} className="my-7 font-medium max-w-2xl text-gray-200 leading-7">
                    Karsın gençlik çalıştayı yeniden sizlerle!
                </p>
            </AnimationContainer>

            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.4}}
            >
                <Link href={'/apply'} className="flex justify-between items-center relative bg-[#120606] rounded-[999px] border border-[#7A1A1A] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <span style={{fontSize: "clamp(12px, 2dvw, 18px)"}} className="inline-block p-2 pl-5 pr-3 text-white font-semibold tracking-[0.02em]">Başvuru Yap</span>
                    <span className="flex justify-center items-center aspect-square w-10 md:w-12 rounded-[999px] bg-[#6B0000] text-xl font-bold text-white">›</span>
                </Link>
            </AnimationContainer>

            <Link
                href="https://www.instagram.com/karsgenclikcalistayi/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-full border border-[#ff5f7e]/40 bg-gradient-to-r from-[#ff5f7e] via-[#ff3d6a] to-[#d4003a] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(212,0,58,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_30px_rgba(212,0,58,0.45)]"
            >
                Instagram Hesabımız
            </Link>
        </div>
    )
}

export default LandingContent;