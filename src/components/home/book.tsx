import Image from "next/image";
import Link from "next/link";

const Book = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-4">
      <div className="space-y-4 md:space-y-11 col-span-1 md:col-span-2">
        <p className="md:mt-[50px]">
          I created Beyond the Survival Self to intentionally guide you through the process of healing, self discovery, and identity change in a structured way.
        </p>
        <p>
          If you are coming out of survival mode, moving through a spiritual awakening, or simply realizing that the version of you that got you here no longer feels like who you are, this workbook gives you space to slow down and understand what is shifting.
        </p>
        <p>
          Through guided reflection and practical exercises, you will uncover how your identity was formed, recognize the beliefs and survival patterns you have carried, release what no longer fits, and begin rebuilding self trust as you reconnect with who you are becoming.
        </p>
        <p>
          You do not have to figure this season out blindly. This workbook gives you structure for the inner work.{" "}
          <Link
            href="https://traceessence.gumroad.com/l/lfhykh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 mt-2 bg-primary text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-800 transition"
          >
            Get your copy here
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
