import Link from "next/link";
import React from "react";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-5 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Asante<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop View */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
