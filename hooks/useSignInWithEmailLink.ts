"use client"
import {FormEventHandler, useEffect, useState} from "react";
import {auth, signInWithEmailLink, isSignInWithEmailLink, sendSignInLinkToEmail} from "@/firebase/auth";
import {usePathname} from "next/navigation";

export default function useSignInWithEmailLink() {
    const pathname = usePathname()

    const [isSent, setIsSent] = useState<boolean>(false)
    const [isEmailStored, setIsEmailStored] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const localStorageEmail = window.localStorage.getItem("emailForSignIn")

        if(!isSignInWithEmailLink(auth, window.location.href))
            return setLoading(false)

        if(!localStorageEmail) {
            setIsEmailStored(false)
            return setLoading(false)
        }

        signInWithEmailLink(auth, localStorageEmail, window.location.href)
            .then(() => {
                window.localStorage.removeItem("emailForSignIn")
                setLoading(false)
            })
            .catch(e => {
                if(e.code === 'auth/invalid-action-code')
                    return setError("Bu oturum açma linkinin süresi geçmiş. Lütfen yeni bir link alın.")
                setIsEmailStored(false)
                setLoading(false)
            })
    }, [])

    const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const email = ((new FormData(e.target as HTMLFormElement)).get("email") as string).trim()

        const actionCodeSettings = {
            url: process.env.NODE_ENV === "development" ? `http://localhost:3000/${pathname}` : `https://ialgc.org/${pathname}`,
            handleCodeInApp: true
        }

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            window.localStorage.setItem('emailForSignIn', email)
            setIsSent(true)
        }
        catch (e) {
            console.log(error)
            setLoading(false)
            setError("Lütfen geçerli bir mail adresi girin.")
        }
    }

    const handleRevalidation: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const email = ((new FormData(e.target as HTMLFormElement)).get("email") as string).trim()

        try {
            await signInWithEmailLink(auth, email, window.location.href)
            window.localStorage.removeItem('emailForSignIn');
            setLoading(false)
        }
        catch (e) {
            const error = e as any

            setLoading(false)
            console.log(error, error.code)

            if(error.code==="auth/invalid-action-code")
                return setError("Bu oturum açma bağlantısının süresi geçmiş. Lütfen yeni bir bağlantı alın.")

            if(error.code==="auth/invalid-email")
                return setError("Lütfen mail adresinizi doğru yazdığınızdan emin olun.")

            setError("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.")
        }
    }

    return {
        loading, isEmailStored, error, isSent,
        handleSignIn, handleRevalidation
    }
}