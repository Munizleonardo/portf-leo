import { LanguageProvider }   from "@/lib/i18n/LanguageContext"
import { Navbar }             from "@/components/portfolio/Navbar"
import { HeroSection }        from "@/components/portfolio/HeroSection"
import { AboutSection }       from "@/components/portfolio/AboutSection"
import { StatsSection }       from "@/components/portfolio/StatsSection"
import { SkillsSection }      from "@/components/portfolio/SkillsSection"
import { ServicesSection }    from "@/components/portfolio/ServicesSection"
import { PortfolioSection }   from "@/components/portfolio/PortfolioSection"
import { ExperienceSection }  from "@/components/portfolio/ExperienceSection"
import { ProcessSection }     from "@/components/portfolio/ProcessSection"
import { CTASection }         from "@/components/portfolio/CTASection"
import { Footer }             from "@/components/portfolio/Footer"

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ExperienceSection />
        <ProcessSection />
      </main>
      <CTASection />
      <Footer />
    </LanguageProvider>
  )
}
