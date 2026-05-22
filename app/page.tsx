import { LanguageProvider }  from "@/lib/i18n/LanguageContext"
import { CustomCursor }      from "@/components/portfolio/CustomCursor"
import { ParticleCanvas }    from "@/components/portfolio/ParticleCanvas"
import { Navbar }            from "@/components/portfolio/Navbar"
import { HeroSection }       from "@/components/portfolio/HeroSection"
import { StatsSection }      from "@/components/portfolio/StatsSection"
import { ServicesSection }   from "@/components/portfolio/ServicesSection"
import { PortfolioSection }  from "@/components/portfolio/PortfolioSection"
import { ProcessSection }    from "@/components/portfolio/ProcessSection"
import { CTASection }        from "@/components/portfolio/CTASection"
import { Footer }            from "@/components/portfolio/Footer"

export default function Page() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
      </main>
      <CTASection />
      <Footer />
    </LanguageProvider>
  )
}
