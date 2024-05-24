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
            <div className="min-h-screen  grid">
                <div className="dark:text-white text-black bg-light dark:bg-dark">
                    <section className="overflow-hidden w-screen">
                        <SideBar isOpen={isSidebarOpen} toggleSidebar={handleSidebarView} />
                        <TopNavBar open={isSidebarOpen} />
                    </section>
                    <div className={`w-full ${isSidebarOpen ? 'lg:ml-[300px]' : ''}`}>
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
}
  