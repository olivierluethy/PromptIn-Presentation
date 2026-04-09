"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Save, FolderTree, Zap, Globe } from "lucide-react"

const capabilities = [
  {
    icon: Save,
    title: "Save prompts instantly",
    description: "One click to capture any prompt that works"
  },
  {
    icon: FolderTree,
    title: "Organize with folders",
    description: "Structure your prompts the way you think"
  },
  {
    icon: Zap,
    title: "Reuse in seconds",
    description: "Insert saved prompts with a single click"
  },
  {
    icon: Globe,
    title: "Works everywhere",
    description: "ChatGPT, Claude, Gemini, and 10+ more"
  }
]

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="solution">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            The solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            PromptIn is the missing layer
            <br />
            <span className="text-muted-foreground">between you and your AI tools.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, powerful system to organize your prompts and supercharge your AI workflow.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <cap.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground">{cap.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Interactive prompt cards visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Content Writing", count: 12, color: "from-blue-500/20 to-blue-600/20" },
              { title: "Code Assistant", count: 8, color: "from-green-500/20 to-green-600/20" },
              { title: "Research", count: 15, color: "from-purple-500/20 to-purple-600/20" },
              { title: "Marketing", count: 6, color: "from-orange-500/20 to-orange-600/20" },
              { title: "Analysis", count: 10, color: "from-red-500/20 to-red-600/20" },
              { title: "Creative", count: 9, color: "from-pink-500/20 to-pink-600/20" },
            ].map((folder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`bg-gradient-to-br ${folder.color} border border-border/50 rounded-xl p-4 cursor-pointer hover:border-primary/30 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <FolderTree className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-sm">{folder.title}</p>
                    <p className="text-xs text-muted-foreground">{folder.count} prompts</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
