import { StarIcon } from "@/assets/icons";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const experiences = [
  {
    experience:
      "My Clarity Igniter Session gave me the courage to leave my unfulfilling career path. Tracy’s intuitive guidance helped me discover my true passion – I’ve never felt more alive!",
    name: "~ Sarah Johnson",
  },
  {
    experience:
      "Working with Tracy was a game-changer. Her insights helped me break through my self-doubt and step into my power. I’m now pursuing my dreams with confidence!",
    name: "~ Chinelo Okafor",
  },
  {
    experience:
      "Tracy’s coaching transformed my life. I went from feeling lost to having a clear vision for my future. Her support was invaluable in helping me reclaim my identity.",
    name: "~ Jessica Lee",
  },
  {
    experience:
      "The Clarity Igniter Session was exactly what I needed. Tracy’s compassionate approach helped me uncover the blocks holding me back, and I’m now on a path that feels true to who I am.",
    name: "~ Megan Brown",
  },
  {
    experience:
      "Tracy’s coaching helped me reconnect with my authentic self. I now approach life with renewed energy and purpose, ready to embrace the challenges ahead.",
    name: "~ Adebayo Adeyemi",
  },
  {
    experience:
      "I can’t thank Tracy enough for her guidance. The Clarity Igniter Session opened my eyes to possibilities I never considered. I’m now living a life aligned with my true self.",
    name: "~ Rachel Green",
  },
];

const Experiences = () => {
  return (
    <div className="space-y-6 md:space-y-12 pt-[48px] pb-[92px] bg-[#F8F8F8] px-[16px] md:px-[100px]">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4">
            <StarIcon />
            <p className="text-base text-primary">Reviews</p>
          </div>
          <h1 className="text-2xl md:text-5xl">Coaching Experiences</h1>
        </div>
        <Button className="hidden md:block">View All Reviews</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            className="bg-white rounded-[15px] shadow-none border-none"
          >
            <CardHeader className="justify-end">
              <Quote fill="#82181a" />
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription>{experience.experience}</CardDescription>
              <CardDescription>{experience.name}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
