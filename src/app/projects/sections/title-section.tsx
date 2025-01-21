import React from 'react';
import Title from '@/app/components/title'
const TitleSection = () => {
  return (
    <div className='grid gap-8'>
      <div className="flex justify-center items-center">
        < Title text={'Projects'} pulse={true} />
      </div>
      <div className="">
        <p className={`text-center text-pretty`}>
          Hi Guys, welcome to my project list! This evolving list is a personal log of all the websites I&apos;ve built using Next.js. Whether it&apos;s a quick experiment or a full-fledged project, every step helps me sharpen my skills and deepen my understanding of this powerful framework. Stay tuned as this journey may be long or short—either way, it&apos;s all about growth and learning.
        </p>
      </div>
    </div>
  )
}
export default TitleSection;
