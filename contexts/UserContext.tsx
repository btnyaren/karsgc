"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {User} from "@/types/user";
import {useAuthStateListener} from "@/hooks/useAuthStateListener";

type UserContext = {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

type UserContextProviderProps = {
    children: ReactNode
}

const UserContext = createContext<UserContext>(null!)

const UserContextProvider = ({children}: UserContextProviderProps) => {

    const [user, setUser] = useState<UserContext['user']>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useAuthStateListener(setUser, setLoading)

    const contextVal = {
        user, setUser,
        loading, setLoading
    }

    return (
        <UserContext.Provider value={contextVal}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context =  useContext(UserContext)

    if(!context)
        throw new Error("You cannot access user outside of UserContextProvider")

    return context as UserContext
}

export default UserContextProvider