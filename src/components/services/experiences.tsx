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

type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      heading: string;
      items: string[];
    }
  | {
      type: "notice";
      lead: string;
      text: string;
    };

type Experience = {
  title: string;
  subtitle: string;
  duration: string;
  content: ContentBlock[];
  globalUrl: string;
  localUrl: string;
};

const experiences: Experience[] = [
  {
    title: "Identity Coaching | One on One | New Client",
    subtitle: "$150",
    duration: "60 mins",
    content: [
      {
        type: "paragraph",
        text: "For those who are ready to work on themselves and make real changes.",
      },
      {
        type: "paragraph",
        text: "Do you feel stuck, keep repeating the same patterns or know you’ve outgrown certain parts of your life but don’t know how to move forward?",
      },
      {
        type: "paragraph",
        text: "This is a personal development session where we work together to understand how your experiences, beliefs and habits have shaped who you are today. We’ll identify what may be holding you back and what needs to change as you become the person you desire to be.",
      },
      {
        type: "list",
        heading: "What you’ll receive:",
        items: [
          "A deeper understanding of yourself and the patterns affecting your life.",
          "Clarity on the areas you need to work on.",
          "At least 3 practical action steps you can begin applying after our session.",
        ],
      },
      {
        type: "notice",
        lead: "Please note:",
        text: "You will complete a short preparation workbook before our session. This is a working coaching session focused on self discovery and personal growth, not a channeled spiritual reading.",
      },
    ],
    globalUrl:
      "https://calendly.com/tracessence/60-minutes-coaching-session",
    localUrl:
      "https://paystack.com/buy/identity-coaching---single-session-nkdnqr",
  },
  {
    title: "Identity Coaching | Follow Up Session",
    subtitle: "$100",
    duration: "45 mins",
    content: [
      {
        type: "paragraph",
        text: "For RETURNING coaching clients only.",
      },
      {
        type: "paragraph",
        text: "Have you completed your initial one on one Identity Coaching session and would like support as you continue doing the work?",
      },
      {
        type: "paragraph",
        text: "This session gives us an opportunity to revisit the areas we previously discussed, review the steps you’ve taken and address challenges you may be experiencing along the way.",
      },
      {
        type: "paragraph",
        text: "We’ll look at what’s working, where you may still be struggling and what adjustments you need to make as you continue moving forward.",
      },
      {
        type: "list",
        heading: "What we’ll focus on:",
        items: [
          "Reviewing your progress since your first coaching session.",
          "Working through challenges or patterns you’re still struggling with.",
          "Adjusting your action steps and identifying what to focus on next.",
        ],
      },
      {
        type: "notice",
        lead: "Important:",
        text: "This session is ONLY for clients who have completed the initial 60 minute Identity Coaching session with Trace Essence. Booking a spiritual reading does not qualify you for this service. New clients must book the initial Identity Coaching session.",
      },
    ],
    globalUrl:
      "https://calendly.com/tracessence/identity-coaching-followup-session",
    localUrl: "",
  },
];

const Experiences = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <StarIcon />
          <p className="text-base text-primary uppercase">
            Our Services
          </p>
        </div>

        <h1 className="text-2xl md:text-5xl">
          Coaching Sessions
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-6 md:mt-12">
        {experiences.map((exp) => (
          <Card
            key={exp.title}
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

            <CardContent className="flex-1 space-y-4">
              {exp.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-[#909090] text-sm leading-relaxed"
                      >
                        {block.text}
                      </p>
                    );

                  case "list":
                    return (
                      <div key={index}>
                        <p className="text-[#909090] text-sm font-medium mb-2">
                          {block.heading}
                        </p>

                        <ul className="list-disc ml-5 space-y-2">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="text-[#909090] text-sm leading-relaxed"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case "notice":
                    return (
                      <p
                        key={index}
                        className="text-[#707070] text-sm leading-relaxed italic"
                      >
                        <strong>{block.lead}</strong>{" "}
                        {block.text}
                      </p>
                    );

                  default:
                    return null;
                }
              })}
            </CardContent>

            <CardFooter className="mt-6 flex flex-col sm:flex-row gap-3">
              {exp.globalUrl && (
                <Button
                  asChild
                  className="w-full sm:flex-1"
                >
                  <Link
                    href={exp.globalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule (Global / USD)
                  </Link>
                </Button>
              )}

              {exp.localUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:flex-1 border-primary text-primary hover:bg-primary/5"
                >
                  <Link
                    href={exp.localUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paystack (Africa)
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
