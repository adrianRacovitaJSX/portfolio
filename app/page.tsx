"use client"
import SnowEffect from '@/components/ui/SnowController';
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
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50" />
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero />
        <SobreMi />
        <Proyectos />
        <Experiencia />
        <Testimonios />
      </main>
      <Footer />
    </div>
  );
}