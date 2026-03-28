'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useTheme } from '@/components/theme-provider';

declare global {
  interface Window {
    Cal?: any;
  }
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sync Cal.com theme — inverted: light calendar on dark site, dark calendar on light site
  const calTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (window.Cal?.ns?.['30min']) {
      window.Cal.ns['30min']('ui', {
        theme: calTheme,
        cssVarsPerTheme: {
          light: { 'cal-bg': '#ffffff' },
          dark: { 'cal-bg': 'transparent' },
        },
      });
    }
  }, [calTheme]);

  useEffect(() => {
    // Cal.com embed script
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          (api as any).q = (api as any).q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "30min", { origin: "https://app.cal.com" });

    window.Cal!.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "abhijith-k-vqq3xz/30min",
    });

    window.Cal!.ns["30min"]("ui", {
      theme: calTheme,
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        light: { "cal-bg": "#ffffff" },
        dark: { "cal-bg": "transparent" },
      },
    });
  }, []);

  return (
    <section id="contact" className="py-24 md:py-40 flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-6xl"
      >
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">
          Hiring ? or got a project in mind ?
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 mb-4 font-sans text-sm md:text-base">Drop a mail at</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl mb-16 shadow-sm">
          <span className="text-zinc-800 dark:text-zinc-200 font-sans text-base sm:text-lg select-all">{personalInfo.email}</span>
          <button
            onClick={handleCopy}
            title="Copy Email"
            className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all cursor-pointer shadow-sm active:scale-90"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <span className="text-zinc-400 dark:text-zinc-500 mb-16 font-serif italic text-lg">or</span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-zinc-900 dark:text-zinc-100 mb-12 tracking-tight">
          Book a Call
        </h2>

        {/* Cal.com Inline Widget — outer div clips the watermark */}
        <style>{`
          #my-cal-inline-30min iframe {
            width: 100% !important;
            max-width: 100% !important;
          }
          #my-cal-inline-30min > div {
            max-width: 100% !important;
            width: 100% !important;
          }
        `}</style>
        <div className="w-full overflow-hidden transition-colors duration-300" style={{ minHeight: '600px', height: 'auto' }}>
          <div
            id="my-cal-inline-30min"
            className="w-full"
            style={{ width: '100%', minHeight: '600px' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
