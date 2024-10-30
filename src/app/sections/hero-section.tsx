import React from 'react';
import Image from 'next/image';
import Button from '@/app/components/button';
import Link from 'next/link';
import { socials } from '@/app/data/socials';

const HeroSection = () => {
    return (
        <div>
            <div className="her-image flex justify-center items-center">

                <Image className=' rounded-full size-56 border-4 dark:border-slate-200 border-slate-300' alt='hero image' src={`/profile/profile.jpg`} width={100} height={100} ></Image>
            </div>
            <div className="hero-text mt-4 text-center">
                <div className="flex gap-3 justify-center">
                    <h1 className='font-bold text-3xl '>Hello</h1>
                    <h1 className='font-bold text-3xl mb-7 dark:text-white'>I&apos;m Godwin</h1>
                </div>
                <p className='text-xl text-pretty'>Full-stack <span className='dark:text-primary'>Software  engineer</span> with 3+ years of experience in crafting dynamic and responsive web applications.</p>
            </div>

            <div className="her-actions flex items-center justify-center gap-4 mt-7">
                {socials.map((social, index) => <Link key={index} href={social.link} target="_blank">
                    {<social.icon className='dark:bg-black dark:border border-slate-500 text-4xl rounded-lg hover:bg-primary hover:text-white bg-slate-200 p-2  hover:drop-shadow-xl transition-all eas-in-out' />}
                </Link>)}

                <Button text="lets talk" shine={true} type='buttonPrimary' style='px-3 py-2 dark:bg-white bg-primary before:bg-gradient-to-r from-primary dark:from-white rounded-lg hover:drop-shadow-xl transition-all eas-in-out' shadow={true} />
            </div>

        </div>
    )
}

export default HeroSection;
