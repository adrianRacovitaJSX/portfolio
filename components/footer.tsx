"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Check,
  AlertCircle,
} from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const Footer = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const placeholders = [
    "¿Cuál es tu correo para más novedades?",
    "Suscríbete con tu email para actualizaciones.",
    "Ingresa tu email y recibe mis noticias.",
    "Pon tu correo para estar al tanto de todo.",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          description: (
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 font-semibold">
                <Check className="h-4 w-4 text-green-500" />
                Mensaje enviado
              </span>
              <span>Gracias por contactar. Te responderé pronto.</span>
            </div>
          ),
          className: "md:mt-0 mt-14",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: (
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 font-semibold">
              <AlertCircle className="h-4 w-4" />
              Error
            </span>
            <span>
              Hubo un problema al enviar tu mensaje. Por favor, intenta
              nuevamente.
            </span>
          </div>
        ),
        className: "md:mt-0 mt-14",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative min-h-[500px] w-full bg-white dark:bg-black">
      <BackgroundGradientAnimation
        containerClassName="!h-full absolute inset-0"
        className="!h-full"
        firstColor="34, 197, 94"
        secondColor="16, 185, 129"
        thirdColor="4, 120, 87"
        fourthColor="6, 95, 70"
        fifthColor="6, 78, 59"
        pointerColor="52, 211, 153"
        size="100%"
        interactive={false}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto py-8 sm:py-16">
          <div className="grid gap-8 sm:gap-16 md:grid-cols-2">
            {/* Información de Contacto */}
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="space-y-4 w-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  ¡Suscríbete a mi newsletter!
                </h3>
                <div className="w-full max-w-full">
                <PlaceholdersAndVanishInput 
                  placeholders={placeholders} 
                  className="max-w-[calc(100vw-2rem)]"
                />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Conectemos
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:adrian@aracovita.dev">adrian@aracovita.dev</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+34633135787">+34 633 135 787</a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sígueme en
                </h4>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
                    className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/adrianRacovitaJSX"
                    className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            {/* Formulario de Contacto */}
            <div className="space-y-6 sm:space-y-8 w-full" id="contacto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex flex-wrap gap-2">
                Haz tu
                <p className="dark:text-emerald-400 text-emerald-600">
                  proyecto
                </p>
                realidad.
              </h3>

              <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <Input
                    placeholder="Nombre *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 max-w-[calc(100vw-2rem)]"
                  />
                  <Input
                    placeholder="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="w-full bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 max-w-[calc(100vw-2rem)]"
                  />
                </div>
                <Input
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  className="w-full bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 max-w-[calc(100vw-2rem)]"
                />
                <Textarea
                  placeholder="Mensaje *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  className="w-full min-h-[120px] bg-gray-50 border-gray-200 dark:bg-white/5 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 max-w-[calc(100vw-2rem)]"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white max-w-[calc(100vw-2rem)]"
                >
                  {isLoading ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 border-t border-gray-200 dark:border-white/10 pt-4 sm:pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} aracovita.dev. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;