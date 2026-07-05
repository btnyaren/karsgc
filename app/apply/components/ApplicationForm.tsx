"use client"

import {useUser} from "@/contexts/UserContext";
import {applicationPositions} from "@/utils";
import {FormEventHandler} from "react";
import useSetApplication from "@/hooks/useSetApplication";
import {usePagination} from "@/contexts/PaginationContext";

const ApplicationForm = () => {

    const {user, setUser} = useUser()
    const {sender, loading, error} = useSetApplication()

    const position = user?.application?.position

    if(!position) return null

    const questions = applicationPositions.find(p => p.name === position)!

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)

        sender(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="pt-[clamp(200px,30dvw,300px)]">
            <p className="font-bold text-2xl text-center mb-6">{position} başvurusu</p>
            {questions.form.map(q => {
                const InputComponent = q.component
                return (
                    <InputComponent
                        key={q.name}
                        name={q.name}
                        autoComplete={"off"}
                        className={"w-[clamp(230px,80dvw,400px)] px-3"}
                        label={<span className="w-[clamp(230px,80dvw,400px)] block mb-2 font-semibold text-base">{q.question}</span>}
                        required={q.required}
                    />
                )
            })}
            {error && <p className="w-[clamp(230px,80dvw,400px)] mx-auto text-center mt-4">{error}</p>}
            <button disabled={loading} className="text-center w-[clamp(230px,80dvw,400px)] font-semibold mt-8 mx-auto block px-3 py-2 bg-red-800 rounded-[10px]">Gönder</button>
        </form>
    )
}

export default ApplicationForm;