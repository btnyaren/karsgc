import AnimationContainer from "@/components/AnimatonContainer";

const Memories = () => {
    return (
        <section
            style={{background: "#4A0000"}}
            className="text-white w-full pb-32"
        >
            <AnimationContainer
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.2}}
            >
                <h2 style={{fontSize: "clamp(16px, 4dvw, 30px)"}} className="pt-8 pb-6 sm:pt-11 sm:pb-12 text-center font-semibold [text-shadow:2px_2px_10px_black]">Kars{"'"}ın Gençlik Çalıştayı </h2>
            </AnimationContainer>
        </section>
    );
};

export default Memories;