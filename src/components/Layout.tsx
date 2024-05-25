"use client"
import { useState } from "react";
import SideBar from "@/components/layout/SideBar";
import TopNavBar from '@/components/layout/TopNavBar';

export default function Layout({content}: {content: React.ReactNode}) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const handleSidebarView = () => {
        setSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <div className="min-h-screen grid">
                <div className="dark:text-white text-black bg-light dark:bg-dark">
                        <TopNavBar open={isSidebarOpen} />
                    <div className="w-full flex">
                        <SideBar isOpen={isSidebarOpen} toggleSidebar={handleSidebarView} />
                        <div className={`w-screen ${isSidebarOpen ? 'sm:pl-[261px] lg:pl-[300px]' : null}`}>
                           {content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  