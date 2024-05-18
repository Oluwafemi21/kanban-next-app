"use client"
import { useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeCloseIcon from "../icons/EyeCloseIcon";
import BoardIcon from '@/components/icons/BoardIcon'
import ColumnNav from "../ColumnNav";
import ThemeToggler from "../ThemeToggler"

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
    return (
        <nav className="fixed left-0 top-0 bottom-0 h-screen">
            <div className={`flex flex-col pr-6 bg-white dark:bg-darkGrey fixed w-[300px] duration-300 transition-[left] border-r border-lightLines dark:border-darkLines h-screen  ${isOpen ? 'left-0 mr-[300px]' : '-left-80 mr-0'}`}>
                <div className="pl-8 pt-8">
                    <div className="logo w-full mb-[54px] dark:hidden"></div>
                    <div className="dark-logo w-full mb-[54px] hidden dark:block"></div>
                    <p className="uppercase text-mediumGrey text-xs/[15px] tracking-[2.4px] font-bold" >All boards (8)</p>
                </div>
                
                <div className="max-h-[70vh] h-full overflow-y-scroll mt-5">
                    {columns.map(({_id,text}) => {
                        return <ColumnNav text={text} isActive={currentColumn === text ? true : false} changeColumn={ () => changeColumn(_id) } key={_id}/>
                    })}
                    <button onClick={addColumn} className="hover:bg-primaryPurple/10 w-full text-primaryPurple pl-6 py-4 rounded-r-full flex items-center gap-4">
                        <BoardIcon />
                        <span className="heading-m capitalize">+ create new board</span>
                    </button>
                </div>
                
                
            <div>
                
                {isOpen &&
                    <>
                    <ThemeToggler />
                        <button onClick={toggleSidebar} className="w-full mb-8 flex items-center gap-2.5 text-mediumGrey pl-8 py-4 hover:bg-lightBg dark:hover:bg-white hover:text-primaryPurple rounded-r-full">
                        <EyeCloseIcon />
                        <span className="heading-m font-bold text-[15px]/[18px]">Hide Sidebar</span>
                    </button>
                    </>
                    }
                {!isOpen && <button onClick={toggleSidebar} className="fixed bottom-0 left-0 w-14 flex items-center justify-center mb-8 py-5 bg-primaryPurple text-white hover:bg-lightPurple rounded-r-full">
                    <span className="sr-only">Click this button to open side bar</span>
                    <EyeIcon />
                </button>}
                </div>
            </div>
        </nav>
    );
} 