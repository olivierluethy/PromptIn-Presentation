"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { BlogPost } from "@/lib/blog"
import { trackArticleClick } from "@/lib/analytics"

export function BlogCardClient({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      onClick={() => trackArticleClick(post.title)}
      className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="text-muted-foreground mb-4">
        {post.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
        <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
          Read more
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
