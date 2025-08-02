import { StarIcon } from "@/assets/icons";
import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-28 mb-20">
      <div>
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary">ABOUT</p>
        </div>
        <h1 className="text-5xl text-[#222222] mt-3.5">
          You are the one we’ve been waiting for...
        </h1>
        <p className="text-xl text-[#3B3B3B] mt-6">
          For 10+ years, Tracy’s been turning “Who am I?!” crises into “Hell
          yes, THIS is me!” breakthroughs with her irresistible blend of
          spiritual wisdom, actionable coaching strategies, and contagious
          playfulness. This isn’t your stuffy self-help—it’s a liberation party
          where limiting beliefs get evicted, your authentic self gets front-row
          seats, and transformation is empowerment rather than work. Whether on
          TEDx stages or in coaching sessions, her superpower is making profound
          growth shockingly fun. Ready to trade self-doubt for unshakable
          confidence? Your most vibrant life starts now—let’s play!
        </p>
      </div>

      <div>
        <Image
          src={"/images/tracy.png"}
          alt=""
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default About;
