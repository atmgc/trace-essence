export default function MasterclassOverview() {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
        {/* Left Column: Title & Intro */}
        <div className="md:w-5/12 flex flex-col">
          <h2 className="text-[#1A1835] text-lg md:text-xl font-medium tracking-[0.15em] uppercase mb-5">
            What This Masterclass Is
          </h2>

          {/* Subtle Gold Divider */}
          <div className="w-12 h-[2px] bg-[#B38D56] mb-8"></div>

          <p className="text-[#1A1835] font-serif text-xl md:text-2xl leading-[1.4] italic">
            <span className="font-semibold not-italic">Who Am I Becoming?</span>{" "}
            is a live, three hour transformational masterclass designed for
            women who know they've outgrown who they used to be and are ready to
            step into the next chapter of their lives with greater clarity,
            confidence, and purpose.
          </p>
        </div>

        {/* Right Column: Detailed Paragraphs */}
        <div className="md:w-7/12 flex flex-col gap-6 text-gray-700 text-[15px] md:text-base leading-relaxed justify-center mt-2 md:mt-0">
          <p>
            <strong className="text-[#1A1835] font-semibold">
              This is not about becoming someone else.
            </strong>{" "}
            It's about shedding the beliefs, fears, and patterns that no longer
            serve you so you can reconnect with the woman you were always meant
            to be.
          </p>

          <p>
            Together, we'll explore why identity shifts can feel so
            overwhelming, what's keeping you feeling stuck, and how to move
            forward with confidence instead of confusion. You'll leave with
            practical tools, a renewed sense of self, and a personalized action
            plan you can begin implementing immediately.
          </p>

          <p>
            Whether you're navigating a career change, healing from a difficult
            season, rebuilding after loss, or simply sensing that you're meant
            for more, this masterclass will help you gain the clarity and
            direction needed to confidently move into your next season.
          </p>
        </div>
      </div>
    </section>
  );
}
