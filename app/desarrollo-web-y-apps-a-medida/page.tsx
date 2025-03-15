"use client";

import { ContactForm } from "@/components/ContactForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ContactInfo } from "@/components/ContactInfo";
import Header from "@/components/header";
import { motion } from "framer-motion";
import { Zap, BarChart, Headphones, ArrowRight } from "lucide-react";

// Animaciones reutilizables
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Desarrollo Rápido",
      description: "Entrega en 2-4 semanas en lugar de meses"
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "ROI Demostrable",
      description: "Aumento promedio de conversiones del 32%"
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: "Soporte Premium",
      description: "Asistencia técnica incluida por 3 meses"
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="group flex flex-col items-center p-6 rounded-lg bg-zinc-950 shadow-md hover:shadow-lg transition-all"
          variants={fadeIn}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 p-2 rounded-full bg-white/10 backdrop-blur-sm">
            {benefit.icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {benefit.title}
          </h3>
          <p className="text-sm text-white/80 text-center">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section optimizado para ads */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Desarrollos profesionales 
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}que aumentan tus ventas
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Webs y aplicaciones personalizadas con resultados garantizados en menos de 30 días. 
            +15 clientes satisfechos este mes.
          </motion.p>
          
          {/* Botón para ver proyectos - con icono y animación */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="/#proyectos" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver proyectos exitosos
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Banner de propuesta de valor única con el mismo estilo que ServicesGrid */}
          <Benefits />

          {/* Grid de servicios más compacto */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Soluciones digitales que <span className="text-emerald-600 dark:text-emerald-400">transforman negocios</span>
            </motion.h2>
            <motion.p 
              className="text-base text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Elige la opción perfecta para tu empresa y multiplica tus resultados
            </motion.p>
            <ServicesGrid />
          </motion.div>

          {/* Contenedor principal del formulario */}
          <motion.div 
            className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                ¿Listo para destacar en digital?
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Obtén una propuesta personalizada y <span className="font-semibold">presupuesto sin compromiso</span> en menos de 24 horas
              </motion.p>
              <motion.div 
                className="mb-4 text-sm bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 p-3 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <strong>⏳ ¡OFERTA LIMITADA!</strong> Análisis de rendimiento web gratuito con cada consulta
              </motion.div>
              <ContactForm />
            </div>
          </motion.div>

          {/* Social proof - logos con texto */}
          <motion.div 
            className="mt-12 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Empresas que ya confían en mí
            </motion.h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.img 
                src="/cliente1.png" 
                alt="Cliente 1" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/cliente2.svg" 
                alt="Cliente 2" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/cliente3.webp" 
                alt="Cliente 3" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/logoRosa.jpg" 
                alt="Floristería Rosa" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/logoGato.png" 
                alt="El Gato Con Bolsas" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/logoFisio.png" 
                alt="Fisiolution" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
              <motion.img 
                src="/screen.png" 
                alt="Screen & Digital" 
                className="h-12 sm:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                variants={fadeIn}
              />
            </motion.div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </main>
  );
}