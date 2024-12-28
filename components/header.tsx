"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { BorderBeam } from "./ui/border-beam";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Conóceme", href: "https://aracovita.dev/#conoceme" },
    { label: "Proyectos", href: "https://aracovita.dev/#proyectos" },
    { label: "Experiencia", href: "https://aracovita.dev/#experiencia" },
    { label: "Testimonios", href: "https://aracovita.dev/#testimonios" },
    { label: "Blog", href: "https://aracovita.dev/blog" },
  ];

  return (
    <header className="z-[9999] sticky top-0 w-full border-b backdrop-blur-xl bg-white dark:bg-black/60 supports-[backdrop-filter]:bg-white/70">
      <div className="px-4 md:px-8 flex h-16 items-center max-w-7xl mx-auto justify-between">
        {/* Logo */}
        <aside className="transition-transform hover:scale-105 duration-300">
          <h2>
            <a
              href="/"
              className="font-bold text-xl md:text-2xl text-black dark:text-white transition-all duration-300"
            >
              aracovita.dev
            </a>
          </h2>
        </aside>

        {/* Navegación ordenador */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-md font-medium cursor-pointer group"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Ordenador Social Links & CV */}
        <aside className="hidden md:flex gap-3 items-center font-bold">
          <a
            href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
            className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-semibold cursor-pointer flex items-center gap-1"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adrianRacovitaJSX"
            className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-semibold cursor-pointer flex items-center gap-1"
            target="_blank"
          >
            Github
          </a>
          <ModeToggle />
          <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#065F46_50%,#34D399_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="/CV.pdf" target="_blank">
                Currículum
              </a>
            </span>
          </button>
        </aside>

        {/* Sección derecha - móvil */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#065F46_50%,#34D399_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a href="/CV.pdf" target="_blank">
                CV
              </a>
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

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b md:hidden">
            <div className="flex flex-col p-4">
              {/* Social Links en móvil */}
              <div className="flex justify-center gap-4 py-4 border-b border-gray-200 dark:border-gray-800">
                <a
                  href="#"
                  className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-foreground/60 hover:text-foreground/80"
                >
                  <Github className="w-5 h-5" />
                  <span>Github</span>
                </a>
              </div>
              {/* Links */}
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
