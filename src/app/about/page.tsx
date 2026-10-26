import type metadata from "next";
import About from "@/components/about/about";
import Hero from "@/components/about/hero";
import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";

export const metadata: Metadata = {
  title: "About Tracy | Identity Coach & Intuitive Speaker",
  description: "Meet Tracy, founder of Trace Essence. Learn about her approach to identity coaching, self
discovery, personal growth, and intuitive spiritual guidance.",
  openGraph: {
    images: ['/images/logo.png']
  }
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <About />
      </div>
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
