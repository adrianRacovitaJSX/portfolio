import { ContactForm } from "@/components/ContactForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ContactInfo } from "@/components/ContactInfo";
import Header from "@/components/header";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section más compacto */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
            Hagamos realidad tu
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}
              próximo proyecto
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Desarrollo soluciones digitales que impulsan el crecimiento de tu
            negocio
          </p>

          {/* Grid de servicios más compacto */}
          <ServicesGrid />

          {/* Contenedor principal del formulario */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Cuéntame sobre tu proyecto
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Recibe una respuesta personalizada en menos de 24 horas
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Información de contacto y beneficios */}
          <div className="mt-12">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
