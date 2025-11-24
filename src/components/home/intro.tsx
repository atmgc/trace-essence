import Image from "next/image";

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-4">
      <div className="hidden md:block relative">
        <Image
          src="/images/intro.png"
          alt="intro image"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
        <div className="absolute top-[10%] left-[-10%]">
          <Image
            src={"/images/leaf-xl.png"}
            alt="leaf image"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute bottom-[2%] left-[-20%]">
          <Image
            src={"/images/leaf-md.png"}
            alt="leaf image"
            width={70}
            height={70}
          />
        </div>
        <div className="absolute top-[50%] right-[0%]">
          <Image
            src={"/images/leaf-sm.png"}
            alt="leaf image"
            width={50}
            height={50}
          />
        </div>
      </div>

      <div className="space-y-4 md:space-y-11 col-span-1 md:col-span-2">
        <p className="md:mt-[100px]">
          You don’t have to keep feeling tired, disconnected, or overwhelmed by
          the weight of who you’ve been trying to be. This journey invites you
          to release the self-doubt, pressure, and limiting beliefs that have
          drained your energy and kept you small, so you can finally step into
          who you’re truly meant to be.
        </p>
        <p>
          Through spiritual insight and practical identity coaching, you’ll
          uncover the subconscious patterns behind the exhaustion, reclaim your
          sense of worth, and realign your life with your deeper purpose. This
          is more than self-improvement—it’s a full transformation into clarity,
          confidence, and soul-led living. If you’re ready to move beyond
          survival mode and rise into the extraordinary version of you, this is
          your moment.
        </p>
      </div>

      <div className="md:hidden flex items-center justify-center relative">
        <Image
          src="/images/intro.png"
          alt="intro image"
          className="w-fit h-fit"
          width={1000}
          height={1000}
        />
        <div className="absolute top-[10%] left-[-10%]">
          <Image
            src={"/images/leaf-xl.png"}
            alt="leaf image"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute bottom-[2%] left-[-20%]">
          <Image
            src={"/images/leaf-md.png"}
            alt="leaf image"
            width={70}
            height={70}
          />
        </div>
        <div className="absolute top-[50%] right-[0%]">
          <Image
            src={"/images/leaf-sm.png"}
            alt="leaf image"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
