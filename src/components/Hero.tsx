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
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-violet-600/20 via-cyan-500/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Pre-headline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-xl mb-8 shadow-inner hover:border-violet-500/40 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-zinc-200">🛡️ 100% Local-First</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">Zero Screenshots</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">Zero Keyloggers</span>
          <span className="text-zinc-500">•</span>
          <span className="text-violet-400 font-semibold">Anti-Recall Architecture</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] sm:leading-[1.1]"
        >
          Your Operating System&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
            Cognitive Digital Twin.
          </span>
          <br className="hidden sm:inline" />
          <span className="text-3xl sm:text-5xl lg:text-6xl text-zinc-100 font-bold mt-2 block">
            Search & Chat With Every Document, Code File & Web Page You&apos;ve Ever Touched.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
        >
          MiniMe silently understands what you actually read, write, and code—extracting page
          text, slide decks, spreadsheets, and Git diffs without taking creepy screenshots.{" "}
          <span className="text-zinc-200 font-medium">100% zero-knowledge encrypted</span>, syncing
          under <span className="text-emerald-400 font-medium">5 MB/year</span> on your own Google Drive or OneDrive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <Link
            href="/download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 border border-violet-400/25 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 mr-3 text-white group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
            </svg>
            <span>Download for Windows (x64)</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#spotlight-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-xl group"
          >
            <Terminal className="w-4 h-4 mr-2.5 text-cyan-400 group-hover:text-cyan-300" />
            <span>Explore Spotlight HUD</span>
            <span className="ml-2 px-2 py-0.5 text-xs font-mono rounded bg-white/10 text-zinc-300 border border-white/10">
              Alt + Space
            </span>
          </a>
        </motion.div>

        {/* Platform & Capability Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-500"
        >
          <span className="inline-flex items-center text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mr-2" />
            Native Win32 &amp; Mica blur
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
            macOS &amp; Linux coming Q2 2026
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
            100% Offline-Capable
          </span>
        </motion.div>

        {/* 4 Feature Metric Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-lg hover:border-violet-500/30 transition-all">
            <div className="flex items-center space-x-2 text-violet-400 mb-1">
              <Database className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Cloud Size</span>
            </div>
            <div className="text-lg font-bold text-white">&lt;5 MB / year</div>
            <div className="text-xs text-zinc-500">Columnar zstd CRDT sync</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-lg hover:border-cyan-500/30 transition-all">
            <div className="flex items-center space-x-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Compliance</span>
            </div>
            <div className="text-lg font-bold text-white">HIPAA 18-PHI</div>
            <div className="text-xs text-zinc-500">Safe Harbor auto-scrubber</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-lg hover:border-emerald-500/30 transition-all">
            <div className="flex items-center space-x-2 text-emerald-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Pure-Rust</span>
            </div>
            <div className="text-lg font-bold text-white">&lt;0.2% Idle CPU</div>
            <div className="text-xs text-zinc-500">&lt;35 MB RAM footprint</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-lg hover:border-violet-500/30 transition-all">
            <div className="flex items-center space-x-2 text-indigo-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Privacy</span>
            </div>
            <div className="text-lg font-bold text-white">Zero DB In Cloud</div>
            <div className="text-xs text-zinc-500">Google Drive / OneDrive BYOC</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
