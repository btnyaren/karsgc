import User from "./User";
import CommitteeSelection from "./CommitteeSelection";
import {useEffect, useMemo, useState} from "react";
import {getApplications} from "@/firebase/firestore";
import Loading from "@/components/Loading";
import {applicationPositions} from "@/utils";
import {ApplicationPosition} from "@/types/application";

const PanelContent = ({ active, secenekler }) => {

    const [komite, setKomite] = useState({1: "Seçilmedi", 2: "Seçilmedi", 3: "Seçilmedi"})
    const [activeList, setActiveList] = useState([])
    const [loading, setLoading] = useState(false)

    let activeQuestions = useMemo(() => applicationPositions.find(p => p.name === active)?.form || [], [active])

    useEffect(() => {
        if(!active) return

        let isMounted = true
        setLoading(true)

        const checkActive = async () => {
            const currentActive = secenekler.find(secenek => secenek.name === active)

            if(!currentActive) return

            if(currentActive.array.current.length === 0) {
                currentActive.array.current = await getApplications(currentActive.name)
            }

            if(isMounted) {
                setActiveList(currentActive.array.current)
            }
        }

        checkActive().finally(() => {
            if(isMounted) setLoading(false)
        })

        return () => {
            isMounted = false
        }
    }, [active, secenekler])

    useEffect(() => {
        if(!active) return

        const currentActive = secenekler.find(secenek => secenek.name === active)
        if(!currentActive) return

        let filteredList = [...currentActive.array.current]

        if(komite["1"] !== "Seçilmedi")
            filteredList = filteredList.filter(user => user.application.form.firstPreference === komite["1"])
        if(komite["2"] !== "Seçilmedi")
            filteredList = filteredList.filter(user => user.application.form.secondPreference === komite["2"])
        if(komite["3"] !== "Seçilmedi")
            filteredList = filteredList.filter(user => user.application.form.thirdPreference === komite["3"])

        setActiveList(filteredList)
    }, [active, komite, secenekler])

    return (
        <div className="w-full max-w-5xl px-4 flex flex-col items-center">
            {!active && (
                <div className="text-center py-16 bg-white border border-gray-100 rounded-3xl shadow-sm w-full max-w-4xl text-gray-500 font-medium text-lg">
                    Yukarıdan bir başvuru pozisyonu seçerek listeyi görüntüleyebilirsiniz.
                </div>
            )}
            
            {active && (active === ApplicationPosition.DELEGATE || active === ApplicationPosition.CHAIR) && (
                <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4 text-base">Komite Tercihlerine Göre Filtrele</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1.5 w-full">
                            <span className="text-xs font-semibold text-gray-500">1. Tercih</span>
                            <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 1: val}) ), disabled: false } } />
                        </div>
                        <div className="flex flex-col gap-1.5 w-full">
                            <span className="text-xs font-semibold text-gray-500">2. Tercih</span>
                            <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 2: val}) ), disabled: false } } />
                        </div>
                        <div className="flex flex-col gap-1.5 w-full">
                            <span className="text-xs font-semibold text-gray-500">3. Tercih</span>
                            <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 3: val}) ), disabled: false } } />
                        </div>
                    </div>
                </div>
            )}

            {loading && <Loading height={"40vh"} />}
            
            {!!active && !loading && (
                <p className="text-gray-500 font-medium text-sm self-start max-w-4xl mx-auto w-full px-2 mb-4">
                    Görüntülenen başvuru sayısı: <span className="font-bold text-gray-700">{activeList.length}</span>
                </p>
            )}

            {active && activeList.length === 0 && !loading && (
                <div className="text-center py-12 bg-white border border-gray-100 rounded-2xl shadow-sm w-full max-w-4xl text-gray-400 font-medium">
                    Bu kategori için başvuru bulunamadı.
                </div>
            )}

            {!loading && activeList.map(user => (
                <User key={user.email} secenekler={secenekler} activeQuestions={activeQuestions} user={user} />
            ))}
        </div>
    );
};

export default PanelContent;
