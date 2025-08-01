"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", to: "/about" },
  { name: "Our Work", to: "/our-work" },
  { name: "Get Involved", to: "/get-involved" },
  // { name: "Contact Us", to: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white flex justify-between items-center py-4 px-[16px] md:px-[100px] h-[84px] z-50 shadow-sm">
      <Link href="/">
        <h1 className="font-black text-lg text-[#333333]">The 20% Project</h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        {links.map(({ name, to }) => {
          const isActive = pathname === to;

          return (
            <li key={to}>
              <Link
                href={to}
                className={`
                  relative px-1 py-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0
                  after:h-[2px] after:w-full after:bg-black
                  after:origin-left after:transition-transform after:duration-300
                  ${
                    isActive
                      ? "text-black after:scale-x-100"
                      : "text-gray-700 hover:text-black after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Join Button for Desktop */}
      <div className="hidden md:block">
        <Link href={"/contact"}>
          <Button>Contact Us</Button>
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40`}
      >
        {links.map(({ name, to }) => {
          const isActive = pathname === to;

          return (
            <Link
              key={to}
              href={to}
              onClick={() => setIsOpen(false)}
              className={`transition-colors duration-200 ${
                isActive ? "text-black" : "text-gray-700 hover:text-black"
              }`}
            >
              {name}
            </Link>
          );
        })}
        <Link href={"/contact"}>
          <Button onClick={() => setIsOpen(false)}>Contact Us</Button>
        </Link>
      </div>
    </nav>
  );
}
