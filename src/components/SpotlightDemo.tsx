"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  FileText,
  GitCommit,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Code2,
  FolderLock,
  Layers,
  FileCode,
  FileSpreadsheet,
  Terminal,
  ShieldCheck,
  Activity,
  Laptop,
} from "lucide-react";

type DemoMode = "search" | "chat" | "standup" | "active";

export function SpotlightDemo() {
  const [activeMode, setActiveMode] = useState<DemoMode>("search");
  const [activeVault, setActiveVault] = useState<"personal" | "org">("personal");
  const [copied, setCopied] = useState(false);

  const handleCopyStandup = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: { id: DemoMode; label: string; icon: React.ElementType; color: string }[] = [
    { id: "search", label: "1. Deep Search", icon: Search, color: "text-violet-600 dark:text-violet-400" },
    { id: "chat", label: "2. Quick-Ask Chat", icon: MessageSquare, color: "text-cyan-600 dark:text-cyan-400" },
    { id: "standup", label: "3. Standup Gen", icon: Sparkles, color: "text-emerald-600 dark:text-emerald-400" },
    { id: "active", label: "4. Active Context", icon: Activity, color: "text-amber-600 dark:text-amber-400" },
  ];

  return (
    <section id="spotlight-demo" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 mr-1" />
            <span>0ms Latency Global Omnibar • Pure-Rust Win32 Hooks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Floating Spotlight HUD.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              One Keypress Away from Everything.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Press <kbd className="px-2 py-1 text-xs font-mono bg-slate-200 dark:bg-white/10 rounded border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold">Alt</kbd> +{" "}
            <kbd className="px-2 py-1 text-xs font-mono bg-slate-200 dark:bg-white/10 rounded border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold">Space</kbd> anywhere in Windows.
            Search extracted PDFs, live Git diffs, or query your digital twin in real-time.
          </p>

          {/* 4 Interactive Mode Switcher Tabs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 backdrop-blur-xl max-w-2xl mx-auto shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeMode === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveMode(tab.id)}
                  className={`flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mock Desktop Window Frame with Spotlight Floating Over It */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-zinc-950/80 shadow-2xl shadow-slate-300/50 dark:shadow-violet-950/30 backdrop-blur-md">
          {/* Simulated IDE / Desktop Background (faded) */}
          <div className="p-4 sm:p-6 bg-slate-100/90 dark:bg-zinc-950/90 font-mono text-xs text-slate-600 dark:text-zinc-600 border-b border-slate-200 dark:border-white/5 select-none opacity-40 blur-[0.5px]">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-slate-600 dark:text-zinc-500 text-xs ml-2">crates/minime-core/src/rag/ppr.rs — Visual Studio Code</span>
            </div>
            <p className="text-slate-600 dark:text-zinc-500">1  use crate::graph::csr::CompressedSparseRowGraph;</p>
            <p className="text-slate-600 dark:text-zinc-500">2  // CSR Personalized PageRank forward power iterations: 837.4µs on 25k nodes &amp; 75k edges</p>
            <p className="text-slate-600 dark:text-zinc-500">3  pub fn compute_ppr(graph: &amp;CSRGraph, seeds: &amp;[u32], alpha: f32) -&gt; Vec&lt;f32&gt; &#123;</p>
            <p className="text-slate-600 dark:text-zinc-500">4      let (scores, iterations) = graph.power_iterate(seeds, alpha, 20);</p>
            <p className="text-slate-600 dark:text-zinc-500">5      scores</p>
          </div>

          {/* Floating Spotlight HUD Container */}
          <div className="relative p-3 sm:p-8 -mt-16 sm:-mt-24 z-20 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border border-slate-300 dark:border-white/20 shadow-2xl shadow-slate-400/40 dark:shadow-black/80 overflow-hidden ring-1 ring-slate-200 dark:ring-violet-500/20">
              {/* Omnibar Header Bar */}
              <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 bg-slate-50 dark:bg-white/[0.02]">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/10 dark:bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    {activeMode === "search" && <Search className="w-4 h-4" />}
                    {activeMode === "chat" && <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                    {activeMode === "standup" && <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    {activeMode === "active" && <Activity className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={
                      activeMode === "search"
                        ? "Vendor_Agreement termination clause breach notice"
                        : activeMode === "chat"
                        ? "What was the penalty clause in @doc:Vendor_Agreement.pdf?"
                        : activeMode === "standup"
                        ? "/standup today --include-git-diffs"
                        : "@active window context --dwell-check"
                    }
                    className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none"
                  />
                </div>

                {/* Vault Toggle & Esc Pill */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveVault(activeVault === "personal" ? "org" : "personal")}
                    className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all ${
                      activeVault === "personal"
                        ? "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/30"
                        : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30"
                    }`}
                  >
                    <FolderLock className="w-3 h-3 mr-1" />
                    <span>{activeVault === "personal" ? "Personal Vault" : "Org Workspace"}</span>
                  </button>

                  <span className="px-2 py-0.5 text-[11px] font-mono text-slate-500 dark:text-zinc-400 bg-slate-200 dark:bg-white/5 rounded border border-slate-300 dark:border-white/10">
                    ESC
                  </span>
                </div>
              </div>

              {/* Scope Filters Row */}
              <div className="px-4 py-2 border-b border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-black/40 flex items-center space-x-2 overflow-x-auto text-xs">
                <span className="text-slate-500 dark:text-zinc-500 text-[11px] uppercase tracking-wider font-mono">Scope:</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-800 dark:text-violet-300 border border-violet-500/30 font-mono text-[11px] font-medium">
                  @doc
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-300 dark:border-white/10 font-mono text-[11px]">
                  @file
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-300 dark:border-white/10 font-mono text-[11px]">
                  @project:MiniMe
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 font-mono text-[11px] font-medium">
                  @today
                </span>
                <span className="ml-auto text-[11px] text-slate-500 dark:text-zinc-500 hidden sm:inline font-mono">
                  Tri-Modal TD-RRF • Cormack-Clarke k=60.0
                </span>
              </div>

              {/* Dynamic Content based on Active Mode */}
              <div className="p-4 sm:p-5 min-h-[320px] bg-white dark:bg-zinc-950/70">
                <AnimatePresence mode="wait">
                  {/* TAB 1: INSTANT DEEP SEARCH */}
                  {activeMode === "search" && (
                    <motion.div
                      key="search-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-semibold text-slate-600 dark:text-zinc-400 flex items-center justify-between pb-1">
                        <span>3 verified matches across 45,210 indexed passages</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-mono">0.38ms FTS5 + Int8 Cosine</span>
                      </div>

                      {/* Result 1: PDF Extracted Heading */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-violet-500/30 hover:border-violet-500/60 transition-all cursor-pointer group shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs font-mono font-bold">
                              PDF
                            </span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                              Vendor_Master_Services_Agreement_2026.pdf
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-600 dark:text-zinc-400 bg-slate-200 dark:bg-white/5 px-2 py-0.5 rounded">
                            Section 14.2 • Page 7
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                          &ldquo;...either party may terminate this Agreement upon{" "}
                          <mark className="bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 px-1 py-0.5 rounded border border-amber-300 dark:border-amber-700 font-medium">
                            thirty (30) business days written breach notice
                          </mark>{" "}
                          if material cure has not been established within sixty (60) calendar days...&rdquo;
                        </p>
                        <div className="mt-2 flex items-center space-x-3 text-[11px] text-slate-500 dark:text-zinc-500">
                          <span>Opened in Adobe Acrobat • 14 mins ago</span>
                          <span>•</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-medium">Zero Pixels Captured</span>
                        </div>
                      </div>

                      {/* Result 2: Git Diff in Code File */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold">
                              RUST
                            </span>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                              crates/minime-core/src/auth/token_refresh.rs
                            </span>
                          </div>
                          <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            +48 / -4 lines
                          </span>
                        </div>
                        <p className="text-xs font-mono text-slate-700 dark:text-zinc-400 leading-relaxed bg-slate-100 dark:bg-black/40 p-2 rounded border border-slate-200 dark:border-white/5">
                          + pub async fn handle_notice_expiry(claims: &amp;JwtClaims) -&gt; Result&lt;()&gt; &#123; <br />
                          + &nbsp;&nbsp;log_termination_event(&quot;breach_notice_acknowledged&quot;).await?;
                        </p>
                      </div>

                      {/* Result 3: Word Document Spec */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer group shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 text-xs font-mono font-bold">
                              DOCX
                            </span>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                              Enterprise_Security_Remediation_Plan.docx
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-500 dark:text-zinc-500">Heading 3 • 2 hours ago</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-zinc-400">
                          Identified breach disclosure SLA requirement aligned with Section 14.2 guidelines.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: QUICK-ASK CHAT */}
                  {activeMode === "chat" && (
                    <motion.div
                      key="chat-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-200 dark:border-white/5">
                        <span className="text-slate-600 dark:text-zinc-400">Response synthesized from 2 verified passages</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                          100% Offline RAG Synthesizer (&lt; 15ms TTFT)
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-cyan-500/30 text-slate-800 dark:text-zinc-200 text-sm leading-relaxed space-y-3">
                        <p>
                          Under Section 14.2 of the agreement, either party may terminate for cause upon{" "}
                          <strong className="text-slate-950 dark:text-white">30 business days&apos; written notice</strong> if a material
                          breach is not cured.
                        </p>
                        <p className="text-xs text-slate-700 dark:text-zinc-300">
                          In the event of an uncured breach involving cloud service uptime falling
                          below 99.9%, liquidated damages of 15% monthly license credit apply automatically.
                        </p>

                        {/* Citation Chips */}
                        <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2 text-xs">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-300 font-mono">
                            <FileText className="w-3.5 h-3.5 mr-1.5 text-cyan-600 dark:text-cyan-400" />
                            [Vendor_Agreement.pdf • Page 7]
                          </span>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/30 text-violet-900 dark:text-violet-300 font-mono">
                            <Code2 className="w-3.5 h-3.5 mr-1.5 text-violet-600 dark:text-violet-400" />
                            [token_refresh.rs:142]
                          </span>
                          <span className="ml-auto text-xs text-slate-500 dark:text-zinc-400 flex items-center space-x-1 font-mono">
                            <span>Score: 0.942</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: STANDUP GENERATOR */}
                  {activeMode === "standup" && (
                    <motion.div
                      key="standup-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-200 dark:border-white/5">
                        <span className="text-slate-600 dark:text-zinc-400">
                          Aggregated from 7 Git commits, 4 modified files, and 3 reviewed PDFs
                        </span>
                        <button
                          onClick={handleCopyStandup}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all font-mono text-xs font-semibold"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                          <span>{copied ? "Copied to Clipboard!" : "Copy Standup"}</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/60 border border-emerald-500/30 font-mono text-xs space-y-3 text-slate-800 dark:text-zinc-300">
                        <div>
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold block mb-1">
                            🚀 Yesterday / What I Did:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-zinc-300 pl-1">
                            <li>
                              Completed Pure-Rust PDF &amp; Docx ingestor parser with BLAKE3 deduplication (
                              <code className="text-violet-700 dark:text-violet-300 font-bold">+284 / -38 lines</code> in `crates/minime-core`).
                            </li>
                            <li>
                              Implemented Argon2id key-wrapping and Windows DPAPI credential storage for DEK unwrap.
                            </li>
                            <li>
                              Reviewed and cited termination obligations in `Vendor_Master_Agreement.pdf` (Page 7).
                            </li>
                          </ul>
                        </div>

                        <div>
                          <span className="text-cyan-700 dark:text-cyan-400 font-bold block mb-1">
                            🎯 Today / What I&apos;m Doing:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-zinc-300 pl-1">
                            <li>
                              Benchmarked zstd columnar dictionary compression achieving 22.12x ratio (1.54 MB/year projected).
                            </li>
                            <li>
                              Enforcing HIPAA 18-PHI redaction gate prior to local SQLite WAL writes.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <span className="text-red-700 dark:text-red-400 font-bold block mb-1">
                            🛑 Blockers:
                          </span>
                          <p className="text-slate-600 dark:text-zinc-400 pl-1">
                            None. All 84/84 automated Rust workspace tests passing (100% green).
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 4: ACTIVE CONTEXT INSPECTOR */}
                  {activeMode === "active" && (
                    <motion.div
                      key="active-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-200 dark:border-white/5">
                        <span className="text-slate-600 dark:text-zinc-400">
                          Win32 Foreground Hook • Active Window Inspection
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 font-mono">
                          Dwell Time: 4m 18s (Active)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
                          <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-500">Foreground Application</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                            <Laptop className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                            <span>Visual Studio Code</span>
                          </div>
                          <div className="font-mono text-slate-600 dark:text-zinc-400 text-[11px]">
                            Process: Code.exe (PID: 14092)
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
                          <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-zinc-500">Active Workspace / Git Branch</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                            <GitCommit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                            <span>feat/csr-pagerank-pow-iter</span>
                          </div>
                          <div className="font-mono text-slate-600 dark:text-zinc-400 text-[11px]">
                            HEAD: 7b3e9a1 • 3 staged files
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-amber-500/30 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Zero-Pixel Inspection Stream</span>
                          </span>
                          <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400">
                            BLAKE3: c4109fa8...819
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-mono">
                          Extracted active AST function: `CompressedSparseRowGraph::power_iterate(alpha=0.85)` in `crates/minime-core/src/graph/csr.rs#L84-L126`. 0 screenshots taken, 0 video buffers allocated.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Omnibar Footer Bar */}
              <div className="px-4 py-2.5 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-white/10 rounded mr-1 text-slate-700 dark:text-zinc-300 font-mono">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-white/10 rounded mr-1 text-slate-700 dark:text-zinc-300 font-mono">↵</kbd> Select
                  </span>
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-white/10 rounded mr-1 text-slate-700 dark:text-zinc-300 font-mono">Tab</kbd> Scope
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-zinc-400 font-mono font-medium">
                  MiniMe v0.1.0 Beta • Pure-Rust Win32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
