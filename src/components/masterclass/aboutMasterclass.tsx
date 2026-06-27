import Image from "next/image";

export default function AboutMasterclass() {
  return (
    <section className="bg-[#FDFCF8] py-16 px-6 md:px-12 lg:px-24 w-full flex justify-center border-y border-gray-100">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image */}
        {/* Ensure the container has a relative position and a minimum height for the 'fill' image to work */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[450px] lg:min-h-[500px] rounded-sm overflow-hidden shadow-sm">
          {/* Replace src with your actual image path */}
          <Image
            src="/images/about-masterclass.jpg"
            alt="Becoming Her journal and vase on table"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          {/* Heading */}
          <h2 className="text-[#1A1835] text-lg md:text-xl font-serif tracking-[0.1em] uppercase mb-4">
            About This Masterclass
          </h2>

          {/* Gold Divider Line */}
          <div className="w-10 h-[2px] bg-[#B38D56] mb-8"></div>

          {/* First Paragraph (Standard Text) */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            This 3 hour live experience is designed for women who know they have
            outgrown the version of themselves they once had to be.
          </p>

          {/* Second Paragraph (Bolded Text) */}
          <p className="text-[#1A1835] font-semibold text-sm md:text-base leading-relaxed mb-8">
            <span className="block mb-2">
              You are not becoming someone else.
            </span>
            <span className="block">
              You are uncovering the version of you that has been waiting
              underneath survival, pressure, and old expectations.
            </span>
          </p>

          {/* Signature/Quote Text */}
          {/* Note: Consider adding a script/handwriting font to your Tailwind config for this specific line to perfectly match the design. */}
          <p className="text-[#B38D56] text-2xl md:text-[28px] font-serif italic leading-snug">
            This is where the next version of you begins.
          </p>
        </div>
      </div>
    </section>
  );
}
