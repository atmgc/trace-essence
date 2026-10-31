import type { Metadata } from "next";
import AboutMasterclass from "@/components/masterclass/aboutMasterclass";
import Features from "@/components/masterclass/features";
import Hero from "@/components/masterclass/hero";
import Investment from "@/components/masterclass/investment";
import Investment2 from "@/components/masterclass/investment2";
import MasterclassOverview from "@/components/masterclass/overview";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import React from "react";

export const metadata: Metadata = {
  title: "Who Am I Becoming? Identity Shift Masterclass | Trace Essence",
  description: "Explore identity shifts, limiting beliefs, and practical next steps in the Who Am I Becoming? Identity shift masterclass with Trace Essence.",
  openGraph: {
    images: ['/images/logo.png']
  }
}

const WhoAmIBecoming = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <MasterclassOverview />
      <Features />
      {/* <Investment /> */}
      <Investment2 />
      <AboutMasterclass />
      <Footer />
    </div>
  );
};

export default WhoAmIBecoming;
