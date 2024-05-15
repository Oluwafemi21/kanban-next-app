"use client"
import Image from "next/image";
import AddIcon from "../icons/AddIcon";
import logo from "@/images/logo.png"
import moreInfo from "@/images/moreInfo.svg"
import chevronDown from "@/images/chevronDown.svg"
import darkLogo from "@/images/darkLogo.png"
import lightLogo from "@/images/lightLogo.png"

interface propType {
    open: boolean
}

export default function TopNavBar({ open }: propType) {
    const showDropDown = () => {
        console.log('dropdown showing')
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
                <div className="flex items-center gap-4 md:pr-6">
                    <button className="btn btn-primary text-[13px]/5 font-bold px-[18px] py-2.5 md:pl-6 md:pr-[25px] md:pt-[15px] md:pb-3.5">
                        <span className="hidden md:block">+Add New Task</span>
                        <AddIcon styling="md:hidden"/>
                    </button>
                    <button>
                        <Image src={moreInfo} alt="More info button" />
                    </button>
                </div>
            </header>
        </>
    );
}