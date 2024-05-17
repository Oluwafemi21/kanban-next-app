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
        console.log('inner modal pressed')
    }
    // useEffect(() => {
    //     const element:any = document.getElementById(id);
    //     element.open = true;
    //   }, [id]);
    return (
        <div id={id} className="fixed z-10 inset-0 bg-darkBg/70 w-full h-full flex items-center justify-center" onClick={onClose}>
            <div className="bg-darkBg rounded max-w-lg w-full h-full max-h-48 p-8" onClick={(e)=> printThis(e)}>
                {children}
            </div>
        </div>
    )
}