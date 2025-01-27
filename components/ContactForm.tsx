"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-contact", {
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
                ¡Mensaje recibido!
              </span>
              <span>Me pondré en contacto contigo en las próximas 24 horas.</span>
            </div>
          ),
        });
        setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
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
              nuevamente o contáctame directamente.
            </span>
          </div>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="Nombre *"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          className="bg-white/5 border-white/10"
        />
        <Input
          placeholder="Email *"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          className="bg-white/5 border-white/10"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="Empresa (opcional)"
          value={formData.company}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, company: e.target.value }))
          }
          className="bg-white/5 border-white/10"
        />
        
        <Select
          value={formData.projectType}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, projectType: value }))
          }
          required
        >
          <SelectTrigger className="bg-white/5 border-white/10">
            <SelectValue placeholder="Tipo de Proyecto *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Sitio web</SelectItem>
            <SelectItem value="web-app">Aplicación web</SelectItem>
            <SelectItem value="mobile-app">Aplicación móvil</SelectItem>
            <SelectItem value="desktop-app">Aplicación ordenador</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        placeholder="Cuéntame los detalles de tu proyecto *"
        value={formData.message}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
        required
        className="min-h-[150px] bg-white/5 border-white/10"
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white"
      >
        {isLoading ? (
          "Enviando..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  );
};