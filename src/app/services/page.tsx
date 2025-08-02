import About from "@/components/about/about";
import Hero from "@/components/services/hero";
import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import Identity from "@/components/services/identity";
import Experiences from "@/components/services/experiences";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px] overflow-hidden">
        <Identity />
        <Experiences />
        <About />
      </div>
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
