import Image from "next/image"
import moonIcon from "@/images/moonIcon.svg"
import sunIcon from "@/images/sunIcon.svg"
import { useState } from "react"

export default function ThemeToggler() {
    
    const [theme, setTheme] = useState("dark");
    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className="ml-6 mb-2 flex items-center justify-center gap-6 py-3.5 bg-lightBg dark:bg-darkBg rounded">
            <Image src={sunIcon} alt="Light Theme Icon"/>
            <button className="bg-primaryPurple hover:bg-lightPurple rounded-full h-5 w-10 p-[3px]" onClick={changeTheme}>
                <div className={`bg-white rounded-full h-full w-3.5 aspect-square transition ${theme === 'dark' ? 'dark:translate-x-5' : 'translate-x-0'}`} />
            </button>
            <Image src={moonIcon} alt="Dark Theme Icon"/>
        </div>
    )
}