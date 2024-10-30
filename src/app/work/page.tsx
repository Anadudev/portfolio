import React from 'react';
import TitleSection from '@/app/work/sections/title-section'
import BodySection from '@/app/work/sections/body-section'
const WorkPage = () => {
    return (
        <div className="p-4 pt-36 text-black dark:text-slate-300">
                <TitleSection />
                <BodySection />
        </div>
    )
}

export default WorkPage;
