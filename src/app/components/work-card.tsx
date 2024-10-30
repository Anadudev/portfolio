import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Image from 'next/image';
import { tags, work } from '@/app/types/types';

const WorkCard = (props: work) => {
    return (
        <div className="slider border  border-slate-300 dark:border-slate-700 rounded-xl">
            <div className="h-96 relative overflow-hidden rounded-t-xl">
                <Link href={props.link || ''} className="absolute animate-slide-down slide-up -z-10 slide-down top-0 left-0 w-full ease-out h-fit" title='Visit Website'>
                    <Image className='w-full' src={props.thumbnail || ''} alt={props.name} width={100} height={100} />
                </Link>
            </div>
            <div className="p-4 grid gap-2 pt-5">
                <div className="flex gap-5 justify-between">
                    <h3 className='text-2xl font-bold '>{props.name}</h3>
                    <div className="">
                        <ul className='flex gap-3 flex-wrap'>
                            {props?.tags?.map((tag, index: number) => <li key={index} className=''>
                                {(tag as tags).visible && <small className='bg-slate-200 dark:bg-black border dark:border-slate-700 text-slate-500 dark:text-slate-200 rounded-full font-bold px-2 py-1 capitalize'>
                                    {(tag as tags).text || ""}
                                </small>}
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <p className='text-slate-600 dark:text-slate-300'>{props.description}</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    <Link href={props.link || ''} target="_blank" className='flex border border-slate-300 text-sm gap-3 w-fit px-3 py-1 transition-all ease-in-out hover:bg-primary hover:border-primary bg-white text-black rounded hover:shadow-lg'>
                        <p className='tracking-wider'>Live Demo</p>
                        <MdOutlineArrowOutward className="hang-up" />
                    </Link>
                    <div className="group overflow-hidden github-work">
                        <Link href={props.link || ''} className='flex group items-center border border-slate-300 dark:border-slate-700 text-sm  gap-3 w-fit px-3 py-1 transition-all ease-in-out'>
                            <p className='tracking-wider dark:group-hover:text-primary'>View on GitHub</p>
                            <BsGithub className=" dark:group-hover:text-primary" />
                        </Link>
                        <div className="group-hover:border slide-right border-primary slide-left"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
