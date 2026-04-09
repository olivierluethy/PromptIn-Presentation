"use client"

import { motion } from "framer-motion"
import { Chrome, Github, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Trusted by 600+ AI power users
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            {"You're not bad at prompting."}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {"You're just losing your best prompts."}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Stop rewriting. Start organizing, reusing, and scaling your AI workflows. 
            The ultimate Chrome extension for managing prompts across ChatGPT, Claude, Gemini & more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => {
                trackEvent('install_click', 'CTA', 'Hero Install Button')
                window.open('https://chromewebstore.google.com/detail/promptin-ai-prompt-manage/pbfmkjjnmjfjlebpfcndpdhofoccgkje', '_blank')
              }}
            >
              <Chrome className="w-5 h-5" />
              Install Extension
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-border hover:bg-secondary"
              onClick={() => {
                trackEvent('get_started_click', 'CTA', 'Hero Get Started')
                window.open('https://chromewebstore.google.com/detail/promptin-ai-prompt-manage/pbfmkjjnmjfjlebpfcndpdhofoccgkje', '_blank')
              }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => {
                trackEvent('discord_click', 'CTA', 'Hero Discord')
                window.open('https://discord.gg/promptin', '_blank')
              }}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </button>
            <button 
              onClick={() => {
                trackEvent('github_click', 'CTA', 'Hero GitHub')
                window.open('https://github.com/promptin', '_blank')
              }}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </button>
          </div>
        </motion.div>

        {/* Star rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Perfect 5.0 rating from 26 reviews on Chrome Web Store
          </p>
        </motion.div>
      </div>
    </section>
  )
}
