import Image from "next/image";

const DidYouKnow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-[20px] px-[16px] md:px-[100px] bg-black/40">
      <div>
        <p className="text-5xl mb-6 text-white">Do you...</p>
        <p className="text-xl text-[#F8F8F8]">...need IMMEDIATE ANSWERS</p>
        <p className="text-xl text-[#F8F8F8]">
          ...feel “LOST” in your IDENTITY/PURPOSE
        </p>
        <p className="text-xl text-[#F8F8F8]">
          ...crave COMMUNITY + SPIRITUAL GROWTH
        </p>
        <p className="text-xl text-[#F8F8F8]">...want TOTAL REINVENTION</p>
        <p className="text-xl text-[#F8F8F8]">
          ...want to rejuvenate your ORGANIZATIONS/EVENTS
        </p>
      </div>
      <div>
        <Image
          src={"/images/question-mark.png"}
          alt={"question mark"}
          className="w-full h-[400px]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default DidYouKnow;
