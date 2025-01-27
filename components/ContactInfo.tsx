import { Mail, Phone, Linkedin, Github, Check, Calendar } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="mt-12 pt-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            ¿Por qué trabajar conmigo?
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 justify-center">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                +5 años de experiencia en desarrollo
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Tecnologías modernas y optimizadas
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Respuesta garantizada en 24h
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contacto
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a href="mailto:adrian@aracovita.dev" className="text-sm hover:text-emerald-500 transition-colors">
                adrian@aracovita.dev
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <a href="tel:+34633135787" className="text-sm hover:text-emerald-500 transition-colors">
                +34 633 135 787
              </a>
            </div>
            <div className="flex space-x-4 justify-center pt-2">
              <a
                href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/adrianRacovitaJSX"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};