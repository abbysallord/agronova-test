"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { IconCheck, IconX, IconBuildingStore, IconAlertTriangle, IconLoader } from '@tabler/icons-react';

function VerifyContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');

    const [status, setStatus] = useState<'LOADING' | 'READY' | 'SUCCESS' | 'FAILED' | 'ERROR'>('LOADING');
    const [message, setMessage] = useState("");
    
    // In a real app, we'd fetch the order details here to display them. 
    // For this MVP, we just trust the ID and show the actions.
    
    useEffect(() => {
        if(orderId) setStatus('READY');
        else setStatus('ERROR');
    }, [orderId]);

    const [inputs, setInputs] = useState({ email: '', buyerUpi: '' });

    const handleVerify = async () => {
        if(!inputs.email.includes('@')) {
            alert("Please enter your registered Seller Email to verify your identity.");
            return;
        }
        
        setStatus('LOADING');
        try {
            const res = await fetch('/api/store/order/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    orderId, 
                    action: 'VERIFY',
                    sellerEmail: inputs.email,
                    buyerUpiInput: inputs.buyerUpi
                })
            });
            const data = await res.json();
            if(data.success) {
                if(data.status === 'VERIFIED') {
                    setStatus('SUCCESS');
                } else {
                    // Mime a "Retry" state (aka Error but acceptable)
                    setStatus('READY');
                    setMessage("");
                    alert(`Incorrect Buyer UPI ID. ${data.remaining} attempts remaining.`);
                }
            } else {
                setStatus('ERROR');
                setMessage(data.error || "Verification failed.");
            }
        } catch (e) {
            setStatus('ERROR');
        }
    };

    const handleReject = async () => {
         if(!inputs.email.includes('@')) {
            alert("Please enter your registered Seller Email.");
            return;
        }
        if(!confirm("Are you sure? This will record a strike against the buyer if repeated.")) return;
        
        setStatus('LOADING');
        try {
            const res = await fetch('/api/store/order/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    orderId, 
                    action: 'REJECT',
                    sellerEmail: inputs.email
                })
            });
            const data = await res.json();
            // ... (rest same)
            if(data.success) {
                if(data.status === 'FAILED') {
                     setMessage("Order has been cancelled due to repeated failures.");
                     setStatus('FAILED');
                } else {
                     setMessage("Issue reported. The system waits for more attempts.");
                     setStatus('READY'); 
                     alert(data.message);
                }
            } else {
                setStatus('ERROR');
            }
        } catch (e) {
            setStatus('ERROR');
        }
    };

    if(!orderId) return <div className="p-10 text-center">Invalid Link</div>;

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                <div className="p-6 bg-blue-600 text-white text-center">
                    <IconBuildingStore size={40} className="mx-auto mb-2" />
                    <h1 className="text-xl font-bold">Seller Verification Portal</h1>
                    <p className="opacity-80 text-sm">Order #{orderId}</p>
                </div>

                <div className="p-6">
                    {status === 'LOADING' && (
                        <div className="text-center py-10">
                            <IconLoader className="animate-spin mx-auto mb-4 text-blue-600" />
                            <p>Processing...</p>
                        </div>
                    )}

                    {status === 'READY' && (
                        <div className="space-y-6">
                            {/* Step 1: Identity */}
                            <div className="text-center">
                                <h2 className="font-bold text-lg mb-2">Step 1: Identify Yourself</h2>
                                <p className="text-sm text-neutral-500">Enter your registered Seller Email.</p>
                            </div>
                            
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="e.g. kisan@agronova.com"
                                    className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
                                    value={inputs.email}
                                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
                                />
                            </div>

                            <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800 my-4" />

                            {/* Step 2: Payment Proof (Only show if email entered) */}
                            {inputs.email.includes("@") && (
                                <div className="space-y-4 animate-in slide-in-from-bottom-2 fade-in">
                                    <div className="text-center">
                                        <h2 className="font-bold text-lg mb-2">Step 2: Verify Payment Source</h2>
                                        <p className="text-sm text-neutral-500">Check your Bank Statement. Enter the <strong>Buyer's UPI ID</strong> that paid you.</p>
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. buyer@oksbi"
                                            className="w-full p-3 rounded-xl border-2 border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 text-center font-bold tracking-wide"
                                            value={inputs.buyerUpi}
                                            onChange={(e) => setInputs({...inputs, buyerUpi: e.target.value})}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <button 
                                    onClick={handleReject}
                                    className="p-4 rounded-xl border-2 border-red-100 bg-red-50 text-red-600 hover:bg-red-100 hover:border-red-200 transition-all flex flex-col items-center gap-2"
                                >
                                    <IconX size={24} />
                                    <span className="font-bold text-sm">No / Fraud</span>
                                </button>
                                <button 
                                    onClick={handleVerify}
                                    disabled={!inputs.email.includes("@") || !inputs.buyerUpi || inputs.buyerUpi.length < 5}
                                    className={`p-4 rounded-xl text-white shadow-lg transition-all flex flex-col items-center gap-2 ${
                                        (!inputs.email.includes("@") || !inputs.buyerUpi || inputs.buyerUpi.length < 5)
                                        ? "bg-neutral-300 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
                                    }`}
                                >
                                    <IconCheck size={24} />
                                    <span className="font-bold text-sm">Verify Payment</span>
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {/* Success/Failed Content (Keep Existing) */}
                     {status === 'SUCCESS' && (
                        <div className="text-center py-8 animate-in zoom-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IconCheck size={32} stroke={4} />
                            </div>
                            <h2 className="text-xl font-bold text-green-700">Payment Verified!</h2>
                            <p className="text-sm text-neutral-500 mt-2">The order is confirmed. Shipping details have been sent to your email.</p>
                        </div>
                    )}

                    {status === 'FAILED' && (
                        <div className="text-center py-8 animate-in zoom-in">
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IconAlertTriangle size={32} stroke={2} />
                            </div>
                            <h2 className="text-xl font-bold text-red-700">Validation Failed</h2>
                            <p className="text-sm text-neutral-500 mt-2">{message}</p>
                        </div>
                    )}
                    
                    {status === 'ERROR' && (
                        <div className="text-center py-8 text-red-500">
                             <p>{message || "System Error."}</p>
                             <button onClick={() => setStatus('READY')} className="mt-4 text-sm underline">Try Again</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default function VerifyOrderPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyContent />
        </Suspense>
    );
}
