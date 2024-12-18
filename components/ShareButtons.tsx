"use client";

import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link2, Check, Share2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export const ShareButtons = ({ url, title, description }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(`¡Acabo de leer "${title}"! 🚀\n\n${description}\n\n`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
          <Share2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            ¿Te ha gustado este artículo?
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Compártelo con tus amigos y colegas desarrolladores
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
      <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-sm font-medium"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </a>
        
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-sm font-medium"
        >
          <Facebook className="w-4 h-4" />
          Facebook
        </a>
        
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-sm font-medium"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-sm font-medium relative group"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              ¡Copiado!
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              Copiar enlace
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-500 italic">
        * Compartir conocimiento nos hace crecer a todos en la comunidad de desarrollo 💚
      </p>
    </div>
  );
};