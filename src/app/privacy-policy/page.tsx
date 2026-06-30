import Contact from "@/components/home/contact";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import TermsOfService from "@/components/terms-of-service/termsOfService";
import React from "react";
import TermsofServicePage from "../terms-of-service/page";
import PrivacyPolicy from "@/components/privacyPolicy/privacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-[1440px] px-[16px] md:px-[100px]">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
