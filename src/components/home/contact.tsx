"use client";

import { useState } from "react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);

    const body = encodeURIComponent(
      `Hello,

I would like to get in touch.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

Thank you.`
    );

    window.location.href = `mailto:info@trace-essence.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col">
        <div className="bg-primary w-fit py-12 md:py-24 rounded-b-[30px]">
          <Image
            src="/images/logo.png"
            className="w-[150px] h-[126px]"
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>

        <h1 className="text-primary font-[600] text-3xl md:text-6xl mt-7 md:mt-14 text-balance">
          Connect with me for more information
        </h1>

        <p className="text-[#3B3B3B] md:text-xl mt-3 md:mt-6 text-balance">
          Your information will be kept private and confidential and will never
          be sold or shared with third-parties
        </p>
      </div>

      <div className="py-4 md:py-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-[#F8F8F8] rounded-[30px] p-6 md:p-[50px]"
        >
          <div className="space-y-4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="bg-white border border-[#E2E2E2] rounded-[12px]"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-white border border-[#E2E2E2] rounded-[12px]"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="phone">Your Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="bg-white border border-[#E2E2E2] rounded-[12px]"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
              className="bg-white border border-[#E2E2E2] rounded-[12px] min-h-[100px]"
            />
          </div>

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
