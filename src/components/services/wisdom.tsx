import { StarIcon } from "@/assets/icons";
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

type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "notice";
      lead: string;
      text: string;
    };

type Reading = {
  title: string;
  subtitle: string;
  duration: string;
  content: ContentBlock[];
  globalUrl: string;
  localUrl: string;
};

const wisdom: Reading[] = [
  {
    title: "Channeled Message Reading | 30 Minutes",
    subtitle: "$65",
    duration: "30 mins",
    content: [
      {
        type: "paragraph",
        text: "For those seeking spiritual guidance on ONE specific area of their life.",
      },
      {
        type: "paragraph",
        text: "Is there something happening in your life that you need clarity or spiritual insight on?",
      },
      {
        type: "paragraph",
        text: "During this session, I connect intuitively to receive and share messages from your spiritual team concerning your chosen area of focus.",
      },
      {
        type: "paragraph",
        text: "This could be about a relationship, career, a life decision or something you’re currently experiencing.",
      },
      {
        type: "notice",
        lead: "Important:",
        text: "To give your chosen area the attention it deserves, this session is dedicated to ONE area of your life, including any questions related to it.",
      },
      {
        type: "paragraph",
        text: "If you'd like spiritual guidance on MULTIPLE areas of your life, please book the 1 Hour Channeled Message Reading instead.",
      },
      {
        type: "notice",
        lead: "Please note:",
        text: "This is a spiritual reading, not an identity coaching session. We will not be doing deep personal development work or creating a structured action plan.",
      },
    ],
    globalUrl:
      "https://calendly.com/tracessence/30-min-clarity-session",
    localUrl:
      "https://paystack.com/buy/30-minutes-channeled-message-reading-mivofy",
  },
  {
    title: "Channeled Message Reading | 1 Hour",
    subtitle: "$120",
    duration: "60 mins",
    content: [
      {
        type: "paragraph",
        text: "For those seeking spiritual guidance on MULTIPLE areas of their life.",
      },
      {
        type: "paragraph",
        text: "If you’re navigating several things in your life and would like a broader spiritual perspective, this session gives us more time to explore the messages and insights that come through.",
      },
      {
        type: "paragraph",
        text: "We may explore areas such as relationships, career, purpose, personal challenges, spiritual growth or the season of life you’re currently experiencing.",
      },
      {
        type: "paragraph",
        text: "Unlike the 30 minute reading, you are not limited to one area of focus. There is more room for questions, discussion and understanding the guidance being shared.",
      },
      {
        type: "notice",
        lead: "Please note:",
        text: "This is an extended spiritual reading, not identity coaching. If you need help understanding your personal patterns and developing practical steps to change your life, please book an Identity Coaching session instead.",
      },
    ],
    globalUrl:
      "https://calendly.com/tracessence/1-hour-clarity-session",
    localUrl:
      "https://paystack.com/buy/1-hour-channeled-message-reading-mukvun",
  },
];

const Wisdom = () => {
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
          Channeled Message Readings
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-6 md:mt-12">
        {wisdom.map((reading) => (
          <Card
            key={reading.title}
            className="flex flex-col h-full bg-[#F8F8F8] rounded-[15px] shadow-none border-none"
          >
            <CardHeader>
              <CardTitle className="text-[#222222] font-[500] text-xl md:text-2xl">
                {reading.title}
              </CardTitle>

              <div className="flex items-center justify-between gap-4 mt-2">
                <CardDescription className="text-primary font-[500] text-xl">
                  {reading.subtitle}
                </CardDescription>

                <div className="flex items-center gap-2">
                  <Clock color="#860D84" size={16} />

                  <CardDescription className="text-[#232323] text-sm">
                    Duration: {reading.duration}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              {reading.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-[#909090] text-sm leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "notice") {
                  return (
                    <p
                      key={index}
                      className="text-[#707070] text-sm leading-relaxed italic"
                    >
                      <strong>{block.lead}</strong>{" "}
                      {block.text}
                    </p>
                  );
                }

                return null;
              })}
            </CardContent>

            <CardFooter className="mt-6 flex flex-col sm:flex-row gap-3">
              {reading.globalUrl && (
                <Button
                  asChild
                  className="w-full sm:flex-1"
                >
                  <Link
                    href={reading.globalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book (Global / USD)
                  </Link>
                </Button>
              )}

              {reading.localUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:flex-1 border-primary text-primary hover:bg-primary/5"
                >
                  <Link
                    href={reading.localUrl}
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

export default Wisdom;
