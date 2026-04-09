"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FolderTree, 
  Workflow, 
  Users, 
  ShieldCheck, 
  Globe, 
  Zap,
  BarChart3,
  History,
  Eye,
  Filter,
  Tags,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: FolderTree,
    title: "Smart Organization",
    description: "Never lose a prompt again. Effortlessly structure your ideas into folders for instant clarity and flow."
  },
  {
    icon: Workflow,
    title: "Step-by-Step Workflows",
    description: "Design smooth, automated prompt sequences that work exactly the way you do—without the chaos."
  },
  {
    icon: Users,
    title: "Collaborate & Share",
    description: "Empower your team. Share your best prompts instantly and learn from the community."
  },
  {
    icon: ShieldCheck,
    title: "Intelligent Validation",
    description: "Stop guessing. AI-powered checks make sure every prompt is sharp, accurate, and ready to deliver."
  },
  {
    icon: Globe,
    title: "Universal Compatibility",
    description: "No lock-in. Use PromptIn seamlessly with all major AI platforms—your prompts, everywhere."
  },
  {
    icon: Zap,
    title: "Boost Productivity",
    description: "Turn winning prompts into repeatable shortcuts. Save hours while unlocking consistent output."
  },
  {
    icon: BarChart3,
    title: "Benchmark Your Prompts",
    description: "See what works. Get clear performance insights and improve your prompts with data-driven confidence."
  },
  {
    icon: History,
    title: "Version Control",
    description: "Every change matters. Track, compare, and restore prompt versions so nothing valuable gets lost."
  },
  {
    icon: Eye,
    title: "Text Anonymizer",
    description: "Protect sensitive info. Instantly anonymize company or personal data before sharing prompts safely."
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Cut through the noise. Find the right prompt in seconds with powerful, value-based filters."
  },
  {
    icon: Tags,
    title: "Comprehensive Tagging",
    description: "Stay in control. Tag, type, and analyze every prompt with precision to uncover what truly performs."
  },
  {
    icon: Sparkles,
    title: "QuickSave Assistant",
    description: "Save prompts in seconds—then instantly refine them. Total control the moment inspiration strikes."
  }
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <feature.icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 px-4 bg-secondary/30" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              master your AI workflow
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for AI power users who demand efficiency and organization.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
