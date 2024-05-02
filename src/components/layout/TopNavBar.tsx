import Image from "next/image";
import AddIcon from "../icons/AddIcon";
import logo from "@/images/logo.png"
import moreInfo from "@/images/moreInfo.svg"
import chevronDown from "@/images/chevronDown.svg"


export default function TopNavBar() {
    return (
        <>
            <header className="px-4 md:px-6 py-5 md:py-4 flex items-center justify-between dark:bg-darkGrey bg-white">
                <div className="flex items-center gap-4">
                    <Image src={logo} alt="Kanban management app logo"/>
                    <button className="flex items-center gap-1">
                        <span>Platform Launch</span>
                        <Image src={chevronDown} alt="Arrow facing down" className="md:hidden" />
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button className="btn btn-primary px-[18px] py-2.5 md:pl-6 md:pr-[25px] md:pt-[15px] md:pb-3.5">
                        <span className="heading-m hidden md:block">+Add New Task</span>
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