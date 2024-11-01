"use client";
import React from 'react';
import SubTitle from '@/app/components/subheading';
import ToolsInfiniteScroll from '@/app/components/tools-infinite-scroll';
import { FaCode } from "react-icons/fa";
import { techStacks1, techStacks2 } from '@/app/data/tools';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import { quotes } from '@/app/data/quotes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ToolsSection = () => {

    return (
        <div className=''>
            <div className="px-4">
                <SubTitle text='My Daily Tech' icon={FaCode} />
            </div>
            <div className="grid tablet-sm:gap-9 gap-7 pt-5 tablet-sm:pt-8">
                <div className="px-4 tablet-sm:gap-9 grid gap-7 dark:text-white">
                    <ToolsInfiniteScroll item={techStacks1} />
                    <ToolsInfiniteScroll item={techStacks2} reverse={true} />
                </div>
                <div className="dark:text-white">
                    <Swiper
                        direction={'vertical'}
                        modules={[A11y, Autoplay]}
                        loop={true}
                        allowTouchMove={false}
                        autoplay={{ delay: 4000 }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        className='h-36 mobile-lg:h-28 mobile-xlg:h-20 tablet-sm:h-28'
                    >
                        {quotes.map((quote, index) => <SwiperSlide className='animate-blur-to-clear z-10 text-2xl font-bold my-auto p-3' key={index}><p className=''>{quote.text}</p></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ToolsSection;
