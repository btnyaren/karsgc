"use client"
import Image from "next/image";
import {useState} from "react";

const PhotoRenderer = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        console.log("click")
        setCount(count + 1)
    }

    const displayEasterEgg = count >= 31

    return (
        <div className="flex flex-wrap justify-evenly xsm:justify-center">
            {[1, 2, 3, 4].map((i) => (
                <div className={`shrink-0 basis-[45%] md:basis-[30%] lg:basis-[23%] relative w-96 ${!displayEasterEgg ? "h-32" : "h-48"} xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-2 rounded-xl overflow-hidden`} key={i}>
                    {i === 2 && <div className="absolute top-[30%] left-[15%] w-[22%] h-[30%] z-30 bg-transparent" onClick={handleClick}></div>}
                    <Image className="object-contain z-20" src={displayEasterEgg ? `/memories/easterEgg${(i % 3) + 1}.jpeg` : `/memories/image${i}.webp`} alt={"memory"} fill />
                </div>
            ))}
            {[5, 6, 7].map(i => (
                <div className={`shrink-0 basis-[45%] md:basis-[30%] relative w-96 ${!displayEasterEgg ? "h-32" : "h-48"} xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-3`} key={i}>
                    <Image className="object-contain" src={displayEasterEgg ? `/memories/easterEgg${(i % 3) + 1}.jpeg` : `/memories/image${i}.webp`} alt={"memory"} fill />
                </div>
            ))}
        </div>
    );
};

export default PhotoRenderer;