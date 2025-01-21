import React from 'react';
import SubTitle from '@/app/components/subheading';
import WorksInfiniteScroll from '@/app/components/projects-infinite-scroll';
import { works1, works2 } from '@/app/data/projects';
import { FaLaptopCode } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';

const WorksSection = () => {

    return (
        <div className='mt-14'>
            <div className="px-4">
                <SubTitle text='My Projects' icon={FaLaptopCode} />
            </div>
            <div className="grid gap-4 pt-8">
                <div className="grid">
                    <div className="px-4 grid gap-7">
                        <WorksInfiniteScroll item={works1} />
                        <WorksInfiniteScroll item={works2} reverse={true} />
                    </div>
                    <div className="w-fit justify-self-end group hanger-group overflow-hidden">
                        <Link href="/projects" className='flex text-sm gap-3 w-fit pt-3 transition-all ease-in-out group-hover:text-primary'>
                            <p className='tracking-wider dark:text-white'>Explore more</p>
                            <MdOutlineArrowOutward className="hang-up"/>
                        </Link>
                        <div className="group-hover:border-b group-hover:animate-grow-to-right border-primary"></div>
                    </div>
                </div>
                <div className="">
                    <div className=" mt-28 mb-20 ">
                        <Link className=' flex border group border-primary rounded-xl px-3 py-2 items-center gap-3 w-fit mx-auto' href="mailto:anadudev@gmail.com" target="_blank">
                            <FaRegDotCircle className='text-primary animate-pulse ' />
                            <p className='tracking-widest'>Open for project: Full time/remote</p>
                            <FaLocationArrow className="group-hover:text-primary transition-colors ease-in-out"/>
                        </Link>
                    </div>
                    <div className="text-pretty">
                        <p>A strong online presence is critical for success in today&apos;s competitive market. A website serves as the foundation of this presence, offering a 24/7 platform to engage with customers and clients. And having a strong professionally built website is a great way to get your brand recognized and attract potential clients to your business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksSection;
