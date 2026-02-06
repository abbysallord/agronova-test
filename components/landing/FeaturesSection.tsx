"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  IconLeaf,
  IconCurrencyRupee,
  IconCloudStorm,
  IconShoppingCart,
  IconUsers,
  IconActivity,
  IconAnalyze,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI Pest Detection",
    description: "Snap a photo of your crop. Our advanced AI constantly scans for diseases, identifying threats in seconds before they spread.",
    icon: <IconLeaf className="w-12 h-12 md:w-16 md:h-16 text-green-400" />,
    color: "from-green-500/20 to-emerald-500/20",
    glow: "bg-green-500/20",
    border: "group-hover:border-green-500/50",
    id: 1,
  },
  {
    title: "Soil Health Analysis",
    description: "Get precise NPK levels and pH balance analysis without expensive lab tests. Know exactly what your soil needs to thrive.",
    icon: <IconAnalyze className="w-12 h-12 md:w-16 md:h-16 text-amber-400" />,
    color: "from-amber-500/20 to-orange-500/20",
    glow: "bg-amber-500/20",
    border: "group-hover:border-amber-500/50",
    id: 2,
  },
  {
    title: "Real-Time Mandi Prices",
    description: "Live market updates from Mandis across India. Track trends, predict prices, and sell at the perfect moment for maximum profit.",
    icon: <IconCurrencyRupee className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />,
    color: "from-blue-500/20 to-indigo-500/20",
    glow: "bg-blue-500/20",
    border: "group-hover:border-blue-500/50",
    id: 3,
  },
  {
    title: "Precision Weather",
    description: "Hyper-local forecasts tailored for agriculture. Plan irrigation and harvesting with confidence using rainfall and humidity data.",
    icon: <IconCloudStorm className="w-12 h-12 md:w-16 md:h-16 text-sky-400" />,
    color: "from-sky-500/20 to-blue-500/20",
    glow: "bg-sky-500/20",
    border: "group-hover:border-sky-500/50",
    id: 4,
  },
  {
    title: "Agri-Marketplace",
    description: "A dedicated store to buy high-quality seeds, fertilizers, and equipment. Sell your produce directly to buyers with zero middlemen.",
    icon: <IconShoppingCart className="w-12 h-12 md:w-16 md:h-16 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
    glow: "bg-purple-500/20",
    border: "group-hover:border-purple-500/50",
    id: 5,
  },
  {
    title: "Farmer Community",
    description: "Connect with thousands of progressive farmers. Share knowledge, ask experts, and grow together in India's largest agri-community.",
    icon: <IconUsers className="w-12 h-12 md:w-16 md:h-16 text-rose-400" />,
    color: "from-rose-500/20 to-red-500/20",
    glow: "bg-rose-500/20",
    border: "group-hover:border-rose-500/50",
    id: 6,
  },
];

export const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 1. Horizontal Scroll
      const scrollTween = gsap.to(trackRef.current, {
        translateX: "-370vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            // MANUAL ANIMATION LOOP
            const center = window.innerWidth / 2;

            cardsRef.current.forEach((card) => {
              if (!card) return;

              // Force visibility visible in case it got stuck (Firefox Fix)
              if (card.style.visibility === "hidden") {
                card.style.visibility = "visible";
              }

              const rect = card.getBoundingClientRect();
              const cardCenter = rect.left + rect.width / 2;
              const distance = Math.abs(center - cardCenter);
              const maxDistance = window.innerWidth / 2;

              let progress = distance / maxDistance;
              progress = Math.min(Math.max(progress, 0), 1);

              const scale = gsap.utils.interpolate(1.0, 0.85, progress);
              const opacity = gsap.utils.interpolate(1, 0.5, progress);
              const blur = gsap.utils.interpolate(0, 10, progress);

              const signedDist = cardCenter - center;
              const parallaxX = (signedDist / maxDistance) * 50;

              gsap.set(card, {
                scale: scale,
                opacity: opacity,
              });

              const icon = card.querySelector(".feature-icon");
              if (icon) {
                gsap.set(icon, { x: parallaxX });
              }
            });
          }
        },
      });
    });

    // Mobile
    mm.add("(max-width: 1023px)", () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { clearProps: "all" });

        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="w-full lg:h-screen lg:w-[470vw] flex flex-col lg:flex-row relative"
      >
        {/* Intro */}
        <div className="w-full lg:w-screen lg:h-full flex flex-col justify-center items-center px-6 py-20 lg:p-20 z-10 shrink-0">
          <h2 className="text-4xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 mb-6 lg:mb-8 max-w-4xl text-center leading-tight">
            Everything You Need <br className="hidden lg:block" /> to GroW.
          </h2>
          <p className="text-lg lg:text-2xl text-neutral-600 max-w-2xl text-center leading-relaxed mb-8">
            We've packed powerful tools into one seamless platform. <br className="hidden lg:block" />
            <span className="text-green-600 font-semibold hidden lg:inline">Scroll to explore the ecosystem &rarr;</span>
            <span className="text-green-600 font-semibold lg:hidden">Explore below &darr;</span>
          </p>
        </div>

        {/* Cards */}
        {features.map((feature, idx) => (
          <div
            key={feature.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="w-full lg:h-full lg:w-[45vw] flex items-center justify-center p-4 py-8 lg:p-12 relative group shrink-0"
          >
            <div className={cn(
              "relative w-full max-w-md lg:max-w-xl p-8 lg:p-12 rounded-3xl border border-green-900/10 bg-white/80 backdrop-blur-2xl transition-all duration-300 overflow-hidden opacity-100 visible shadow-xl shadow-green-900/5", // Force visible via CSS
              feature.border
            )}
              style={{ opacity: 1, visibility: 'visible' }} // Inline style safety net
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br touch-none pointer-events-none",
                  feature.color
                )}
              />

              <div className="relative z-10">
                <div className="feature-icon mb-6 lg:mb-8 p-4 bg-white rounded-2xl w-fit backdrop-blur-md border border-green-900/10 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-2xl lg:text-5xl font-bold text-neutral-900 mb-4 lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-xl text-neutral-700 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Outro */}
        <div className="w-full lg:h-full lg:w-screen flex flex-col justify-center items-center px-8 py-20 lg:py-0 shrink-0">
          <div className="text-center">
            <h3 className="text-3xl lg:text-6xl font-bold text-neutral-900 mb-8">
              Ready to revolutionise<br /> your farm?
            </h3>
            <Link href="/signup">
              <button className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold text-lg lg:text-xl transition-all shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_-15px_rgba(34,197,94,0.8)] hover:scale-105">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
