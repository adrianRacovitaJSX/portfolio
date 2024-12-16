import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { HeroParallax } from "./ui/hero-parallax";

const Proyectos = () => {
  const proyectos = [
    {
      title: "Simplify CRM",
      link: "https://simplifycrm.es",
      thumbnail: "/proyectos/captSimplify.png",
      description:
        "Plataforma de gestión empresarial para optimizar procesos como facturación, seguimiento de clientes y análisis de datos clave.",
      technologies: ["nextjs", "typescript", "tailwind", "nodejs"],
    },
    {
      title: "Simplify Docs",
      link: "https://docs.simplifycrm.es/",
      thumbnail: "/proyectos/captDocsSimplify.png",
      description:
        "Documentación oficial con guías detalladas para maximizar el uso de las funcionalidades de Simplify CRM.",
      technologies: ["nextjs", "typescript", "tailwind", "nodejs"],
    },
    {
      title: "CRM El Gato Con Bolsas",
      link: "https://crm.elgatoconbolsas.es",
      thumbnail: "/proyectos/captGato.png",
      description:
        "Solución CRM personalizada para la gestión eficiente de clientes y ventas.",
      technologies: ["reactjs", "javascript", "css", "express"],
    },
    {
      title: "Bridge App",
      link: "https://bridge.aracovita.dev/",
      thumbnail: "/proyectos/captBridge.png",
      description:
        "Aplicación diseñada para simplificar procesos empresariales mediante la integración de datos.",
      technologies: ["nextjs", "typescript", "tailwind", "nodejs"],
    },
    {
      title: "Fisiolution",
      link: "https://fisiolution.com/",
      thumbnail: "/proyectos/captFisio.png",
      description:
        "Página web de una clínica de fisioterapia especializada en tratamientos y servicios personalizados.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "Instituto IFS",
      link: "https://institutoifs.com/",
      thumbnail: "/proyectos/captIFS.png",
      description:
        "Sitio web del Instituto IFS, enfocado en programas educativos y actividades formativas.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "Rehatrans",
      link: "https://rehatrans.com/",
      thumbnail: "/proyectos/captRehatrans.png",
      description:
        "Web de una empresa dedicada a la adaptación de vehículos para personas con movilidad reducida.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "Screen & Digital",
      link: "https://publicidadybanderas.com/",
      thumbnail: "/proyectos/captScreen.png",
      description:
        "Servicios de impresión y publicidad personalizada, centrados en creatividad y diseño.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "Intelliform IA [En desarrollo]",
      link: "/",
      thumbnail: "/proyectos/captIntelliform.png",
      description:
        "SaaS que genera formularios y encuentas con inteligencia artificial, válida respuestas con IA.",
      technologies: ["nextjs", "typescript", "tailwind", "nodejs"],
    },
    {
      title: "Academia Melius",
      link: "https://academiamelius.com/",
      thumbnail: "/proyectos/captMelius.png",
      description:
        "Plataforma educativa con cursos interactivos para diversas áreas de aprendizaje.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "IDDI UFV",
      link: "https://iddiufv.edu.es/",
      thumbnail: "/proyectos/captUfv.png",
      description:
        "Portal académico del IDDI de la UFV, enfocado en innovación y desarrollo educativo.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
    {
      title: "Sive Fluids",
      link: "https://sivefs.com/",
      thumbnail: "/proyectos/captSive.png",
      description:
        "Web corporativa especializada en soluciones técnicas para la gestión de fluidos.",
      technologies: ["wordpress", "php", "css", "html"],
    },
    {
      title: "Eurocopa 2024 App",
      link: "https://euros24-app.vercel.app/",
      thumbnail: "/proyectos/captEuros.png",
      description:
        "Aplicación para seguir actualizaciones en tiempo real de la Eurocopa 2024.",
      technologies: ["nextjs", "typescript", "tailwind", "javascript"],
    },
    {
      title: "Energy Business Clever",
      link: "https://energybusinessclever.com/",
      thumbnail: "/proyectos/captEnergy.png",
      description:
        "Plataforma para optimizar procesos de negocio y promover soluciones energéticas sostenibles.",
      technologies: ["wordpress", "php", "css", "html"],
    },
    {
      title: "Editorial El Drac",
      link: "https://editorialeldrac.com/",
      thumbnail: "/proyectos/captDrac.png",
      description:
        "Web de una editorial especializada en libros de manualidades y ocio creativo.",
      technologies: ["wordpress", "php", "css", "html", "woo"],
    },
  ];

  return (
    <div className="dark:bg-black bg-white md:pt-32 pt-20" id="proyectos"> 
      <div className="h-[12rem] flex items-center justify-center relative">
        <h2 className="absolute text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 z-10">
          PROYECTOS
        </h2>
        <TextHoverEffect text="PROYECTOS" />
      </div>
      <div>
        <HeroParallax products={proyectos} />
      </div>
    </div>
  );
};

export default Proyectos;
