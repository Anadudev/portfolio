'use client';
import React, { useEffect, useState } from 'react';
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import localFont from "next/font/local";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});


const Root = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const localStorageTheme = localStorage.getItem("theme") || "light";
        setTheme(localStorageTheme);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${theme}  antialiased bg-slate-100 dark:bg-slate-950 max-w-[96rem] mx-auto`}
        >
            <div
                className={` `}
            >
                <Nav theme={theme} setTheme={setTheme} />
                {children}
                <Footer />
            </div>
        </body>
    )
}

export default Root;
