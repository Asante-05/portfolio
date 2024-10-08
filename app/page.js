"use client";
import React from "react";
import Stats from "@/components/Stats";
import Photo from "@/components/photo";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// trying to add animations for the movement of main text on mount #current not working

export default function Home() {
  return (
    <section className="h-full overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center xl:flex-row justify-between pt-8 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1
              
              className="h1 mb-6 mt-6"
            >
              Hello I'm
              <br />
              <span className="text-accent">Asante Kelvin</span>
            </h1>
            <p
              
              className="max-w-[500px] mb-9 text-white/80"
            >
              I excel at crafting elegant digital experience and I am proficeint
              in various programming languages and technologies
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row ">
              <Button
                variant="outline"
                size="lg"
                className="flex flex-row gap-2 items-center"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle={`flex flex-row gap-5`}
                  iconStyle={`w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent text-base
                hover:bg-accent hover:text-primary transition-all duration-500`}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none">
            <Photo />
            {/* <Particle/> */}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
