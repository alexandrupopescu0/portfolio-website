"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ dedlay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a recent graduate with a degree in{" "}
        <span className="font-medium">Computer Science</span> and a passion 
        for building innovative software solutions. I'm excited to embark on my journey as a{" "}
        <span className="font-medium">software developer</span>{" "}
        <span className="italic">and eager to contribute my skills to exciting projects</span>.
        My core stack of technologies includes{" "}
        <span className="font-medium">
        Python and Django
        </span>
        . I've developed proficiency in these technologies through coursework and personal projects. 
        Additionally, I'm currently expanding my knowledge by diving into Next.js. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and going out with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">financial investments</span>.
      </p>
    </motion.section>
  );
}
