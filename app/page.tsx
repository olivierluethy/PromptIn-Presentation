import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturedInSection } from "@/components/landing/featured-in-section"
import { ProblemSections } from "@/components/landing/problem-sections"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { ScrollTracker } from "@/components/landing/scroll-tracker"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Navbar />
      <HeroSection />
      <FeaturedInSection />
      <ProblemSections />
      <SolutionSection />
      <FeaturesSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  )
}
