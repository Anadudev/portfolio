"use client";
import React from 'react';
import { LogoPropTypes } from '@/app/types/types';
import Link from 'next/link';

const Logo = (props: LogoPropTypes) => {
    return (
        <Link href={props.link || '/'} className={`site-logo ${props.stye}`}>{props.icon || ``} {props.logo || `AnaduDev`}</Link>
    )
}

export default Logo;
