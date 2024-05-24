import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from '@/components/Layout'
import { ThemeProvider } from "next-themes"


// const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "KanBan App",
  description: "A management website application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-jakarta overflow-hidden w-full ">
        <ThemeProvider attribute="class">
          <Layout content={children} />
        </ThemeProvider>
      </body>
    </html>
  );
}
