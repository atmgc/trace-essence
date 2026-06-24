"use client";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Investment() {
  // 1. Define your links
  const EARLY_BIRD_LINK =
    "https://calendly.com/tracessence/identity_shift_masterclass_earlybird";
  const REGULAR_LINK =
    "https://calendly.com/tracessence/who-am-i-becoming-an-identity-shift-masterclass";

  // 2. Set up state for the active link (Default to early bird)
  const [checkoutLink, setCheckoutLink] = useState(EARLY_BIRD_LINK);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // 3. Define the exact deadline (July 15, 2026 at 11:59 PM CDT)
    // We include the timezone offset (-05:00 for CDT) to be totally accurate
    const deadline = new Date("2026-07-15T23:59:59-05:00");
    const now = new Date();

    // 4. Swap the link if the current time is past the deadline
    if (now > deadline) {
      setCheckoutLink(REGULAR_LINK);
      setIsExpired(true);
    }
  }, []);

  return (
    <section className="bg-[#1A1835] w-full py-16 px-6 border-y border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left Side: Pricing Info */}
        <div className="flex flex-col items-center">
          <h2 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-10">
            Investment
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
            {/* Early Bird Pricing Box */}
            <div
              className={`relative border rounded-lg pt-10 pb-8 px-10 flex flex-col items-center w-[260px] transition-all duration-500 ${
                isExpired
                  ? "border-white/10 bg-transparent opacity-50 grayscale" // Grayed out state
                  : "border-[#B38D56] bg-[#B38D56]/5" // Active state
              }`}
            >
              {/* Dynamic Badge */}
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-2 uppercase tracking-[0.15em] rounded shadow-md whitespace-nowrap ${
                  isExpired ? "bg-gray-600" : "bg-[#B38D56]"
                }`}
              >
                {isExpired ? "Expired" : "Early Bird"}
              </div>

              {/* Dynamic Price */}
              <div
                className={`text-5xl mb-2 font-medium ${
                  isExpired ? "text-gray-400 line-through" : "text-[#B38D56]"
                }`}
              >
                $97
              </div>
              <p
                className={`text-sm font-serif italic text-center ${
                  isExpired ? "text-gray-400" : "text-[#B38D56]"
                }`}
              >
                Limited Time Only
              </p>
              <p
                className={`text-xs mt-2 text-center ${
                  isExpired ? "text-gray-500" : "text-[#B38D56]/80"
                }`}
              >
                *Early bird ends July 15th*
              </p>
            </div>

            {/* Regular Pricing Box */}
            <div
              className={`relative border rounded-lg pt-10 pb-8 px-10 flex flex-col items-center w-[260px] transition-all duration-500 ${
                isExpired
                  ? "border-[#B38D56] bg-[#B38D56]/5 scale-105 shadow-xl" // Highlighted when Early Bird expires
                  : "border-[#4A476A]" // Default state
              }`}
            >
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-2 uppercase tracking-[0.15em] rounded shadow-md whitespace-nowrap ${
                  isExpired ? "bg-[#B38D56]" : "bg-[#4A476A]"
                }`}
              >
                Regular Price
              </div>

              <div className="text-5xl text-white mb-2 font-medium">$147</div>
              <p className="text-white/80 text-sm font-serif italic text-center">
                After Early Bird Ends
              </p>
            </div>
          </div>
        </div>

        {/* Vertical/Horizontal Divider */}
        <div className="hidden lg:block w-px h-64 bg-white/20"></div>
        <div className="lg:hidden w-full max-w-sm h-px bg-white/20 my-4"></div>

        {/* Right Side: Details, Text & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-[#B38D56] text-2xl md:text-3xl font-serif italic mb-6 leading-snug">
            Your next chapter <br className="hidden sm:block" />
            starts with clarity.
          </h3>

          {/* NEW: Event Details Box */}
          <div className="flex flex-col gap-4 mb-8 text-white/90 bg-white/5 p-5 rounded-lg border border-white/10 w-full max-w-sm">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Calendar className="w-5 h-5 text-[#B38D56] flex-shrink-0" />
              <span className="text-[15px] font-medium tracking-wide">
                Saturday, August 1, 2026
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Clock className="w-5 h-5 text-[#B38D56] flex-shrink-0" />
              <span className="text-[15px] font-medium tracking-wide">
                10:00 AM CDT | 4:00 PM WAT
              </span>
            </div>
          </div>

          <Link
            href={checkoutLink}
            target="_blank" // Opens Calendly in a new tab
            rel="noopener noreferrer" // Security best practice for external links
            className="group bg-[#B38D56] hover:bg-[#9A7745] text-white px-8 py-4 flex items-center transition-colors duration-300 rounded shadow-lg"
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
