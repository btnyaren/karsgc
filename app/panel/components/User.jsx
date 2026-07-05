import {useMemo, useState} from "react";
import {updateUser} from "@/firebase/firestore";
import CommitteeSelection from "./CommitteeSelection";
import {ApplicationPosition, ApplicationState} from "@/types/application";
import {delegationDelegateForm} from "@/utils"

const User = ({ user, activeQuestions, secenekler }) => {

    const [durum, setDurum] = useState(user.application.state)
    const [payment, setPayment] = useState(user.application.payment)
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState(user.application.country)
    const [komite, setKomite] = useState({display: user.application.committee, form: user.application.committee})
    const komiteBelirleme = user.application.position === ApplicationPosition.DELEGATE || user.application.position === ApplicationPosition.CHAIR

    const handleAccept = async (e, position) => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.APPROVED, mailPosition: position || null} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED}, mailPosition: position }]
        setDurum(ApplicationState.APPROVED)
        setLoading(false)
    }

    const handleReject = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.DECLINED} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.DECLINED} }]
        setDurum(ApplicationState.DECLINED)
        setLoading(false)
    }

    const handlePaymentSuccess = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, payment: true, committee: komite.form || null, country: country || null} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED, payment: true, committee: komite.form || null, country: country || null} }]
        setPayment(true)
        setKomite(prev => ({...prev, display: prev.form}))
        setLoading(false)
    }

    const handleWaitlist = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.DELAYED} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.DELAYED} }]
        setDurum(ApplicationState.DELAYED)
        setLoading(false)
    }

    const otherDelegateNumber = useMemo(() => {
        if(!activeQuestions.some(question => question.name === "delegates")) return []
        let i = 1
        let arr = []
        while(true) {
            if(!!user.application.form["fullName" + i]) {
                arr.push(i)
                i++
            }
            else break
        }
        return arr
    }, [])

    const name = user.application.form.fullName || "İsim Belirtilmemiş";
    const applicantEmail = user.application?.email || user.email || "E-posta belirtilmemiş";

    return (
        <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-3xl shadow-sm p-6 mb-6 flex flex-col gap-6 transition-all duration-200 hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h4 className="text-lg font-bold text-gray-800">{name}</h4>
                    <p className="text-gray-400 text-sm font-medium">{applicantEmail}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                    {payment && <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold border border-teal-100">Ödeme Onaylandı ({komite.display})</span>}
                    {durum === ApplicationState.APPROVED && <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-100">Kabul Edildi</span>}
                    {durum === ApplicationState.DECLINED && <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold border border-red-100">Reddedildi</span>}
                    {durum === ApplicationState.DELAYED && <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-100">Waitlist</span>}
                    {!durum && <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">İnceleme Bekliyor</span>}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 items-center">
                    <button 
                        onClick={handlePaymentSuccess} 
                        disabled={ durum !== ApplicationState.APPROVED || payment || loading || (komiteBelirleme && (komite.form === "Seçilmedi" || !komite.form)) || (user.application.position === ApplicationPosition.DELEGATE && !country) } 
                        className="bg-[#500000] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:bg-[#6c0000] disabled:bg-gray-100 disabled:text-gray-400"
                    >
                        Ödeme Kabul
                    </button>
                    {komiteBelirleme && (
                        <CommitteeSelection values={{disabled: durum !== ApplicationState.APPROVED || payment || loading, setKomite: (val) => setKomite(prev => ({...prev, form: val}))}} />
                    )}
                    {(user.application.position === ApplicationPosition.DELEGATE && durum === ApplicationState.APPROVED) && (
                        <input 
                            value={country || ""} 
                            placeholder="Ülke Ataması" 
                            onChange={e => setCountry(e.target.value)} 
                            className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#500000] focus:ring-1 focus:ring-[#500000] text-black bg-gray-50 max-w-[150px]" 
                            type="text"
                        />
                    )}
                </div>

                <div className="flex flex-wrap gap-2 items-center border-t border-gray-100 pt-4">
                    {user.application.position === ApplicationPosition.CHAIR ? (
                        <>
                            <button onClick={handleAccept} disabled={!!durum || loading} className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all disabled:bg-gray-100 disabled:text-gray-400">Chair Kabul</button>
                            <button onClick={e => handleAccept(e, "Co-Chair")} disabled={!!durum || loading} className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all disabled:bg-gray-100 disabled:text-gray-400">Co-Chair Kabul</button>
                        </>
                    ) : (
                        <button onClick={handleAccept} disabled={(durum !== ApplicationState.DELAYED && !!durum) || loading} className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition-all disabled:bg-gray-100 disabled:text-gray-400">Kabul Et</button>
                    )}
                    <button disabled={!!durum || loading} className="bg-yellow-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-yellow-700 transition-all disabled:bg-gray-100 disabled:text-gray-400" onClick={handleWaitlist}>Waitlist</button>
                    <button onClick={handleReject} disabled={!!durum || loading} className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 transition-all disabled:bg-gray-100 disabled:text-gray-400">Reddet</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pozisyon</span>
                    <span className="text-sm font-medium text-gray-700">{user.application.position}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">E-posta</span>
                    <span className="text-sm font-medium text-gray-700 break-all">{applicantEmail}</span>
                </div>
                {activeQuestions.map(question => (
                    <div key={question.name} className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{question.question}</span>
                        <span className="text-sm font-medium text-gray-700 whitespace-pre-wrap">{user.application.form[question.name]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;