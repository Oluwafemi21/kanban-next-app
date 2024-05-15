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
                <section className="flex-1 flex flex-col min-h-screen">
                    <SideBar isOpen={isSidebarOpen} toggleSidebar={handleSidebarView} />
                    <TopNavBar open={isSidebarOpen} />
                    <div className='overflow-x-scroll grow h-full'>
                        {content}
                    </div>
                </section>
            </div>
        </>
    );
}
  