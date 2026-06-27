import AboutMasterclass from "@/components/masterclass/aboutMasterclass";
import Features from "@/components/masterclass/features";
import Hero from "@/components/masterclass/hero";
import Investment from "@/components/masterclass/investment";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import React from "react";

const WhoAmIBecoming = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Investment />
      <AboutMasterclass />
      <Footer />
    </div>
  );
};

export default WhoAmIBecoming;
