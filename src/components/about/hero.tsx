import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[100vh] bg-black/75 about-background">
      <Image src={"/images/logo.png"} alt="" width={100} height={100} />
      <h1 className="font-[600] text-[60px] text-white text-center">
        Intuitive Approach Supported With Practical Actions
      </h1>
    </div>
  );
};

export default Hero;
