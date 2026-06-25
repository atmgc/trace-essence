"use client";
import Image from "next/image";
import { ArrowRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  // 1. Define your links
  const EARLY_BIRD_LINK =
    "https://calendly.com/tracessence/identity_shift_masterclass_earlybird";
  const REGULAR_LINK =
    "https://calendly.com/tracessence/who-am-i-becoming-an-identity-shift-masterclass";

  // 2. Set up state for the active link (Default to early bird)
  const [checkoutLink, setCheckoutLink] = useState(EARLY_BIRD_LINK);

  useEffect(() => {
    // 3. Define the exact deadline (July 15, 2026 at 11:59 PM CDT)
    // We include the timezone offset (-05:00 for CDT) to be totally accurate
    const deadline = new Date("2026-07-15T23:59:59-05:00");
    const now = new Date();

    // 4. Swap the link if the current time is past the deadline
    if (now > deadline) {
      setCheckoutLink(REGULAR_LINK);
    }
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen bg-[#FDFCF8] text-[#131127] overflow-hidden">
      {/* Left Column: Content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 lg:px-24 lg:py-24 z-10">
        <div className="max-w-xl">
          {/* Pre-heading */}
          <p className="text-[#B38D56] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 leading-relaxed">
            A live 3 hour identity shift masterclass
          </p>

          {/* Main Title */}
          {/* Note: Ensure a serif font like 'Playfair Display' is set for font-serif in your tailwind config */}
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-[1.1]">
            <span className="text-primary block">WHO AM I</span>
            <span className="text-[#B38D56] block">BECOMING?</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center w-full max-w-[280px] mb-8">
            <div className="flex-grow border-t border-[#B38D56]/40"></div>
            <Sparkle
              className="w-4 h-4 text-[#B38D56] mx-3 fill-current"
              strokeWidth={1}
            />
            <div className="flex-grow border-t border-[#B38D56]/40"></div>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-serif italic mb-5 text-primary">
            You are not lost.
            <br />
            You are <span className="text-[#B38D56]">evolving.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm md:text-base max-w-md mb-10 leading-relaxed">
            If you&apos;ve outgrown your old life but don&apos;t know
            what&apos;s next, this masterclass will help you understand why you
            feel this way and give you the tools to move forward with clarity
            and confidence.
          </p>

          {/* CTA Button */}
          <Link
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary hover:bg-[#2A2752] text-white px-8 py-4 flex items-center transition-colors duration-300 hover:cursor-pointer w-fit"
          >
            <span className="text-sm font-medium tracking-widest uppercase mr-4">
              Register Now
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 relative w-full min-h-[500px] lg:min-h-screen">
        {/* Replace the src with your actual image path (e.g., /images/host.jpg) */}
        <Image
          src="/images/who-am-i-becoming.jpeg"
          alt="Masterclass Host"
          fill
          className="object-cover object-top lg:object-center"
          priority
        />

        {/* Subtle gradient overlay to blend the left side of the image with the background on large screens */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFCF8] to-transparent z-10"></div>
      </div>
    </section>
  );
}
