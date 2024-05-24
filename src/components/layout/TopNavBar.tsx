"use client"
import Image from "next/image";
import AddIcon from "../icons/AddIcon";
import logo from "@/images/logo.png"
import moreInfo from "@/images/moreInfo.svg"
import chevronDown from "@/images/chevronDown.svg"
import darkLogo from "@/images/darkLogo.png"
import lightLogo from "@/images/lightLogo.png"
import { useState } from "react";
import AddTask from "../Modals/AddTask";
import Board from "../Modals/Board";
import Delete from "../Modals/Delete"

type propType = {
    open: boolean
}


export default function TopNavBar({ open }: propType) {
    const [addTaskModal, setTaskModalState] = useState(false)
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [showEditModal,setShowEditModal] = useState(false)
    const [showDeleteModal,setShowDeleteModal] = useState(false)
    
    const showDropDown = () => {
        console.log('dropdown showing')
    }
   
    const showModal = () => {
        setTaskModalState(true)
    }

    const closeModal = () => {
        setTaskModalState(false)
        setShowEditModal(false)
        setShowDeleteModal(false)
    }

    const handleClick = () => {
        console.log('modal closed')
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }
    
    const handleSelect = (action:string) => {
        if(action === 'edit') setShowEditModal(true)
        if (action === 'delete') setShowDeleteModal(true)
        toggleDropdown()
    }


    return (
        <>
            <header className="flex items-center justify-between dark:bg-darkGrey bg-white py-5 pr-6 pl-4 md:p-0">
                <div className="flex items-center gap-4">
                    <div className="border-r border-lightLines dark:border-darkLines py-4 px-6 md:py-8 hidden md:block *:transition-[display] *:ease-in-out">
                        <Image src={lightLogo} alt="Kanban management app logo" className="w-auto dark:hidden" />
                        <Image src={darkLogo} alt="Kanban management app logo" className="w-auto dark:block hidden " />
                    </div>
                    <div className={`transition-[margin-left] flex items-center justify-center gap-3 ${open ? 'md:ml-24' : null}`}>
                        <Image src={logo} alt="Kanban management app logo" className="md:hidden w-auto"/>
                        <div className="flex items-center gap-[9px]" onClick={showDropDown}>
                            <span className="text-black dark:text-white text-xl md:text-2xl  font-bold">Platform Launch</span>
                            <button>
                                <Image src={chevronDown} alt="Arrow facing down" className="md:hidden" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 md:pr-8">
                    <button onClick={showModal} className="btn btn-primary heading-m px-[18px] py-2.5 md:px-[25px] md:pt-[15px] md:pb-3.5">
                        <span className="hidden md:block">+ Add New Task</span>
                        <AddIcon styling="md:hidden"/>
                    </button>
                    <div className="group">
                        <button onClick={toggleDropdown} role="combobox" aria-controls="listbox" aria-haspopup="listbox" tabIndex={0} aria-expanded="false">
                            <Image src={moreInfo} alt="More info button" />
                        </button>
                        <ul role="listbox" id="listbox" className={`drop-shadow bg-white dark:bg-darkBg transition-[top,display] duration-300 ease-in-out rounded-md absolute z-20 text-white space-y-4 right-6 w-[192px] top-20 max-h-36 will-change-auto p-4 ${isDropdownOpen ? 'block will-change-transform': 'hidden' }`}>
                            <li role="listitem" onClick={()=>handleSelect('edit')} className="body-l capitalize w-full cursor-pointer snap-start text-mediumGrey dark:hover:text-white">Edit Board</li>
                            <li role="listitem" onClick={() => handleSelect('delete')} className="text-danger hover:text-lightRed body-l capitalize w-full cursor-pointer">
                             Delete Board
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {addTaskModal && (
                <AddTask onClose={closeModal} />
            )}
            {showEditModal && (
                <Board type="edit" onClose={closeModal} />
            )}
            {showDeleteModal && (
                <Delete type="board" title="Platform launch" onClose={closeModal} />
            )}
            
        </>
    );
}