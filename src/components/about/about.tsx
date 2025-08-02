import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div></div>

      <div>
        <Image src={"/images/tracy.png"} alt="" width={100} height={100} />
      </div>
    </div>
  );
};

export default About;
