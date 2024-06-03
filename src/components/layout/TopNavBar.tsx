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
    open: boolean,
    toggleSidebar:() => void
}


export default function TopNavBar({ open,toggleSidebar }: propType) {
    const [addTaskModal, setTaskModalState] = useState(false)
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [showEditModal,setShowEditModal] = useState(false)
    const [showDeleteModal,setShowDeleteModal] = useState(false)
   
    const showModal = () => {
        setTaskModalState(true)
    }

    const closeModal = () => {
        setTaskModalState(false)
        setShowEditModal(false)
        setShowDeleteModal(false)
    }

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }
    
    const handleSelect = (action:string) => {
        if(action === 'edit') setShowEditModal(true)
        if (action === 'delete') setShowDeleteModal(true)
        toggleDropdown()
    }

    const doThat = () => {
        console.log('gettat')
    }

    return (
        <>
            <header className="flex items-center justify-between dark:bg-darkGrey bg-white py-5 pr-6 pl-4 md:p-0">
                <div className="flex items-center gap-4">
                    <div className={`border-r border-lightLines dark:border-darkLines py-4 px-6 md:py-8 hidden md:block *:transition-[display] *:ease-in-out ${open ? 'md:w-[261px] lg:w-[300px]' : null}`}>
                        <Image src={lightLogo} alt="Kanban management app logo" className="w-auto dark:hidden" />
                        <Image src={darkLogo} alt="Kanban management app logo" className="w-auto dark:block hidden " />
                    </div>
                    <div className="transition-[margin-left] flex items-center justify-center gap-3">
                        <Image src={logo} alt="Kanban management app logo" className="md:hidden w-auto" />
                        <span className="text-black dark:text-white text-xl md:text-2xl font-bold hidden md:block">Platform Launch</span>

                        <button className="flex items-center gap-[9px] px-2 md:hidden" onClick={toggleSidebar}>
                            <span className="text-black dark:text-white text-xl md:text-2xl font-bold">Platform Launch</span>
                            <div>
                                <Image src={chevronDown} alt="Arrow facing down" className={`transition-transform ${open ? '-rotate-180' : '' }`} />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-6 sm:pr-8">
                    <button onClick={showModal} className="btn btn-primary heading-m px-[18px] py-2.5 md:px-[25px] md:pt-[15px] md:pb-3.5" type="button">
                        <span className="hidden md:block">+ Add New Task</span>
                        <AddIcon styling="md:hidden"/>
                    </button>
                    <div className="group relative" tabIndex={1}>
                        <button type="button" onClick={toggleDropdown} role="combobox" aria-controls="listbox" aria-haspopup="listbox" aria-expanded="false">
                            <Image src={moreInfo} alt="More info button" />
                        </button>
                        {isDropdownOpen && (
                            <ul role="listbox" id="listbox" className="drop-shadow bg-white dark:bg-darkBg transition-[top,display] duration-300 ease-in-out rounded-md absolute z-30 text-white space-y-4 w-[192px] top-8 lg:top-12 right-0 max-h-36 p-4 hidden group-focus:block group-focus-within:block">
                            <li role="listitem" onClick={()=>handleSelect('edit')} className="body-l capitalize w-full cursor-pointer snap-start text-mediumGrey hover:text-primaryPurple dark:hover:text-white">Edit Board</li>
                            <li role="listitem" onClick={() => handleSelect('delete')} className="text-danger hover:text-lightRed body-l capitalize w-full cursor-pointer">
                             Delete Board
                            </li>
                        </ul>
                        )}
                    </div>
                </div>
            </header>
            {addTaskModal && (
                <AddTask onClose={closeModal} mode={"add"}/>
            )}
            {showEditModal && (
                <Board mode="edit" onClose={closeModal} />
            )}
            {showDeleteModal && (
                <Delete type="board" title="Platform launch" onClose={closeModal} />
            )}
            
        </>
    );
}