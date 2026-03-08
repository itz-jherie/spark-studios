"use client";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    if (!formRef.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        formRef.current?.reset();

        setTimeout(() => setIsSubmitted(false), 5000);
      }, (error) => {
        setIsSubmitting(false);
        setErrorMsg("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="relative bg-surface">
      <div className="border-t border-border" />

      <div className="container py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Section Info */}
          <div className="lg:col-span-4">
            <span className="text-[12px] font-bold uppercase tracking-widest text-ink-4 mb-4 block">
              Get In Touch
            </span>
            <h2
              className="font-display font-black text-ink uppercase tracking-tighter mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: "0.9",
              }}
            >
              Start Your{" "}
              <span className="font-accent italic lowercase tracking-normal font-normal text-primary">
                project
              </span>
            </h2>
            <p className="text-[15px] leading-[1.8] text-ink-3 mb-8">
              Ready to elevate your brand? Tell us about your project and
              we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-4 border-t border-border pt-8">
              <div className="flex items-center gap-3 text-[14px] text-ink-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                hello@sparkstudios.qzz.io
              </div>
              <div className="flex items-start gap-3 text-[14px] text-ink-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p>Toronto, Canada</p>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            {/* Form disabled temporarily due to EmailJS setup required */}
            <div className="bg-surface-2 border border-border p-10 md:p-14 h-full flex flex-col justify-center transition-colors group">
              <h3 className="font-display font-black uppercase tracking-tight text-3xl text-ink mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-[15px] leading-[1.8] text-ink-3 mb-8 max-w-[450px]">
                Please reach out to us directly via email and we&apos;ll get back to you right away to discuss your project.
              </p>

              <a
                href="mailto:hello@sparkstudios.qzz.io?subject=New%20Project%20Enquiry%20%E2%80%94%20Spark%20Studios"
                onClick={(e) => {
                  // Capture currentTarget synchronously before entering async promise context
                  const btn = e.currentTarget;

                  // We do NOT prevent default here so mobile browsers can natively open their email clients.
                  // But we still attempt to copy to clipboard (mostly useful for PC users where mailto might fail).
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
                    }).catch((err) => {
                      console.error("Clipboard write failed", err);
                    });
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
