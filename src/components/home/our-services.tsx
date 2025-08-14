import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon, StarWhiteIcon } from "@/assets/icons";

const services = [
  {
    title: "Personalized Guidance",
    desc: "Get tailored advice and resources to help you achieve your goals efficiently and confidently.",
  },
  {
    title: "Heart-Led Community",
    desc: "Leverage our community of like minded individuals and known professionals to support your journey and grow together.",
  },
  {
    title: "Comprehensive Resources",
    desc: "Access to books, article recommendations, and tools that would aid your growth.",
  },
];

const OurService = () => {
  return (
    <div className="space-y-3 md:space-y-12 pt-[48px] pb-[48px] md:pb-[92px]">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4">
            <StarIcon />
            <p className="text-base text-primary">Our Services</p>
          </div>
          <h1 className="text-2xl md:text-5xl">Service Offerings</h1>
        </div>
        <Button className="hidden md:block">More Information</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-[#F8F8F8] hover:bg-red-900/10 transition-colors duration-300 ease-in-out border-none shadow-none"
          >
            <CardHeader>
              <div className="flex items-center gap-1 p-4 bg-primary w-fit rounded-full">
                <StarWhiteIcon />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurService;
