import Image from "next/image";

const LandingVideo = () => {
    return (
        <>
            <div className="relative w-screen brightness-90 md:brightness-[0.35] h-[60dvh] min-h-[30rem] md:h-[70dvh] max-h-[40rem] lg:max-h-none lg:min-h-[45rem]">
                <Image 
                    src="/poster.webp" 
                    alt="Kars Gençlik Çalıştayı" 
                    fill 
                    priority 
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(107,0,0,0.45),_rgba(7,2,2,0.82))] inset-0"></div>
        </>
    );
};

export default LandingVideo;