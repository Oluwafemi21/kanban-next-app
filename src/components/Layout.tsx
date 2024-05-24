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
            <div className="flex w-full h-full dark:text-white text-black">
                <section className="flex-1 flex flex-col min-h-screen overflow-y-hidden">
                    <SideBar isOpen={isSidebarOpen} toggleSidebar={handleSidebarView} />
                    <TopNavBar open={isSidebarOpen} />
                    <div className={`bg-light dark:bg-dark overflow-y-scroll overflow-x-auto scroll-mt-6 snap-y grow max-h-[calc(100vh-95px)] ${isSidebarOpen ? 'lg:ml-[300px]' : ''}`}>
                        {content}
                    </div>
                </section>
            </div>
        </>
    );
}
  