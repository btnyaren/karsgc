import {auth, onAuthStateChanged} from "@/firebase/auth";
import {checkUser, registerUser} from "@/firebase/firestore";
import {User} from "@/types/user";
import {useEffect} from "react";

export const useAuthStateListener = (
    setUser: (user: User | null) => void,
    setLoading: (loading: boolean) => void
) => {

    useEffect(() => {
        onAuthStateChanged(auth,async user => {
            setLoading(true)
            try {
                if(!user) {
                    setUser(null)
                    return setLoading(false)
                }

                const data = await checkUser(user.uid)
                if(!data) {
                    await registerUser(user.uid, user.email!)
                    setUser({email: user.email!, id: user.uid, application: null})
                }
                if(data)
                    setUser(data as any)

                setLoading(false)
            }
            catch (e) {
                throw new Error((e as Error).message)
            }
        })
    }, [])
}