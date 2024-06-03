"use client"
import { useTheme } from "next-themes";
import Image from "next/image"
import moonIcon from "@/images/moonIcon.svg"
import sunIcon from "@/images/sunIcon.svg"
import { useEffect,useState } from "react";

export default function ThemeToggler() {
    const [hasMounted, setHasMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    useEffect(() => setHasMounted(true),[setHasMounted]);
    
    // this line is the key to avoid the error.
    if (!hasMounted) return null;

    return (
        <div className="ml-4 sm:ml-6 mb-2 flex items-center justify-center gap-6 py-3.5 bg-lightBg dark:bg-darkBg rounded">
            <Image src={sunIcon} alt="Light Theme Icon"/>
            <button type="button" className="bg-primaryPurple hover:bg-lightPurple rounded-full h-5 w-10 p-[3px] ring-primaryPurple" onClick={changeTheme}>
                <p className={` bg-white rounded-full h-full w-3.5 aspect-square transition ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <Image src={moonIcon} alt="Dark Theme Icon" />
        </div>
    )
}