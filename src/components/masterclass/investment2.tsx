"use client";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DecorativeDivider } from "./features";

export default function Investment() {
  const EARLY_BIRD_LINK =
    "https://calendly.com/tracessence/identity_shift_masterclass_earlybird";
  const REGULAR_LINK =
    "https://calendly.com/tracessence/who-am-i-becoming-an-identity-shift-masterclass";

  // Paystack links (currently identical as requested, ready for you to update later)
  const PAYSTACK_EARLY_BIRD =
    "https://paystack.shop/pay/trace-essence_masterclass";
  const PAYSTACK_REGULAR =
    "https://paystack.shop/pay/trace-essence_masterclass";

  const [region, setRegion] = useState<"global" | "africa">("global");
  const [checkoutLink, setCheckoutLink] = useState(EARLY_BIRD_LINK);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Deadline: August 17, 2026 at 11:59 PM CDT
    const deadline = new Date("2026-08-17T23:59:59-05:00");
    const now = new Date();
    const expired = now > deadline;

    setIsExpired(expired);

    // Dynamic link generation based on deadline and selected region
    if (region === "global") {
      setCheckoutLink(expired ? REGULAR_LINK : EARLY_BIRD_LINK);
    } else {
      setCheckoutLink(expired ? PAYSTACK_REGULAR : PAYSTACK_EARLY_BIRD);
    }
  }, [region]);

  return (
    <section className="w-full flex flex-col font-sans">
      {/* Top Section: Pricing Cards */}
      <div className="bg-white py-16 px-6 w-full flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase">
          Investment
        </h2>
        <DecorativeDivider />

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full justify-center items-stretch">
          {/* EARLY BIRD CARD */}
          <div
            className={`flex flex-col w-full md:w-[340px] rounded shadow-sm border transition-all duration-500 overflow-hidden ${
              isExpired
                ? "border-gray-300 opacity-60 grayscale"
                : "border-[#2A1635]"
            }`}
          >
            <div
              className={`py-3 text-center text-[13px] font-bold tracking-[0.15em] uppercase ${
                isExpired ? "bg-gray-400 text-white" : "bg-[#2A1635] text-white"
              }`}
            >
              {isExpired ? "Expired" : "Early Bird"}
            </div>

            <div className="bg-white py-12 px-6 flex flex-col items-center justify-center flex-grow">
              <span
                className={`text-6xl md:text-7xl font-serif mb-4 ${
                  isExpired ? "text-gray-400 line-through" : "text-[#2A1635]"
                }`}
              >
                $97
              </span>
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#1A1835] mb-4">
                Limited Time Only
              </span>
              {/* <span
                className={`text-[13px] font-medium ${
                  isExpired ? "text-gray-500" : "text-[#B38D56]"
                }`}
              >
                *Early bird ends July 17th
              </span> */}
            </div>
          </div>

          {/* REGULAR PRICE CARD */}
          <div
            className={`flex flex-col w-full md:w-[340px] rounded shadow-sm border transition-all duration-500 overflow-hidden ${
              isExpired
                ? "border-[#B38D56] shadow-xl scale-105"
                : "border-[#E6DBCB]"
            }`}
          >
            <div
              className={`py-3 text-center text-[13px] font-bold tracking-[0.15em] uppercase ${
                isExpired
                  ? "bg-[#B38D56] text-white"
                  : "bg-[#E6DBCB] text-[#1A1835]"
              }`}
            >
              Regular Price
            </div>

            <div className="bg-white py-12 px-6 flex flex-col items-center justify-center flex-grow">
              <span className="text-6xl md:text-7xl font-serif mb-4 text-[#B38D56]">
                $147
              </span>
              <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#1A1835]">
                After Early Bird Ends
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details & CTA Banner */}
      <div className="relative bg-[#2A1635] w-full py-16 md:py-20 px-6 overflow-hidden">
        {/* Composite Background Asset */}
        <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen pointer-events-none">
          <Image
            src="/images/gold-decorations.jpg"
            alt="Decorative gold dust and floral art"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Top Gold Line */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-[#B38D56]/50"></div>

        {/* Centered Content Wrapper */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Calendar Icon */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-32 xl:-left-40">
            <CalendarDays
              className="w-20 h-20 text-[#B38D56]"
              strokeWidth={1}
            />
          </div>

          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-serif uppercase tracking-[0.1em] mb-6 leading-relaxed shadow-sm">
            Your next chapter starts with <br className="hidden sm:block" />
            understanding who you are becoming.
          </h3>

          <div className="w-12 h-[1px] bg-[#B38D56] mb-6"></div>

          <p className="text-[#B38D56] text-sm md:text-base font-medium tracking-[0.15em] uppercase mb-3 drop-shadow-md">
            Saturday, August 1, 2026
          </p>

          <p className="text-white text-xs md:text-sm tracking-[0.15em] uppercase mb-8 drop-shadow-md">
            10:00 AM CDT <span className="mx-3 text-white/50">|</span> 4:00 PM
            WAT
          </p>

          {/* Region Selector Tabs */}
          <div className="flex flex-col items-center mb-6 w-full max-w-sm">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
              Select Your Registration Route
            </p>
            <div className="flex bg-[#1A1835]/60 p-1 rounded border border-[#B38D56]/20 w-full">
              <button
                type="button"
                onClick={() => setRegion("global")}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all duration-300 ${
                  region === "global"
                    ? "bg-[#B38D56] text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Global (USD)
              </button>
              <button
                type="button"
                onClick={() => setRegion("africa")}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all duration-300 ${
                  region === "africa"
                    ? "bg-[#B38D56] text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Africa (NG, GH, ZA, KE)
              </button>
            </div>
          </div>

          {/* Dynamic Registration Button */}
          <Link
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#B38D56] hover:bg-[#9A7745] text-white px-10 py-4 flex items-center transition-colors duration-300 rounded shadow-lg"
          >
            <span className="text-sm font-medium tracking-widest uppercase mr-3">
              {region === "global" ? "Register Now" : "Register via Paystack"}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
