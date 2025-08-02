import About from "@/components/about/about";
import Hero from "@/components/about/hero";
import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";

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
