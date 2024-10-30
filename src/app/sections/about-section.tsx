import React from 'react';
import SubHeading from '@/app/components/subheading';
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { heroAboutTags } from '@/app/data/tags';

const AboutSection = () => {
    return (
        <div className='mt-14 p-4 text-black dark:text-slate-300' id='about'>
            <SubHeading text="About me" icon={HiOutlineCubeTransparent} />
            <div className="grid gap-6 pt-8">
                <p>Since the beginning of my journey as a developer, I have always been passionate about technology. Driven by passion, I have been continuously learning and seeking new challenges. My journey has been marked by a commitment to continuous growth and innovation.My early days were spent honing my skills in web development, and I have since expanded my knowledge to encompass a wide range of technologies.</p>
                <p>I am constantly seeking new opportunities to expand my knowledge and stay up-to-date with the latest trends. My passion for technology and my dedication to continuous learning make me a valuable asset to any team.</p>
            </div>
            <div className="pt-2">
                <ul className='flex items-center gap-2 flex-wrap'>
                    {heroAboutTags.map((tag, index) => <li className='bg-slate-900 text-white rounded-full px-2 text-sm dark:border border-slate-500 dark:hover:bg-slate-700 cursor-pointer' key={index}>{tag.text}</li>)}
                </ul>
            </div>
            <hr className="my-8 border-slate-300 dark:border-slate-700" />
        </div>
    )
}

export default AboutSection;
