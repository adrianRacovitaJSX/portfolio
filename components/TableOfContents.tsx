"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

interface TableOfContentsProps {
  headings: Heading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden xl:block w-64 mr-14 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h2 className="text-xl pb-2 font-semibold text-zinc-900 dark:text-zinc-100 mb-2 px-4">
        En esta página
      </h2>
      
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-3 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50">
        <ul className="space-y-2">
          {headings.map((heading) => {
            const anchorProps = {
              href: `#${heading.id}`,
              className: `text-[13px] hover:text-emerald-500 transition-colors block py-1 ${
                activeId === heading.id
                  ? "text-emerald-500 font-medium"
                  : "text-zinc-600 dark:text-zinc-400"
              }`,
              onClick: (e: MouseEvent<HTMLAnchorElement>) => handleClick(e, heading.id)
            };

            return (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
              >
                <a {...anchorProps}>{heading.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};