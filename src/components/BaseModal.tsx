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
        <div id={id} className="modal" onClick={onClose}>
            <div className="modal-box" onClick={(e)=> printThis(e)}>
                {children}
            </div>
        </div>
    )
}