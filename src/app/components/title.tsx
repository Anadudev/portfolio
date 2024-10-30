import React from 'react';
import { TitlePropTypes } from '@/app/types/types';

const Title = (props: TitlePropTypes) => {
    return (
        <h1 className={`border rounded-2xl dark:text-white capitalize size-fit px-12 py-1 text-3xl font-bold cursor-pointer`}>
            <p className={` ${props.pulse && 'animate-pulse'}`}>{props.text || ''}</p>
        </h1>
    )
}

export default Title;
