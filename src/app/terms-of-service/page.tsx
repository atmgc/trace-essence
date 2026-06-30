import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import TermsOfService from "@/components/terms-of-service/termsOfService";
import React from "react";

const TermsofServicePage = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <TermsOfService />
      </div>
      <Footer />
    </div>
  );
};

export default TermsofServicePage;
