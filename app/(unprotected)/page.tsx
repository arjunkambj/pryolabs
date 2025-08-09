import { CaseStudies } from "@/components/home/case-studies";
import { CTA } from "@/components/home/cta";
import { FAQ } from "@/components/home/faq";
import { FeaturesGrid } from "@/components/home/features-grid";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import Pricing from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { SectionDivider } from "@/components/shared/section-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <FeaturesGrid />
        <SectionDivider />
        <CaseStudies />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
