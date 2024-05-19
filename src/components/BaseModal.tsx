"use client"
// import { useEffect } from "react";

type ModalProps = {
    id: string,
    children: React.ReactNode,
    onClose: () => void,
};

export default function Modal({ id, children, onClose }: ModalProps) {
    const printThis = (e:React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation()
    }
    return (
        <div id={id} className="fixed z-10 inset-0 bg-darkBg/70 w-full h-full flex items-center justify-center" onClick={onClose}>
            <div className="bg-white dark:bg-darkGrey rounded max-w-lg w-full max-h-[90vh] overflow-y-scroll p-8 space-y-6" onClick={(e)=> printThis(e)}>
                {children}
            </div>
        </div>
    )
}