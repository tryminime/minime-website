"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Laptop,
  Monitor,
  GitBranch,
  FileCode,
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";

interface FocusBlock {
  id: string;
  timeRange: string;
  hour: number;
  category: "Coding" | "Research" | "Communication" | "Design";
  device: "Office Desktop" | "ThinkPad X1 Laptop";
  title: string;
  details: string;
  files: { name: string; type: "rust" | "pdf" | "xlsx" | "tsx"; diff?: string; page?: string }[];
  branch: string;
  stats: string;
}

export function FlowRibbonVisualizer() {
  const [selectedHour, setSelectedHour] = useState(14);
  const [rehydrated, setRehydrated] = useState(false);

  const blocks: FocusBlock[] = [
    {
      id: "b1",
      timeRange: "09:00 - 11:15 AM",
      hour: 10,
      category: "Coding",
      device: "Office Desktop",
      title: "Core Rust Daemon Architecture & CSR PageRank",
      details: "Implemented Win32 dwell-gated accessibility reader and Compressed Sparse Row (CSR) forward power iterations running in 837.4µs on 25k nodes & 75k edges.",
      files: [
        { name: "crates/minime-core/src/graph/extractor.rs", type: "rust", diff: "+142 / -18" },
        { name: "crates/minime-core/src/rag/ppr.rs", type: "rust", diff: "+89 / -4" },
      ],
      branch: "feat/csr-pagerank-pow-iter",
      stats: "2h 15m Focus • 4 Commits • 240 Tests Passing",
    },
    {
      id: "b2",
      timeRange: "11:30 - 01:00 PM",
      hour: 12,
      category: "Research",
      device: "Office Desktop",
      title: "Vendor Contract Risk Assessment & LongCite Grounding",
      details: "Read and extracted termination liabilities, indemnification terms, and sentence attribution score (γ=0.65 ROUGE-1 recall + cosine similarity).",
      files: [
        { name: "Vendor_Master_Services_Agreement_2026.pdf", type: "pdf", page: "Pages 4-14" },
        { name: "Enterprise_Risk_Assessment_Summary.docx", type: "pdf", page: "Heading 2" },
      ],
      branch: "legal/vendor-audit",
      stats: "1h 30m Deep Read • 0 Screenshots • Zero Pixel Leakage",
    },
    {
      id: "b3",
      timeRange: "01:45 - 04:30 PM",
      hour: 14,
      category: "Coding",
      device: "ThinkPad X1 Laptop",
      title: "Sync Protocol Benchmark & zstd .mmz Compression",
      details: "Benchmarked columnar string-interning + zstd level 7/9 achieving 22.12x compression ratio and 1.54 MB/year projected footprint on Google Drive appdata.",
      files: [
        { name: "crates/minime-core/src/sync/crdt.rs", type: "rust", diff: "+210 / -34" },
        { name: "Sync_Compression_Benchmark_Results.xlsx", type: "xlsx", page: "Sheet1: Ratios" },
      ],
      branch: "feat/hlc-zstd-sync",
      stats: "2h 45m Focus • 22.12x Ratio • 1.54 MB/year Synced",
    },
    {
      id: "b4",
      timeRange: "04:45 - 06:30 PM",
      hour: 17,
      category: "Design",
      device: "ThinkPad X1 Laptop",
      title: "Dual-Surface Studio & 8-Tool MCP Server",
      details: "Validated 58% LiveChat and 42% ArtifactCanvas split, testing rmcp 3.8.0 stdio server with all 8 tools (including record_decision) in Cursor and Claude Desktop.",
      files: [
        { name: "crates/minime-mcp/src/tools.rs", type: "rust", diff: "+76 / -12" },
        { name: "src/components/ArtifactCanvas.tsx", type: "tsx", diff: "+94 / -5" },
      ],
      branch: "main",
      stats: "1h 45m Polishing • 60 FPS Smooth",
    },
  ];

  const currentBlock =
    blocks.find((b) => Math.abs(b.hour - selectedHour) <= 1.5) || blocks[2];

  const handleRehydrate = () => {
    setRehydrated(true);
    setTimeout(() => setRehydrated(false), 2500);
  };

  return (
    <section id="flow-ribbon" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-4">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>24-Hour Continuous Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Multi-Device Flow Ribbon.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Scrub Time. Rehydrate Context Instantly.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Never wonder what you worked on yesterday or on your secondary laptop. MiniMe strings your deep
            focus blocks, document reads, and code diffs into a scrubbable 24-hour visual ribbon.
          </p>
        </div>

        {/* The Ribbon Card Container */}
        <div className="relative rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 gap-4">
            <div className="flex items-center space-x-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <span>Today&apos;s Workstream Flow</span>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-normal">
                    (8h 15m Total Active Dwell)
                  </span>
                </h3>
                <div className="text-xs text-slate-600 dark:text-zinc-400 flex items-center space-x-2 mt-0.5">
                  <span>Synced across 2 hardware-verified Win32 endpoints</span>
                </div>
              </div>
            </div>

            {/* Device Badges */}
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/30 font-medium">
                <Monitor className="w-3.5 h-3.5 mr-1 text-violet-600 dark:text-violet-400" />
                Office Desktop (Win32)
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-medium">
                <Laptop className="w-3.5 h-3.5 mr-1 text-cyan-600 dark:text-cyan-400" />
                ThinkPad X1 (Win32)
              </span>
            </div>
          </div>

          {/* Interactive 24-Hour Ribbon Bar */}
          <div className="py-8">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400 mb-2">
              <span>08:00 AM</span>
              <span>10:00 AM</span>
              <span>12:00 PM</span>
              <span>02:00 PM</span>
              <span>04:00 PM</span>
              <span>06:00 PM</span>
              <span>08:00 PM</span>
            </div>

            {/* Visual Colored Segments */}
            <div className="relative h-12 w-full rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-1 flex gap-1.5 overflow-hidden">
              {/* Segment 1: Coding (09:00 - 11:15) */}
              <button
                onClick={() => setSelectedHour(10)}
                className={`h-full rounded-lg transition-all relative group ${
                  currentBlock.hour === 10
                    ? "ring-2 ring-violet-500 bg-violet-600/30 dark:bg-violet-600/40"
                    : "bg-violet-500/20 hover:bg-violet-500/30"
                }`}
                style={{ width: "25%" }}
                title="09:00 - 11:15 AM: Core Rust Daemon Architecture"
              >
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-violet-900 dark:text-violet-200 font-bold opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity">
                  Coding (2h 15m)
                </div>
              </button>

              {/* Segment 2: Break / Idle (15 min) */}
              <div className="h-full rounded bg-slate-300 dark:bg-white/5 opacity-40" style={{ width: "3%" }} />

              {/* Segment 3: Research (11:30 - 01:00) */}
              <button
                onClick={() => setSelectedHour(12)}
                className={`h-full rounded-lg transition-all relative group ${
                  currentBlock.hour === 12
                    ? "ring-2 ring-cyan-500 bg-cyan-600/30 dark:bg-cyan-600/40"
                    : "bg-cyan-500/20 hover:bg-cyan-500/30"
                }`}
                style={{ width: "20%" }}
                title="11:30 - 01:00 PM: Vendor Contract Risk Assessment"
              >
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-cyan-900 dark:text-cyan-200 font-bold opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity">
                  Research (1h 30m)
                </div>
              </button>

              {/* Segment 4: Lunch (45 min) */}
              <div className="h-full rounded bg-slate-300 dark:bg-white/5 opacity-40" style={{ width: "6%" }} />

              {/* Segment 5: Coding on Laptop (01:45 - 04:30) */}
              <button
                onClick={() => setSelectedHour(14)}
                className={`h-full rounded-lg transition-all relative group ${
                  currentBlock.hour === 14
                    ? "ring-2 ring-emerald-500 bg-emerald-600/30 dark:bg-emerald-600/40"
                    : "bg-emerald-500/20 hover:bg-emerald-500/30"
                }`}
                style={{ width: "28%" }}
                title="01:45 - 04:30 PM: Sync Protocol Benchmark & CRDTs"
              >
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-emerald-900 dark:text-emerald-200 font-bold opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity">
                  Coding / Sync (2h 45m)
                </div>
              </button>

              {/* Segment 6: Break (15 min) */}
              <div className="h-full rounded bg-slate-300 dark:bg-white/5 opacity-40" style={{ width: "3%" }} />

              {/* Segment 7: Design (04:45 - 06:30) */}
              <button
                onClick={() => setSelectedHour(17)}
                className={`h-full rounded-lg transition-all relative group ${
                  currentBlock.hour === 17
                    ? "ring-2 ring-indigo-500 bg-indigo-600/30 dark:bg-indigo-600/40"
                    : "bg-indigo-500/20 hover:bg-indigo-500/30"
                }`}
                style={{ width: "15%" }}
                title="04:45 - 06:30 PM: Dual-Surface Studio & Universal MCP Server Testing"
              >
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-indigo-900 dark:text-indigo-200 font-bold opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity">
                  Studio (1h 45m)
                </div>
              </button>
            </div>

            {/* Slider Scrubber Control */}
            <div className="mt-4 flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                Scrub Time:
              </span>
              <input
                type="range"
                min="9"
                max="18"
                step="1"
                value={selectedHour}
                onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-600"
              />
              <span className="text-xs font-mono text-violet-700 dark:text-violet-400 font-bold min-w-[70px] text-right">
                {selectedHour < 12 ? `${selectedHour}:00 AM` : selectedHour === 12 ? "12:00 PM" : `${selectedHour - 12}:00 PM`}
              </span>
            </div>
          </div>

          {/* Active Inspected Focus Block Detail Card */}
          <div className="rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-white/5">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                    {currentBlock.category}
                  </span>
                  <span className="text-xs font-mono text-slate-600 dark:text-zinc-400 font-semibold">
                    {currentBlock.timeRange}
                  </span>
                  <span className="text-slate-400 dark:text-zinc-600">•</span>
                  <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 flex items-center font-medium">
                    {currentBlock.device.includes("Desktop") ? (
                      <Monitor className="w-3.5 h-3.5 mr-1 text-violet-600 dark:text-violet-400" />
                    ) : (
                      <Laptop className="w-3.5 h-3.5 mr-1 text-cyan-600 dark:text-cyan-400" />
                    )}
                    {currentBlock.device}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1.5">
                  {currentBlock.title}
                </h4>
              </div>

              {/* 1-Click Rehydrate Context Button */}
              <button
                onClick={handleRehydrate}
                className="inline-flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/25 transition-all group shrink-0"
              >
                {rehydrated ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-300" />
                    <span>Context Rehydrated in IDE!</span>
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-4 h-4 mr-1.5 group-hover:-rotate-90 transition-transform" />
                    <span>1-Click Rehydrate Context</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
              {currentBlock.details}
            </p>

            {/* Extracted Files and Code Diff Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-slate-500 dark:text-zinc-400 block mb-2 font-bold">
                Touched Documents &amp; Semantic Edit Diffs:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentBlock.files.map((file, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center space-x-2 truncate mr-2">
                      {file.type === "rust" || file.type === "tsx" ? (
                        <FileCode className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
                      ) : file.type === "pdf" ? (
                        <FileText className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                      ) : (
                        <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      <span className="text-xs font-mono text-slate-800 dark:text-zinc-200 font-medium truncate">
                        {file.name}
                      </span>
                    </div>

                    {file.diff && (
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold shrink-0">
                        {file.diff}
                      </span>
                    )}
                    {file.page && (
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold shrink-0">
                        {file.page}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Git Branch & Session Stats */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-zinc-400 gap-2 font-mono">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>Branch: <span className="text-slate-900 dark:text-zinc-200 font-bold">{currentBlock.branch}</span></span>
              </div>
              <div className="text-slate-500 dark:text-zinc-400 font-semibold">
                {currentBlock.stats}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
