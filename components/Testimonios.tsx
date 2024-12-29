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
      body: "El nuevo CRM redujo nuestro tiempo de respuesta un 40%. La automatización nos ahorra 5 horas semanales y el seguimiento de ventas es mucho más preciso. Una excelente inversión.",
      img: "logoGato.png",
    },
    {
      id: "rehatrans-2",
      name: "Rehatrans",
      username: "Web y Ecommerce",
      body: "La nueva web ha transformado nuestra imagen digital. El catálogo interactivo facilita la búsqueda de productos y el diseño responsive mejora la experiencia en móviles.",
      img: "rehatrans-logo.svg",
    },
    {
      id: "rosa-3",
      name: "Floristería Rosa",
      username: "Web y Ecommerce",
      body: "Desde que renovamos la web, los pedidos para eventos han aumentado un 45%. El sistema de reservas y entregas programadas funciona de maravilla.",
      img: "/logoRosa.jpg",
    },
    {
      id: "aran-4",
      name: "Conselh d'Aran",
      username: "Web y Ecommerce",
      body: "La nueva web refleja perfectamente la esencia de nuestro valle. El sistema multiidioma y el mapa interactivo de servicios han mejorado significativamente la experiencia de nuestros visitantes.",
      img: "/logo-coselharan.svg",
    },
    {
      id: "intelliform-5",
      name: "Intelliform",
      username: "NextJS, Typescript e IA",
      body: "La IA genera formularios personalizados según nuestras necesidades y valida automáticamente las respuestas. Ha reducido los errores de entrada un 95% y el tiempo de procesamiento en un 75%.",
      img: "/rayo.webp",
    },
    {
      id: "screen-6",
      name: "Screen & Digital",
      username: "Web y Ecommerce",
      body: "El carrito abandonado se redujo un 35% y las ventas cruzadas aumentaron un 28%. La inversión se amortizó en 6 meses. Excelente integración con logística.",
      img: "/screen.png",
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