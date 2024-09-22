"use client"
import React from 'react'
import CountUp from 'react-countup'


const stats = [
    {
        num: 2,
        text: "Years of experince"
    },
    {
        num: 3,
        text: "Completed Projects"
    },
    {
        num: 4,
        text: "Technologies Learned"
    },
    {
        num: 9,
        text: "Code commits"
    },
 
]

function Stats() {
  return (
    <section className=' pb-12 xl:pt-0 xl:pb-0'>
        <div className='container mx-auto'>
         <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto  xl:max-w-none'>
            {stats.map((item, index) => (
                <div
                className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
                 key={index}>
                    <CountUp className='text-4xl xl:text-6xl font-extrabold'  delay={2} duration={6} end={item.num}/>
                    <p className={`${item.text.length < 15 ?  'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{item.text}</p>
                </div>

            ))}
         </div>
         </div>
    </section>
  )
}

export default Stats