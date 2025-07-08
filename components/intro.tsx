"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section';

export default function Intro() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
    
  const {ref} = useSectionInView('Home', 0.5);
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2}}>
                    <Image src="/poza_cv.jpg" alt="Alex portrait" width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/> 
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-3xl' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} 
                transition={{type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}>
                    👋
                </motion.span>
            </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>

        <span className="font-bold"> Hey there, I'm Alex!</span> Just graduated with a 
        <span className="font-bold"> Bachelor's in Computer Science.</span> I love doing
        <span className="font-bold"> websites, apps,</span>and all sorts of cool stuff.
         My focus is 
        <span className="underline"> Python and React (Next.js)</span> 
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} transition={{delay:0.1}}>

        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 
        hover:bg-gray-950 active:scale-105 transition' onClick={() => {setActiveSection("Contact"); setTimeOfLastClick(Date.now())}}>Contact me here
        <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>

        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 
        active:scale-105 transition cursor-pointer border broder-black/10 dark:bg-white/10' href='/Popescu_Alexandru_resume.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
        hover:text-gray-950 active:scale-105 transition cursor-pointer border broder-black/10 dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/alexandru-popescu-18b412235/' target="_blank">
          <BsLinkedin />
        </a>

        <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] 
        hover:text-gray-950 active:scale-105 transition cursor-pointer border broder-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/alexandrupopescu0' target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>


    </section>
  )
}
