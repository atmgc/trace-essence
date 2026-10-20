import { IdentitySlash } from "@/assets/icons";
import Image from "next/image";

const Identity = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pt-10 md:pt-20 pb-20">
      <div className="z-10 rounded-lg">
        <Image
          src={"/images/identity.png"}
          alt=""
          className="w-full h-full rounded-lg"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex items-center">
        <p>
          Whether you’re looking for spiritual guidance, trying to understand yourself better or ready to make real changes in
your life, each session serves a different purpose. Please read the descriptions below so you can choose the
experience that best meets your needs.
        </p>
      </div>
      <div className="absolute bottom-[5%] right-[-10%]">
        <IdentitySlash />
      </div>
    </div>
  );
};

export default Identity;
