import SideBar from '@/components/layout/SideBar';
import TopNavBar from '@/components/layout/TopNavBar';

export default function Layout({content}: {content: React.ReactNode}) {
    return (
        <>
            <div className="flex w-full h-full dark:text-white text-black">
                <div className="hidden md:block">
                    <SideBar />
                </div>

                <section v-else className="w-full max-w-full flex flex-col min-h-screen">
                    <TopNavBar />
                    <div className='overflow-x-scroll grow h-full'>
                        {content}
                    </div>
                </section>
            </div>
        </>
    );
}
  