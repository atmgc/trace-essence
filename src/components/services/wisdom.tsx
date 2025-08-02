import { StarIcon } from "@/assets/icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const wisdom = [
  {
    title: "Laser Guidance Session",
    subtitle: "$50",
    content:
      "Your Clarity: Get immediate answers from your spiritual team on one pressing block or decision with actionable next steps.",
    url: "https://calendly.com/tracessence/60-minutes-coaching-session",
  },
  {
    title: "Deep Soul Buleprint Reading",
    subtitle: "$95",
    content: "Your Revelation: A comprehensive channeled session revealing:",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
    list: [
      "Your core soul gifts & current obstacles",
      "Hidden opportunities aligned with your path",
      "Personalized rituals/mantras for rapid shifts",
    ],
  },
];

const Wisdom = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">Our Services</p>
        </div>
        <h1 className="text-5xl">Intuitive Wisdom Downloads</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <Image
            src={"/images/wisdom.png"}
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {wisdom.map((exp, i) => (
            <Card
              key={i}
              className="flex flex-col h-full bg-[#F8F8F8] rounded-[15px] shadow-none border-none"
            >
              <CardHeader>
                <CardTitle className="text-[#222222] font-[500] text-2xl">
                  {exp.title}
                </CardTitle>
                <div className="flex items-center justify-between gap-4">
                  <CardDescription className="text-primary font-[500] text-xl">
                    {exp.subtitle}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <Clock color="#860D84" size={16} />
                    <CardDescription className="text-[#232323 text-sm">
                      Duration: 60 mins
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-[#909090] text-sm">{exp.content}</p>
                {exp.list && (
                  <ul className="list-disc ml-5 mt-2">
                    {exp.list.map((item, idx) => (
                      <li key={idx} className="text-[#909090] text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <CardFooter className="mt-8">
                <Link href={exp.url}>
                  <Button>Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wisdom;
