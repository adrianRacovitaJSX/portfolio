"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { ArrowRightIcon, FileCode2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[80dvh] md:min-h-screen md:-mt-10 w-full rounded-md flex bg-white dark:bg-black/[0.96] antialiased bg-grid-neutral-100/[0.4] dark:bg-grid-white/[0.025] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="emerald"
        darkFill="white"
      />
      <div className="w-full flex flex-col justify-center md:justify-center pt-8 md:pt-24 md:-mt-32">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-10 md:pt-0">
          <div className="z-10 flex items-center justify-center w-full mb-4 md:mb-6">
            <div
              className={cn(
                "w-fit group rounded-full border border-black/5 bg-neutral-100 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                "md:text-base [@media(height<=768px)]:text-sm"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 md:px-4 py-1.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="whitespace-normal text-center md:whitespace-nowrap text-xs md:text-base">
                  🪄 Construyendo UI/UX mágicos <br className="md:hidden" /> con
                  Next.js y TailwindCSS
                </span>
              </AnimatedShinyText>
            </div>
          </div>

          <h1 className="text-4xl leading-tight md:text-7xl [@media(height<=768px)]:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 px-2 md:px-0 mb-6 md:mb-6 small-screen-title">
            Transformando Conceptos en Experiencias de Usuario Innovadoras.
          </h1>

          <div className="flex items-center justify-center px-4 md:px-0 mb-6 md:mb-8">
            <p className="text-center antialiased text-lg md:text-2xl [@media(height<=768px)]:text-xl max-w-[85%] md:max-w-none">
              <span className="md:hidden leading-relaxed">
                Desarrollador <b>full-stack</b> especializado en React.JS,
                Next.JS y TailwindCSS
              </span>
              <span className="hidden md:block">
                Soy Adrián Racovita, un desarrollador <b>full-stack</b> con
                experiencia desarrollando
                <br />
                aplicaciones con React.JS, Next.JS, TailwindCSS, MongoDB y
                Node.JS
              </span>
            </p>
          </div>

          <div className="flex justify-center mt-8 md:mt-10 gap-4">
            <a href="#contacto">
              <button className="flex gap-1.5 antialiased justify-center items-center h-auto px-5 md:px-6 py-2.5 bg-black text-white text-[13px] md:text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg dark:border-white dark:border">
                <Mail size={15} /> Contacto
              </button>
            </a>
            <button className="flex gap-1.5 antialiased justify-center items-center h-auto px-5 md:px-6 py-2.5 bg-white text-black border-black border text-[13px] md:text-sm rounded-md font-semibold hover:bg-zinc/[0.8] hover:shadow-lg">
              <FileCode2 size={17} />
              <a href="/CV.pdf" target="_blank">
                Currículum
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
