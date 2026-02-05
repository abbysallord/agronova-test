"use client";
import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconLeaf,
  IconCurrencyRupee,
  IconCloudStorm,
  IconShoppingCart,
  IconUsers,
  IconActivity,
  IconAnalyze,
} from "@tabler/icons-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Grid Items Animation (Staggered)
    if (gridRef.current) {
      // Select all direct children (BentoGridItem wrappers)
      // Since BentoGridItem renders a div, we can target them via class or direct children
      const items = gridRef.current.children;

      gsap.from(items, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)", // "Pop" effect
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="features" className="py-20 lg:py-32 bg-transparent relative z-20">
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Everything You Need to GroW
        </h2>
        <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">
          Discover a suite of powerful tools designed to help Indian farmers prosper.
        </p>
      </div>
      <div ref={gridRef}>
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[25rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
              href={item.href}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

const items = [
  {
    title: "AI Pest Detection",
    description: "Instantly identify crop diseases. Snap a photo and get AI-driven diagnosis.",
    header: (
      <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group">
        <Image
          src="/images/dashboard/pest-mockup.png"
          alt="Pest Detection Mockup showing smartphone scanning leaf"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    icon: <IconLeaf className="h-4 w-4 text-green-500" />,
    className: "md:col-span-2",
    href: "/signup"
  },
  {
    title: "Soil Health Analysis",
    description: "Analysis of NPK levels and pH balance.",
    header: (
      <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group">
        <Image
          src="/images/dashboard/soil-mockup.png"
          alt="Soil Analysis Mockup showing tablet on soil"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    icon: <IconAnalyze className="h-4 w-4 text-amber-500" />,
    className: "md:col-span-1",
    href: "/signup"
  },
  {
    title: "Real-Time Market Prices",
    description: "Live updates from Mandis across India.",
    header: (
      <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group">
        <Image
          src="/images/dashboard/market-mockup.png"
          alt="Market Prices Mockup showing phone with trend graph"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    icon: <IconCurrencyRupee className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-1",
    href: "/signup"
  },
  {
    title: "Local Weather & Advisory",
    description: "Hyper-local forecasts to plan your irrigation.",
    header: (
      <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group">
        <Image
          src="/images/dashboard/weather-mockup.png"
          alt="Weather Forecast Mockup showing tablet with advisory"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    icon: <IconActivity className="h-4 w-4 text-blue-400" />,
    className: "md:col-span-1",
    href: "/signup"
  },
  {
    title: "Agri Store & Community",
    description: "Buy seeds, sell produce, and connect.",
    header: (
      <div className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group">
        <Image
          src="/images/dashboard/store-mockup.png"
          alt="Agri Store Mockup showing phone with marketplace"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
    ),
    icon: <IconUsers className="h-4 w-4 text-purple-500" />,
    className: "md:col-span-1",
    href: "/signup"
  },
];
