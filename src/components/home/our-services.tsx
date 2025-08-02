import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "@/assets/icons";

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
    <div className="space-y-6 md:space-y-12 pt-[48px] pb-[92px]">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-[#F8F8F8] hover:bg-[#FFE2FF] transition-colors duration-300 ease-in-out"
          >
            <CardHeader>
              <Image
                src={"/images/service-icon.png"}
                alt="index"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
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
