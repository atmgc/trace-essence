const ServiceGuide = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="rounded-2xl bg-[#F8F8F8] p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-medium text-[#222222]">
          Not sure which session to book?
        </h2>

        <div className="mt-5 space-y-4">
          <p className="text-sm md:text-base leading-relaxed text-[#909090]">
            <strong className="text-[#222222]">
              Spiritual Reading:
            </strong>{" "}
            You want intuitive messages and spiritual guidance
            about what is happening in your life.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-[#909090]">
            <strong className="text-[#222222]">
              Identity Coaching:
            </strong>{" "}
            You want to understand yourself, work through what
            is keeping you stuck and leave with practical steps
            to make changes.
          </p>
        </div>

        <p className="mt-5 border-t border-[#E5E5E5] pt-4 text-sm font-medium leading-relaxed text-primary">
          Readings provide spiritual insight. Coaching helps
          you do the work.
        </p>
      </div>
    </section>
  );
};

export default ServiceGuide;
