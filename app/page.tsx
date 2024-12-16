"use client"
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const SobreMi = dynamic(() => import("@/components/sobreMi"), { ssr: false });
const Proyectos = dynamic(() => import("@/components/Proyectos"), { ssr: false });
const Experiencia = dynamic(() => import("@/components/Experiencia"), { ssr: false });
const Testimonios = dynamic(() => import("@/components/Testimonios"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Experiencia />
      <Testimonios />
      <Footer />
    </main>
  );
}
