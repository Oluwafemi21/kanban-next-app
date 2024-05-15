import { useTheme } from "next-themes";
import Image from "next/image"
import moonIcon from "@/images/moonIcon.svg"
import sunIcon from "@/images/sunIcon.svg"

export default function ThemeToggler() {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return (
        <div className="ml-6 mb-2 flex items-center justify-center gap-6 py-3.5 bg-lightBg dark:bg-darkBg rounded">
            <Image src={sunIcon} alt="Light Theme Icon"/>
            <button className="bg-primaryPurple hover:bg-lightPurple rounded-full h-5 w-10 p-[3px]" onClick={changeTheme}>
                <div className={`bg-white rounded-full h-full w-3.5 aspect-square transition ${theme === 'light' ? 'dark:translate-x-0' : 'translate-x-5'}`} />
            </button>
            <Image src={moonIcon} alt="Dark Theme Icon" />
        </div>
    )
}