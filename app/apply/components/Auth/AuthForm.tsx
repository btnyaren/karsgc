import useSignInWithEmailLink from "@/hooks/useSignInWithEmailLink";
import AuthSent from "@/app/apply/components/Auth/AuthSent";
import AuthRevalidation from "@/app/apply/components/Auth/AuthRevalidation";
import {Checkbox} from "@/components/ui/checkbox"
import Link from "next/link"
import {useState} from "react"
import {CheckedState} from "@radix-ui/react-checkbox"

const AuthForm = () => {

    const {
        loading, isEmailStored, error, isSent,
        handleSignIn, handleRevalidation
    } = useSignInWithEmailLink()

    const [checked, setChecked] = useState<CheckedState>(false)

    if(!isEmailStored)
        return (
            <AuthRevalidation loading={loading} error={error} handleRevalidation={handleRevalidation} />
        )

    return (
        <form onSubmit={handleSignIn} className="z-50 pt-36 flex flex-1 flex-col mx-3 items-center justify-center">
            {!isSent && (
                <>
                    <div className="w-fit mx-auto text-center">
                        <label className="block font-bold text-xl sm:text-2xl mx-3 mb-2" htmlFor="email">Email
                            adresinizi doğrulayın</label>
                        <input
                            className={"text-center w-[clamp(230px,70dvw,320px)] py-2 bg-[rgba(21,21,21,0.395731)] border-solid border-[4px] border-red-900 rounded-[14px] outline-0 disabled:border-gray-500 transition-colors duration-200"}
                            name={"email"} id={"email"}/>
                    </div>
                    <div className="items-top flex justify-center space-x-2 mt-3 max-w-[16rem] mx-auto">
                        <Checkbox checked={checked} onCheckedChange={e => setChecked(e)} id="terms1"/>
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                KVKK <Link className="underline" href="https://drive.google.com/file/d/1Gy1nDjWDIOWHmKOp9H4HSYTSm_9aFrZE/view?usp=sharing" target="_blank">Aydınlatma</Link> ve <Link className="underline" href={"https://drive.google.com/file/d/1Z5VV1XmK4Jc_aocIYDN59cym10BLscfX/view?usp=sharing"} target="_blank">Açık Rıza</Link> metinlerini okudum ve kabul ediyorum.
                            </label>
                        </div>
                    </div>
                    <button disabled={loading || isSent || !checked}
                            className="transition-colors duration-200 text-sm xsm:text-base mt-3 bg-red-950 py-3 px-5 rounded-[15px] disabled:bg-gray-500 disabled:text-gray-400">Doğrula
                    </button>
                    {error &&
                        <div
                            className="bg-red-500 font-medium px-3 py-2 text-center text-sm mt-3 max-w-xs rounded-full">
                            <p>{error}</p>
                        </div>
                    }
                </>
            )}
            {isSent && <AuthSent/>}
        </form>
    );
};

export default AuthForm;