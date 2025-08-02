import { LeftSlash, StarIcon } from "@/assets/icons";
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

const guide = [
  {
    title: "If you need IMMEDIATE ANSWERS",
    subtitle: "Book a Laser Guidance Session",
    price: "$50",
    description:
      "Best for: Quick decisions, spiritual yes/no guidance, or when stuck at a crossroads.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
  },
  {
    title: "If you feel “LOST” in your IDENTITY/PURPOSE",
    subtitle: "Book a Clarity Igniter Session",
    price: "$95",
    description:
      "Best for: Gaining clarity on your true self, purpose, and next steps.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
  },
  {
    title: "If you crave COMMUNITY + SPIRITUAL GROWTH",
    subtitle: "Join our Quantum Identity Shift Journey (8 sessions)",
    description:
      "Best for: Deep transformation, ongoing support, and spiritual development.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
  },
  {
    title: "If you want TOTAL REINVENTION",
    subtitle: "Book a Quantum Identity Shift Journey (8 sessions)",
    description:
      "Best for: Comprehensive identity transformation and empowerment.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
  },
  {
    title: "If you want to rejuvenate your ORGANIZATIONS/EVENTS",
    subtitle: "Book a Group Coaching Session",
    description:
      "Best for: Team building, organizational growth, and collective empowerment.",
    url: "https://calendly.com/tracessence/quantum-identity-shift-8-session-journey",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">Our Services</p>
        </div>
        <h1 className="text-5xl">Service Selection Guide</h1>
        <div className="absolute bottom-[50%] left-[-10%]">
          <LeftSlash />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-[25px]">
        {guide.map((item, i) => (
          <Card
            key={i}
            className="flex flex-col bg-[#F8F8F8] rounded-[15px] shadow-none border-none max-w-[396px]"
          >
            <CardHeader>
              <CardTitle className="text-[#222222] font-[500] text-xl">
                {item.title}
              </CardTitle>
              <CardDescription className="text-[#3B3B3B] text-sm mt-2">
                {item.subtitle}
              </CardDescription>

              <div className="flex items-center justify-between gap-4 mt-4">
                <CardDescription className="text-primary font-[500] text-xl">
                  {item.price}
                </CardDescription>
                {item.price && (
                  <div className="flex items-center gap-2">
                    <Clock color="#860D84" size={16} />
                    <CardDescription className="text-[#232323] text-sm">
                      Duration: 60 mins
                    </CardDescription>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="mt-8">
              <Link href={item.url}>
                <Button>Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
