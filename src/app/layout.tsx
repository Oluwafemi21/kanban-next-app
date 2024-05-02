import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from '@/components/Layout'

const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={pjs.className}>
        <main className="bg-light dark:bg-dark min-h-screen grid">
            <Layout content={children} />
        </main>
      </body>
    </html>
  );
}
