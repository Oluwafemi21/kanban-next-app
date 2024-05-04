"use client"
import { useState } from "react";
import Image from "next/image";
import moonIcon from "@/images/moonIcon.svg"
import sunIcon from "@/images/sunIcon.svg"
import EyeIcon from "../icons/EyeIcon";
import EyeCloseIcon from "../icons/EyeCloseIcon";
import BoardIcon from '@/components/icons/BoardIcon'
import ColumnNav from "../ColumnNav";

export default function SideBar() {
    const columns = [
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
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [currentColumn, setCurrentColumn] = useState<string>("platform launch");

    const changeColumn = (id: number) => {
        console.log(1)
        let column = columns.find((c) => c._id === id)
        console.log(column)
        setCurrentColumn(column!.text)
    }

    const addColumn = () => {
        console.log('hi')
        columns.push({
            _id: columns.length + 1,
            text:"new column"
        })
    }

    return (
        <nav className="w-[300px] border-r border-lightLines dark:border-darkLines h-screen flex flex-col pr-6 bg-white dark:bg-darkGrey"
        >
            <header className="pl-8 pt-8">
                {/* <Image src={lightLogo} alt="Kanban Logo for light mode" className="d"/>
                <Image src={darkLogo} alt="Kanban Logo for dark mode" /> */}
                <div className="logo w-full mb-[54px]"></div>
                <p className="uppercase text-mediumGrey text-xs/[15px] tracking-[2.4px] font-bold ">All boards (8)</p>
            </header>
            <div className="flex-1 mt-5">
                {columns.map(({_id,text}) => {
                    return <ColumnNav text={text} isActive={currentColumn === text ? true : false} changeColumn={ () => changeColumn(_id) } key={_id}/>
                })}
                <button onClick={addColumn} className="hover:bg-primaryPurple/10 w-full text-primaryPurple pl-6 py-4 rounded-r-full flex items-center gap-4">
                    <BoardIcon />
                    <span className="heading-m capitalize">+ create new board</span>
                </button>
            </div>
            <div>
                <div className="ml-6 mb-2 flex items-center justify-center gap-6 py-3.5 bg-lightBg dark:bg-darkBg rounded">
                    <Image src={sunIcon} alt="Light Theme Icon"/>
                    <button className="bg-primaryPurple hover:bg-lightPurple rounded-full h-5 w-10 p-[3px]">
                        <div className="bg-white rounded-full h-full w-3.5 aspect-square transition dark:translate-x-5 translate-x-0" />
                    </button>
                    <Image src={moonIcon} alt="Dark Theme Icon"/>
                </div>
                <button onClick={()=> setSidebarOpen(!isSidebarOpen)} className="w-full mb-8 flex items-center gap-2.5 text-mediumGrey pl-8 py-4 dark:hover:bg-white dark:hover:text-primaryPurple rounded-r-full">
                    <EyeCloseIcon />
                    <span className="heading-m font-bold text-[15px]/[18px]">Hide Sidebar</span>
                </button>
                {!isSidebarOpen && <button onClick={()=> setSidebarOpen(!isSidebarOpen)} className="fixed bottom-0 left-0 w-14 flex items-center justofy-center mb-8 pl-8 py-3.5 bg-primaryPurple text-white hover:bg-lightPurple rounded-r-full">
                    <span className="sr-only">Click this button to open side bar</span>
                    <EyeIcon />
                </button>}
            </div>
        </nav>
    );
}