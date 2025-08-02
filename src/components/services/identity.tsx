import { IdentitySlash } from "@/assets/icons";
import Image from "next/image";

const Identity = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 py-20">
      <div className="z-10">
        <Image
          src={"/images/identity.png"}
          alt=""
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex items-center">
        <p>
          My identity coaching blends spiritual guidance with intuitive insights
          to help you align with your most authentic self. Through
          self-development practices and channeled messages from your spiritual
          team, you’ll gain clarity, release what holds you back, and step into
          a life of purpose and empowerment—all for your highest good.
        </p>
      </div>
      <div className="absolute bottom-[5%] right-[-10%]">
        <IdentitySlash />
      </div>
    </div>
  );
};

export default Identity;
