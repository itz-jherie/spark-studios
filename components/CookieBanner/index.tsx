"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if the user already accepted or declined cookies
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowBanner(true);
        } else if (consent === "granted") {
            // If already granted in a previous session, grant TikTok consent immediately
            // if (typeof window !== "undefined" && (window as any).ttq) {
            //    (window as any).ttq.grantConsent();
            // }
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShowBanner(false);
        // if (typeof window !== "undefined" && (window as any).ttq) {
        //    (window as any).ttq.grantConsent();
        // }
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        setShowBanner(false);
        // TikTok stays on "hold" forever this session, so it won't track.
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[9999] w-[320px] sm:w-[360px] animate-slide-up">
            <div className="rounded-xl bg-white p-5 sm:p-6 shadow-2xl border border-border dark:bg-[#0D0D0D] dark:border-border-2 flex flex-col gap-4">
                <div className="text-sm text-ink-3 dark:text-gray-300">
                    We use cookies to improve your browsing experience, analyze site traffic, and deliver personalized marketing. Read our{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-semibold">
                        Privacy Policy
                    </Link>.
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <button
                        onClick={handleDecline}
                        className="flex-1 rounded-none px-4 py-2.5 text-sm font-semibold text-ink dark:text-white border border-border hover:bg-surface-2 dark:hover:bg-white/10 transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 rounded-none bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
