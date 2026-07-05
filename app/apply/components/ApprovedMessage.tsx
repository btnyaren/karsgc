import {ApplicationPosition} from "@/types/application";

type ApprovedMessageProps = {
    position: ApplicationPosition
}

const ApprovedMessage = ({position}: ApprovedMessageProps) => {
    return (
        <>
            <p className="text-center mb-2 font-bold text-xl sm:text-2xl md:text-3xl">{position} başvurunuz onaylandı!</p>
            <p className="text-sm sm:text-base text-center font-medium max-w-[500px]">Başvurunuz halkla ilişkiler ekibimiz tarafından değerlendirildi ve onaylandı. Ödeme ve diğer detaylar mail adresinize gönderildi.</p>
        </>
    );
};

export default ApprovedMessage;