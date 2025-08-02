import Image from "next/image";

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      <div className="relative">
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

      <div className="space-y-11 col-span-1 md:col-span-2">
        <p className="mt-[100px]">
          Are you tired of feeling disconnected from the woman you’re meant to
          be—trapped by self-doubt, societal expectations, or limiting beliefs?
          It’s time to break free and step into your most empowered, authentic
          self. Our transformative identity coaching merges deep spiritual
          insight with practical guidance, helping you peel back the layers of
          conditioning and rediscover your true essence. Together, we’ll uncover
          the subconscious patterns keeping you stuck, redefine your sense of
          worth, and align your life with your deepest purpose. This isn’t just
          about change—it’s about reclaiming your power and designing a future
          that reflects who you truly are, not who the world says you should be.
        </p>
        <p>
          Imagine a life where every decision flows from clarity, your
          relationships feel deeply fulfilling, and your path aligns
          effortlessly with your soul’s calling. This journey is more than
          self-discovery—it’s a radical transformation. Through personalized
          coaching, you’ll silence the inner critic, cultivate unshakable
          confidence, and create a life that’s not just successful, but
          meaningful. You deserve to thrive—not just survive. Let’s awaken the
          extraordinary woman within you and build a future that’s bold,
          purposeful, and unapologetically yours. The first step begins here.
          Are you ready?
        </p>
      </div>
    </div>
  );
};

export default Intro;
