"use client"
import React, {ReactNode} from 'react'
import {useUser} from "@/contexts/UserContext";
import Loading from "@/components/Loading";

type AuthWrapperProps = {
    children: ReactNode
}

const AuthWrapper = ({children}: AuthWrapperProps) => {

    const {loading} = useUser()

    if(loading)
        return <Loading />

    return <>{children}</>
};

export default AuthWrapper;