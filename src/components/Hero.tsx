"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  FileCode2,
  BookOpen,
  Stethoscope,
  Scale,
} from "lucide-react";

const WINDOWS_DOWNLOAD_URL = "https://www.tryminime.com/downloads/MiniMe.exe";

export function Hero() {
  const highlights = [
    {
      value: "0 Screenshots",
      label: "No Pixel Recording",
      detail: "Reads structured text & code diffs—never takes screenshots or records your screen.",
    },
    {
      value: "< 35 MB RAM",
      label: "Runs Silently",
      detail: "Uses under 0.2% CPU so your browser, IDE, and calls stay fast.",
    },
    {
      value: "< 1.6 MB / yr",
      label: "Your Own Cloud Sync",
      detail: "Encrypted backups fit inside your free Google Drive or OneDrive.",
    },
    {
      value: "100% Offline AI",
      label: "Grounded Quotes Only",
      detail: "Runs local AI on your PC and links answers to exact pages and diffs.",
    },
  ];

  const personas = [
    {
      icon: FileCode2,
      title: "Developers",
      example:
        "Find exact file diffs across repos, track architectural decisions, and connect Cursor or Claude to your local context.",
    },
    {
      icon: BookOpen,
      title: "Researchers & Students",
      example:
        "Ask questions across dozens of PDFs and papers and jump straight to the exact highlighted page and quote.",
    },
    {
      icon: Stethoscope,
      title: "Clinicians",
      example:
        "Automatic HIPAA Safe Harbor scrubbing redacts patient names, MRNs, and clinical portals before anything touches disk.",
    },
    {
      icon: Scale,
      title: "Legal & Executives",
      example:
        "Review contracts locally, prevent data leaks with hardware encryption, and erase any vault in under 50ms.",
    },
  ];

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] md:w-[950px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-emerald-500/10 dark:from-violet-600/20 dark:via-cyan-500/15 dark:to-emerald-500/10 rounded-full blur-[60px] md:blur-[140px] transform-gpu pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/85 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 backdrop-blur-xl mb-6 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-slate-900 dark:text-zinc-100">Private by Architecture:</span>
          <span>0 Screenshots</span>
          <span className="text-slate-400 dark:text-zinc-600">•</span>
          <span>0 Keyloggers</span>
          <span className="text-slate-400 dark:text-zinc-600">•</span>
          <span className="text-violet-700 dark:text-violet-300 font-semibold">100% On-Device Memory</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.12]"
        >
          Instant Memory for Every{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
            Document, Code File &amp; Tab.
          </span>
          <span className="text-2xl sm:text-4xl lg:text-[42px] text-slate-800 dark:text-zinc-100 font-bold mt-3 block">
            Without Creepy Screenshots.
          </span>
        </motion.h1>

        {/* Clear Value Prop */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 text-base sm:text-lg text-slate-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Unlike tools that constantly snapshot your screen, MiniMe reads only the structured text of the
          PDFs, slides, spreadsheets, and code you actually work in—right on your Windows PC. Ask questions,
          jump to exact quotes, and sync encrypted backups to your own Google Drive or OneDrive.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <a
            href={WINDOWS_DOWNLOAD_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40 border border-violet-400/25 transition-all duration-300 group whitespace-nowrap shrink-0"
          >
            <svg
              className="w-5 h-5 mr-3 text-white group-hover:scale-110 transition-transform duration-300 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
            </svg>
            <span>Download Free for Windows</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <a
            href="#studio-canvas"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-slate-800 dark:text-zinc-200 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-2xl border border-slate-300 dark:border-white/10 transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400 shrink-0" />
            <span>See Live Demo</span>
          </a>
        </motion.div>

        <div className="mt-3 text-xs text-slate-700 dark:text-zinc-300 font-mono">
          <span>Windows 10 / 11 (x64) • Free for Personal Use • </span>
          <Link href="/download" className="underline hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
            Enterprise MSI, system specs &amp; macOS/Linux waitlist &rarr;
          </Link>
        </div>

        {/* 4 Clean Benefit Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none text-left"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-violet-700 dark:text-violet-300 mt-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-700 dark:text-zinc-300 mt-1.5 leading-snug">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Built for Every Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left"
        >
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/80 dark:bg-zinc-950/70 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {persona.title}
                </h3>
                <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {persona.example}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
