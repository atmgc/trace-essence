import {
  CoreArrow,
  GuidianceArrow,
  GuidianceSlash,
  HeroLeft,
  HeroRight,
  TestimonialArrow,
} from "@/assets/icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center bg-[#860D8405]">
      <h1 className="font-[600] text-[60px] text-[#3B3B3B] mt-16">
        Supportive{" "}
        <span className="relative">
          guidance{" "}
          <span className="absolute bottom-[-15px] right-0">
            <GuidianceSlash />
          </span>
        </span>{" "}
        to reach your goals
      </h1>

      <div className="flex-1 relative w-full flex items-center justify-center">
        <Image
          src={"/images/hero.png"}
          alt="hero"
          className="w-[498px] h-[552px] z-10"
          width={1000}
          height={1000}
        />

        <Card className="absolute top-[40%] border-none right-[70%] shadow-[0px_4px_30px_0px_#EEEEEEEE]">
          <CardContent className="space-y-1.5">
            <div className="flex items-center justify-between gap-3.5">
              <div className="flex gap-0.5">
                <Star color="#860D84" fill="#860D84" size={24} />
                <Star color="#860D84" fill="#860D84" size={24} />
                <Star color="#860D84" fill="#860D84" size={24} />
                <Star color="#860D84" fill="#860D84" size={24} />
                <Star color="#860D84" fill="#860D84" size={24} />
              </div>
              <p className="text-[#222222] font-[500] text-xl">5.0</p>
            </div>
            <p className="text-[#909090] text-xs">From 10+ reviews</p>
          </CardContent>
        </Card>
        <div className="absolute top-[25%] left-[28%]">
          <GuidianceArrow />
        </div>

        <Card className="absolute top-[10%] left-[70%] bg-white rounded-[15px] border-none max-w-[339px] shadow-[0px_4px_30px_0px_#EEEEEE40]">
          <CardHeader>
            <Image
              src={"/images/apostrophe.png"}
              alt="index"
              width={50}
              height={50}
              className="w-[24px] h-[24px]"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription>
              "My Clarity Igniter Session gave me the courage to leave my
              unfulfilling career path. Tracy’s intuitive guidance helped me
              discover my true passion – I’ve never felt more alive!"
            </CardDescription>
            <CardDescription>~ Sarah Johnson</CardDescription>
          </CardContent>
        </Card>
        <div className="absolute top-[40%] right-[30%]">
          <TestimonialArrow />
        </div>

        <Card className="absolute bottom-[10%] left-[70%] w-[300px] border-none shadow-[0px_4px_30px_0px_#EEEEEEEE]">
          <CardContent>
            <CardTitle>Core Services</CardTitle>
            <div className="space-y-3 mt-5">
              <div className="bg-[#FFE2FF] px-7 py-2 rounded-[99px]">
                <p className="text-[#232323] text-sm">
                  Clarity Igniter Session
                </p>
              </div>
              <div className="bg-[#FFE2FF] px-7 py-2 rounded-[99px]">
                <p className="text-[#232323] text-sm">
                  Clarity Igniter Session
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="absolute top-[50%] right-[20%]">
          <CoreArrow />
        </div>

        <div className="absolute bottom-0 left-0">
          <HeroLeft />
        </div>
        <div className="absolute bottom-0 right-0">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
