"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Comments() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.setAttribute("data-repo", "adrianRacovitaJSX/portfolio");
      script.setAttribute("data-repo-id", "R_kgDONechTg");
      script.setAttribute("data-category", "General");
      script.setAttribute("data-category-id", "DIC_kwDONechTs4Cllry");
      script.setAttribute("data-mapping", "pathname");
      script.setAttribute("data-strict", "0");
      script.setAttribute("data-reactions-enabled", "1");
      script.setAttribute("data-emit-metadata", "0");
      script.setAttribute("data-input-position", "bottom");
      script.setAttribute("data-theme", theme === "dark" ? "transparent_dark" : "light");
      script.setAttribute("data-lang", "es");
      script.crossOrigin = "anonymous";
      script.async = true;

      const commentsDiv = document.getElementById("giscus-comments");
      if (commentsDiv) {
        commentsDiv.innerHTML = ""; // Elimina cualquier script previo
        commentsDiv.appendChild(script);
        setMounted(true);
      }
    }
  }, [mounted, theme]);

  return (
    <section className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Comentarios
      </h2>
      <div id="giscus-comments" className="giscus" />
    </section>
  );
}
