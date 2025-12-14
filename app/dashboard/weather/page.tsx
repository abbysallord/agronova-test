"use client";
import React, { useState, useEffect } from "react";
import { IconCloud, IconWind, IconDroplet, IconThermometer, IconSun, IconPlant, IconAnalyze, IconLoader, IconAlertTriangle, IconCheck, IconInfoCircle, IconMapPin, IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Mock location for MVP (Bangalore)
const DEFAULT_LAT = 12.9716;
const DEFAULT_LON = 77.5946;

export default function WeatherPage() {
  const [weather, setWeather] = useState<any>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [cityName, setCityName] = useState("Bangalore, Karnataka");
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [coords, setCoords] = useState({ lat: DEFAULT_LAT, lon: DEFAULT_LON });
  
  const [crops, setCrops] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [impactReport, setImpactReport] = useState<any>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoadingWeather(true);
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum&timezone=auto`
        );
        const data = await res.json();
        setWeather(data);
      } catch (e) {
        console.error("Failed to fetch weather", e);
        toast.error("Could not load weather data.");
      } finally {
        setLoadingWeather(false);
      }
    }
    fetchWeather();
  }, [coords]);

  const handleSearch = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!searchQuery.trim()) return;
      
      setSearching(true);
      try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchQuery)}&count=1&language=en&format=json`);
          const data = await res.json();
          
          if (!data.results || data.results.length === 0) {
              toast.error("City not found. Please try again.");
              return;
          }

          const place = data.results[0];
          setCoords({ lat: place.latitude, lon: place.longitude });
          setCityName(`${place.name}, ${place.country}`);
          setSearchQuery("");
      } catch (e) {
          toast.error("Failed to search location.");
      } finally {
          setSearching(false);
      }
  };

  const handleAnalyze = async () => {
      if(!crops.trim()) {
          toast.error("Please enter your crops first.");
          return;
      }
      setAnalyzing(true);
      setImpactReport(null);

      try {
          const res = await fetch("/api/analyze-weather-impact", {
              method: "POST",
              body: JSON.stringify({
                  crops: crops,
                  weatherData: weather // Send full weather data (current + daily)
              })
          });
          const data = await res.json();
          if(data.error) throw new Error(data.error);
          setImpactReport(data);
          toast.success("Crop Impact Report Generated!");
      } catch (e: any) {
          toast.error(e.message || "Analysis failed.");
      } finally {
          setAnalyzing(false);
      }
  };

  const getWeatherIcon = (code: number, isDay: number = 1) => {
      if (code <= 3) return isDay ? <IconSun className="text-yellow-500" /> : <IconCloud className="text-gray-400" />;
      if (code <= 67) return <IconDroplet className="text-blue-500" />;
      return <IconAlertTriangle className="text-red-500" />;
  };

  if (loadingWeather) {
      return <div className="h-[50vh] flex items-center justify-center"><IconLoader className="animate-spin text-neutral-400" size={40} /></div>;
  }

  const current = weather?.current;
  const todayDaily = weather?.daily;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Weather Insight</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2">
            Real-time forecast & AI-powered crop impact analysis.
            </p>
        </div>
        
        <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto relative group items-center">
            <div className="relative flex-1 md:flex-none">
                <IconMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-500 transition-colors z-10" size={18} />
                <Input 
                    placeholder="Search city..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-10 w-full md:w-64 bg-white/50 backdrop-blur-sm focus:bg-white transition-all ring-offset-0 focus:ring-2 focus:ring-blue-500/20 border-neutral-200"
                />
            </div>
            <button 
                type="submit" 
                disabled={searching}
                className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-lg hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
                {searching ? <IconLoader className="animate-spin" size={18} /> : <IconSearch size={18} />}
            </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Weather Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                 <div className="text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                        {getWeatherIcon(current.weather_code, current.is_day)}
                        <span className="text-6xl font-bold">{current.temperature_2m}°C</span>
                     </div>
                     <p className="text-xl font-medium opacity-90">Feels like {current.apparent_temperature}°C</p>
                     <p className="opacity-75 flex items-center gap-2"><IconMapPin size={16} /> {cityName}</p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                     <WeatherDetail icon={<IconWind />} label="Wind" value={`${current.wind_speed_10m} km/h`} />
                     <WeatherDetail icon={<IconDroplet />} label="Humidity" value={`${current.relative_humidity_2m}%`} />
                     <WeatherDetail icon={<IconCloud />} label="Precipitation" value={`${current.precipitation} mm`} />
                     <WeatherDetail icon={<IconSun />} label="UV Index" value={`${todayDaily?.uv_index_max?.[0] || 'N/A'}`} />
                 </div>
            </div>
             <div className="absolute -right-20 -top-20 text-white opacity-10">
                 <IconCloud size={300} />
             </div>
        </div>

        {/* Crop Impact Input */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-lg flex flex-col justify-between">
             <div>
                <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-white flex items-center gap-2">
                    <IconPlant className="text-green-500" />
                    Crop Impact Analysis
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                    Enter your active crops to get a personalized weather impact report.
                </p>
                <div className="mb-4">
                    <Input 
                        placeholder="e.g. Rice, Tomato, Cotton" 
                        value={crops}
                        onChange={(e) => setCrops(e.target.value)}
                        className="h-12 px-4 shadow-sm"
                    />
                </div>
             </div>
             <div className="flex justify-center">
                <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="button"
                    className="bg-black text-white flex items-center justify-center space-x-2 px-8 py-3 w-full"
                    onClick={handleAnalyze}
                    disabled={analyzing}
                >
                    {analyzing ? (
                        <>
                            <IconLoader className="animate-spin w-5 h-5" />
                            <span>Analyzing...</span>
                        </>
                    ) : (
                        <>
                            <IconAnalyze className="w-5 h-5" />
                            <span>Generate Report</span>
                        </>
                    )}
                </HoverBorderGradient>
             </div>
        </div>
      </div>

      {/* 5 Day Forecast Row */}
      <div>
           <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">5-Day Forecast</h3>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {todayDaily?.time.slice(0, 5).map((date: string, i: number) => (
                   <ForecastCard 
                        key={date}
                        day={new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                        temp={`${Math.round(todayDaily.temperature_2m_max[i])}° / ${Math.round(todayDaily.temperature_2m_min[i])}°`}
                        icon={getWeatherIcon(todayDaily.weather_code[i])}
                        rain={`${todayDaily.precipitation_sum[i]}mm`}
                   />
               ))}
           </div>
      </div>

      {/* Impact Report Section */}
      {impactReport && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-6">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-white border-b pb-2">Impact Analysis Report</h3>
              
              <BentoGrid className="max-w-full">
                <BentoGridItem 
                    className="md:col-span-2"
                    title="Impact Summary"
                    description={<p className="text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">{impactReport.impact_summary}</p>}
                    header={<div className="h-full min-h-[6rem] bg-orange-50 dark:bg-orange-900/10 rounded-xl flex items-center justify-center"><IconAlertTriangle className="text-orange-500 h-10 w-10" /></div>}
                    icon={<IconInfoCircle className="h-4 w-4 text-neutral-500" />}
                />
                <BentoGridItem 
                    className="md:col-span-1"
                    title="Positive Outlook"
                    description={<p className="text-neutral-600 dark:text-neutral-300 mt-2">{impactReport.positive_outlook || "No significant benefits noted."}</p>}
                    header={<div className="h-full min-h-[6rem] bg-green-50 dark:bg-green-900/10 rounded-xl flex items-center justify-center"><IconCheck className="text-green-500 h-10 w-10" /></div>}
                    icon={<IconCheck className="h-4 w-4 text-neutral-500" />}
                />
                
                <BentoGridItem 
                    className="md:col-span-1"
                    title="Advisory"
                    description={<p className="text-neutral-600 dark:text-neutral-300 mt-2">{impactReport.advisory}</p>}
                    header={<div className="h-full min-h-[6rem] bg-blue-50 dark:bg-blue-900/10 rounded-xl flex items-center justify-center"><IconInfoCircle className="text-blue-500 h-10 w-10" /></div>}
                    icon={<IconInfoCircle className="h-4 w-4 text-neutral-500" />}
                />

                <BentoGridItem 
                    className="md:col-span-2"
                    title="Recommended Precautions"
                    description={
                        <ul className="mt-2 space-y-1">
                            {impactReport.precautions?.map((p: string, i: number) => (
                                <li key={i} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                                    <span className="text-red-500">•</span> {p}
                                </li>
                            ))}
                        </ul>
                    }
                    header={<div className="h-full min-h-[6rem] bg-red-50 dark:bg-red-900/10 rounded-xl flex items-center justify-center"><IconAlertTriangle className="text-red-500 h-10 w-10" /></div>}
                    icon={<IconAlertTriangle className="h-4 w-4 text-neutral-500" />}
                />
              </BentoGrid>
          </div>
      )}
    </div>
  );
}

const WeatherDetail = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-center gap-3">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            {icon}
        </div>
        <div>
            <p className="text-xs opacity-75">{label}</p>
            <p className="font-bold">{value}</p>
        </div>
    </div>
);

const ForecastCard = ({ day, temp, icon, rain }: { day: string, temp: string, icon: any, rain: string }) => (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow">
        <span className="text-neutral-500 text-sm font-medium">{day}</span>
        <div className="scale-125 my-2">{icon}</div>
        <span className="text-lg font-bold text-neutral-800 dark:text-white text-center">{temp}</span>
        <div className="flex items-center text-xs text-blue-500 font-medium">
            <IconDroplet size={12} className="mr-1" /> {rain}
        </div>
    </div>
);

