"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconShoppingCart,
    IconUsers,
    IconBook,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

// Placeholder widgets for now - can be expanded later
const MarketplaceWidget = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-4 flex-col justify-end">
        <div className="font-bold text-lg text-neutral-600 dark:text-neutral-300">Fresh Produce</div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">Direct from farmers near you</div>
    </div>
);

const CommunityWidget = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-4 flex-col justify-end">
        <div className="font-bold text-lg text-neutral-600 dark:text-neutral-300">Community Forum</div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">Join 120+ discussions</div>
    </div>
);

const EducationWidget = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-4 flex-col justify-end">
        <div className="font-bold text-lg text-neutral-600 dark:text-neutral-300">Seasonal Guide</div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">Discover what's in season</div>
    </div>
);

export default function UserDashboardPage() {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto pb-10">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-neutral-800 dark:text-white">
                        Welcome, {user?.name?.split(" ")[0] || "User"}! 🛒
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                        Explore fresh produce and connect with the farming community.
                    </p>
                </div>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                <BentoGridItem
                    title="Marketplace"
                    description="Buy fresh, organic produce directly from farmers."
                    header={<MarketplaceWidget />}
                    icon={<IconShoppingCart className="h-4 w-4 text-green-500" />}
                    className="md:col-span-2 min-h-[18rem]"
                    href="/dashboard/store"
                />
                <BentoGridItem
                    title="Community"
                    description="Connect with farmers and other consumers."
                    header={<CommunityWidget />}
                    icon={<IconUsers className="h-4 w-4 text-blue-500" />}
                    className="md:col-span-1 min-h-[18rem]"
                    href="/dashboard/community"
                />
                <BentoGridItem
                    title="Resources"
                    description="Learn about sustainable farming and seasonal crops."
                    header={<EducationWidget />}
                    icon={<IconBook className="h-4 w-4 text-amber-500" />}
                    className="md:col-span-3 min-h-[12rem]"
                    href="/dashboard/resources"
                />
            </BentoGrid>
        </div>
    );
}
