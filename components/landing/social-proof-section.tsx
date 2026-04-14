"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Users, FileText, Globe } from "lucide-react"

const stats = [
  { icon: Users, value: "600+", label: "Active Users" },
  { icon: Star, value: "5.0", label: "Star Rating" },
  { icon: FileText, value: "50K+", label: "Prompts Saved" },
  { icon: Globe, value: "13", label: "Languages Supported" },
]

const testimonials = [
  {
    text: "PromptIn has completely transformed how I work with AI. No more digging through chat history to find that perfect prompt!",
    name: "Sarah M.",
    role: "Content Creator",
    rating: 5
  },
  {
    text: "Finally a tool that understands how power users actually work. The folder organization and workflow features are game-changers.",
    name: "Marcus K.",
    role: "Software Engineer",
    rating: 5
  },
  {
    text: "I save at least 2 hours every day since I started using PromptIn. My prompt library is now my most valuable asset.",
    name: "Elena R.",
    role: "Marketing Manager",
    rating: 5
  },
  {
    text: "The ability to share prompts with my team has improved our AI workflows dramatically. Highly recommended!",
    name: "David L.",
    role: "Team Lead",
    rating: 5
  }
]


export function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Used by AI power users
            <br />
            <span className="text-muted-foreground">worldwide</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-card border border-border rounded-xl"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{`"${testimonial.text}"`}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
