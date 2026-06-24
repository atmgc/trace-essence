import Image from "next/image";

export default function AboutMasterclass() {
  return (
    <section className="bg-white py-12 lg:py-16 px-6 border-y border-gray-100 flex justify-center w-full">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10 lg:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-100">
            {/* Replace the src with your actual image path */}
            <Image
              src="/images/profile.jpeg"
              alt="Masterclass Host"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1 max-w-sm text-center md:text-left">
          <h2 className="text-[#1A1835] text-xs md:text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            About This Masterclass
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            This 3 hour live experience is designed for women who are ready to
            stop feeling stuck, start understanding themselves, and
            intentionally step into the next version of who they are.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-28 bg-gray-200 lg:mx-4"></div>
        <div className="md:hidden w-full max-w-xs h-px bg-gray-200 my-2"></div>

        {/* Right Quote */}
        <div className="flex-1 max-w-sm text-center md:text-left">
          <p className="text-xl md:text-2xl lg:text-[26px] font-serif italic text-[#1A1835] leading-[1.3]">
            <span className="block mb-1">You are not becoming</span>
            <span className="block mb-1">someone else.</span>
            <span className="block mb-1">You are uncovering</span>
            <span className="text-[#B38D56] block">
              who you have always been.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
