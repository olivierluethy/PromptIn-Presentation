"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const featuredSites = [
  {
    name: "Twelve Tools",
    url: "https://twelve.tools",
    description: "AI Tool Directory",
  },
  {
    name: "The One Startup",
    url: "https://theonestartup.com",
    description: "Startup Discovery",
  },
  {
    name: "Acid Tools",
    url: "https://acidtools.com",
    description: "Tool Aggregator",
  },
  {
    name: "Startup Fame",
    url: "https://startupfa.me",
    description: "Startup Showcase",
  },
  {
    name: "Good AI Tools",
    url: "https://goodaitools.com/compare/imsupporting-hybrid-live-chat-vs-promptin",
    description: "AI Tool Comparisons",
  },
  {
    name: "Atomize Link",
    url: "https://atomizelink.icu/report/79833",
    description: "Link Analytics",
  },
  {
    name: "Bye.fyi",
    url: "https://bye.fyi/report/79832",
    description: "Site Reports",
  },
  {
    name: "Quero Party",
    url: "https://quero.party/report/79832",
    description: "Web Analytics",
  },
  {
    name: "Metamagic",
    url: "https://metamagic.top/stats/79833",
    description: "Stats & Insights",
  },
  {
    name: "Sites.jake.eu",
    url: "https://sites.jake.eu/share/79833",
    description: "Site Directory",
  },
]

export function FeaturedInSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 border-b border-border/50" id="featured-in">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            As seen across the web
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured In</h2>
        </motion.div>

        {/* Desktop grid - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-5 gap-4"
        >
          {featuredSites.map((site, index) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group relative flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {site.name}
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs text-muted-foreground">
                {site.description}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {featuredSites.map((site) => (
                <CarouselItem
                  key={site.name}
                  className="pl-3 basis-2/3 sm:basis-1/2"
                >
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {site.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {site.description}
                    </span>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 size-8" />
              <CarouselNext className="static translate-y-0 size-8" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
