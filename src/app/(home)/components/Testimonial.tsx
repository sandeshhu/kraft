
"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { SparklesIcon } from 'lucide-react';
import React, { useRef } from 'react'
import TestiRow from './TestiRow';
import { testimonials } from '@/constant/constant';
import { Three3dPng } from '../../../../public/assets/images/images';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section ref={sectionRef} className='py-20 overflow-x-clip relative'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-5'>
                 <div className='w-fit border rounded-2xl px-4 py-1 flex items-center gap-2'>
         <SparklesIcon className='fill-[#EEBDE0] stroke-1 text-neutral-800' />
         <span className='font-mono'>Testimonials</span></div>

         <div className='flex flex-col items-center'>
            <span className='font-[poppins] text-5xl text-center md:text-7xl font-black'>Loved By <span>Clients</span><p className='text-xs md:text-lg mt-2 font-mono text-center font-medium'>See What the community is saying about FingUI.</p> </span>

         </div>

         <div   className="relative h-[500px] lg:w-[1300px]  lg:h-[500px]  overflow-hidden 
  [mask-image:linear-gradient(to_right,transparent,black_70%,black_10%,transparent)] 
  [mask-repeat:no-repeat] [mask-size:100%_100%]
  px-6 lg:px-12 flex flex-col gap-12">
         <TestiRow
          data={testimonials}
         />

         <TestiRow
          data={testimonials}
          reverse
         />
         </div>

         <motion.img
           src={Three3dPng.Three3d3.src}
           alt=''
           width={262}
           height={262}
           style={{translateY}}
           className='hidden md:block absolute right-32 -top-2'
         />
            </div>
        </div>
    </section>
  )
}

export default Testimonials
