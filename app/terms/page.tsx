import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="bg-neutral-50 dark:bg-black min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
            <p>Last Updated: December 2024</p>
            
            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using AgroNova, you agree to be bound by these Terms of Service. If you do not agree, strictly do not use our services.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">2. Use of Services</h2>
                <p>You agree to use AgroNova only for lawful agricultural purposes. You are responsible for all activity that occurs under your account.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">3. AI Advisory Disclaimer</h2>
                <p>AgroNova provides insights based on Artificial Intelligence (AI). While we strive for accuracy, these are recommendations only. Users should verify critical farming decisions with local experts. We are not liable for crop loss or damages resulting from reliance on our AI analysis.</p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">4. Agri Store Transactions</h2>
                <p>Transactions in the Agri Store are direct interactions between buyers and sellers. AgroNova is not a party to these transactions and is not liable for disputes arising from them.</p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-8 mb-4">5. Contact</h2>
                <p>For support or legal inquiries:</p>
                <p className="mt-2"><strong>Email:</strong> support@agronova.com</p>
                <p><strong>Phone:</strong> +91 63608 69590</p>
            </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
