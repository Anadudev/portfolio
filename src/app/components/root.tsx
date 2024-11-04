'use client';
import React, { useState } from 'react';
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";


const Root = ({ children }: { children: React.ReactNode }) => {
    const localStorageTheme = typeof window !== 'undefined' && localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(localStorageTheme);

    return (
        <div
            className={`${theme}  bg-slate-100 dark:bg-slate-950 size-full max-w-[96rem] mx-auto`}
        >
            <Nav theme={theme} setTheme={setTheme} />
            {children}
            <Footer />
        </div>
    )
}

export default Root;
