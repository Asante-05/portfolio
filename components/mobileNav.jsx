"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "service",
    path: "/service",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/works",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function MobileNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Asante<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${pathname === link.path && "text-accent border-b-2 border-accent "}
               text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
