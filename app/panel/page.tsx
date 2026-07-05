"use client"

import "./styles.css"
import UserContextProvider from "@/contexts/UserContext";
import PanelPageContent from "@/app/panel/content";

export default function PanelPage() {

    return (
        <UserContextProvider>
            <PanelPageContent />
        </UserContextProvider>
    );
}