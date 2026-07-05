import PanelNavbar from "@/app/panel/components/PanelNavbar";
import {useRef, useState} from "react";
import {useUser} from "@/contexts/UserContext";
import {ApplicationPosition} from "@/types/application";
import PanelContent from "@/app/panel/components/PanelContent";

export default function PanelPageContent() {
    const [active, setActive] = useState(null);
    const admin = useUser().user?.admin

    const secenekler = [
        {name: ApplicationPosition.CHAIR, array: useRef([])},
        {name: ApplicationPosition.DELEGATE, array: useRef([])}
    ]

    if(!admin)
        return null

    return (
        <div className="min-h-screen bg-gray-50 pt-[110px] pb-12 flex flex-col items-center !overflow-x-hidden box-border w-full z-[98]">
            <PanelNavbar active={active} setActive={setActive} secenekler={secenekler} />
            <PanelContent secenekler={secenekler} active={active} />
        </div>
    )
}