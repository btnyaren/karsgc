"use client"
import React, {ReactNode} from 'react'
import {useUser} from "@/contexts/UserContext";
import Loading from "@/components/Loading";
import AuthForm from "@/app/apply/components/Auth/AuthForm";

type AuthWrapperProps = {
    children: ReactNode
}

const AuthWrapper = ({children}: AuthWrapperProps) => {

    const {user, loading} = useUser()

    if(loading)
        return <Loading />

    if(!user)
        return <AuthForm />

    return children
};

export default AuthWrapper;