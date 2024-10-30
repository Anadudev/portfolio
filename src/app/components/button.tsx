import React from 'react'
import { ButtonPropTypes, ThemeToggleProps } from '@/app/types/types'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import Link from 'next/link';

const Button = (props: ButtonPropTypes) => {
  return (
    <div>
      {props.type === "linkPrimary" && <Link href={props.url || ''} className=" transition-hover ease-in-out font-semibold capitalize hover:text-primary cursor-pointer">link</Link>}

      {props.type === "buttonPrimary" && <div className={`group flex flex-col size-fit text-center`}>
        <button className={`relative font-semibold text-sm  hover:bg-${props.hoverColor ? ` ${props.hoverColor}` : ` `} text-slate-700 uppercase ${props.style || ''} tracking-wide ${props.shine ? `shine` : ``} text-slate-700 uppercase tracking-wide ${props.shine ? `shine` : ``}  before:-rotate-180`} onClick={props.onClick}>
          <span className={``}> {props.icon || ''} {props?.text}
          </span>
        </button>
        {/* {props.shadow && <span className={`relative -z-10`}>
          <span className={`absolute group-hover:visible invisible blur-md bg-primary -z-1 -top-3 left-[50%] translate-x-[-50%] border w-full h-7`}></span>
        </span>} */}
      </div>}

      {props.type === "linkOutline" && <div className={`flex flex-col size-fit text-center`}>
        <Link href='#' target='_blank' className={`font-semibold text-sm bg-transparent border border-primary text-primary uppercase px-4 py-2 tracking-wide rounded-lg ${props.shine ? `shine` : ``} before:bg-gradient-to-r from-primary before:-rotate-180`}>
          <span className={``}>
            let&apos;s talk y
          </span>
        </Link>
      </div>}
    </div>
  )
}


export const ThemeToggle = (props: ThemeToggleProps) => {
  return (
    <>
      <div className={`flex gap-4 ${props.theme == "dark" && `hidden`} `}>
        <button className={`before:animate-shake-r before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-primary before:rounded-full relative flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1 before:rotate-3`}><IoSunnyOutline className={`text-black font-bold text-xl`} />
          <span className='tablet-sm:block hidden ml-1 text-black'>Light</span>
        </button>
        <button className={`flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1`} onClick={props.onClick}><IoMoonOutline className={` font-bold text-xl text-black`} /> <span className='tablet-sm:block hidden ml-1 text-black'>Dark</span>
        </button>
      </div>
      <div className={`flex gap-4 ${props.theme == "light" && `hidden`} `}>
        <button className={`flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1`} onClick={props.onClick}>< IoSunnyOutline className={` font-bold text-xl`} />
          <span className='tablet-sm:block hidden ml-1 '>Light</span>
        </button>
        <button className={`before:animate-shake-l before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-primary before:rounded-full relative flex justify-center items-center size-8 tablet-sm:size-fit tablet-sm:px-1 before:rotate-3`}><IoMoonOutline className={`text-black font-bold text-xl`} />
          <span className='tablet-sm:block hidden ml-1 text-black'>Dark</span>
        </button>
      </div>
    </>
  )
}

export const ButtonNew = () => {
  return (
    <sup className={`border rounded-md flex items-center relative font-semibold w-fit shine  text-black dark:text-white uppercase tracking-wide before:bg-gradient-to-r dark:from-primary border-primary from-white before:-rotate-180 p-1 dark:before:bg-gradient-to-r dark:before:from-black bg-white dark:bg-black`} >
      <span className={`text-[.6rem]`}>
        NEW
      </span>
    </sup>
  )
}

export default Button;
