"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Layers, Clock, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "You had the perfect prompt... once.",
    description: "Remember that prompt that got ChatGPT to write exactly what you needed? The one that saved you hours? Where is it now? Lost in a sea of chat history, impossible to find when you need it most.",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Layers,
    title: "Your AI workflow is scattered everywhere.",
    description: "Notes app. Google Docs. Slack messages. Browser bookmarks. Notion. Your best prompts are fragmented across a dozen tools, creating chaos instead of clarity.",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Clock,
    title: "Rewriting prompts is wasting your time.",
    description: "Every time you start a new conversation, you're writing the same instructions from scratch. The same context. The same formatting rules. Hours lost. Every. Single. Week.",
    gradient: "from-yellow-500/20 to-green-500/20"
  },
  {
    icon: TrendingUp,
    title: "You're not scaling your AI usage.",
    description: "Without a system, you can't build on what works. No version history. No way to compare results. No way to share your best prompts with your team. You're leaving massive productivity on the table.",
    gradient: "from-green-500/20 to-primary/20"
  }
]

function ProblemCard({ problem, index }: { problem: typeof problems[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <problem.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{problem.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
      </div>
    </motion.div>
  )
}

export function ProblemSections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 px-4" id="problems">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Prompting is powerful.
            <br />
            <span className="text-muted-foreground">Without organization, {"it's"} chaos.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sound familiar? {"You're"} not alone. These are the struggles every AI power user faces daily.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
