"use client";
import React, { useEffect, useState } from "react";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import final from "./final.jpeg";


export const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  // Agriculture-themed colors
  // Dark: Deep forest/emerald greens
  // Light: Fresh/minty greens
  // Note: Background is handled in page.tsx

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 h-full w-full z-0">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-10 flex-grow flex items-center relative z-10 pt-32 lg:pt-28">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="text-3xl md:text-5xl lg:text-7xl font-bold text-neutral-900 drop-shadow-sm leading-tight">
              Smart Farming <br />
              <span className="text-green-700 dark:text-green-600 drop-shadow-sm">for a Better Future.</span>
            </div>
            <div className="font-light text-base md:text-xl text-neutral-700 py-4 max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              Empowering Indian farmers with AI-driven insights. Detect pests, analyze soil, and get real-time market prices instantly.
            </div>

            <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
              <Link
                href="/dashboard"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                  Get Started
                </span>
              </Link>
              <Link
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-md text-neutral-900 border border-black/10 font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={final}
                  alt="Smart Farming Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
