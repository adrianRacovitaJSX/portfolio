"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Definición de tipos
interface Product {
  title: string;
  link: string;
  thumbnail: string;
  description?: string;
  technologies?: string[];
}

interface ProductCardProps {
  product: Product;
  translate: MotionValue<number>;
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.1, 0.7], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.1, 0.7], [0, -500]),
    springConfig
  );

  // Calculamos los límites basados en el tamaño de las cards y el número de elementos
  const calculateDragLimit = (numItems: number) => {
    const cardWidth = window.innerWidth < 768 ? 280 : 400;
    const gapWidth = window.innerWidth < 768 ? 32 : 48;
    const totalWidth = cardWidth * numItems + gapWidth * (numItems - 1);
    return totalWidth;
  };

  return (
    <div
      ref={ref}
      className="h-[130vh] md:h-[200vh] py-5 md:py-10 overflow-hidden antialiased relative" 
    >
      <div className="max-w-[100vw] px-4 mx-auto">
        <motion.div
          className="flex flex-row-reverse mb-8 md:mb-20 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -calculateDragLimit(firstRow.length),
            right: calculateDragLimit(firstRow.length),
          }}
          dragElastic={0.1}
        >
          <div className="flex flex-row-reverse gap-8 md:gap-12">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row mb-8 md:mb-20 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -calculateDragLimit(secondRow.length),
            right: calculateDragLimit(secondRow.length),
          }}
          dragElastic={0.1}
        >
          <div className="flex flex-row gap-8 md:gap-12">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row-reverse cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -calculateDragLimit(thirdRow.length),
            right: calculateDragLimit(thirdRow.length),
          }}
          dragElastic={0.1}
        >
          <div className="flex flex-row-reverse gap-8 md:gap-12">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }: ProductCardProps) => {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={isDragging ? {} : { y: -20 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className="group/product h-64 w-[280px] md:h-96 md:w-[400px] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-95 bg-black/90 transition-opacity duration-300">
        <div className="p-4 md:p-6 flex flex-col h-full">
          <div className="mb-2 md:mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              {product.title}
            </h2>
            <Link
              href={product.link}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm"
              target="_blank"
            >
              Ver proyecto
              <svg
                width="16"
                height="16"
                className="w-4 h-4 md:w-[18px] md:h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {product.description && (
            <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 md:line-clamp-3">
              {product.description}
            </p>
          )}

          {product.technologies && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {product.technologies.map((tech: string, index: number) => (
                  <div
                    key={index}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    title={tech}
                  >
                    <Image
                      src={`/icons/${tech}.svg`}
                      width={16}
                      height={16}
                      className="w-4 h-4 md:w-5 md:h-5"
                      alt={tech}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
