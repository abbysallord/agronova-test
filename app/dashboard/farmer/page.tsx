"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconNews,
    IconCloudStorm,
    IconTrendingUp,
    IconScan,
    IconFlask,
} from "@tabler/icons-react";
import { WeatherWidget } from "@/components/dashboard/widgets/WeatherWidget";
import { NewsWidget } from "@/components/dashboard/widgets/NewsWidget";
import { MarketTrendsWidget } from "@/components/dashboard/widgets/MarketTrendsWidget";
import { useAuth } from "@/context/AuthContext";

export default function FarmerDashboardPage() {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto pb-10">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-white">
                        Good Morning, {user?.name?.split(" ")[0] || "Farmer"}! 🌾
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                        Here is what&apos;s happening in your farm today.
                    </p>
                </div>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {/* Row 1: Key Metrics/Widgets */}
                <BentoGridItem
                    title="Weather Forecast"
                    description="Real-time weather updates & advisories."
                    header={<WeatherWidget />}
                    icon={<IconCloudStorm className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1 min-h-[18rem]"
                />
                <BentoGridItem
                    title="Latest Agriculture News"
                    description="Live updates from trusted sources."
                    header={<NewsWidget />}
                    icon={<IconNews className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1 min-h-[18rem]"
                />
                <BentoGridItem
                    title="Market Trends"
                    description="Live Mandi prices for your crops."
                    header={<MarketTrendsWidget />}
                    icon={<IconTrendingUp className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1 min-h-[18rem]"
                />

                {/* Row 2: Feature Access */}
                <BentoGridItem
                    title="Pest Detection"
                    description="Instant disease identification. AI-powered scanning active."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center rounded-xl overflow-hidden group/image relative">
                            <Image
                                src="/images/dashboard/pest-mockup.png"
                                alt="Pest Detection"
                                fill
                                className="object-cover transition-transform duration-700 group-hover/bento:scale-110"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-transparent transition-colors duration-500" />
                        </div>
                    }
                    icon={<IconScan className="h-4 w-4 text-green-500" />}
                    className="md:col-span-2 cursor-pointer"
                    href="/dashboard/pest-detection"
                />
                <BentoGridItem
                    title="Soil Analysis"
                    description="NPK levels & pH Analysis."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center rounded-xl overflow-hidden group/image relative">
                            <Image
                                src="/images/dashboard/soil-mockup.png"
                                alt="Soil Analysis"
                                fill
                                className="object-cover transition-transform duration-700 group-hover/bento:scale-110"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-transparent transition-colors duration-500" />
                        </div>
                    }
                    icon={<IconFlask className="h-4 w-4 text-amber-500" />}
                    className="md:col-span-1 cursor-pointer"
                    href="/dashboard/soil-analysis"
                />
            </BentoGrid>
        </div>
    );
}
