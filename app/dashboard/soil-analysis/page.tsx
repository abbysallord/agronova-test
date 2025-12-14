"use client";
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileUpload } from "@/components/ui/file-upload";
import { IconPlant, IconFlask, IconDroplet, IconMapPin, IconPalette, IconGrain, IconAnalyze, IconLoader, IconInfoCircle, IconChartBar } from "@tabler/icons-react";
import { toast } from "sonner";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function SoilAnalysisPage() {
  const tabs = [
    {
      title: "Manual Input (Recommended)",
      value: "manual",
      content: <ManualInputForm />,
    },
    {
      title: "Image Upload",
      value: "image",
      content: <ImageUploadForm />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full pb-20">
      <div className="text-center md:text-left mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
            Soil Health Analysis
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Get detailed insights about your soil health using AI. Enter specific data or upload an image for instant analysis.
        </p>
      </div>
      
      <div className="h-full min-h-[40rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ManualInputForm = () => {
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAnalyzing(true);
        setResult(null);

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("type", "manual");

        try {
            const response = await fetch("/api/analyze-soil", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Analysis failed");
            setResult(data);
            toast.success("Soil Report Generated!");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setAnalyzing(false);
        }
    };

    return (
        <div className="w-full p-4 md:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl min-h-[500px]">
            {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Location & Physical Properties */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-neutral-700 dark:text-neutral-300 border-b pb-2">Physical Properties</h3>
                            <div className="space-y-2">
                                <Label htmlFor="location">Location / Region</Label>
                                <div className="relative">
                                    <IconMapPin className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                    <Input id="location" name="location" placeholder="e.g. Punjab, India" className="pl-10" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="color">Soil Color</Label>
                                   <div className="relative">
                                        <IconPalette className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                        <Input id="color" name="color" placeholder="e.g. Reddish Brown" className="pl-10" required />
                                   </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="texture">Texture</Label>
                                    <div className="relative">
                                        <IconGrain className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                        <Input id="texture" name="texture" placeholder="e.g. Clay, Sandy" className="pl-10" required />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="moisture">Moisture Content (%)</Label>
                                <Input id="moisture" name="moisture" placeholder="e.g. 40" type="number" required />
                            </div>
                        </div>

                        {/* Chemical Properties */}
                        <div className="space-y-4">
                             <h3 className="font-semibold text-lg text-neutral-700 dark:text-neutral-300 border-b pb-2">Nutrient Levels</h3>
                             <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="n">N (mg/kg)</Label>
                                    <Input id="n" name="n" placeholder="50" type="number" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="p">P (mg/kg)</Label>
                                    <Input id="p" name="p" placeholder="20" type="number" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="k">K (mg/kg)</Label>
                                    <Input id="k" name="k" placeholder="150" type="number" required />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="ph">pH Level</Label>
                                <Input id="ph" name="ph" placeholder="e.g. 6.5" type="number" step="0.1" required />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pt-6">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black text-white flex items-center space-x-2 px-8 py-3"
                            disabled={analyzing}
                        >
                             {analyzing ? (
                                <>
                                    <IconLoader className="animate-spin" />
                                    <span>Analyzing Soil Data...</span>
                                </>
                            ) : (
                                <>
                                    <IconAnalyze className="w-5 h-5" />
                                    <span>Generate Soil Report</span>
                                </>
                            )}
                        </HoverBorderGradient>
                    </div>
                </form>
            ) : (
                <AnalysisResult result={result} onReset={() => setResult(null)} />
            )}
        </div>
    );
};

const ImageUploadForm = () => {
     const [files, setFiles] = useState<File[]>([]);
     const [analyzing, setAnalyzing] = useState(false);
     const [result, setResult] = useState<any>(null);

     const handleAnalyze = async () => {
        if(!files.length) return;
        setAnalyzing(true);
        setResult(null);

        const formData = new FormData();
        formData.append("image", files[0]);
        formData.append("type", "image");

        try {
            const response = await fetch("/api/analyze-soil", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            if (!response.ok) throw new Error("Analysis failed");
            setResult(data);
            toast.success("Image Analysis Complete!");
        } catch (error: any) {
             toast.error(error.message);
        } finally {
            setAnalyzing(false);
        }
     };

    return (
         <div className="w-full p-4 md:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl min-h-[500px] flex flex-col gap-6">
             {!result ? (
                 <div className="max-w-xl mx-auto w-full space-y-8 mt-10">
                    <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl bg-neutral-50 dark:bg-neutral-900/50">
                        <FileUpload onChange={setFiles} />
                    </div>
                    
                    <div className="flex justify-center">
                         <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black text-white flex items-center space-x-2 px-8 py-3"
                            onClick={handleAnalyze}
                            disabled={files.length === 0 || analyzing}
                        >
                            {analyzing ? (
                                <>
                                    <IconLoader className="animate-spin" />
                                    <span>Scanning Soil Structure...</span>
                                </>
                            ) : (
                                <>
                                    <IconAnalyze className="w-5 h-5" />
                                    <span>Analyze Soil Image</span>
                                </>
                            )}
                        </HoverBorderGradient>
                    </div>
                 </div>
             ) : (
                 <AnalysisResult result={result} onReset={() => { setResult(null); setFiles([]); }} />
             )}
         </div>
    );
};

const AnalysisResult = ({ result, onReset }: { result: any, onReset: () => void }) => {
    return (
         <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
             <div className="flex justify-between items-center px-2">
                 <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Analysis Report</h2>
                 <button onClick={onReset} className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline">
                    Analyze New Sample
                </button>
             </div>

            <WobbleCard
                containerClassName="h-full min-h-[250px] bg-amber-900 shadow-xl"
                className=""
            >
                <div className="max-w-xl">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        {result.soil_type}
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        {result.description}
                    </p>
                     <div className="mt-4 flex gap-4">
                        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            <span className="text-xs text-amber-200 uppercase font-bold">Water Needs</span>
                            <p className="text-white font-medium">{result.needs_water}</p>
                        </div>
                     </div>
                </div>
                <IconPlant className="absolute -right-4 lg:-right-[5%] -bottom-10 object-contain rounded-2xl text-amber-500/20" size={300} />
            </WobbleCard>
            
            <BentoGrid className="max-w-full">
                 <BentoGridItem
                    className="md:col-span-1 shadow-sm hover:shadow-md transition-shadow duration-200"
                    title="Suitable Crops"
                    description={
                        <div className="flex flex-wrap gap-2 mt-2">
                            {result.suitable_crops.map((crop: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-bold">
                                    {crop}
                                </span>
                            ))}
                        </div>
                    }
                    header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-green-50 dark:bg-green-900/10 flex items-center justify-center">
                        <IconPlant className="text-green-500 h-10 w-10" />
                    </div>}
                    icon={<IconPlant className="h-4 w-4 text-neutral-500" />}
                />

                <BentoGridItem
                     className="md:col-span-1 shadow-sm hover:shadow-md transition-shadow duration-200"
                    title="Fertilizer Guide"
                    description={<p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">{result.fertilizer_recommendation}</p>}
                    header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center">
                        <IconFlask className="text-blue-500 h-10 w-10" />
                    </div>}
                    icon={<IconFlask className="h-4 w-4 text-neutral-500" />}
                />

                <BentoGridItem
                     className="md:col-span-1 shadow-sm hover:shadow-md transition-shadow duration-200"
                    title="Irrigation Advice"
                    description={<p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">{result.irrigation_advice}</p>}
                    header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-cyan-50 dark:bg-cyan-900/10 flex items-center justify-center">
                        <IconDroplet className="text-cyan-500 h-10 w-10" />
                    </div>}
                    icon={<IconDroplet className="h-4 w-4 text-neutral-500" />}
                />
                 {result.improvement_tips && (
                    <BentoGridItem
                        className="md:col-span-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                        title="Expert Tips for Improvement"
                        description={<p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">{result.improvement_tips}</p>}
                        header={<div className="h-full w-full min-h-[6rem] rounded-xl bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center">
                            <IconChartBar className="text-purple-500 h-10 w-10" />
                        </div>}
                        icon={<IconInfoCircle className="h-4 w-4 text-neutral-500" />}
                    />
                )}
            </BentoGrid>
        </div>
    );
};
