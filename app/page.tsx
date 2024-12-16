import Experiencia from "@/components/Experiencia";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/sobreMi";
import Testimonios from "@/components/Testimonios";

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
