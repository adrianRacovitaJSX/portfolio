import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web y Apps a Medida | Aplicaciones Personalizadas",
  description:
    "Desarrollo de aplicaciones web y móviles a medida para empresas. Soluciones digitales personalizadas, CRM, aplicaciones de gestión y webs corporativas adaptadas a tus necesidades específicas.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aracovita.dev/desarrollo-web-y-apps-a-medida",
    siteName: "Desarrollo a Medida - Adrián Racovita",
    title: "Desarrollo Web y Aplicaciones a Medida | Adrián Racovita",
    description: "Desarrollo de aplicaciones web y móviles personalizadas para empresas. Especialista en soluciones digitales a medida.",
    images: [
      {
        url: "/og-image-desarrollo.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo Web y Apps a Medida - Adrián Racovita",
      },
    ],
  },
  keywords: [
    "desarrollo web a medida",
    "aplicaciones personalizadas",
    "desarrollo aplicaciones empresa",
    "CRM personalizado",
    "aplicaciones de gestión",
    "desarrollo web españa",
    "programación a medida",
    "software empresarial personalizado",
    "desarrollo aplicaciones móviles",
    "aplicaciones web personalizadas"
  ],
  alternates: {
    canonical: "https://aracovita.dev/desarrollo-web-y-apps-a-medida",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "hSlFaVTe7TPfXPyL9wYu1Yz9CdvmKjLFd3LYsqbGSLM"
  }
};

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Schema.org markup for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desarrollo Web y Apps a Medida",
            "provider": {
              "@type": "Person",
              "name": "Adrián Racovita",
              "jobTitle": "Desarrollador Full Stack",
              "url": "https://aracovita.dev"
            },
            "description": "Desarrollo de aplicaciones web y móviles personalizadas para empresas. Soluciones digitales a medida que impulsan el crecimiento de tu negocio.",
            "serviceType": ["Desarrollo Web", "Desarrollo de Aplicaciones", "CRM Personalizado"],
            "areaServed": "España",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "EUR"
              }
            }
          })
        }}
      />
      {children}
    </div>
  );
}