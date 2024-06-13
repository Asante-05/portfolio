"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorksSliderBtn from "@/components/ui/worksSliderBtn";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "promptopia",
    description: "Promptopia is a collaborative platform where users share AI-generated prompts to boost productivity and creativity. Whether you're looking for writing prompts, coding challenges, or brainstorming ideas, Promptopia provides a diverse range of prompts contributed by the community. Join us to explore, create, and inspire!",
    stack: [{ name: "Nextjs" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "https://github.com/Asante-05/promptopia",
  },
  {
    num: "02",
    category: "frontend",
    title: "My Showmax",
    description: "Showmax is your go-to destination for unlimited entertainment, offering a vast library of movies, TV shows, and documentaries. With a user-friendly interface and seamless streaming experience, you can enjoy your favorite content anytime, anywhere. From blockbuster hits to critically acclaimed series, Showmax caters to every taste and mood. Dive into a world of cinematic delights with Showmax and discover endless hours of entertainment at your fingertips.",
    stack: [{ name: "Nextjs" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "https://github.com/Asante-05/MyShowMax",
  },
  {
    num: "03",
    category: "React Native",
    title: "React Native Jobs",
    description: "React Native Jobs is your mobile solution for finding job opportunities in DevOps and web development. Built with React Native, our app offers a seamless experience for discovering remote, freelance, and full-time positions tailored to your skills and interests. Browse curated listings from top companies, apply with ease, and track your job search progress on the go. Whether you're a seasoned developer or just starting out, React Native Jobs is your gateway to a rewarding career in the tech industry.",
    stack: [{ name: "Nextjs" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "https://github.com/Asante-05/react-native-jobs",
  },
];

function Works() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full order-2 flex flex-col 
          xl:justify-between xl:w-[50%] xl:h-[460px]  xl:order-none"
          >
            <div className="flex flex-col gap-5 h-[50%]">
              <div
                className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
              >
                {project.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex flex-row gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                    flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-md text-primary px-1">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5
                    flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-md text-primary px-1">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="w-full order-1 
           xl:w-[50%]  xl:order-none"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div
                      classN
                      ame="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"
                    ></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorksSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
                iconsStyles=''
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Works;
