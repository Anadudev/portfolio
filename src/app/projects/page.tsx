import React from 'react';
import TitleSection from '@/app/projects/sections/title-section'
import BodySection from '@/app/projects/sections/body-section'
const ProjectPage = () => {
    return (
        <div className="p-4 pt-36 text-black dark:text-slate-300">
                <TitleSection />
                <BodySection />
        </div>
    )
}

export default ProjectPage;
