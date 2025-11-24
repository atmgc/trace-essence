import { RightSlash, StarIcon } from "@/assets/icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const wisdom = [
  {
    title: "Signature Talks",
    subtitle: "$50",
    content:
      "Your Clarity: Get immediate answers from your spiritual team on one pressing block or decision with actionable next steps.",
    url: "tracessence@gmail.com",
    list: [
      "Who Am I? The Journey of Self-Discovery.",
      "Awakening of the Divine Feminine!",
      "All you need is within you! Tapping into your divinity.",
    ],
  },
  {
    title: "Live Channeled Message",
    subtitle: "$95",
    content: "Your Revelation: A comprehensive channeled session revealing:",
    url: "tracessence@gmail.com",
    list: [
      "Real-time divine guidance channeled from your spiritual team/collective consciousness",
      "Personalized “soul action steps” to accelerate your growth",
      "Energy clearing for the entire group during the transmission",
      "Q&A to get specific guidance on your pressing questions",
    ],
  },
];

const Engagements = () => {
  return (
    <div className="py-12">
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">Our Services</p>
        </div>
        <h1 className="text-2xl md:text-5xl">Speaking Engagements</h1>
        <div className="hidden md:block absolute bottom-[50%] right-[-15%]">
          <RightSlash />
        </div>
      </div>

      <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="grid grid-cols-1 gap-6">
          {wisdom.map((exp, i) => (
            <Card
              key={i}
              className="flex flex-col h-full bg-[#F8F8F8] rounded-[15px] shadow-none border-none"
            >
              <CardHeader>
                <CardTitle className="text-[#222222] font-[500] text-xl md:text-2xl">
                  {exp.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                {exp.list && (
                  <ul className="list-disc ml-5">
                    {exp.list.map((item, idx) => (
                      <li key={idx} className="text-[#909090] text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <CardFooter className="mt-8">
                <a href={`mailto:${exp.url}`}>
                  <Button>Book Now</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={"/images/speaker.png"}
            alt=""
            className="w-full h-[100%]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Engagements;
