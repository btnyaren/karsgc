import Image from "next/image";
import Banner from "@/public/bahcesehir-koleji-kars.jpg"
import UserContextProvider from "@/contexts/UserContext";
import AuthWrapper from "@/app/apply/components/Auth/AuthWrapper";
import {PaginationContextProvider} from "@/contexts/PaginationContext";
import AnimatedPagination from "@/components/AnimatedPagination";
import React from "react";
import PositionSelector from "@/app/apply/components/PositionSelector";
import ApplicationForm from "@/app/apply/components/ApplicationForm";
import ApplicationSent from "@/app/apply/components/ApplicationSent";
import {Metadata} from "next"
import Header from "@/components/Header"

type AnimationKeyframes = {
    from: Keyframe,
    to: Keyframe
}

type Animation = {keyframe: AnimationKeyframes, options: KeyframeAnimationOptions}

const animationOptions: KeyframeAnimationOptions = {duration: 300, easing: "ease", fill: "forwards"}

const animation: {
    enter: Animation,
    exit: Animation
} = {
    enter: {
        keyframe: {
            from: {opacity: 0},
            to: {opacity: 1}
        },
        options: {...animationOptions, delay: 300}
    },
    exit: {
        keyframe: {
            from: {opacity: 1},
            to: {opacity: 0}
        },
        options: animationOptions
    }
}

export const dynamic = "force-dynamic"

const x = "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.623305)_20%,rgba(0,0,0,1)_100%)] "

export const metadata: Metadata = {
    title: "Başvuru Yap | Kars Gençlik Çalıştayı",
    description: "Alımları açık 4 pozisyondan birine başvuru yaparak KARSGÇ'ye katılabilirsiniz.",
}

export default function ApplicationPage() {
    return (
        <>
            <Header align="center"/>
            <section className="relative text-white flex flex-col min-h-[100dvh] w-full pb-36">
                <div
                    className="z-40 w-full h-[100lvh] inset-0 fixed [mask-type:alpha] backdrop-blur-[10px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0)_40%)]"></div>
                <div className="fixed w-full h-full inset-0">
                    <div
                        className="fixed w-full h-[100lvh] bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72)_26%,rgba(0,0,0,0.92))] z-30 bg-fixed"></div>
                    <Image className="z-20 object-cover object-center !h-1/2 md:!h-full" fill src={Banner}
                           alt={"banner"}/>
                    <Image
                        className="inline-block !top-1/2 z-20 object-cover object-center -scale-y-100 !h-1/2 md:hidden"
                        fill src={Banner} alt={"banner"}/>
                </div>

                <UserContextProvider>
                    <AuthWrapper>
                        <PaginationContextProvider>
                            <AnimatedPagination animation={animation}>
                                <PositionSelector/>
                                <ApplicationForm/>
                                <ApplicationSent/>
                            </AnimatedPagination>
                        </PaginationContextProvider>
                    </AuthWrapper>
                </UserContextProvider>
            </section>
        </>
    )
}