import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import ProofCards from "@/components/ProofCards";
import HowIBuild from "@/components/HowIBuild";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <DemoSection />
        <ProofCards />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
