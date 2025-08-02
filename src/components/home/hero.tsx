import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-dvh bg-red-500 flex flex-col items-center">
      <h1 className="font-[600] text-[60px] text-[#3B3B3B]">
        Supportive guidance to reach your goals
      </h1>

      <div>
        <Image
          src={"/images/hero.png"}
          alt="hero"
          className="w-[498px] h-[552px]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Hero;
