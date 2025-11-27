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
    title: "30 Minutes Channeled Message Reading",
    subtitle: "$50",
    content:
      "In just 30 minutes, you’ll receive direct guidance from your spiritual team on one pressing block or decision, so you can finally stop guessing and start moving with confidence. You’ll walk away with grounded insight, clear understanding, and actionable next steps that show you exactly what to do next.",
    url: "https://calendly.com/tracessence/clarity-igniter-session-clone",
  },
  {
    title: "1-hour Channeled Message Reading",
    subtitle: "$95",
    content:
      "In this 1-hour channeled session, you’ll uncover your core soul gifts, the obstacles blocking your next level, and the hidden opportunities aligned with your path. You’ll receive personalized rituals or mantras for rapid shifts, along with clear actions to help you move forward with confidence and alignment.",
    url: "https://calendly.com/tracessence/signature-talk-clone",
    list: [],
  },
];

const Wisdom = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">Our Services</p>
        </div>
        <h1 className="text-2xl md:text-5xl">Channeled Message Readings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-6 md:mt-12">
        {wisdom.map((exp, i) => (
          <Card
            key={i}
            className="flex flex-col h-full bg-[#F8F8F8] rounded-[15px] shadow-none border-none"
          >
            <CardHeader>
              <CardTitle className="text-[#222222] font-[500] text-xl md:text-2xl">
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
  );
};

export default Wisdom;
