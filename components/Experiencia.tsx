import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Image from "next/image";
import { Timeline } from "./ui/timeline";
import { motion } from "framer-motion";

const Experiencia = () => {
  const data = [
    {
      title: "2022 - 2024",
      content: (
        <div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold md:text-2xl md:font-bold">
              Desarrollador Web <span className="font-medium">-</span>{" "}
              <a
                href="https://iempresa.net"
                target="_blank"
                className="font-medium cursor-pointer text-emerald-500 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 ease-in-out"
              >
                iempresa - agencia de marketing
              </a>
            </p>
            <p className="mb-8 text-sm md:text-md">
              En iempresa, desarrollo soluciones web a medida, traduciendo las
              necesidades específicas del cliente en productos funcionales. Mi
              enfoque combina experiencia técnica con comunicación efectiva para
              asegurar que cada proyecto cumpla y supere las expectativas del
              cliente.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://fisiolution.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captFisio.png"
                alt="fisiolution"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="https://institutoifs.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captIFS.png"
                alt="institutoifs"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="https://publicidadybanderas.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captScreen.png"
                alt="screendigital"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="https://iddiufv.edu.es/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captUfv.png"
                alt="iddiufv"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl md:font-bold font-semibold">
              Project Manager <span className="font-medium">-</span>{" "}
              <a
                href="https://iempresa.net"
                target="_blank"
                className="font-medium cursor-pointer text-emerald-500 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 ease-in-out"
              >
                iempresa - agencia de marketing
              </a>
            </p>
            <p className="mb-8 text-sm md:text-md">
              Como Project Manager en iempresa, gestiono proyectos de principio
              a fin, planificando, asignando recursos y liderando equipos para
              garantizar entregas puntuales y dentro del presupuesto. Utilizo
              metodologías ágiles para optimizar procesos, fomentar la
              colaboración y asegurar el cumplimiento de los objetivos
              estratégicos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://aranes.conselharan.org/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captAranes.png"
                alt="aranes"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="http://taskontrol.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captTaskontrol.png"
                alt="taskontrol"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - Actual",
      content: (
        <div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl md:font-bold font-semibold">
              Desarrollador Full-Stack <span className="font-medium">- </span>
              <a
                href="/"
                className="font-medium cursor-pointer text-emerald-500 dark:text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 ease-in-out"
              >
                Freelance
              </a>
            </p>
            <p className="mb-8 text-sm md:text-md">
              En iempresa, desarrollo soluciones web a medida, traduciendo las
              necesidades específicas del cliente en productos funcionales. Mi
              enfoque combina experiencia técnica con comunicación efectiva para
              asegurar que cada proyecto cumpla y supere las expectativas del
              cliente.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="http://simplifycrm.es/"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captSimplify.png"
                alt="simplify"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="http://docs.simplifycrm.es"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captDocsSimplify.png"
                alt="docs simplify"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a
              href="http://crm.elgatoconbolsas.es"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/proyectos/captGato.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="/" target="_blank" className="cursor-pointer">
              <Image
                src="/proyectos/captIntelliform.png"
                alt="intelliform"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="dark:bg-black bg-white md:-mt-56 -mt-20" id="experiencia">
      <div className="h-[12rem] flex items-center justify-center relative mb-10 md:mb-0">
        <h2 className="absolute text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 z-10">
          EXPERIENCIA
        </h2>
        <TextHoverEffect text="EXPERIENCIA" />
      </div>
      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experiencia;
