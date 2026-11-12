"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  Sparkles,
  Clock,
  FileText,
  FileCode,
  FileSpreadsheet,
  GitBranch,
  Copy,
  Check,
  Code2,
  FolderLock,
  Terminal,
  Monitor,
  Laptop,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

type DemoMode = "search" | "chat" | "standup" | "timeline";

interface FocusBlock {
  timeRange: string;
  hour: number;
  category: string;
  device: string;
  title: string;
  details: string;
  files: { name: string; type: "code" | "pdf" | "sheet"; tag: string }[];
  branch: string;
}

export function SpotlightDemo() {
  const [activeMode, setActiveMode] = useState<DemoMode>("search");
  const [activeVault, setActiveVault] = useState<"personal" | "org">("personal");
  const [copied, setCopied] = useState(false);
  const [selectedHour, setSelectedHour] = useState(14);
  const [rehydrated, setRehydrated] = useState(false);

  const handleCopyStandup = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRehydrate = () => {
    setRehydrated(true);
    setTimeout(() => setRehydrated(false), 2200);
  };

  const tabs: { id: DemoMode; label: string; icon: React.ElementType }[] = [
    { id: "search", label: "1. Instant Search", icon: Search },
    { id: "chat", label: "2. Quick Answer", icon: MessageSquare },
    { id: "standup", label: "3. Standup Gen", icon: Sparkles },
    { id: "timeline", label: "4. 24h Flow Ribbon", icon: Clock },
  ];

  const blocks: FocusBlock[] = [
    {
      timeRange: "09:00 – 11:15 AM",
      hour: 10,
      category: "Engineering",
      device: "Office Desktop",
      title: "Graph Ranking & Document Extraction Pipeline",
      details: "Updated document relevance ranking and verified clean text extraction across technical PDFs.",
      files: [
        { name: "ppr.rs • Graph Ranking", type: "code", tag: "+89 / -4 lines" },
        { name: "extractor.rs • Text Indexer", type: "code", tag: "+142 / -18 lines" },
      ],
      branch: "feat/graph-ranking",
    },
    {
      timeRange: "11:30 – 01:00 PM",
      hour: 12,
      category: "Contract Review",
      device: "Office Desktop",
      title: "Vendor Agreement & Security Plan Review",
      details: "Reviewed breach notification clauses, liability caps, and security remediation milestones.",
      files: [
        { name: "Vendor_Master_Services_Agreement_2026.pdf", type: "pdf", tag: "Pages 4–14" },
        { name: "Enterprise_Security_Remediation_Plan.docx", type: "pdf", tag: "Section 2" },
      ],
      branch: "legal/vendor-audit",
    },
    {
      timeRange: "01:45 – 04:30 PM",
      hour: 14,
      category: "Sync & Perf",
      device: "ThinkPad X1 Laptop",
      title: "Encrypted Multi-Device Sync & Conflict Check",
      details: "Synced updated notes and project intelligence cleanly into personal Google Drive app folder (~1.54 MB/yr pace).",
      files: [
        { name: "crdt.rs • Multi-Device Merge", type: "code", tag: "+210 / -34 lines" },
        { name: "Sync_Compression_Results.xlsx", type: "sheet", tag: "Sheet 1" },
      ],
      branch: "feat/byoc-sync",
    },
    {
      timeRange: "04:45 – 06:30 PM",
      hour: 17,
      category: "AI Agents",
      device: "ThinkPad X1 Laptop",
      title: "Cursor & Claude Decision Memory Setup",
      details: "Connected local MCP server so Cursor can query project context and record architecture decisions.",
      files: [
        { name: "tools.rs • MCP Tools", type: "code", tag: "+76 / -12 lines" },
        { name: "ArtifactCanvas.tsx", type: "code", tag: "+94 / -5 lines" },
      ],
      branch: "main",
    },
  ];

  const currentBlock =
    blocks.find((b) => Math.abs(b.hour - selectedHour) <= 1.5) || blocks[2];

  return (
    <section id="spotlight-demo" className="py-16 md:py-24 relative">
      <div id="flow-ribbon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-4 font-semibold">
            <Terminal className="w-3.5 h-3.5 mr-1" />
            <span>Global Alt + Space HUD &amp; 24-Hour Work Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            One Shortcut Away From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Everything You Read or Edited.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            Press <kbd className="px-2 py-0.5 text-xs font-mono bg-slate-200 dark:bg-white/10 rounded border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold">Alt</kbd> +{" "}
            <kbd className="px-2 py-0.5 text-xs font-mono bg-slate-200 dark:bg-white/10 rounded border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold">Space</kbd> anywhere on Windows
            to search files, generate a daily standup, or scrub back through your day across devices.
          </p>

          {/* 4 Unified Workflow Tabs */}
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white/85 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 backdrop-blur-xl max-w-2xl mx-auto shadow-sm">
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
                      : "text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Interactive Spotlight / Timeline Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border border-slate-300 dark:border-white/15 shadow-2xl shadow-slate-300/40 dark:shadow-black/70 overflow-hidden">
          {/* Omnibar Header */}
          <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 bg-slate-50 dark:bg-white/[0.02]">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-violet-600/10 dark:bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-700 dark:text-violet-300 shrink-0">
                {activeMode === "search" && <Search className="w-4 h-4" />}
                {activeMode === "chat" && <MessageSquare className="w-4 h-4 text-cyan-700 dark:text-cyan-300" />}
                {activeMode === "standup" && <Sparkles className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />}
                {activeMode === "timeline" && <Clock className="w-4 h-4 text-indigo-700 dark:text-indigo-300" />}
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
                    ? "/standup today --include-diffs"
                    : "Multi-device work timeline • Office Desktop + ThinkPad X1"
                }
                className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 dark:text-white focus:outline-none truncate"
              />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setActiveVault(activeVault === "personal" ? "org" : "personal")}
                className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all ${
                  activeVault === "personal"
                    ? "bg-violet-500/10 text-violet-800 dark:text-violet-300 border-violet-500/30"
                    : "bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/30"
                }`}
              >
                <FolderLock className="w-3 h-3 mr-1" />
                <span>{activeVault === "personal" ? "Personal Vault" : "Org Workspace"}</span>
              </button>

              <span className="px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-zinc-300 bg-slate-200 dark:bg-white/5 rounded border border-slate-300 dark:border-white/10">
                ESC
              </span>
            </div>
          </div>

          {/* Scope Bar */}
          <div className="px-4 py-2 border-b border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-black/40 flex items-center space-x-2 overflow-x-auto text-xs">
            <span className="text-slate-700 dark:text-zinc-300 text-[11px] uppercase tracking-wider font-mono font-semibold">
              Filters:
            </span>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/10 dark:bg-violet-500/20 text-violet-800 dark:text-violet-300 border border-violet-500/30 font-mono text-[11px] font-medium">
              @doc
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10 font-mono text-[11px]">
              @file
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10 font-mono text-[11px]">
              @project
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 font-mono text-[11px] font-medium">
              @today
            </span>
            <span className="ml-auto text-[11px] text-slate-700 dark:text-zinc-300 hidden sm:inline font-mono">
              100% On-Device Search
            </span>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 min-h-[340px] bg-white dark:bg-zinc-950/70">
            <AnimatePresence mode="wait">
              {activeMode === "search" && (
                <motion.div
                  key="search-mode"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-3"
                >
                  <div className="text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center justify-between pb-1">
                    <span>3 matching passages across your local workspace</span>
                    <span className="text-emerald-800 dark:text-emerald-300 font-mono">Instant Match</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-violet-500/30 shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20 text-xs font-mono font-bold">
                          PDF
                        </span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          Vendor_Master_Services_Agreement_2026.pdf
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-200 dark:bg-white/5 px-2 py-0.5 rounded">
                        Page 7 • Sec 14.2
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                      &ldquo;...either party may terminate this Agreement upon{" "}
                      <mark className="bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 px-1 py-0.5 rounded border border-amber-300 dark:border-amber-700 font-medium">
                        thirty (30) business days written breach notice
                      </mark>{" "}
                      if material cure has not been established within sixty (60) calendar days...&rdquo;
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold">
                          CODE
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          AuthVaultManager — Vault Key Wrapping
                        </span>
                      </div>
                      <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        +28 / -4 lines
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-800 dark:text-zinc-300 leading-relaxed bg-slate-100 dark:bg-black/40 p-2 rounded border border-slate-200 dark:border-white/5">
                      + pub fn wrap_active_vault_key(&amp;self, passphrase: &amp;str) &#123; self.db.clear_unwrapped_vault_dek(&amp;vault_id)?; &#125;
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-500/20 text-xs font-mono font-bold">
                          DOCX
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          Enterprise_Security_Remediation_Plan.docx
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-700 dark:text-zinc-300">Heading 3 • 2h ago</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-zinc-300">
                      Aligned breach disclosure SLA notes with Vendor Agreement Section 14.2.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeMode === "chat" && (
                <motion.div
                  key="chat-mode"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-200 dark:border-white/5">
                    <span className="text-slate-700 dark:text-zinc-300">Answer verified from 2 local sources</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                      100% Offline Answer (&lt; 15ms)
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-cyan-500/30 text-slate-800 dark:text-zinc-200 text-sm leading-relaxed space-y-3">
                    <p>
                      Under Section 14.2, either party may terminate for cause with{" "}
                      <strong className="text-slate-950 dark:text-white">30 business days&apos; written notice</strong>{" "}
                      if a material breach remains uncured.
                    </p>
                    <p className="text-xs text-slate-700 dark:text-zinc-300">
                      If SLA uptime drops below 99.9%, a 15% monthly credit penalty applies automatically.
                    </p>

                    <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2 text-xs">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-200 font-mono">
                        <FileText className="w-3.5 h-3.5 mr-1.5" />
                        Vendor_Agreement.pdf • Page 7
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/30 text-violet-900 dark:text-violet-200 font-mono">
                        <Code2 className="w-3.5 h-3.5 mr-1.5" />
                        auth/manager.rs
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMode === "standup" && (
                <motion.div
                  key="standup-mode"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-200 dark:border-white/5">
                    <span className="text-slate-700 dark:text-zinc-300">
                      Summarized automatically from today&apos;s files, edits, and decisions
                    </span>
                    <button
                      onClick={handleCopyStandup}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all font-mono text-xs font-semibold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                      <span>{copied ? "Copied!" : "Copy Standup"}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/60 border border-emerald-500/30 font-mono text-xs space-y-3 text-slate-800 dark:text-zinc-200">
                    <div>
                      <span className="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">
                        Yesterday / Completed:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-zinc-300 pl-1">
                        <li>Completed vault key-wrapping improvements across authentication modules.</li>
                        <li>Reviewed termination liabilities in Vendor_Master_Agreement.pdf (Page 7).</li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-cyan-800 dark:text-cyan-300 font-bold block mb-1">
                        Today / Next:
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-zinc-300 pl-1">
                        <li>Finalizing OneDrive encrypted backup sync across laptop and desktop.</li>
                        <li>Recorded architecture decision for local-only clinical note filtering.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeMode === "timeline" && (
                <motion.div
                  key="timeline-mode"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-4"
                >
                  {/* Visual Timeline Segments */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-700 dark:text-zinc-300">
                    <span>09:00 AM</span>
                    <span>12:00 PM</span>
                    <span>03:00 PM</span>
                    <span>06:30 PM</span>
                  </div>

                  <div className="h-10 w-full rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-1 flex gap-1.5">
                    {blocks.map((block) => (
                      <button
                        key={block.hour}
                        onClick={() => setSelectedHour(block.hour)}
                        className={`flex-1 h-full rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-all truncate px-2 ${
                          currentBlock.hour === block.hour
                            ? "bg-violet-600 text-white shadow-sm"
                            : "bg-violet-500/15 text-violet-900 dark:text-violet-200 hover:bg-violet-500/25"
                        }`}
                      >
                        {block.category}
                      </button>
                    ))}
                  </div>

                  {/* Time Scrubber */}
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 whitespace-nowrap">
                      Scrub Day:
                    </span>
                    <input
                      type="range"
                      min="10"
                      max="17"
                      step="1"
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(parseInt(e.target.value, 10))}
                      className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-violet-600"
                    />
                    <span className="text-xs font-mono text-violet-800 dark:text-violet-300 font-bold min-w-[70px] text-right">
                      {selectedHour < 12 ? `${selectedHour}:00 AM` : selectedHour === 12 ? "12:00 PM" : `${selectedHour - 12}:00 PM`}
                    </span>
                  </div>

                  {/* Active Focus Block Details */}
                  <div className="rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono text-slate-700 dark:text-zinc-300">
                          <span className="font-bold text-violet-800 dark:text-violet-300">{currentBlock.timeRange}</span>
                          <span>•</span>
                          <span className="inline-flex items-center">
                            {currentBlock.device.includes("Desktop") ? (
                              <Monitor className="w-3.5 h-3.5 mr-1 text-violet-700 dark:text-violet-300" />
                            ) : (
                              <Laptop className="w-3.5 h-3.5 mr-1 text-cyan-700 dark:text-cyan-300" />
                            )}
                            {currentBlock.device}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                          {currentBlock.title}
                        </h4>
                      </div>

                      <button
                        onClick={handleRehydrate}
                        className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-sm transition-all shrink-0"
                      >
                        {rehydrated ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-300" />
                            <span>Workspace Restored!</span>
                          </>
                        ) : (
                          <>
                            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                            <span>Restore Context</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      {currentBlock.details}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentBlock.files.map((file, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center space-x-2 truncate mr-2">
                            {file.type === "code" ? (
                              <FileCode className="w-4 h-4 text-violet-700 dark:text-violet-300 shrink-0" />
                            ) : file.type === "pdf" ? (
                              <FileText className="w-4 h-4 text-red-700 dark:text-red-300 shrink-0" />
                            ) : (
                              <FileSpreadsheet className="w-4 h-4 text-emerald-700 dark:text-emerald-300 shrink-0" />
                            )}
                            <span className="font-mono text-slate-800 dark:text-zinc-200 truncate">{file.name}</span>
                          </div>
                          <span className="font-mono text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold shrink-0">
                            {file.tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-zinc-300">
                      <span className="inline-flex items-center">
                        <GitBranch className="w-3.5 h-3.5 mr-1 text-violet-700 dark:text-violet-300" />
                        Branch: {currentBlock.branch}
                      </span>
                      <span>Zero Screenshots</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
