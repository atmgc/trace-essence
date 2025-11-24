import { StarIcon } from "@/assets/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Clock } from "lucide-react";

const experiences = [
  {
    title: "Identity Coaching - Single Session",
    subtitle: "$95",
    content:
      "Your Impact: Walk away with clear recognition about who you’re becoming, a deep understanding of how your current mindset is preventing you from embodying your new identity, and at least 3 tangible actions tailored to help you immediately start breaking the limiting patterns that have been holding you back. This session gives you clarity, confidence, and real momentum the moment you step out.",
    url: "https://calendly.com/tracessence/60-minutes-coaching-session",
  },
  {
    title: "Identity Coaching - 8 Sessions",
    subtitle: "$680 | Save $80",
    content:
      "In 8 powerful sessions, you’ll finally understand who you’re becoming and what’s been holding you back from stepping into that version of you. We’ll break the mindset patterns that keep you doubting yourself, help you build real confidence from the inside out, and strengthen your self-trust in a way that feels natural—not forced. You’ll also receive channeled guidance to support you each step of the way, plus at least three tangible actions after every session so you can start embodying your new identity in real life, not just in theory.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
    list: [
      // "Permanently dissolve self-doubt",
      // "Activate soul-aligned confidence",
      // "Develop unshakable self-trust",
      // "Receive ongoing channeled guidance from your spiritual team",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">Our Services</p>
        </div>
        <h1 className="text-2xl md:text-5xl">Coaching Sessions</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-6 md:mt-12">
        {experiences.map((exp, i) => (
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
                  <CardDescription className="text-[#232323] text-sm">
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
                <Button>Schedule Time With Me</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
