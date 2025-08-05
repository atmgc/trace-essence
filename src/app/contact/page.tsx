import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
