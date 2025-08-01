import Contact from "@/components/home/contact";
import DidYouKnow from "@/components/home/did-you-know";
import Experiences from "@/components/home/experiences";
import Intro from "@/components/home/intro";
import OurService from "@/components/home/our-services";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";

export default function Home() {
  return (
    <div>
      {/* <Nav /> */}
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <Intro />
        <OurService />
      </div>
      <DidYouKnow />
      <Experiences />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
