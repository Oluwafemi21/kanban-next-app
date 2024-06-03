"use client"
import { useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeCloseIcon from "../icons/EyeCloseIcon";
import BoardIcon from '@/components/icons/BoardIcon'
import ColumnNav from "../ColumnNav";
import ThemeToggler from "../ThemeToggler"
import Board from "../Modals/Board";

const outColumns = [
    {
        _id: 1,
        text: "platform launch"
    },
    {
        _id: 2,
        text: "marketing plan"
    },
    {
        _id: 3,
        text: "roadmap"
    }
]

type propType = {
    isOpen: boolean
    toggleSidebar:() => void
}

export default function SideBar({ isOpen, toggleSidebar }: propType) {
    const [addBoardModal, setBoardModalState] = useState(false)
    const [columns,setColumns] = useState([...outColumns])
    const [currentColumn, setCurrentColumn] = useState<string>("platform launch");

    const changeColumn = (id: number) => {
        let column = columns.find((c) => c._id === id)
        setCurrentColumn(column!.text)
    }

    const addColumn = () => {
        setColumns([...columns, {
            _id: columns.length + 1,
            text:"new roadmap"
        }])
    }

    const showModal = (e: React.MouseEvent<Element, MouseEvent>) => {
        setBoardModalState(true)
        e.stopPropagation()

    }

    const closeModal = () => {
        setBoardModalState(!addBoardModal)
    }

    const preventPropagation = (e:React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <>
        <nav className={`fixed transition-transform duration-300 ease-in-out z-20 w-full pointer-events-auto ${isOpen ? 'bg-darkBg/70 inset-0 top-[72px] md:translate-x-0 md:w-auto md:bg-transparent md:inset-auto md:top-auto' : 'md:-translate-x-full md:-translate-y-0'}`} onClick={toggleSidebar}>
                <div className={`h-[322px] mx-auto relative top-4 md:mx-0 md:top-0 md:h-screen md:flex md:flex-col pr-4 md:pr-6 bg-white dark:bg-darkGrey w-[261px] lg:w-[300px] md:border-r border-lightLines dark:border-darkLines rounded-md md:rounded-none transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'md:-translate-y-0 -translate-y-[450px]'}`} onClick={(e)=> preventPropagation(e)}>
                <div className="pl-8 pt-[15px]">
                        <p className="uppercase text-mediumGrey text-xs/[15px] tracking-[2.4px] font-bold" >All boards ({outColumns.length})</p>
                </div>
                
                <div className="overflow-y-scroll max-h-80 md:max-h-screen mt-5">
                    {columns.map(({_id,text}) => {
                        return <ColumnNav text={text} isActive={currentColumn === text ? true : false} changeColumn={ () => changeColumn(_id) } key={_id}/>
                    })}
                    <button onClick={showModal} className="hover:bg-primaryPurple/10 w-full text-primaryPurple pl-6 py-4 rounded-r-full flex items-center gap-4" type="button">
                        <BoardIcon />
                        <span className="heading-m capitalize">+ create new board</span>
                    </button>
                </div>
                
                
                <div className="mt-auto">    
                    {isOpen &&
                        <>
                        <ThemeToggler />
                            <button type="button" onClick={toggleSidebar} className="mb-32 w-full hidden md:flex items-center gap-2.5 text-mediumGrey pl-8 py-4 hover:bg-lightBg dark:hover:bg-white hover:text-primaryPurple rounded-r-full">
                            <EyeCloseIcon />
                            <span className="heading-m font-bold text-[15px]/[18px]">Hide Sidebar</span>
                        </button>
                        </>
                        }
                </div>
                </div>
        </nav>
        <button type="button" onClick={toggleSidebar} className="z-10 hidden fixed bottom-0 left-0 w-14 md:flex items-center justify-center mb-8 py-5 bg-primaryPurple text-white hover:bg-lightPurple rounded-r-full">
            <span className="sr-only">Click this button to open side bar</span>
            <EyeIcon />
        </button>
   
        {addBoardModal && (
                <Board mode="add" onClose={closeModal}/>
            )}
    </>
    );
} 