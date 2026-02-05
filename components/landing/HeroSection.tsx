"use client";
import React, { useEffect, useState } from "react";

import { motion } from "motion/react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";


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
  const grainientColors = isDark
    ? { color1: "#14532d", color2: "#166534", color3: "#15803d" } // green-900, green-800, green-700
    : { color1: "#dcfce7", color2: "#bbf7d0", color3: "#86efac" }; // green-100, green-200, green-300

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 h-full w-full z-0">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col gap-4 items-center justify-center px-4 md:px-10 text-center h-full"
      >
        <div className="text-3xl md:text-7xl font-bold text-center text-[#f0fff4] drop-shadow-sm">
          Smart Farming for a <br />
          <span className="text-green-700 dark:text-green-400 drop-shadow-sm">Better Future.</span>
        </div>
        <div className="font-light text-base md:text-2xl text-neutral-800 dark:text-neutral-200 py-4 max-w-3xl drop-shadow-sm">
          Empowering Indian farmers with AI-driven insights. Detect pests, analyze soil, and get real-time market prices instantly.
        </div>

        <div className="flex items-center gap-4 mt-8">
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
            className="px-8 py-3 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-black dark:text-white border border-neutral-200 dark:border-neutral-700 font-semibold hover:shadow-xl transition-shadow duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
