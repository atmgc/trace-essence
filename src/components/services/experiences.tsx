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
    title: "Clarity Igniter Session",
    subtitle: "$95",
    content:
      "Your Impact: Walk away with crystal-clear direction, an instant energy shift, and 1-2 powerful actions to start breaking through limiting patterns immediately.",
    url: "https://calendly.com/tracessence/60-minutes-coaching-session",
  },
  {
    title: "Quantum Identity Shift (8-Session Journey)",
    subtitle: "$680 | Save $80",
    content:
      "Your Transformation: Completely rewrite your self-concept with a proven roadmap to:",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
    list: [
      "Permanently dissolve self-doubt",
      "Activate soul-aligned confidence",
      "Develop unshakable self-trust",
      "Receive ongoing channeled guidance from your spiritual team",
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
        <h1 className="text-5xl">Coaching Experiences</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {experiences.map((exp, i) => (
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
