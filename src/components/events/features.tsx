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
} from "lucide-react";

// --- Data Arrays ---
const targetAudience = [
  {
    icon: User,
    text: "You feel disconnected from yourself.",
  },
  {
    icon: Leaf,
    text: "You've outgrown your old life.",
  },
  {
    icon: Target,
    text: "You're navigating a major life transition.",
  },
  {
    icon: HelpCircle,
    text: "You're unsure of your next step.",
  },
];

const deliverables = [
  {
    icon: Brain,
    title: "CLARITY",
    text: "Understand what's happening within you and why.",
  },
  {
    icon: BookOpen,
    title: "REFLECTION EXERCISES",
    text: "Powerful prompts to help you go deeper and gain real insight.",
  },
  {
    icon: Users,
    title: "LIVE Q & A",
    text: "Get your questions answered in real time.",
  },
  {
    icon: PlaySquare,
    title: "REPLAY ACCESS",
    text: "Rewatch and revisit at your pace.",
  },
];

// --- Reusable Decorative Divider ---
const DecorativeDivider = () => (
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
      <div className="bg-white py-16 lg:py-24 px-6">
        <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase">
          Is This For You?
        </h2>
        <DecorativeDivider />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
          What You'll Walk Away With
        </h2>
        <DecorativeDivider />

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
