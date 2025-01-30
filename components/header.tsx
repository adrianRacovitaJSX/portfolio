"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, Linkedin, Github } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Conóceme", href: "/#conoceme" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Experiencia", href: "/#experiencia" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* New Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center text-xs sm:text-sm">
          <span className="text-white font-medium">
            <span className="hidden md:inline">🚀 ¡He lanzado mi startup! </span>
            <span className="md:hidden">🚀 Mi nueva startup </span>
            WPAV: 
            <span className="hidden sm:inline"> Gestiona y protege tus sitios web con IA</span>
            <span className="sm:hidden"> Protección web con IA</span>
          </span>
          <Link 
            href="https://wpav.es" 
            className="ml-2 md:ml-3 relative group inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-1 hover:decoration-2 transition-all whitespace-nowrap"
            target="_blank"
          >
            <span className="hidden sm:inline">Descúbrelo aquí</span>
            <span className="sm:hidden">Descubre más</span>
            <svg 
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Existing Header */}
      <header className={`z-[9999] sticky top-0 w-full border-b backdrop-blur-xl bg-white dark:bg-black/60 supports-[backdrop-filter]:bg-white/70 ${className}`}>
        <div className="px-4 md:px-8 flex h-16 items-center max-w-7xl mx-auto justify-between">
          {/* Logo */}
          <aside className="transition-transform hover:scale-105 duration-300">
            <div className="relative">
              <Link
                href="/"
                className="font-bold text-xl md:text-2xl text-black dark:text-white transition-all duration-300"
              >
                aracovita.dev
              </Link>
            </div>
          </aside>
          {/* Navegación ordenador */}
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-md font-medium cursor-pointer group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Ordenador Social Links & CV */}
          <aside className="hidden lg:flex gap-3 items-center font-bold">
            <Link
              href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-semibold cursor-pointer flex items-center gap-1"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/adrianRacovitaJSX"
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-semibold cursor-pointer flex items-center gap-1"
              target="_blank"
            >
              Github
            </Link>
            <ModeToggle />
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#065F46_50%,#34D399_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link href="/CV.pdf" target="_blank">
                  Currículum
                </Link>
              </span>
            </button>
          </aside>

          {/* Sección derecha - móvil y tablets */}
          <div className="flex md:flex lg:hidden items-center gap-2">
            <ModeToggle />
            <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#065F46_50%,#34D399_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Link href="/CV.pdf" target="_blank">
                  CV
                </Link>
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground/60 hover:text-foreground/80"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Menú móvil y tablets */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b md:block lg:hidden">
              <div className="flex flex-col p-4">
                {/* Social Links en móvil y tablets */}
                <div className="flex justify-center gap-4 py-4 border-b border-gray-200 dark:border-gray-800">
                  <Link
                    href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
                    className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80"
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/adrianRacovitaJSX"
                    className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                    <span>Github</span>
                  </Link>
                </div>
                {/* Links */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;