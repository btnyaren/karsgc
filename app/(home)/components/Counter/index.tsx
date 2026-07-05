import {getApplicationStatistics} from "@/firebase/admin";
import {applicationPositions} from "@/utils";
import CounterPosition from "@/app/(home)/components/Counter/CounterPosition";

const Counter = async () => {

    const {delegates, admins, presses, chairs} = await getApplicationStatistics()

    applicationPositions[0].count = delegates
    applicationPositions[1].count = admins
    applicationPositions[2].count = presses
    applicationPositions[3].count = chairs

    return (
        <section className="relative w-full text-white pb-36">
            <div className="absolute inset-0 bg-fixed bg-[url('../public/counter.webp')] bg-cover bg-center w-full h-full"></div>
            <div className="absolute inset-0 w-full h-full bg-[rgba(107,23,16,0.6)] backdrop-blur-[10px]"></div>
            <div className="relative z-30 h-full">
                <h2 style={{fontSize: "clamp(20px, 4dvw, 30px)"}} className="pt-12 pb-10 sm:pt-11 sm:pb-12 text-center font-semibold">Güncel Başvuru Sayısı</h2>
                <div className="flex justify-center gap-12 items-center flex-wrap px-3">
                    {applicationPositions.map(position => (
                        <CounterPosition name={position.name} image={position.image} count={position.count!} key={position.name} />
                    ))}
                </div>
                <p style={{textWrap: "balance"} as object} className="font-medium text-sm xsm:text-base md:text-lg text-center mx-auto px-3 mt-12 mb-6 max-w-xl">İzmir{"'"}in en büyük ve en iyi çalıştayında yer almak istiyorsan, geç olmadan başvur! Hala katılmak için şansın var.</p>
            </div>
        </section>
    );
};

export default Counter;