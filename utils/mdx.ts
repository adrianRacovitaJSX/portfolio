import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { calculateReadingTime } from './readingTime';

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMetadata {
  title: string
  date: string
  excerpt: string
  readingTime: string
  slug: string
  image: string
  author: string
  keywords: string[]
  category: string
  lastModified?: string
  canonical?: string
  ogImage?: string
  twitterCard?: string
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const metadata: PostMetadata = {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readingTime: calculateReadingTime(content, {
        wordsPerMinute: 225,
        codeWordsPerMinute: 100,
        imageReadingSeconds: 12
      }),
    slug: realSlug,
    image: data.image || '/default-post-image.jpg',
    author: data.author || 'Anónimo',
    keywords: data.keywords || [],
    category: data.category || 'Sin categoría',
    lastModified: data.lastModified,
    canonical: data.canonical,
    ogImage: data.ogImage,
    twitterCard: data.twitterCard
  }
  
  return {
    slug: realSlug,
    metadata,
    content,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    console.log('Posts directory does not exist')
    return []
  }
  
  const files = fs.readdirSync(postsDirectory)
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async file => {
        const post = await getPostBySlug(file.replace(/\.mdx$/, ''))
        return post
      })
  )
  
  return posts.sort((post1, post2) => 
    new Date(post2.metadata.date).getTime() - new Date(post1.metadata.date).getTime()
  )
}