"use client";

import React from "react";

const EmailButton = () => {
    return (
        <a
            href="mailto:hello@sparkstudios.qzz.io?subject=New%20Project%20Enquiry%20%E2%80%94%20Spark%20Studios"
            onClick={(e) => {
                const btn = e.currentTarget;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText("hello@sparkstudios.qzz.io").then(() => {
                        if (!btn) return;
                        const originalText = btn.innerHTML;
                        btn.innerHTML = `
              Copied! 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" class="ml-2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            `;
                        setTimeout(() => {
                            if (btn) btn.innerHTML = originalText;
                        }, 3000);
                    }).catch((err) => console.error("Clipboard write failed", err));
                }
            }}
            className="btn-primary inline-flex w-fit items-center"
        >
            Email Us Directly
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
            >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </a>
    );
};

export default EmailButton;
