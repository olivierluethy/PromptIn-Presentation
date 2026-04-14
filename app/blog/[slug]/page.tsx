import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Chrome } from "lucide-react"
import { getBlogPost, getAllBlogSlugs, blogPosts } from "@/lib/blog"
import { BlogScrollTracker } from "./blog-scroll-tracker"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

// Markdown-Renderer Logik
function renderMarkdown(content: string) {
  const lines = content.trimStart().split("\n")
  
  // FILTER: Wenn die erste Zeile mit # (H1) beginnt, entfernen wir sie,
  // da der Titel bereits im <header> der Seite ausgegeben wird.
  if (lines[0]?.startsWith("# ")) {
    lines.shift()
  }

  const elements: React.ReactNode[] = []
  let inList = false
  let listItems: React.ReactNode[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="flex flex-col gap-1.5 pl-6 list-disc">
          {listItems}
        </ul>
      )
      listItems = []
      inList = false
    }
  }

  const formatInline = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g, 
        '<a href="$2" class="text-primary underline hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
      )

  lines.forEach((line, i) => {
    const trimmed = line.trim()

    if (trimmed === "---") {
      flushList()
      elements.push(<hr key={`hr-${i}`} className="my-6 border-border" />)
    } else if (trimmed.startsWith("## ")) {
      flushList()
      elements.push(
        <h2 key={`h2-${i}`} className="mt-8 mb-3 text-xl font-bold text-foreground">
          {trimmed.replace("## ", "")}
        </h2>
      )
    } else if (trimmed.startsWith("### ")) {
      flushList()
      elements.push(
        <h3 key={`h3-${i}`} className="mt-6 mb-2 text-lg font-semibold text-foreground">
          {trimmed.replace("### ", "")}
        </h3>
      )
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true
      const itemContent = trimmed.replace(/^[-*] /, "")
      listItems.push(
        <li key={`li-${i}`}>
          <span dangerouslySetInnerHTML={{ __html: formatInline(itemContent) }} />
        </li>
      )
    } else if (trimmed === "" || trimmed === "#") {
      // Leere Zeilen oder nackte Raute ignorieren/flashen
      flushList()
    } else {
      flushList()
      elements.push(
        <p key={`p-${i}`} className="leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        </p>
      )
    }
  })

  flushList()
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <main className="min-h-screen bg-background">
      <BlogScrollTracker slug={slug} />
      
      <header className="border-b border-border bg-card/50">
        <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Dies ist die primäre Ausgabe des Titels */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          {/* Der Titel aus dem Content wird hier nun gefiltert */}
          {renderMarkdown(post.content)}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground">
            Improve your grammar with AI
          </h3>
          <p className="mt-2 text-muted-foreground">
            Try AI Grammar Mentor free and learn from every correction.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started Free
          </Link>
        </div>
      </article>
    </main>
  )
}