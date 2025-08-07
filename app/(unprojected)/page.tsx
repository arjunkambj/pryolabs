import { CTA } from "@/components/home/cta";
import { FAQ } from "@/components/home/faq";
import { FeaturesGrid } from "@/components/home/features-grid";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Logos } from "@/components/home/logos";
import { Navbar } from "@/components/home/navbar";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <FeaturesGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
