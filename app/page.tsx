import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import WhyFit from "@/components/WhyFit";
import Work from "@/components/Work";
import Close from "@/components/Close";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <About />
        <WhyFit />
        <Work />
        <Close />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
