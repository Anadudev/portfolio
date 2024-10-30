"use client";
import React, { useState } from 'react';
import localFont from "next/font/local";
import "../globals.css";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";



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
    let localStorageTheme = null
    // if (typeof window !== 'undefined') {
        localStorageTheme = localStorage.getItem("theme");
    // }
    const [theme, setTheme] = useState(localStorageTheme || "light");
    return (
        <body
            className={`${theme} ${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 dark:bg-slate-950 max-w-[96rem] mx-auto`}
        >
            <Nav theme={theme} setTheme={setTheme} />
            {children}
            <Footer />
        </body>
    )
}

export default Root;
