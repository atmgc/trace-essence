import Image from "next/image";
import Link from "next/link";

const Book = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-4">
      <div className="space-y-4 md:space-y-11 col-span-1 md:col-span-2">
        <p className="md:mt-[50px]">
          To help guide you on your journey, I created this workbook from a very
          real place. I know what it feels like to go through identity shifts
          and life changes without anyone there to truly guide you through it.
          It can feel lonely, confusing, and overwhelming at times.
        </p>
        <p>
          So I created the kind of workbook I wish I had, one that gently walks
          you through the process of reconnecting with yourself, understanding
          your patterns, and becoming more intentional about your life.
        </p>
        <p>
          I truly believe this workbook can make a huge difference if you are
          willing to do the work that comes with growth and change.
        </p>
        <p>
          If you feel ready to begin your journey,{" "}
          <Link
            href="https://traceessence.gumroad.com/l/lfhykh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-800 transition"
          >
            click to add to cart.
          </Link>
        </p>
      </div>
      <div className="hidden md:block relative">
        <Image
          src="/images/who-am-i.png"
          alt="intro image"
          className="w-full h-full"
          width={1000}
          height={1000}
        />
        {/* <div className="absolute top-[10%] left-[-10%]">
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
        </div> */}
      </div>

      <div className="md:hidden flex items-center justify-center relative">
        <Image
          src="/images/who-am-i.png"
          alt="who am i image"
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

export default Book;
