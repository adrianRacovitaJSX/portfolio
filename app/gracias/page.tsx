import { ContactInfo } from "@/components/ContactInfo";

export default function Gracias() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black">
      {/* Contenedor principal */}
      <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icono de éxito */}
          <div className="mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-emerald-600 dark:text-emerald-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>

          {/* Mensaje principal */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            ¡Mensaje enviado con éxito!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Gracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo en las próximas <span className="font-semibold">24 horas</span>.
          </p>

          {/* Panel informativo */}
          <div className="bg-zinc-950 p-6 rounded-lg mb-8 text-left">
            <h2 className="text-xl font-semibold text-white mb-3">
              Próximos pasos
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span>Recibirás un <strong>correo de confirmación</strong> con un resumen de tu solicitud.</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span>Me pondré en contacto contigo para <strong>discutir los detalles</strong> de tu proyecto.</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span>Recibirás un <strong>presupuesto personalizado</strong> basado en tus necesidades específicas.</span>
              </li>
            </ul>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Volver al inicio
            </a>
            <a 
              href="/#proyectos" 
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Ver proyectos
            </a>
          </div>

          {/* Información de contacto adicional */}
          <div className="mt-8 pt-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}