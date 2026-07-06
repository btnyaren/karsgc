"use client"
import Image from "next/image";
import {useState} from "react";

const PhotoRenderer = () => {

    const [count, setCount] = useState(0)
    
    // Anılar klasöründeki görseller - rastgele sıralanmış
    const shuffledImages = [
        '/memories/memory1.jpg',
        '/memories/memory2.jpg',
        '/memories/memory3.jpg',
        '/memories/memory4.jpg'
    ].sort(() => Math.random() - 0.5);

    const handleClick = () => {
        console.log("click")
        setCount(count + 1)
    }

    const displayEasterEgg = count >= 31

    return (
        <div className="columns-2 gap-4 px-4 md:px-8 lg:px-16">
            {shuffledImages.map((imageSrc, index) => (
                <div className={`shrink-0 relative w-full h-48 xsm:h-48 md:h-64 xl:h-[20rem] mb-4 rounded-xl overflow-hidden`} key={index}>
                    {index === 1 && <div className="absolute top-[30%] left-[15%] w-[22%] h-[30%] z-30 bg-transparent" onClick={handleClick}></div>}
                    <Image className="object-cover z-20" src={imageSrc} alt={`memory-${index}`} fill />
                </div>
            ))}
        </div>
    );
};

export default PhotoRenderer;