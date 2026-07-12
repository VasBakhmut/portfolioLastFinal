import { getProjects, getBlogs, type ApiProject, type ApiBlog } from "@/lib/api";
import dynamic from "next/dynamic";

export const revalidate = 300; // re-fetch every 5 min as fallback if webhook revalidation fails
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { SeoAuditBanner } from "@/components/SeoAuditBanner";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";

const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground").then((m) => ({ default: m.ParticleBackground })),
  { ssr: false }
);
const FloatingCallButton = dynamic(
  () => import("@/components/FloatingCallButton").then((m) => ({ default: m.FloatingCallButton })),
  { ssr: false }
);


function mapProject(p: ApiProject) {
  return {
    id: p._id,
    title: p.title,
    description: p.description,
    type: p.categories[0] ?? "Web App",
    tech: p.tags,
    categories: p.categories,
    price: p.price,
    image: p.image,
    link:
      p.linkType === "live"
        ? { type: "demo" as const, url: p.linkUrl, label: "Live Demo" }
        : { type: "private" as const, label: "Private Client Project" },
  };
}

function mapBlog(b: ApiBlog) {
  return {
    title: b.title,
    excerpt: b.excerpt,
    readTime: `${b.readTime} min read`,
    date: new Date(b.createdAt).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    slug: b.slug,
    category: b.category,
    image: b.image,
  };
}

export default async function Home() {
  const [apiProjects, apiBlogs] = await Promise.all([getProjects(), getBlogs()]);
  const projects = apiProjects.map(mapProject);
  const blogs = apiBlogs.map(mapBlog);

  return (
    <>
      <ParticleBackground />
      <BackgroundDecor />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Projects projects={projects} />
          <Skills />
          <Services />
          <Process />
          <Pricing />
          <Blog posts={blogs} />
          <SeoAuditBanner />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingCallButton />
      </div>
    </>
  );
}
