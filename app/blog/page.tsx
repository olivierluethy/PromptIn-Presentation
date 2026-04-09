import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { BlogCardClient } from "./blog-card-client"

export const metadata = {
  title: "Blog",
  description: "Tips, tutorials, and insights on mastering your AI workflow with prompts.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
          <p className="text-muted-foreground mt-2">
            Tips, tutorials, and insights on mastering your AI workflow.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <BlogCardClient key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to organize your prompts?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join 600+ AI power users who have already transformed their workflow with PromptIn.
          </p>
          <Link
            href="https://chromewebstore.google.com/detail/promptin-ai-prompt-manage/pbfmkjjnmjfjlebpfcndpdhofoccgkje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Install Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
