import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import React from "react";
import PrivacyPolicy from "@/components/privacyPolicy/privacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Nav />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
