import React from 'react';
import SubHeading from '@/app/components/subheading';
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { heroAboutTags } from '@/app/data/tags';

const AboutSection = () => {
    return (
        <div className='mt-14 p-4 text-black dark:text-slate-300' id='about'>
            <SubHeading text="About me" icon={HiOutlineCubeTransparent} />
            <div className="grid gap-6 pt-8">
                <p>Results-driven Full-Stack Software Engineer with over 3 years of experience building and
                    deploying scalable web applications using Node.js, Django, and React.js. Proficient in
                    relational and non-relational databases like PostgreSQL, MySQL, and MongoDB. </p>
                <p> Experienced
                    in backend development, API integration, and optimizing system performance. Skilled in
                    agile development processes, containerization with Docker, and CI/CD pipelines. Passionate
                    about problem-solving, contributing to innovative solutions, and collaborating with cross-functional
                    teams to deliver high-quality products.</p>
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
