"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Terminal,
  ShieldCheck,
  Search,
  Sparkles,
  Zap,
  Lock,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  FileCode2,
  BookOpen,
  Stethoscope,
  Scale,
} from "lucide-react";

export function Hero() {
  const metrics = [
    {
      value: "837.4µs",
      label: "CSR Graph PageRank",
      detail: "Pure-Rust forward iterations on 25k nodes & 75k edges (< 1ms)",
    },
    {
      value: "22.12x",
      label: "Sync Compression",
      detail: "Columnar interning + zstd .mmz (1.54 MB/year projected)",
    },
    {
      value: "384 B",
      label: "Int8 Vector Quantization",
      detail: "FastEmbed ONNX with >99.5% cosine fidelity vs f32",
    },
    {
      value: "< 0.2% CPU",
      label: "Zero-Pixel Overhead",
      detail: "< 35 MB RAM resident footprint • 0 screenshots captured",
    },
    {
      value: "84 / 84",
      label: "Automated Rust Tests",
      detail: "100% green suite • 0 clippy warnings (-D warnings)",
    },
  ];

  const personas = [
    {
      icon: FileCode2,
      title: "For Developers",
      example: "Instantly recover yesterday's uncommitted AST refactor across 8 Git branches with line-level diffs.",
    },
    {
      icon: BookOpen,
      title: "For Researchers",
      example: "Query citations and exact claims across 50 open PDF papers without hallucinated footnotes.",
    },
    {
      icon: Stethoscope,
      title: "For Clinicians",
      example: "18-ID HIPAA Safe Harbor scrubber redacts MRNs & PHI before documents ever touch disk.",
    },
    {
      icon: Scale,
      title: "For Counsel & CISOs",
      example: "Deterministic audit trail with SOC 2 BLAKE3 hash-chains and <50ms GDPR crypto-shredding.",
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-emerald-500/10 dark:from-violet-600/20 dark:via-cyan-500/15 dark:to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Anti-Recall Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 backdrop-blur-xl mb-8 shadow-sm hover:border-violet-500/40 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-slate-900 dark:text-zinc-100">Zero-Pixel Architecture:</span>
          <span className="text-slate-600 dark:text-zinc-400">0 Screenshots Captured</span>
          <span className="text-slate-400 dark:text-zinc-600">•</span>
          <span className="text-slate-600 dark:text-zinc-400">0 Video Frames</span>
          <span className="text-slate-400 dark:text-zinc-600">•</span>
          <span className="text-slate-600 dark:text-zinc-400">0 Keyloggers</span>
          <span className="text-slate-400 dark:text-zinc-600">•</span>
          <span className="text-violet-700 dark:text-violet-400 font-semibold">100% Local-First Engine</span>
        </motion.div>

        {/* User-First Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.12] sm:leading-[1.1]"
        >
          Your Operating System&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
            Cognitive Digital Twin.
          </span>
          <br className="hidden sm:inline" />
          <span className="text-3xl sm:text-5xl lg:text-6xl text-slate-800 dark:text-zinc-100 font-bold mt-2 block">
            Deep Document &amp; Code Memory Without Creepy Screenshots.
          </span>
        </motion.h1>

        {/* Narrative Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          While invasive tools like Microsoft Recall capture millions of intrusive desktop screenshots
          that leak passwords and violate privacy, MiniMe runs a deterministic pure-Rust engine that
          understands the exact text of PDFs, slide decks, spreadsheets, and Git diffs you read.
          100% zero-knowledge encrypted, syncing under <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">1.54 MB/year</strong> on your private Google Drive or OneDrive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <a
            href="https://www.tryminime.com/downloads/MiniMe.exe"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40 border border-violet-400/25 transition-all duration-300 group whitespace-nowrap shrink-0"
          >
            <svg
              className="w-5 h-5 mr-3 text-white group-hover:scale-110 transition-transform duration-300 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
            </svg>
            <span>Download for Windows (x64)</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <a
            href="#studio-canvas"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-slate-800 dark:text-zinc-200 bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] rounded-2xl border border-slate-300 dark:border-white/10 transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400 shrink-0" />
            <span>Explore Dual-Surface Studio</span>
          </a>
        </motion.div>

        {/* Checksum & MSI secondary link */}
        <div className="mt-3 text-xs text-slate-500 dark:text-zinc-400 font-mono">
          <span>v0.1.0 Beta • </span>
          <Link href="/download" className="underline hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
            View SHA-256 hashes, MSI package &amp; system specs &rarr;
          </Link>
        </div>

        {/* Real Proof Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none text-left"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-violet-700 dark:text-violet-400 mt-0.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1 leading-snug">
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User-Centric Persona Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto text-left"
        >
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/80 dark:bg-zinc-950/70 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {persona.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
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
