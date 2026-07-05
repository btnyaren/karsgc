"use client"
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {useUser} from "@/contexts/UserContext";


type ContextValue<DataStore> = {
    pageNum: number, setPageNum: Dispatch<SetStateAction<number>>,
    totalPages: number, setTotalPages: Dispatch<SetStateAction<number>>
}

type PaginationContextProviderProps = {
    children: ReactNode
}

export const PaginationContext = createContext<ContextValue<any>>(null!)

export const PaginationContextProvider = ({children} : PaginationContextProviderProps) => {
    const {user} = useUser()

    const [pageNum, setPageNum] = useState(user?.application !== null ? 3 : 1)
    const [totalPages, setTotalPages] = useState<number>(100)

    const contextValue = {
        pageNum, setPageNum,
        totalPages, setTotalPages
    }

    return (
        <PaginationContext.Provider value={contextValue}>
            {children}
        </PaginationContext.Provider>
    )
}

export const usePagination = <DataStore,>() => {
    const context = useContext(PaginationContext)
    if(!context) throw new Error("usePagination cannot be used outside of PaginationContext")
    return context as ContextValue<DataStore>
}