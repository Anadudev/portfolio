"use client";
import React, { useState, useEffect } from 'react';
import { activities } from "@/app/data/activities";
import { activity } from "@/app/types/types";
import { IoLocationSharp } from "react-icons/io5";

const ExtraSection = () => {
    const [currentTime, setCurrentTime] = useState('');
    // Todo: get current users location

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="pt-5">
            <div className="grid gap-3">
                <h2 className='font-bold text-lg'>Current Time</h2>
                <div className="time grid gap-3 mb-12">
                    <p className='text-4xl font-bold dark:text-white'>{currentTime}</p>
                    <p className="flex items-center gap-3 cursor-pointer">
                        <IoLocationSharp />
                        <span className='underline'>Show My Location</span>
                    </p>
                </div>
            </div>
            <div className="extras mt-5 flex min-w-fit items-center justify-center">
                <div className="flex flex-col gap-2 ">
                    <p>In my free times I explore topics outside my fieldset:</p>
                    <ul className='flex gap-4'>
                        {activities.map((activity: activity, index: number) =>
                            < li className='relative group transition-all ease-in-out' key={index} >
                                <span className=''>
                                    {<activity.icon className='size-9 border p-2 rounded-xl group-hover:bg-primary dark:group-hover:bg-white  dark:group-hover:text-black transition-all ease-in-out' />}
                                </span>
                                <span className='group-hover:visible invisible absolute left-[50%] top-11 text-nowrap translate-x-[-50%] -z-10'>{activity.name}</span>
                            </li >)
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default ExtraSection;
