import {
  User,
  Leaf,
  Target,
  HelpCircle,
  Brain,
  BookOpen,
  Users,
  PlaySquare,
  Sparkle,
  Heart,
  Sprout,
  Sunrise,
} from "lucide-react";

// --- Data Arrays ---
const targetAudience = [
  {
    icon: Heart,
    text: "Is this all there is for me?",
  },
  {
    icon: Sprout,
    text: "I've outgrown my old life, but I'm not sure who I'm becoming.",
  },
  {
    icon: Target,
    text: "I keep second guessing my decisions.",
  },
  {
    icon: HelpCircle,
    text: "I feel stuck, overwhelmed, or unclear about my next step.",
  },
  {
    icon: Sunrise,
    text: "I know I'm meant for more, but I need clarity and direction.",
  },
];

const deliverables = [
  {
    icon: Brain,
    title: "Clarity & Direction",
    text: "Know what truly matters to you and gain confidence in the decisions that will shape your next chapter.",
  },
  {
    icon: BookOpen,
    title: "A Stronger Sense of Identity",
    text: "Reconnect with who you are beneath expectations, fear, and past experiences so you can move forward with greater self trust.",
  },
  {
    icon: User,
    title: "Freedom From Overthinking",
    text: "Learn how to quiet the mental noise, stop second guessing yourself, and make decisions from a place of confidence and alignment.",
  },
  {
    icon: Users,
    title: "Emotional Peace",
    text: "Understand what's keeping you stuck, process what no longer serves you, and create space for greater peace and emotional resilience.",
  },
  {
    icon: PlaySquare,
    title: "A Personalized Next Step Plan",
    text: "Walk away with practical actions tailored to your current season so you know exactly what to focus on after the masterclass.",
  },
];

// --- Reusable Decorative Divider ---
export const DecorativeDivider = () => (
  <div className="flex items-center justify-center w-full max-w-[120px] mx-auto mt-3 mb-10">
    <div className="flex-grow border-t border-[#B38D56]/50"></div>
    <Sparkle
      className="w-3 h-3 text-[#B38D56] mx-2 fill-current"
      strokeWidth={1}
    />
    <div className="flex-grow border-t border-[#B38D56]/50"></div>
  </div>
);

export default function Features() {
  return (
    <section className="flex flex-col w-full text-center">
      {/* Top Section: Is This For You? */}
      <div className="bg-[#FDFCF8] py-16 lg:py-24 px-6">
        <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase">
          Is This For You?
        </h2>
        <DecorativeDivider />
        <p className="text-[#1A1835] text-[15px] md:text-base leading-relaxed max-w-3xl mx-auto mt-4 mb-10 pb-20">
          You know you&apos;ve outgrown the version of yourself that got you
          here, but you&apos;re not fully clear on what comes next. You&apos;re
          ready for change, yet uncertainty, overthinking, or fear keeps pulling
          you back. If you&apos;re standing at the edge of a new season and want
          clarity on your next step, this masterclass was created for you.
        </p>

        <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase">
          You may be thinking
        </h2>
        <DecorativeDivider />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {targetAudience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center px-6 py-6 lg:py-0
                  ${index !== targetAudience.length - 1 ? "border-b sm:border-b-0 lg:border-r border-gray-200/70" : ""}
                  ${index === 0 || index === 1 ? "sm:border-b lg:border-b-0 border-gray-200/70" : ""}
                  ${index % 2 === 0 ? "sm:border-r lg:border-r border-gray-200/70" : ""}
                `}
              >
                <Icon
                  className="w-10 h-10 text-[#B38D56] mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-[#1A1835] text-[15px] leading-relaxed max-w-[200px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: What You'll Walk Away With */}
      {/* Uses a very subtle off-white/cream background to differentiate sections */}
      <div className="bg-[#FDFCF8] py-16 lg:py-24 px-6 border-t border-gray-100">
        <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase">
          What You&apos;ll Walk Away With
        </h2>
        <DecorativeDivider />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center px-6 py-6 lg:py-0
                  ${index !== deliverables.length - 1 ? "border-b sm:border-b-0 lg:border-r border-gray-200/70" : ""}
                  ${index === 0 || index === 1 ? "sm:border-b lg:border-b-0 border-gray-200/70" : ""}
                  ${index % 2 === 0 ? "sm:border-r lg:border-r border-gray-200/70" : ""}
                `}
              >
                <Icon
                  className="w-10 h-10 text-[#B38D56] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-[#1A1835] text-sm font-bold tracking-widest uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[220px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
