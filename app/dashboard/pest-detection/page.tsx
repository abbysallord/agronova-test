"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { IconAnalyze, IconLeaf, IconVirus, IconMedicineSyrup, IconShieldCheck, IconAlertTriangle, IconCheck, IconInfoCircle, IconLoader, IconChartBar } from "@tabler/icons-react";
import { toast } from "sonner";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function PestDetectionPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    setResult(null); 
    setError(null);
  };

  const analyzeImage = async () => {
    if (files.length === 0) {
      toast.error("Please upload an image first");
      return;
    }

    setAnalyzing(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("image", files[0]);

    try {
      const response = await fetch("/api/analyze-crop", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data);
      toast.success("Analysis complete!");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
      toast.error(err.message || "Analysis failed");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            AI Pest Detection
        </h2>
        <p className="text-muted-foreground">
          Upload a clear image of your crop to identify diseases and get treatment recommendations.
        </p>
      </div>

      <div className="w-full border border-dashed bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-lg max-w-3xl mx-auto">
        <FileUpload onChange={handleFileUpload} />
      </div>

      <div className="flex justify-center my-8">
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2 px-8 py-3"
            onClick={analyzeImage}
            disabled={analyzing || files.length === 0}
        >
            {analyzing ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" />
                    <span>Analyzing...</span>
                </>
            ) : (
                <>
                    <IconAnalyze className="w-5 h-5" />
                    <span>Run Advanced Diagnosis</span>
                </>
            )}
        </HoverBorderGradient>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-red-50 text-red-600 border border-red-200 flex items-center gap-2 animate-in fade-in zoom-in duration-300 max-w-2xl mx-auto">
            <IconAlertTriangle />
            <span>{error}</span>
        </div>
      )}

      <AnimatePresence>
      {result && (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
        >
             {/* 1. Main Status Card - Wobble Effect for Impact */}
            <WobbleCard
                containerClassName={cn(
                    "col-span-1 lg:col-span-3 h-full min-h-[300px]", 
                    result.type === 'healthy' ? "bg-green-900" : "bg-red-900"
                )}
                className=""
            >
                <div className="max-w-xs">
                    <div className={cn(
                        "text-left text-base/6 font-semibold tracking-wider uppercase",
                        "text-white/70"
                    )}>
                        {result.confidence} Confidence Score
                    </div>
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-5xl font-semibold tracking-[-0.015em] text-white mt-2">
                        {result.disease}
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        {result.symptoms}
                    </p>
                    {result.severity && (
                         <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <IconAlertTriangle className="text-yellow-400" />
                            <span className="text-white font-medium">Severity: {result.severity}</span>
                         </div>
                    )}
                </div>
                 {/* Decorative background Icon */}
                 {result.type === 'healthy' 
                    ? <IconLeaf className="absolute -right-4 lg:-right-[5%] -bottom-10 object-contain rounded-2xl text-green-500/20" size={400} />
                    : <IconVirus className="absolute -right-4 lg:-right-[5%] -bottom-10 object-contain rounded-2xl text-red-500/20" size={400} />
                 }
            </WobbleCard>
            
            {/* 2. Treatment Card */}
            {result.cure && (
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[300px]">
                    <div className="max-w-xl">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Recommended Treatment
                        </h2>
                        <div className="mt-4 space-y-4">
                             {typeof result.cure === 'string' ? <p className="text-neutral-200">{result.cure}</p> : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     {result.cure.chemical && (
                                        <div className="bg-blue-950/50 p-4 rounded-xl border border-blue-400/20">
                                            <span className="text-xs font-bold text-blue-300 uppercase tracking-wide">Chemical</span>
                                            <p className="text-sm text-neutral-200 mt-1">{result.cure.chemical}</p>
                                        </div>
                                    )}
                                    {result.cure.organic && (
                                        <div className="bg-green-950/50 p-4 rounded-xl border border-green-400/20">
                                            <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Organic</span>
                                            <p className="text-sm text-neutral-200 mt-1">{result.cure.organic}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                     <IconMedicineSyrup className="absolute -right-4 -bottom-10 text-blue-500/20" size={300} />
                </WobbleCard>
            )}

            {/* 3. Prevention Card */}
            {result.prevention && (
                <WobbleCard containerClassName={cn(
                    "col-span-1 min-h-[300px] bg-purple-900",
                    !result.cure ? "lg:col-span-3" : "lg:col-start-3"
                )}>
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                         Prevention Strategy
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        {result.prevention}
                    </p>
                    <IconShieldCheck className="absolute -right-4 -bottom-10 text-purple-500/20" size={250} />
                </WobbleCard>
            )}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
