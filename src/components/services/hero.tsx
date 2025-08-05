import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[60vh] md:h-[100vh] bg-black/75 services-background">
      <Image src={"/images/logo.png"} alt="" width={100} height={100} />
      <h1 className="font-[600] text-[30px] md:text-[60px] text-white text-center px-4">
        Services That Support Your Individual Journey
      </h1>
    </div>
  );
};

export default Hero;
