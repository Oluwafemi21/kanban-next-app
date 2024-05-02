import Image from "next/image";
// import lightLogo from "@/images/lightLogo.png"
// import darkLogo from "@/images/darkLogo.png"
import moonIcon from "@/images/moonIcon.svg"
import sunIcon from "@/images/sunIcon.svg"
import eyeIcon from "@/images/eyeIcon.svg"

export default function SideBar() {
    return (
        <nav className="w-[300px] border-r border-lightLines dark:border-darkLines h-screen flex flex-col pr-6 bg-white dark:bg-darkGrey">
            <header className="pl-8 pt-8">
                {/* <Image src={lightLogo} alt="Kanban Logo for light mode" className="d"/>
                <Image src={darkLogo} alt="Kanban Logo for dark mode" /> */}
                <div className="logo w-full mb-[54px]"></div>
                <p className="uppercase text-mediumGrey text-xs/[15px] tracking-[2.4px] font-bold ">All boards(8)</p>
            </header>
            <div className="flex-1 mt-5">
                <p>Links go here</p>
            </div>
            <div className="pl-6 mb-11">
                <div className="mb-[30px] flex items-center justify-center gap-6 py-3.5 bg-lightBg dark:bg-darkBg rounded">
                    <Image src={sunIcon} alt="Light Theme Icon"/>
                    <button className="bg-primaryPurple rounded-full h-5 w-10 p-[3px]">
                        <div className="bg-white rounded-full h-full w-3.5 aspect-square transition dark:translate-x-5 translate-x-0" />
                    </button>
                    <Image src={moonIcon} alt="Dark Theme Icon"/>
                </div>
                <button className="flex items-center gap-2.5 text-mediumGrey">
                    <Image src={eyeIcon} alt="Hide sidebar icon"/>
                    <span className="heading-m font-bold text-[15px]/[18px]">Hide Sidebar</span>
                </button>
            </div>
        </nav>
    );
}