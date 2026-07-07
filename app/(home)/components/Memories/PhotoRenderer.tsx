"use client"
import Image from "next/image";
import {useState} from "react";

const PhotoRenderer = () => {

    const [count, setCount] = useState(0)
    
    // Anılar klasöründeki görseller - rastgele sıralanmış
    const shuffledImages = [
 
  '/WhatsApp Image 2026-07-07 at 16.13.48 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 16.13.48 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 16.13.49 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 16.13.49 (4).jpeg',
  '/WhatsApp Image 2026-07-07 at 16.13.49 (5).jpeg',
  '/WhatsApp Image 2026-07-07 at 16.13.50 (1).jpeg'
].sort(() => Math.random() - 0.5);

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
