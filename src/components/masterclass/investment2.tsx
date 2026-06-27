"use client";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Investment() {
  const EARLY_BIRD_LINK =
    "https://calendly.com/tracessence/identity_shift_masterclass_earlybird";
  const REGULAR_LINK =
    "https://calendly.com/tracessence/who-am-i-becoming-an-identity-shift-masterclass";

  const [checkoutLink, setCheckoutLink] = useState(EARLY_BIRD_LINK);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Deadline: July 15, 2026 at 11:59 PM CDT
    const deadline = new Date("2026-07-15T23:59:59-05:00");
    const now = new Date();

    if (now > deadline) {
      setCheckoutLink(REGULAR_LINK);
      setIsExpired(true);
    }
  }, []);

  return (
    <section className="w-full flex flex-col font-sans">
      {/* Top Section: Pricing Cards */}
      <div className="bg-[#FDFCF8] py-16 px-6 w-full flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-[#B38D56] text-lg md:text-xl font-serif tracking-[0.1em] uppercase mb-2">
          Investment
        </h2>
        <div className="w-12 h-[1px] bg-[#B38D56] mb-12"></div>

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
              <span
                className={`text-[13px] font-medium ${
                  isExpired ? "text-gray-500" : "text-[#B38D56]"
                }`}
              >
                *Early bird ends July 15th
              </span>
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
        {/* NEW: Composite Background Asset
          Uses mix-blend-screen to drop the black background and keep the gold glowing.
        */}
        <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen pointer-events-none">
          <Image
            src="/images/gold-decorations.jpg" // Update to match your file name
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

          <p className="text-white text-xs md:text-sm tracking-[0.15em] uppercase mb-10 drop-shadow-md">
            10:00 AM CDT <span className="mx-3 text-white/50">|</span> 4:00 PM
            WAT
          </p>

          <Link
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#B38D56] hover:bg-[#9A7745] text-white px-10 py-4 flex items-center transition-colors duration-300 rounded shadow-lg"
          >
            <span className="text-sm font-medium tracking-widest uppercase mr-3">
              Register Now
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
