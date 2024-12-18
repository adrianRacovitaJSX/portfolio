// components/BlogSidebar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Post } from '@/utils/mdx';

interface BlogSidebarProps {
  recentPosts: Post[];
  currentPostSlug: string;
}

export const BlogSidebar = ({ recentPosts, currentPostSlug }: BlogSidebarProps) => {
  // Filtramos el post actual de los recientes y limitamos a 3 posts
  const filteredPosts = recentPosts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 3);

  return (
    <div className="hidden xl:flex flex-col gap-8 w-64">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Volver al blog</span>
      </Link>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Posts recientes
        </h3>
        
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2"
            >
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors line-clamp-2">
                  {post.metadata.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                  {new Date(post.metadata.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};