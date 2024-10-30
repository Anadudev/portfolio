import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    text: string;
    icon?: IconType;
}

const Subheading = (props: Props) => {
    return (
        <h2 className='flex gap-2 text-lg items-center dark:text-white'>
            <span>{props.icon && <props.icon className='animate-pulse text-primary'/>}</span>
            <span className='font-extrabold uppercase'>{props.text}</span>
        </h2>
    )
}

export default Subheading
