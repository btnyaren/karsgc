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
                    Kars'ın ilk ve tek gençlik çalıştayı olan Kars Gençlik Çalıştayı, yeniden sizlerle!
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
        </div>
    )
}

export default LandingContent;