"use client"
import {ApplicationPosition} from "@/types/application";
import {usePagination} from "@/contexts/PaginationContext";
import {useUser} from "@/contexts/UserContext";
import {User} from "@/types/user";

type DeclinedMessageProps = {
    position: ApplicationPosition
}

const DeclinedMessage = ({position}: DeclinedMessageProps) => {

    const {setPageNum} = usePagination()
    const {setUser} = useUser()

    const isEligibleToApply = position !== ApplicationPosition.DELEGATE

    const handleClick = () => {
        setPageNum(2)

        setTimeout(() => setUser(prev => {
            prev!.application = {
                form: {},
                position: ApplicationPosition.DELEGATE,
                state: 0
            }
            return {...prev} as User
        }), 300)
    }

    return (
        <>
            <p className="text-center mb-2 font-bold text-xl sm:text-2xl md:text-3xl">{position} başvurunuz reddedildi!</p>
            <p className="text-sm sm:text-base text-center font-medium max-w-[500px]">Başvurunuz halkla ilişkiler ekibimiz tarafından değerlendirildi fakat maalesef ki reddedildi. {isEligibleToApply && "Dilerseniz delege olarak tekrardan başvurabilirsiniz."}</p>
            {isEligibleToApply &&
                <button className="bg-red-950 px-3 py-2 rounded-xl mt-3 text-sm font-medium" onClick={handleClick}>Delege başvurusu gönder {">"}</button>
            }
        </>
    );
};

export default DeclinedMessage;