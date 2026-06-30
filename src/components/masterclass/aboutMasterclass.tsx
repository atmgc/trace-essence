import Image from "next/image";

export default function AboutMasterclass() {
  return (
    <section className="bg-[#FDFCF8] w-full flex">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image */}
        {/* Ensure the container has a relative position and a minimum height for the 'fill' image to work */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[450px] lg:min-h-[600px] overflow-hidden shadow-sm">
          {/* Replace src with your actual image path */}
          <Image
            src="/images/about-masterclass.jpeg"
            alt="Becoming Her journal and vase on table"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-6">
          {/* Heading */}
          <h2 className="text-[#1A1835] text-lg md:text-xl font-serif tracking-[0.1em] uppercase mb-4">
            Meet Tracy
          </h2>

          {/* Gold Divider Line */}
          <div className="w-10 h-[2px] bg-[#B38D56] mb-8"></div>

          {/* First Paragraph (Standard Text) */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Hi, I&apos;m Tracy, founder of Trace Essence.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            I&apos;ve navigated major personal and professional transitions that
            required me to redefine who I was from the inside out. I know what
            it&apos;s like to outgrow an old version of yourself, question
            what&apos;s next, and rebuild with intention.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            That experience led me to create Trace Essence, where I now help you
            gain clarity, reconnect with your authentic identity, and
            confidently navigate life&apos;s transitions through practical
            coaching, self awareness, and spiritual insight.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            My hope is that you leave this masterclass with a deeper
            understanding of yourself, renewed confidence, and a clear path for
            what&apos;s next.
          </p>

          {/* <p className="text-[#1A1835] font-semibold text-sm md:text-base leading-relaxed mb-8">
            <span className="block mb-2">
              You are not becoming someone else.
            </span>
            <span className="block">
              You are uncovering the version of you that has been waiting
              underneath survival, pressure, and old expectations.
            </span>
          </p>

          <p className="text-[#B38D56] text-2xl md:text-[28px] font-serif italic leading-snug">
            This is where the next version of you begins.
          </p> */}
        </div>
      </div>
    </section>
  );
}
