import {ApplicationPosition} from "@/types/application";

type NeutralMessageProps = {
    position: ApplicationPosition
}

const NeutralMessage = ({position}: NeutralMessageProps) => {
    return (
        <>
            <p className="text-center mb-2 font-bold text-xl sm:text-2xl md:text-3xl">{position} başvurunuz alındı!</p>
            <p className="text-sm sm:text-base font-medium text-center max-w-[500px]">Başvurunuz halkla ilişkiler ekibimiz tarafından değerlendirilecek ve size en kısa süre içinde dönüş yapılacaktır.</p>
        </>
    );
};

export default NeutralMessage;