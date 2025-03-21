import { getAllPosts } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 5;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const metadata: Metadata = {
  title: "Blog | Adrian Racovita",
  description:
    "Explorando el desarrollo web moderno, compartiendo conocimientos y experiencias en React, Next.js y más.",
  openGraph: {
    title: "Blog | Adrian Racovita",
    description:
      "Explorando el desarrollo web moderno, compartiendo conocimientos y experiencias en React, Next.js y más.",
    type: "website",
  },
};

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string | undefined }> 
}) {
  // Asegurarse de que searchParams se resuelva correctamente
  const page = await searchParams;
  const currentPage = parseInt(page?.page || "1", 10);
  const allPosts = await getAllPosts();

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const posts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Blog y Recursos
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explorando el desarrollo web moderno. Aquí comparto tutoriales,
            guías y experiencias sobre React, Next.js, y las últimas tendencias
            en desarrollo frontend.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="grid grid-cols-1 gap-8 sm:grid-cols-4 group"
            >
              <div className="sm:col-span-1">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </div>
              <div className="sm:col-span-3">
                <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full font-medium">
                    {post.metadata.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                    <Clock className="w-4 h-4" />
                    {post.metadata.readingTime}
                  </span>
                  <time
                    dateTime={post.metadata.date}
                    className="text-zinc-600 dark:text-zinc-400"
                  >
                    {formatDate(post.metadata.date)}
                  </time>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition">
                    {post.metadata.title}
                  </h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {post.metadata.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500">
                    <span className="text-sm font-medium">Leer artículo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </article>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">
                No se encontraron posts en esta página.
              </p>
            </div>
          )}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className={`p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
                currentPage <= 1 ? "pointer-events-none opacity-50" : ""
              }`}
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}`}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? "bg-emerald-500 text-white"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {pageNum}
                  </Link>
                )
              )}
            </div>

            <Link
              href={`/blog?page=${currentPage + 1}`}
              className={`p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${
                currentPage >= totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}