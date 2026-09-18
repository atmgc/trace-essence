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
    subtitle: "$150",
    duration: "60 mins",
    content:
      "Your Impact: Walk away with clear recognition about who you’re becoming, a deep understanding of how your current mindset is preventing you from embodying your new identity, and at least 3 tangible actions tailored to help you immediately start breaking the limiting patterns that have been holding you back. This session gives you clarity, confidence, and real momentum the moment you step out.",
    globalUrl: "https://calendly.com/tracessence/60-minutes-coaching-session",
    localUrl:
      "https://paystack.com/buy/identity-coaching---single-session-nkdnqr",
    list: [],
  },
  {
    title: "Identity Coaching - Follow-Up",
    subtitle: "$100",
    duration: "45 mins",
    content:
      "This 45-minute follow-up session is exclusively for returning clients who have completed an initial 60-minute Identity Coaching session with Trace Essence. During this session, you will:",
    globalUrl: "https://calendly.com/tracessence/identity-coaching-followup-session",
    localUrl: "", // Placeholder for future local payment link
    list: [
      "Review your progress and ask questions that have come up since your initial session",
      "Work through areas where you still feel stuck, uncertain, or challenged",
      "Receive accountability and refine your action steps so you can continue moving forward with clarity",
      "Please note: This session is for returning Identity Coaching clients only. It is not available to new clients.",
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
              <div className="flex items-center justify-between gap-4 mt-2">
                <CardDescription className="text-primary font-[500] text-xl">
                  {exp.subtitle}
                </CardDescription>
                <div className="flex items-center gap-2">
                  <Clock color="#860D84" size={16} />
                  <CardDescription className="text-[#232323] text-sm">
                    Duration: {exp.duration}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-[#909090] text-sm leading-relaxed">
                {exp.content}
              </p>
              {exp.list && exp.list.length > 0 && (
                <ul className="list-disc ml-5 mt-4 space-y-1">
                  {exp.list.map((item, idx) => (
                    <li key={idx} className="text-[#909090] text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>

            <CardFooter className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* Global Checkout Button */}
              {exp.globalUrl && (
                <Link
                  href={exp.globalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1"
                >
                  <Button className="w-full">Schedule (Global / USD)</Button>
                </Link>
              )}

              {/* Local Checkout Button */}
              {exp?.localUrl && (
                <Link
                  href={exp?.localUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1"
                >
                  {/* Assuming your shadcn UI Button supports variant="outline" */}
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/5"
                  >
                    Paystack (Africa)
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
