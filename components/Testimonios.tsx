"use client"
import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const Testimonios = () => {
  // Añadimos IDs únicos y aseguramos que sean string para evitar problemas de hidratación
  const reviews = [
    {
      id: "gcb-1",
      name: "El Gato Con Bolsas",
      username: "ReactJs & NodeJS CRM",
      body: "¡Increíble la transformación de nuestro negocio! Antes tardábamos horas en gestionar pedidos, ahora con el CRM todo fluye. Mi equipo está encantado porque pueden dedicar más tiempo a los clientes. La mejor inversión que hemos hecho este año.",
      img: "logoGato.png",
    },
    {
      id: "rehatrans-2",
      name: "Rehatrans",
      username: "Web y Ecommerce",
      body: "Después de 10 años con la misma web, el cambio ha sido espectacular. Los clientes nos llaman sorprendidos por lo fácil que es ahora encontrar lo que buscan. Mi hija dice que ahora sí da gusto compartir nuestra web con sus amigos.",
      img: "rehatrans-logo.svg",
    },
    {
      id: "rosa-3",
      name: "Floristería Rosa",
      username: "Web y Ecommerce",
      body: "Nunca pensé que una web pudiera cambiar tanto nuestro negocio. Ahora recibimos pedidos a cualquier hora, incluso mientras dormimos. El otro día una clienta me dijo que eligió nuestra floristería porque le pareció muy profesional la web.",
      img: "/logoRosa.jpg",
    },
    {
      id: "aran-4",
      name: "Conselh d'Aran",
      username: "Web y Ecommerce",
      body: "Desde la renovación, los turistas encuentran toda la información que necesitan sin llamarnos constantemente. Me emociona ver cómo nuestras tradiciones y paisajes se muestran tan bien en la web. Ya no es solo información, es una ventana a nuestro valle.",
      img: "/logo-coselharan.svg",
    },
    {
      id: "intelliform-5",
      name: "Intelliform",
      username: "NextJS, Typescript e IA",
      body: "Antes pasaba horas revisando formularios con errores. Ahora con la IA, los datos llegan perfectos y puedo dedicar mi tiempo a analizar resultados en lugar de corregir errores. Mi jefe no para de preguntarme cómo lo hemos conseguido.",
      img: "/rayo.webp",
    },
    {
      id: "screen-6",
      name: "Screen & Digital",
      username: "Web y Ecommerce",
      body: "Nuestra tienda online por fin funciona como siempre soñamos. Recuerdo cuando lanzamos la nueva versión, ese mismo día las ventas se dispararon. Mi equipo ya no teme los picos de tráfico porque todo funciona a la perfección incluso cuando hay muchos usuarios.",
      img: "/screen.png",
    },
    {
      id: "ajsport-7",
      name: "AJSport",
      username: "Web de Reprogramación y Calculadora",
      body: "La calculadora de potencia en nuestra web ha revolucionado cómo trabaja nuestro taller. Los clientes comprueban al instante el aumento de CV y toman decisiones más rápido. Las consultas se han duplicado desde que la implementamos.",
      img: "/logo-aj.ico",
    },
    {
      id: "epicars-8",
      name: "Epicars",
      username: "Web de Concesionario con API coches.net",
      body: "La sincronización automática con coches.net nos ahorra 15 horas semanales. El sistema de tasación ofrece valoraciones instantáneas que sorprenden a los clientes por su precisión. Las ventas han aumentado un 30% desde la implementación.",
      img: "/logo-epi.ico",
    },
  ];

  // Usar el hook useMemo para evitar recálculos innecesarios
  const [firstRow, secondRow] = React.useMemo(() => {
    const half = Math.ceil(reviews.length / 2);
    return [reviews.slice(0, half), reviews.slice(half)];
  }, []);

  const ReviewCard = React.memo(({
    id,
    img,
    name,
    username,
    body,
  }: {
    id: string;
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={`Logo de ${name}`}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  });

  ReviewCard.displayName = 'ReviewCard';

  return (
    <div className="dark:bg-black bg-white pt-20 pb-24 md:pb-32 lg:pb-28" id="testimonios">
      <div className="h-[12rem] flex items-center justify-center relative z-50">
        <h2 className="absolute text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 z-10">
          TESTIMONIOS
        </h2>
        <TextHoverEffect text="TESTIMONIOS" />
      </div>
      <div className="pt-8">
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg dark:bg-black z-0">
          <div className="w-full">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
          </div>
          <div className="w-full">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Testimonios);