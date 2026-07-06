"use client"
import Image from "next/image";
import {useState, useEffect} from "react";

const PhotoRenderer = () => {

    const [count, setCount] = useState(0)
    const [shuffledImages, setShuffledImages] = useState<string[]>([])

    // Rastgele dizi oluştur
    const shuffleArray = (array: string[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        // Anılar klasöründeki görseller
        const memoryImages = [
            '/memories/memory1.jpg',
            '/memories/memory2.jpg',
            '/memories/memory3.jpg',
            '/memories/memory4.jpg'
        ];
        
        // Görselleri rastgele dizle
        setShuffledImages(shuffleArray(memoryImages));
    }, []);

    const handleClick = () => {
        console.log("click")
        setCount(count + 1)
    }

    const displayEasterEgg = count >= 31

    return (
        <div className="flex flex-wrap justify-evenly xsm:justify-center">
            {shuffledImages.map((imageSrc, index) => (
                <div className={`shrink-0 basis-[45%] md:basis-[30%] lg:basis-[23%] relative w-96 ${!displayEasterEgg ? "h-32" : "h-48"} xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-2 rounded-xl overflow-hidden`} key={index}>
                    {index === 1 && <div className="absolute top-[30%] left-[15%] w-[22%] h-[30%] z-30 bg-transparent" onClick={handleClick}></div>}
                    <Image className="object-contain z-20" src={imageSrc} alt={`memory-${index}`} fill />
                </div>
            ))}
        </div>
    );
};

export default PhotoRenderer;