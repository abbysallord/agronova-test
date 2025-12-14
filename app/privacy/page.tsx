import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-neutral-50 dark:bg-black min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
            <p>Last Updated: December 2024</p>
            
            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
                <p>AgroNova ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our web application.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">2. Information We Collect</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and profile picture.</li>
                    <li><strong>Farm Data:</strong> Location, farm size, crops grown, and soil details.</li>
                    <li><strong>Usage Data:</strong> Images uploaded for pest detection or soil analysis.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use your data to:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide AI-driven insights for pest detection and soil analysis.</li>
                    <li>Connect you with relevant government schemes and market prices.</li>
                    <li>Improve our services and user experience.</li>
                    <li>Facilitate the Agri Store marketplace interactions.</li>
                </ul>
            </section>

             <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">4. Data Security</h2>
                <p>We implement appropriate technical measures to protect your personal data. However, please note that no method of transmission over the Internet is 100% secure.</p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">5. Contact Us</h2>
                <p>If you have questions about this policy, please contact us at:</p>
                <p className="mt-2"><strong>Email:</strong> support@agronova.com</p>
                <p><strong>Phone:</strong> +91 63608 69590</p>
            </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
