import { Sparkle } from "lucide-react";

export default function Marquee() {
  // The repeating content block
  const MarqueeContent = () => (
    <div className="flex items-center justify-around whitespace-nowrap min-w-full shrink-0 px-4">
      <span className="mx-4 text-sm font-semibold tracking-[0.2em] uppercase">
        Who Am I Becoming? Masterclass
      </span>
      <Sparkle className="w-4 h-4 text-[#B38D56] mx-4 fill-current" />
      <span className="mx-4 text-sm font-semibold tracking-[0.2em] uppercase text-[#B38D56]">
        Saturday, August 1, 2026
      </span>
      <Sparkle className="w-4 h-4 text-[#B38D56] mx-4 fill-current" />
      <span className="mx-4 text-sm font-semibold tracking-[0.2em] uppercase">
        10:00 AM CDT / 4:00 PM WAT
      </span>
      <Sparkle className="w-4 h-4 text-[#B38D56] mx-4 fill-current" />
    </div>
  );

  return (
    <div className="relative flex overflow-x-hidden bg-primary text-[#FDFCF8] py-4 border-y border-[#B38D56]/30">
      <div className="animate-marquee flex items-center">
        {/* Render it twice for a seamless infinite scroll */}
        <MarqueeContent />
        <MarqueeContent />
      </div>

      {/* Optional: Add gradient overlays on the edges to make it fade in/out smoothly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent z-10"></div>
    </div>
  );
}
