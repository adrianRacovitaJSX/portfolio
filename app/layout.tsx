import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aracovita.dev'),
  title: {
    default: "Adrián Racovita | Desarrollador Full Stack",
    template: "%s | Adrián Racovita"
  },
  description: "Portfolio profesional de Adrián Racovita. Desarrollador Full Stack especializado en Next.js, React y tecnologías web modernas.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aracovita.dev",
    siteName: "Portfolio de Adrián Racovita",
    title: "Adrián Racovita | Desarrollador Full Stack",
    description: "Portfolio profesional de Adrián Racovita",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Adrián Racovita - Desarrollador Full Stack'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://aracovita.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <GoogleAnalytics gaId="G-SZB5P03KES" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}