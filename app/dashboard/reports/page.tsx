"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { IconChartBar, IconArrowUpRight, IconArrowDownRight, IconCurrencyRupee, IconLoader, IconBulb, IconTrendingUp, IconLeaf, IconAlertTriangle } from "@tabler/icons-react";
import Link from "next/link";

interface ReportData {
    performance: string;
    yield_forecast: {
        estimated_yield: string;
        details: string;
    };
    financials: {
        revenue: string;
        expenses: string;
        profit: string;
        notes: string;
    };
    tips: string[];
    breakthroughs: Array<{ title: string; description: string; }>;
}

export default function ReportsPage() {
    const { user } = useAuth();
    const [report, setReport] = useState<ReportData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [authChecking, setAuthChecking] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Auth Check Timeout
        const timer = setTimeout(() => {
            setAuthChecking(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchReport = async () => {
            if (!user) return;

            // Cache Check
            const cacheKey = `farm_report_${user.email}`;
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                setReport(JSON.parse(cached));
                // Optional: Background refresh if old?
                return;
            }

            if (!user.crops || user.crops.length === 0) return;

            setLoading(true);
            try {
                const res = await fetch("/api/reports/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        crops: user.crops,
                        farmSize: user.farmSize,
                        location: user.location
                    })
                });
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Failed to generate report");

                setReport(data);
                localStorage.setItem(cacheKey, JSON.stringify(data));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user) fetchReport();
    }, [user]);

    if (!user && authChecking) return <div className="h-[50vh] flex items-center justify-center gap-2 text-neutral-500"><IconLoader className="animate-spin" /> Loading user data...</div>;

    if (!user && !authChecking) {
        return (
            <div className="h-[50vh] flex flex-col items-center justify-center gap-4">
                <div className="p-4 bg-red-50 text-red-600 rounded-full">
                    <IconAlertTriangle size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Session Expired</h3>
                <p className="text-neutral-500">Please log in to view your reports.</p>
                <button
                    onClick={() => router.push('/login')}
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    if (!user) return null;

    const isProfileIncomplete = !user.crops || user.crops.length === 0 || !user.farmSize;

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black text-neutral-800 dark:text-white flex items-center gap-2">
                    <IconChartBar className="text-green-600" size={32} />
                    Farm Intelligence Report
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-lg">
                    AI-driven insights tailored to your <strong>{user.farmSize ? `${user.farmSize} Acre` : ""}</strong> farm.
                </p>
            </div>

            {isProfileIncomplete ? (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-3xl p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto text-amber-600">
                        <IconAlertTriangle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200">Profile Incomplete</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                        To generate a detailed report, we need to know what crops you are growing and your farm size.
                    </p>
                    <Link href="/dashboard/profile">
                        <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-xl mt-4 hover:shadow-lg transition-all">
                            Complete Profile
                        </button>
                    </Link>
                </div>
            ) : loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
                    {[1, 2, 3].map(i => <div key={i} className="h-40 bg-neutral-200 dark:bg-neutral-800 rounded-2xl" />)}
                    <div className="col-span-1 md:col-span-3 h-60 bg-neutral-200 dark:bg-neutral-800 rounded-2xl" />
                </div>
            ) : error ? (
                <div className="p-8 bg-red-50 text-red-600 rounded-2xl text-center">Error: {error}</div>
            ) : report ? (
                <>
                    {/* Financials Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SummaryCard
                            title="Est. Revenue"
                            value={report.financials.revenue}
                            icon={<IconCurrencyRupee className="text-green-500" />}
                            isPositive={true}
                            notes={report.financials.notes}
                        />
                        <SummaryCard
                            title="Projected Profit"
                            value={report.financials.profit}
                            icon={<IconTrendingUp className="text-blue-500" />}
                            isPositive={true}
                            notes="Net profit after expenses"
                        />
                        <SummaryCard
                            title="Est. Yield"
                            value={report.yield_forecast.estimated_yield}
                            icon={<IconLeaf className="text-orange-500" />}
                            isPositive={true}
                            notes={report.yield_forecast.details}
                        />
                    </div>

                    {/* Performance Analysis */}
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <IconChartBar className="text-indigo-500" /> Performance Analysis
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                            {report.performance}
                        </p>
                    </div>

                    {/* Tips Grid */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <IconBulb className="text-yellow-500" /> Smart Recommendations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {report.tips.map((tip, i) => (
                                <div key={i} className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-2xl border border-yellow-100 dark:border-yellow-900/30 flex gap-4">
                                    <span className="font-bold text-yellow-600 text-xl">0{i + 1}</span>
                                    <p className="text-yellow-900 dark:text-yellow-100 font-medium">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Breakthroughs */}
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <IconTrendingUp className="text-emerald-400" /> New Breakthroughs
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {report.breakthroughs.map((b, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="font-bold text-lg text-emerald-400">{b.title}</h4>
                                    <p className="text-neutral-300 text-sm leading-relaxed">{b.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}

const SummaryCard = ({ title, value, icon, isPositive, notes }: any) => (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                {icon}
            </div>
            {isPositive && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">Good</span>}
        </div>
        <p className="text-neutral-500 text-sm font-bold uppercase tracking-wide">{title}</p>
        <h3 className="text-3xl font-black text-neutral-800 dark:text-white mt-1">{value}</h3>
        {notes && <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{notes}</p>}
    </div>
);
