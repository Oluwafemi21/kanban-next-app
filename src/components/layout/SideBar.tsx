import Image from "next/image";
import logo from "@/images/logo.png"

export default function SideBar() {
    return (
        <nav className="w-[300px] border-r border-lightLines dark:border-darkLines h-screen">
            <header className="flex items-center gap-4 p-3">
                <Image src={logo} alt="Kanban Application Logo" />
                <span className="heading-l">Kanban</span>
            </header>
        </nav>
    );
}