import {checkUser, registerUser} from "@/firebase/firestore";
import {User} from "@/types/user";
import {useEffect} from "react";

const STORAGE_KEY = "application-anonymous-user-id";

export const useAuthStateListener = (
    setUser: (user: User | null) => void,
    setLoading: (loading: boolean) => void
) => {

    useEffect(() => {
        const initializeUser = async () => {
            setLoading(true)

            try {
                const storage = typeof window !== "undefined" ? window.localStorage : null;
                const existingId = storage?.getItem(STORAGE_KEY) || undefined;
                const uid = existingId || (typeof crypto !== "undefined" && "randomUUID" in crypto
                    ? crypto.randomUUID()
                    : `anonymous-${Date.now()}`);

                if (storage && !existingId) {
                    storage.setItem(STORAGE_KEY, uid)
                }

                const data = await checkUser(uid)

                if (!data) {
                    await registerUser(uid, "")
                    setUser({email: "", id: uid, application: null})
                } else {
                    setUser(data as User)
                }

                setLoading(false)
            }
            catch (e) {
                console.error(e)
                setUser(null)
                setLoading(false)
            }
        }

        initializeUser()
    }, [setLoading, setUser])
}