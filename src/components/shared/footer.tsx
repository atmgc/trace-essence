// import { push, ref } from "firebase/database";
import { useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
// import { toast } from "sonner";
// import { database } from "../../firebase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  //   const handleGetStarted = async () => {
  //     setLoading(true);
  //     try {
  //       const subscribeRef = ref(database, "subscribe");
  //       await push(subscribeRef, {
  //         email,
  //         createdAt: new Date().toISOString(),
  //       });
  //       setLoading(false);
  //       toast.success("Email added to subscribers!", {
  //         className: "my-classname",
  //         description: "You will get the latest updates",
  //         duration: 5000,
  //       });
  //     } catch (error) {
  //       setLoading(false);
  //       toast.error("Error adding email to subscribers.", {
  //         className: "my-classname",
  //         description: "An error occured. Please try again later",
  //         duration: 5000,
  //       });
  //     }
  //   };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-[40px] py-[50px] px-[16px] md:px-[100px] bg-[#F8F8F8]">
        <div className="md:col-span-2">
          <h1 className="font-[900] text-[20px] md:text-[28px] tracking-[-0.04em] text-[#333333]">
            The 20% Project.
          </h1>
          <p className="font-[400] text-base md:text-[20px] leading-[32px] text-[#757575] mt-[16px]">
            We support people in tech and sports.
          </p>
          <div className="flex gap-[8px] mt-[24px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#D9D9D9] rounded-full">
              <Link href={"https://x.com/20PctProject"} target="_blank">
                <Twitter />
              </Link>
            </div>
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#D9D9D9] rounded-full">
              <Link
                href={"https://linkedin.com/company/twentypercentproject"}
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#D9D9D9] rounded-full">
              <Link
                href={"https://www.facebook.com/profile.php?id=61576371820259"}
                target="_blank"
              >
                <Facebook />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-[700] text-[20px] tracking-[-0.04em] text-[#4F4F4F]">
            Navigation
          </h1>
          <ul className="flex flex-col space-y-[8px] md:space-y-[16px] font-[500] text-base md:text-[18px] text-[#757575] mt-[8px]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            {/* <Link href="/volunteer" className="hover:underline">Volunteer</Link> */}
            {/* <Link href="/donate" className="hover:underline">Donate</Link> */}
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="font-[700] text-[20px] tracking-[-0.04em] text-[#4F4F4F]">
            Contact Details
          </h1>
          <ul className="space-y-[8px] md:space-y-[16px] font-[500] text-base md:text-[18px] text-[#757575] mt-[8px]">
            <li>
              <a href="tel:+19255197788">+1 (925) 519-7788</a>
            </li>
            <li>
              <a href="mailto:hello@twentypercentproject.org">
                hello@twentypercentproject.org
              </a>
            </li>
            <li>North Milpitas Blvd, Milpitas, CA 95035 United States</li>
            <li></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h1 className="font-[700] text-[20px] tracking-[-0.04em] text-[#4F4F4F]">
            Newsletter
          </h1>
          <p>Want updates from us? Enter your email to subscribe.</p>

          <div className="relative flex items-center mt-[24px]">
            <input
              type="email"
              className="w-full h-[56px] px-4 text-gray-700 focus:outline-none rounded-[30px] placeholder-gray-400 border border-[#828282]"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="absolute right-[10px] whitespace-nowrap bg-gray-800 text-white px-6 py-2 font-semibold rounded-[30px] focus:outline-none hover:bg-gray-700 transition duration-200"
              //   onClick={handleGetStarted}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                "Get Started"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#D9D9D9] py-[8px] px-[16px] md:px-[100px]">
        <div className="flex flex-col md:flex-row gap-x-2">
          <p>Copyright © 2025 20%project.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-[4px]">
          <Link href="/terms-and-conditions" className="whitespace-nowrap">
            Terms & Conditions
          </Link>
          <p className="hidden md:block">|</p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
