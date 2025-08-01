import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col">
        <div className="bg-primary w-fit py-24 rounded-b-[30px]">
          <Image
            src={"/images/logo.png"}
            className="w-[150px] h-[126px]"
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-primary font-[600] text-6xl mt-14 text-balance">
          Connect with me for more information
        </h1>
        <p className="text-[#3B3B3B] text-xl mt-6 text-balance">
          Your information will be kept private and confidential and will never
          be sold or shared with third-parties
        </p>
      </div>

      <div className="py-12">
        <div className="space-y-8 bg-[#F8F8F8] rounded-[30px] p-[50px]">
          <div className="space-y-4">
            <Label>Your Name</Label>
            <Input
              placeholder="Enter your full name"
              className="bg-white border border-[#E2E2E2] rounded-[12px]"
            />
          </div>
          <div className="space-y-4">
            <Label>Your Email</Label>
            <Input placeholder="Enter your email" />
          </div>
          <div className="space-y-4">
            <Label>Your Phone</Label>
            <Input placeholder="Enter your phone number" />
          </div>
          <div className="space-y-4">
            <Label>Your Message</Label>
            <Textarea placeholder="Enter your message" />
          </div>
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
