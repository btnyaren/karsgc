import Image from "next/image";
import Banner from "@/public/banner.webp";
import Link from "next/link";

export default function MediaHubPage() {
    return (
        <section className="relative text-white flex flex-col min-h-[100dvh] w-full pb-36">
            <div className="z-40 w-full h-full inset-0 absolute [mask-type:alpha] backdrop-blur-[10px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0)_40%)]"></div>
            <div className="fixed w-full h-full inset-0">
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.723)_26%,rgba(0,0,0,.918))] z-30 bg-fixed"></div>
                <Image className="z-20 object-cover object-center !h-1/2 md:!h-full" fill src={Banner} alt={"banner"} />
                <Image className="inline-block !top-1/2 z-20 object-cover object-center -scale-y-100 !h-1/2 md:hidden" fill src={Banner} alt={"banner"} />
            </div>

            <div className="relative z-40 min-h-[82dvh] text-center flex flex-col justify-center items-center max-w-[530px] mx-auto">
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80"><path d="M481-161q-134 0-227-92.709-93-92.71-93-226.291 0-134.419 93-227.709Q347-801 481-801t227 93.291q93 93.29 93 227.709 0 133.581-93 226.291Q615-161 481-161Zm2-60q106 0 181-75.25T739-479q0-22-4-42t-12-43q-35 5-51.5 6.5T643-556q-63 0-124.5-34T407-685q-26 69-74.5 119.5T219-495q0 121 77.418 197.5Q373.835-221 483-221ZM237-568q39-23 68.5-58.5T349-705q-40 23-69 58.5T237-568Zm154 158q-17 0-28.5-11.5T351-450q0-17 11.5-28.5T391-490q17 0 28.5 11.5T431-450q0 17-11.5 28.5T391-410Zm263-206q13 0 23.5-1t21.5-3q-33-55-93-88t-126-33q-8 0-15 .5t-18 2.5q34 57 89.5 89.5T654-616Zm-84 207q-17 0-29-11.788-12-11.787-12-29.212 0-17.425 11.787-29.212Q552.575-491 570-491q17 0 28.5 11.788Q610-467.425 610-450q0 17.425-11.5 29.212Q587-409 570-409ZM40-758v-102q0-24 18-42t42-18h102q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T202-860H100v102q0 12.75-8.675 21.375Q82.649-728 69.825-728 57-728 48.5-736.625T40-758ZM202-40H100q-24 0-42-18t-18-42v-102q0-12.75 8.675-21.375Q57.351-232 70.175-232 83-232 91.5-223.375T100-202v102h102q12.75 0 21.375 8.675Q232-82.649 232-69.825 232-57 223.375-48.5T202-40Zm658 0H758q-12.75 0-21.375-8.675Q728-57.351 728-70.175 728-83 736.625-91.5T758-100h102v-132h60v132q0 24-18 42t-42 18Zm0-718v-102H758q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T758-920h102q24 0 42 18t18 42v102q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T860-758Zm-413 20Zm-98 33Z"/></svg>
                <p style={{textWrap: "balance"} as object} className="font-bold text-xl md:text-2xl mt-3 mb-6 mx-4">Fotoğraflarınıza Kolayca Erişin</p>
                <p className="font-medium text-sm md:text-base mx-3">EventConnect’in yüz tanıma teknolojisi ile yüzünüzü bir dakika içerisinde taratın ve KARSGÇ bittikten sonra içinde bulunduğunuz tüm fotoğrafları kolayca bulun.</p>
                <Link href={""} className="flex items-center bg-white text-black rounded-full py-3 px-5 font-medium mt-16">
                    <span className="mr-1 text-sm md:text-base">EventConnect ile devam edin</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M571.348-480 281.174-770.174q-16.435-16.435-16.055-39.206.381-22.772 16.816-39.207 16.435-16.435 39.326-16.435 22.891 0 39.326 16.435L664-544.652q13.674 13.674 20.391 30.587 6.718 16.913 6.718 34.065 0 17.152-6.718 34.065-6.717 16.913-20.391 30.587L359.826-111.174Q343.391-94.739 321-95.239q-22.391-.5-38.826-16.935-16.435-16.435-16.435-39.326 0-22.891 16.435-39.326L571.348-480Z"/></svg>
                </Link>
            </div>
        </section>
    )
}