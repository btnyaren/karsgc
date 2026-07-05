"use client"
import {ReactNode, useState} from "react";
import {createPortal} from "react-dom";

type ModalProps = {
    triggerButton?: ReactNode,
    children: ReactNode | ((close: () => void) => ReactNode)
}

const Modal = ({triggerButton, children}: ModalProps) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <div onClick={handleOpen}>{triggerButton}</div>
            {open &&
                createPortal(
                    <div className="fixed flex justify-center items-center inset-0 h-screen w-screen bg-[rgba(0,0,0,0.8)] z-[90]">
                        <div className="z-[91]">
                            {typeof children === "function" ? children(handleClose) : children}
                        </div>
                    </div>
                , document.body)
            }
        </>
    );
};

export default Modal;