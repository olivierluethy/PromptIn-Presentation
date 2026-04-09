"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Chrome, Github, MessageCircle, Coffee, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent, trackDonationClick } from "@/lib/analytics"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="cta">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to stop losing
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              your best prompts?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join 600+ AI power users who have already transformed their workflow. 
            Free to start, no credit card required.
          </p>
          
          {/* Main CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => {
                trackEvent('install_click', 'CTA', 'Footer Install')
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
                trackEvent('get_started_click', 'CTA', 'Footer Get Started')
                window.open('https://chromewebstore.google.com/detail/promptin-ai-prompt-manage/pbfmkjjnmjfjlebpfcndpdhofoccgkje', '_blank')
              }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button 
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => {
                trackEvent('discord_click', 'CTA', 'Footer Discord')
                window.open('https://discord.gg/promptin', '_blank')
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => {
                trackEvent('github_click', 'CTA', 'Footer GitHub')
                window.open('https://github.com/promptin', '_blank')
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => {
                trackDonationClick()
                window.open('https://buymeacoffee.com/promptin', '_blank')
              }}
            >
              <Coffee className="w-4 h-4" />
              Buy Me a Coffee
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
