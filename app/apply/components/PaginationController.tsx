"use client"
import Arrow from "@/public/arrow.png"
import Image from "next/image";
import {usePagination} from "@/contexts/PaginationContext"

const PaginationController = () => {

    const {setPageNum} = usePagination()

    return (
        <button className="bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,0,0,0.690344)_100%)] bg-[rgba(50,50,50,0.408709)] w-[clamp(200px,92dvw,250px)] mx-auto rounded-[10px] mt-4 p-1.5 text-white text-left flex items-center justify-between relative z-50">
            <span className="py-[clamp(15px,2dvw,20px)] px-[clamp(10px,2dvw,20px)] flex flex-col font-medium text-sm max-w-[calc(100%_-_120px)]">
                <span className="text-xl">Devam Et</span>
            </span>
            <div className="bg-[rgba(0, 0, 0, 0.4)] self-stretch aspect-square w-20 flex justify-center items-center rounded-[5px]">
                <Image width={22} height={37} src={Arrow} alt={"arrow"} />
            </div>
        </button>
    );
};

export default PaginationController;