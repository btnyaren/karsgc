import Image, {StaticImageData} from "next/image";

type CounterPositionProps = {
    name: string,
    image: string | StaticImageData,
    count: number
}

const CounterPosition = ({name, image, count}: CounterPositionProps) => {
    return (
        <div className="relative border-2 border-white rounded-3xl overflow-hidden max-w-[360px] min-w-[250px] basis-[20%] aspect-[13/10]">
            <div className="absolute w-full h-full z-20">
                <div className="z-30 bg-[rgba(21,21,21,0.59)] backdrop-blur-[3px] absolute w-full h-full"></div>
                <Image src={image} alt={name} fill className="object-cover object-center z-20" />
            </div>
            <div className="relative z-30 w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl md:text-3xl font-semibold mb-3">{count}</p>
                <div className="text-lg md:text-xl font-semibold">{name}</div>
                <div className="text-lg md:text-xl font-semibold">Başvurusu</div>
            </div>
        </div>
    );
};

export default CounterPosition;