// ContactForm.tsx
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AlertCircle, CalendarIcon, Check, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Añadimos un componente para el selector de hora
const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    preferredDate: null as Date | null,
    preferredTime: "",
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
              <span>
                Me pondré en contacto contigo en las próximas 24 horas.
              </span>
            </div>
          ),
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
          preferredDate: null,
          preferredTime: "",
        });
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
            <SelectItem value="web-app">Aplicación Web</SelectItem>
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

      <div className="space-y-2">
        <label className="text-sm text-gray-500 dark:text-gray-400">
          ¿Te gustaría programar una llamada? (Opcional)
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal bg-white/5 border-white/10",
                  !formData.preferredDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.preferredDate ? (
                  format(formData.preferredDate, "PPP", { locale: es })
                ) : (
                  <span>Selecciona una fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.preferredDate || undefined}
                onSelect={(date: Date | undefined) =>
                  setFormData((prev) => ({
                    ...prev,
                    preferredDate: date || null,
                  }))
                }
                disabled={(date) =>
                  date < new Date() ||
                  date >
                    new Date(new Date().setMonth(new Date().getMonth() + 1))
                }
                initialFocus
                locale={es}
              />
            </PopoverContent>
          </Popover>

          <Select
            value={formData.preferredTime}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, preferredTime: value }))
            }
            disabled={!formData.preferredDate}
          >
            <SelectTrigger className="bg-white/5 border-white/10">
              <SelectValue placeholder="Selecciona hora" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}h
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

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
