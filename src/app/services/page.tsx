import type metadata from "next";
import About from "@/components/about/about";
import Hero from "@/components/services/hero";
import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import Identity from "@/components/services/identity";
import Experiences from "@/components/services/experiences";
import Wisdom from "@/components/services/wisdom";
import Engagements from "@/components/services/engagements";
import Services from "@/components/services/services";
import ServiceGuide from "@/components/services/serviceGuide";

export const metadata: Metadata = {
  title: "Online Identity Coaching & Private Readings | Trace Essence",
  description: "Explore online identity coaching, private intuitive readings and speaking services with Tracy. See
what each service offers and how to book.",
  openGraph: {
    images: ['/images/logo.png']
  }
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px] overflow-hidden">
        <Identity />
        <ServiceGuide />
        <Experiences />
        <Wisdom />
        <Engagements />
        {/* <Services /> */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
