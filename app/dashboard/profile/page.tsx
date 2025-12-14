"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAuth, User } from "@/context/AuthContext";
import { IconCamera, IconDeviceFloppy, IconUser, IconMapPin, IconPlant, IconRuler, IconPhone, IconMail, IconLoader, IconLeaf } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProfilePage() {
    const { user, updateProfile } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<User>>({});
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                phone: user.phone || "",
                location: user.location || "",
                farmSize: user.farmSize || "",
                crops: user.crops || [],
                about: user.about || "",
            });
            setAvatarPreview(user.avatar || null);
        }
    }, [user]);

    const handleChange = (field: keyof User, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            alert("File size must be less than 2MB");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatarPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async () => {
        setLoading(true);
        // Simulate network delay
        await new Promise(r => setTimeout(r, 800));

        updateProfile({
            ...formData,
            avatar: avatarPreview || undefined
        });

        setLoading(false);
        alert("Profile updated successfully!");
    };

    const initials = user?.name 
        ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() 
        : "JD";

    return (
        <div className="max-w-5xl mx-auto pb-20">
             {/* Header */}
             <div className="mb-8">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Profile Settings</h1>
                <p className="text-neutral-500 mt-2">Manage your account and farm details.</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {/* Left Column: Avatar & Basic Info Card */}
                 <div className="lg:col-span-1 space-y-6">
                      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col items-center text-center">
                           <div className="relative group cursor-pointer mb-4" onClick={() => fileInputRef.current?.click()}>
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl relative bg-green-100 dark:bg-green-900 flex items-center justify-center text-4xl font-bold text-green-700 dark:text-green-300">
                                     {avatarPreview ? (
                                         <Image src={avatarPreview} alt="Profile" fill className="object-cover" />
                                     ) : (
                                         <span>{initials}</span>
                                     )}
                                     {/* Overlay */}
                                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                         <IconCamera className="text-white" size={32} />
                                     </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <IconCamera size={16} />
                                </div>
                           </div>
                           <input 
                               type="file" 
                               ref={fileInputRef} 
                               className="hidden" 
                               accept="image/*"
                               onChange={handleImageUpload}
                           />
                           
                           <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{user?.name}</h2>
                           <p className="text-sm font-medium text-green-600 mb-1">{user?.role}</p>
                           <p className="text-xs text-neutral-500">{user?.email}</p>
                      </div>

                      {/* Summary Widget (Optional) */}
                      <div className="bg-green-50 dark:bg-neutral-900/50 rounded-3xl p-6 border border-green-100 dark:border-neutral-800">
                           <h3 className="font-bold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                               <IconLeaf size={18} /> Farm Status
                           </h3>
                           <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                               <div className="flex justify-between">
                                   <span>Member Since</span>
                                   <span className="font-medium text-neutral-900 dark:text-white">Dec 2024</span>
                               </div>
                               <div className="flex justify-between">
                                   <span>Farm Size</span>
                                   <span className="font-medium text-neutral-900 dark:text-white">{formData.farmSize || "0"} Acres</span>
                               </div>
                           </div>
                      </div>
                 </div>

                 {/* Right Column: Form Fields */}
                 <div className="lg:col-span-2 space-y-8">
                      {/* Personal Details */}
                      <section className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                           <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                               <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><IconUser size={20} /></div>
                               Personal Information
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                   <Label>Display Name</Label>
                                   <Input 
                                      value={formData.name || ""} 
                                      onChange={(e) => handleChange("name", e.target.value)}
                                      placeholder="Full Name"
                                   />
                               </div>
                               <div className="space-y-2">
                                   <Label>Email Address</Label>
                                   <Input value={user?.email || ""} disabled className="bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 cursor-not-allowed" />
                               </div>
                               <div className="space-y-2">
                                   <Label>Phone Number</Label>
                                   <div className="relative">
                                       <IconPhone className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                       <Input 
                                          className="pl-10"
                                          value={formData.phone || ""}
                                          onChange={(e) => handleChange("phone", e.target.value)}
                                          placeholder="+91 98765 43210"
                                       />
                                   </div>
                               </div>
                               <div className="space-y-2">
                                   <Label>Location</Label>
                                   <div className="relative">
                                       <IconMapPin className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                       <Input 
                                          className="pl-10"
                                          value={formData.location || ""}
                                          onChange={(e) => handleChange("location", e.target.value)}
                                          placeholder="Bangalore, Karnataka"
                                       />
                                   </div>
                               </div>
                           </div>
                           
                           <div className="mt-6 space-y-2">
                               <Label>About You</Label>
                                <textarea 
                                    className="flex min-h-[100px] w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-3 text-sm text-neutral-900 dark:text-white shadow-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
                                    placeholder="Tell us a bit about yourself and your farming journey..."
                                   value={formData.about || ""}
                                   onChange={(e) => handleChange("about", e.target.value)}
                               />
                           </div>
                      </section>

                      {/* Farm Details */}
                      <section className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                           <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                               <div className="p-2 bg-green-100 text-green-600 rounded-lg"><IconPlant size={20} /></div>
                               Farm Details
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                   <Label>Farm Size (Acres)</Label>
                                   <div className="relative">
                                       <IconRuler className="absolute left-3 top-2.5 text-neutral-400" size={18} />
                                       <Input 
                                          className="pl-10"
                                          type="number"
                                          value={formData.farmSize || ""}
                                          onChange={(e) => handleChange("farmSize", e.target.value)}
                                          placeholder="For reporting..."
                                       />
                                   </div>
                               </div>
                               <div className="space-y-2">
                                   <Label>Primary Crops</Label>
                                   <Input 
                                      value={Array.isArray(formData.crops) ? formData.crops.join(", ") : formData.crops || ""}
                                      onChange={(e) => handleChange("crops", e.target.value.split(",").map(s => s.trim()))}
                                      placeholder="Paddy, Wheat, Tomato (Comma separated)"
                                   />
                                   <p className="text-[10px] text-neutral-400">Used for personalized weather & pest alerts.</p>
                               </div>
                           </div>
                      </section>

                      {/* Action Buttons */}
                      <div className="flex justify-end pt-4">
                           <button 
                               onClick={handleSave}
                               disabled={loading}
                               className="flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
                           >
                               {loading ? <IconLoader className="animate-spin" size={20} /> : <IconDeviceFloppy size={20} />}
                               Save Changes
                           </button>
                      </div>
                 </div>
             </div>
        </div>
    );
}
