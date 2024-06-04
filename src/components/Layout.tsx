"use client"
import { useState } from "react";
import SideBar from "@/components/layout/SideBar";
import TopNavBar from '@/components/layout/TopNavBar';
import Introduction from "./Introduction";

export default function Layout({content}: {content: React.ReactNode}) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [userIntro, setUserIntro] = useState(true)
    
    const handleSidebarView = () => {
        setSidebarOpen(!isSidebarOpen)
    }

    const closeIntro = () => {
        setUserIntro(!userIntro)
    }

    return (
        <>
            <div className="min-h-screen grid">
                <div className="dark:text-white text-black bg-light dark:bg-dark">
                        <TopNavBar open={isSidebarOpen} toggleSidebar={handleSidebarView} />
                    <div className="w-full flex">
                        <SideBar isOpen={isSidebarOpen} toggleSidebar={handleSidebarView} />
                        <div className={`w-screen ${isSidebarOpen ? 'md:pl-[261px] lg:pl-[300px]' : ''}`}>
                           {content}
                        </div>
                    </div>
                </div>
            </div>
            {userIntro && (
                <Introduction skipIntro={closeIntro} />
            )}
        </>
    );
}
  