"use client";
import React, { useState } from "react";
import Link from "next/link";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Community", link: "#testimonials" },
    { name: "About Us", link: "#about" },
  ];

  const Logo = () => (
    <div className="flex items-center gap-2">
      <div className="size-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center">
        <span className="text-white font-bold text-lg">A</span>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-800 dark:from-green-400 dark:to-emerald-600">
        AgroNova
      </span>
    </div>
  );

  return (
    <ResizableNavbar className="top-8">
      <NavBody>
        <div className="relative z-50">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        <NavItems items={navItems} />

        <div className="relative z-50 flex items-center gap-4">
          <Link href="/login">
            <button className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white font-medium transition-colors text-sm">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <NavbarButton as="button" className="bg-green-600 hover:bg-green-700 text-white shadow-green-500/20">
              Get Started
            </NavbarButton>
          </Link>

        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.link} className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <Link href="/login" className="w-full">
              <button className="w-full text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white font-medium transition-colors py-2">
                Login
              </button>
            </Link>
            <Link href="/signup" className="w-full">
              <NavbarButton as="button" className="w-full justify-center bg-green-600 hover:bg-green-700 text-white">
                Get Started
              </NavbarButton>
            </Link>
            <div className="flex justify-start py-2">

            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
