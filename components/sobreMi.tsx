"use client"
import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import IconCloud from "@/components/ui/icon-cloud";
import Globe from "@/components/ui/globe";
import { Compare } from "./ui/compare";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { Cpu, Dumbbell, FileCode2, FolderCode, Lightbulb } from "lucide-react";

const SobreMi = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
  ];

  function GlobeDemo() {
    return (
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg">
        <Globe className="-bottom-32 md:-bottom-40" />{" "}
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    );
  }

  const EvervaultCardDemo = () => (
    <div className="flex flex-col items-start w-full h-full min-h-[6rem] relative border border-black/[0.2] dark:border-white/[0.2] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
      <EvervaultCard text="hover:" />
    </div>
  );

  const TechStack = () => (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg dark:border border dark:bg-black px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );

  const items = [
    {
      title: "Pasión por la Innovación",
      description:
        "Desde joven, la tecnología ha sido mi ventana a un mundo de posibilidades infinitas. A los 22 años, transformo esta pasión en soluciones digitales que impactan en el mundo real, siempre buscando la próxima frontera de la innovación.",
      header: <EvervaultCardDemo />,
      className: "md:col-span-2",
      icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mi Tech Stack",
      description:
        "Especializado en desarrollo web moderno con React, Next.js, TailwindCSS y JavaScript/TypeScript. Sólida base en HTML5 y CSS3 con experiencia en diseño responsive. Desarrollo backend con Node.js y despliegue en AWS. Complemento mi stack con herramientas esenciales como PostgreSQL, Docker y control de versiones.",
      header: <TechStack />,
      className: "md:col-span-1",
      icon: <FolderCode className="h-4 w-4 text-neutral-500" />
    },
    {
      title: "Emprendimiento Digital",
      description:
        "Desarrollo y mantengo múltiples SaaS y aplicaciones para clientes, convirtiendo ideas ambiciosas en productos exitosos. Mi enfoque combina visión técnica con mentalidad empresarial.",
      header: <GlobeDemo />,
      className: "md:col-span-1",
      icon: <Lightbulb className="h-4 w-4 text-neutral-500" />
    },
    {
      title: "Más Allá del Código",
      description:
        "Equilibro el desarrollo de software con el desarrollo personal. Mi pasión por el deporte y el crecimiento personal mejora mi enfoque en la programación: disciplina y constancia.",
      header: (
        <div className="relative flex items-center justify-center h-full w-full overflow-hidden rounded-lg">
          <Compare
            firstImage="/fotoCode.png"
            secondImage="/fotoPersonal.png"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="h-full w-full"
            slideMode="hover"
          />
        </div>
      ),
      className: "md:col-span-2",
      icon: <Dumbbell className="h-4 w-4 text-neutral-500" />
    },
  ];

  return (
    <div className="dark:bg-black bg-white pt-20" id="conoceme">
      <div className="h-[12rem] flex items-center justify-center relative">
        <h2 className="absolute text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 z-10">
          CONÓCEME
        </h2>
        <TextHoverEffect text="CONÓCEME" />
      </div>
      <div className="w-full px-6 md:w-full">
        <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default SobreMi;
