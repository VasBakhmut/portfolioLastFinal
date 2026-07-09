import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Blog } from "@/components/Blog";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { SeoAuditBanner } from "@/components/SeoAuditBanner";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <BackgroundDecor />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Blog />
          <Services />
          <Process />
          <Pricing />
          <SeoAuditBanner />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
