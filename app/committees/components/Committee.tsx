"use client"
import Modal from "@/components/Modal";

type CommitteeProps = {
    name: string,
    description: string
}

const Committee = ({name, description}: CommitteeProps) => {
    return (
        <Modal triggerButton={
            <button className="flex rounded-xl text-white justify-between items-center py-3 px-4 xsm:py-4 bg-[#500000] w-full">
                <span className="font-semibold text-base xsm:text-lg sm:text-xl">{name}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32" fill="white" viewBox="0 -960 960 960" width="32"><path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h270v95H189v582h582v-270h95v270q0 39.05-27.769 66.525Q810.463-95 771-95H189Zm216-244-65-66 366-366H519v-95h347v347h-95v-186L405-339Z"/></svg></span>
            </button>
        }>
            {close => (
                <div className="bg-white rounded-xl px-5 py-5 max-w-2xl mx-3">
                    <div className="mb-5 flex justify-between items-center">
                        <p className="text-[#500000] font-semibold text-xl sm:text-2xl">{name} Komite Gündemi</p>
                        <button className="bg-[#500000] px-2 py-2 rounded-full" onClick={close}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <line x1="1.29289" y1="18.2635" x2="18.2635" y2="1.2929" stroke="white" strokeWidth="2"/>
                                <line x1="1.70711" y1="1.29289" x2="18.6777" y2="18.2635" stroke="white" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                    <p className="font-medium text-xs sm:text-sm">{description}</p>
                </div>
            )}
        </Modal>
    );
};

export default Committee;