import { getPostBySlug, getAllPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import { Metadata } from "next";
import { TableOfContents } from "@/components/TableOfContents";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButtons } from "@/components/ShareButtons";
import { BlogSidebar } from "@/components/BlogSidebar";

type Heading = {
  id: string;
  text: string;
  level: number;
};

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const {
    title,
    excerpt,
    image,
    author,
    keywords,
    canonical,
    ogImage,
    twitterCard,
    lastModified,
  } = post.metadata;

  const url = `https://aracovita.dev/blog/${params.slug}`;

  return {
    title: `${title} | Adrian Racovita`,
    description: excerpt,
    authors: [{ name: author }],
    keywords,
    metadataBase: new URL("https://aracovita.dev"),
    openGraph: {
      title: `${title} | Adrian Racovita`,
      description: excerpt,
      type: "article",
      url,
      siteName: "Adrian Racovita",
      publishedTime: post.metadata.date,
      modifiedTime: lastModified,
      authors: [author],
      images: [
        {
          url: ogImage || image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Adrian Racovita`,
      description: excerpt,
      images: [ogImage || image],
    },
    alternates: {
      canonical: canonical || url,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const allPosts = await getAllPosts();

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const currentUrl = `https://aracovita.dev/blog/${params.slug}`;

  return (
    <>
      <Header />
      <ReadingProgress />

      <div className="min-h-screen">
        <div className="max-w-[90rem] mx-auto px-4">
          {/* Grid responsive */}
          <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(auto,_730px)_280px] gap-12 justify-center">
            {/* Sidebar izquierdo */}
            <div className="hidden xl:block pt-12 mb-24">
              <div className="sticky top-24">
                <BlogSidebar
                  recentPosts={allPosts}
                  currentPostSlug={params.slug}
                />
              </div>
            </div>

            {/* Contenido principal */}
            <article className="py-12 px-0 sm:px-4">
              <div className="relative w-full h-[300px] sm:h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">
                    {post.metadata.category}
                  </span>
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.metadata.readingTime}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {post.metadata.title}
                </h1>

                <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                  {post.metadata.excerpt}
                </p>
              </header>

              <div className="prose prose-zinc dark:prose-invert prose-emerald max-w-none prose-img:rounded-xl prose-pre:!p-0">
                <MDXRemote
                  source={post.content}
                  components={useMDXComponents({})}
                />
              </div>

              <ShareButtons
                url={currentUrl}
                title={post.metadata.title}
                description={post.metadata.excerpt}
              />
            </article>

            {/* Sidebar derecho - oculto en móvil */}
            <div className="hidden xl:block pt-12 mb-24">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>

      <Footer />
    </>
  );
}
