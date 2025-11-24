"use client";
// import { push, ref } from "firebase/database";
import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { TiktokIcon } from "@/assets/icons";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] py-[50px] px-[16px] md:px-[100px] bg-primary">
        <div>
          <Link href="/">
            <Image src={"/images/logo.png"} alt="" width={100} height={100} />
          </Link>
          <div className="flex gap-[8px] mt-9">
            <div className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full">
              <Link
                href={"https://www.youtube.com/@traceessence"}
                target="_blank"
              >
                <Youtube width={14} height={14} />
              </Link>
            </div>
            <div className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full">
              <Link
                href={"https://www.tiktok.com/@divine_teaching"}
                target="_blank"
              >
                <TiktokIcon />
              </Link>
            </div>
            <div className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full">
              <Link
                href={" https://www.instagram.com/trace_essence/"}
                target="_blank"
              >
                <Instagram width={14} height={14} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-[500] text-[20px] tracking-[-0.04em] text-white">
            Navigation
          </h1>
          <ul className="flex flex-col space-y-2.5 font-[400] text-base text-[#F8F8F8] mt-5">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </ul>
        </div>

        {/* <div>
          <h1 className="font-[500] text-[20px] tracking-[-0.04em] text-white">
            Contact Details
          </h1>
          <ul className="space-y-2.5 font-[400] text-base text-[#F8F8F8] mt-5">
            <li>
              <a href="mailto:tracessence@gmail.com">tracessence@gmail.com</a>
            </li>
            <li>Houston, Texas</li>
            <li></li>
          </ul>
        </div> */}

        {/* <div>
          <h1 className="font-[500] text-[20px] tracking-[-0.04em] text-white">
            Subscribe To Newsletter
          </h1>

          <div className="mt-5 space-y-4">
            <Input
              placeholder="Enter your email"
              className="h-12 text-white placeholder:text-[#F8F8F8] rounded-[12px]"
              onChange={handleEmailChange}
              value={email}
            />

            <Button variant={"outline"}>Subscribe</Button>
          </div>
        </div> */}
      </div>

      <div className="flex items-center justify-between bg-primary border-t border-[#F0FFD9] py-[8px] px-[16px] md:px-[100px] text-white pt-6 pb-6">
        <div className="flex flex-col md:flex-row gap-x-5">
          <p>Copyright © 2025 Tracessense. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
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
