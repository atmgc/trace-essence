import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
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
