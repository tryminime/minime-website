"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Code2,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  SplitSquareVertical,
  Layers,
  ArrowUpRight,
  BookmarkCheck,
  FileCode,
  Hash,
} from "lucide-react";

type SidecarMode = "document" | "diffs" | "timeline";

interface QueryPreset {
  id: string;
  label: string;
  question: string;
  answerLead: string;
  quote: string;
  source: string;
  byteOffset: string;
  rougeRecall: number;
  attrScore: number;
  mode: SidecarMode;
}

const presets: QueryPreset[] = [
  {
    id: "legal",
    label: "Legal Contract Liability",
    question: "What is our indemnification cap and breach notice window under Vendor_Agreement.pdf?",
    answerLead:
      "Under Section 14.2 and Section 18.1 of the Vendor Master Agreement, the total indemnification liability is strictly capped at twelve (12) months of aggregate service fees paid prior to the claim date.",
    quote:
      "Neither party's aggregate indemnification liability under this Section shall exceed the total amount paid by Client during the twelve (12) month period immediately preceding the event giving rise to liability. Written breach notice must be delivered within thirty (30) business days.",
    source: "Vendor_Master_Services_Agreement_2026.pdf (Page 14, ¶3)",
    byteOffset: "Bytes 24,192 – 24,460",
    rougeRecall: 0.88,
    attrScore: 0.92,
    mode: "document",
  },
  {
    id: "code",
    label: "AST Git Refactor",
    question: "How did we implement pure-Rust CSR Personalized PageRank forward power iterations?",
    answerLead:
      "The forward power iterations are implemented in pure-Rust over Compressed Sparse Row (CSR) storage, achieving 837.4µs execution over 25,000 nodes and 75,000 edges without memory reallocations.",
    quote:
      "pub fn power_iterate(&self, seeds: &[u32], alpha: f32, max_iter: usize) -> (Vec<f32>, usize) { let mut p = vec![0.0f32; self.num_nodes]; for &s in seeds { p[s as usize] = 1.0 / seeds.len() as f32; } ... }",
    source: "crates/minime-core/src/graph/csr.rs#L84-L126",
    byteOffset: "AST Node #42 • fn power_iterate",
    rougeRecall: 0.95,
    attrScore: 0.96,
    mode: "diffs",
  },
  {
    id: "research",
    label: "Academic Paper Grounding",
    question: "What is the sentence attribution threshold used to eliminate hallucinated citations?",
    answerLead:
      "MiniMe incorporates LongCite sentence attribution scoring (γ=0.65 ROUGE-1 recall + cosine similarity) with a hard threshold τ_attr=0.72. Sentences falling below this threshold have citation tags stripped.",
    quote:
      "Sentences with attribution score below threshold τ_attr = 0.72 are flagged as ungrounded and their bracketed citation tokens are stripped during Stage 1 drafting to eliminate synthetic hallucinations.",
    source: "Technical_Specification_RAG_Audit.pdf (Section 4.3)",
    byteOffset: "Bytes 18,402 – 18,894",
    rougeRecall: 0.84,
    attrScore: 0.89,
    mode: "timeline",
  },
];

export function DualSurfaceStudioDemo() {
  const [selectedPreset, setSelectedPreset] = useState<QueryPreset>(presets[0]);
  const [sidecarMode, setSidecarMode] = useState<SidecarMode>(presets[0].mode);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const handleSelectPreset = (p: QueryPreset) => {
    setSelectedPreset(p);
    setSidecarMode(p.mode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPreset.quote);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <section id="studio-canvas" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-700 dark:text-violet-400 mb-4">
            <SplitSquareVertical className="w-3.5 h-3.5 mr-1" />
            <span>Dual-Surface Desktop Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            58% Conversational Control Room.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              42% Cybernetic Artifact Canvas.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Never lose your place. When you chat with MiniMe in the desktop client, answers appear on
            the left while verified source documents, live Git diffs, and exact highlighted quotes
            render simultaneously on the right sidecar canvas.
          </p>

          {/* Preset Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {presets.map((preset) => {
              const isSelected = selectedPreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]"
                      : "bg-white/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual-Surface Mock Window (58% / 42% Split) */}
        <div className="rounded-2xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-zinc-950/90 shadow-2xl shadow-slate-300/60 dark:shadow-black/70 backdrop-blur-2xl overflow-hidden">
          {/* Native Win32 Window Bar */}
          <div className="px-4 py-3 bg-slate-100 dark:bg-zinc-900/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 ml-2">
                MiniMe Desktop — Dual-Surface Studio [58% LiveChat : 42% ArtifactCanvas]
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-zinc-400">
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                Speculative Drafting &lt; 5ms
              </span>
            </div>
          </div>

          {/* Split Screen Grid (58% Left / 42% Right on Large Screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* LEFT SURFACE: 58% Conversational Control Room (LiveChat.tsx) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/60">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                      LiveChat.tsx • Conversational Control Room (58%)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    Grounded RAG • LongCite Active
                  </span>
                </div>

                {/* User Message Bubble */}
                <div className="flex items-start space-x-3 justify-end">
                  <div className="max-w-[85%] rounded-2xl p-4 bg-violet-600 text-white shadow-md text-sm leading-relaxed font-sans font-medium">
                    {selectedPreset.question}
                  </div>
                </div>

                {/* MiniMe Assistant Response */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      M
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
                      MiniMe Digital Twin
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                      TTFT: 12.4ms (Speculative Stage 3)
                    </span>
                  </div>

                  <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 shadow-sm text-sm text-slate-800 dark:text-zinc-200 leading-relaxed space-y-4">
                    <p className="font-sans font-normal text-slate-800 dark:text-zinc-200">
                      {selectedPreset.answerLead}
                    </p>

                    {/* WCAG AAA AMBER QUOTE CARD */}
                    <div className="amber-quote-card rounded-xl p-4 border text-xs sm:text-sm leading-relaxed shadow-sm relative group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1.5 font-semibold text-xs uppercase tracking-wide">
                          <BookmarkCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span>Exact Document Quote (|Q| ≥ 24 chars)</span>
                        </div>
                        <button
                          onClick={handleCopy}
                          className="text-[11px] font-mono flex items-center space-x-1 opacity-80 hover:opacity-100 transition-opacity"
                        >
                          {copiedQuote ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedQuote ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                      <p className="italic font-serif leading-relaxed">
                        &ldquo;{selectedPreset.quote}&rdquo;
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-amber-300/50 dark:border-amber-700/50 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                        <span className="font-semibold">{selectedPreset.source}</span>
                        <span>{selectedPreset.byteOffset}</span>
                      </div>
                    </div>

                    {/* LongCite Attribution Metric Badge */}
                    <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                      <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
                        <span>Sentence Attribution: γ={selectedPreset.attrScore} (τ &ge; 0.72)</span>
                      </div>
                      <div className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/10 font-mono text-[11px]">
                        <span>ROUGE-1 Recall: {selectedPreset.rougeRecall}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    readOnly
                    value="Ask follow-up or refine query with @doc or @file..."
                    className="w-full rounded-xl bg-white dark:bg-zinc-900 border border-slate-300 dark:border-white/10 px-4 py-3 text-xs text-slate-500 dark:text-zinc-400 shadow-sm focus:outline-none"
                  />
                  <button className="absolute right-2 px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-semibold shadow hover:bg-violet-500 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SURFACE: 42% Cybernetic Glass Artifact Sidecar Canvas (ArtifactCanvas.tsx) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900/60">
              <div className="space-y-4">
                {/* Canvas Header & Mode Switcher */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                      ArtifactCanvas.tsx (42%)
                    </span>
                  </div>

                  {/* Mode Switcher Tabs */}
                  <div className="flex items-center space-x-1 p-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <button
                      onClick={() => setSidecarMode("document")}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-all ${
                        sidecarMode === "document"
                          ? "bg-violet-600 text-white font-bold shadow-sm"
                          : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Document
                    </button>
                    <button
                      onClick={() => setSidecarMode("diffs")}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-all ${
                        sidecarMode === "diffs"
                          ? "bg-violet-600 text-white font-bold shadow-sm"
                          : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Diffs
                    </button>
                    <button
                      onClick={() => setSidecarMode("timeline")}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-all ${
                        sidecarMode === "timeline"
                          ? "bg-violet-600 text-white font-bold shadow-sm"
                          : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Timeline
                    </button>
                  </div>
                </div>

                {/* Sidecar Content Display */}
                <AnimatePresence mode="wait">
                  {sidecarMode === "document" && (
                    <motion.div
                      key="canvas-doc"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 font-sans"
                    >
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">
                            {selectedPreset.source}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                          PDF • Page 14
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs leading-relaxed space-y-3 text-slate-700 dark:text-zinc-300 font-serif">
                        <p className="text-slate-500 dark:text-zinc-500">
                          ...14.1 Service Level Agreement. Provider warrants 99.9% uptime during standard billing cycles.
                        </p>
                        <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 font-medium">
                          &ldquo;Neither party&apos;s aggregate indemnification liability under this Section shall exceed the total amount paid by Client during the twelve (12) month period immediately preceding the event giving rise to liability. Written breach notice must be delivered within thirty (30) business days.&rdquo;
                        </div>
                        <p className="text-slate-500 dark:text-zinc-500">
                          14.3 Non-Exclusive Remedy. The rights outlined herein shall be supplemental to statutory remedies available under governing law...
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {sidecarMode === "diffs" && (
                    <motion.div
                      key="canvas-diffs"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 font-mono text-xs"
                    >
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            crates/minime-core/src/graph/csr.rs
                          </span>
                        </div>
                        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                          +42 / -6 lines
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 dark:bg-black/60 dark:text-zinc-300 border border-slate-800 dark:border-white/10 space-y-1 overflow-x-auto text-[11px]">
                        <div className="text-slate-400 font-bold pb-1">@@ -84,12 +84,24 @@ AST fn power_iterate</div>
                        <div className="text-slate-400">  pub fn power_iterate(&amp;self, seeds: &amp;[u32], alpha: f32) -&gt; Vec&lt;f32&gt; &#123;</div>
                        <div className="text-emerald-400 bg-emerald-950/40 px-1">+     let mut p = vec![0.0f32; self.num_nodes];</div>
                        <div className="text-emerald-400 bg-emerald-950/40 px-1">+     for &amp;s in seeds &#123; p[s as usize] = 1.0 / seeds.len() as f32; &#125;</div>
                        <div className="text-emerald-400 bg-emerald-950/40 px-1">+     // Forward power iteration with Cormack-Clarke dampening</div>
                        <div className="text-emerald-400 bg-emerald-950/40 px-1">+     for _ in 0..20 &#123; self.spmv_forward(&amp;mut p, alpha); &#125;</div>
                        <div className="text-slate-400">      p</div>
                        <div className="text-slate-400">  &#125;</div>
                      </div>
                    </motion.div>
                  )}

                  {sidecarMode === "timeline" && (
                    <motion.div
                      key="canvas-timeline"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 font-sans text-xs"
                    >
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            Activity Provenance Trace
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                          Today • 3 Interactions
                        </span>
                      </div>

                      <div className="relative pl-6 space-y-4 border-l-2 border-slate-200 dark:border-white/10 ml-2">
                        <div className="relative">
                          <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-white dark:border-zinc-950" />
                          <div className="font-semibold text-slate-900 dark:text-white">
                            Document Read &amp; Grounding
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                            14:22 • Adobe Acrobat • Dwell: 18m
                          </div>
                          <div className="text-xs text-slate-600 dark:text-zinc-300 mt-1">
                            Extracted byte coordinates [24192..24460] with γ=0.92 attribution.
                          </div>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-zinc-950" />
                          <div className="font-semibold text-slate-900 dark:text-white">
                            AST Code Chunk Generated
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                            15:40 • VS Code • +42 lines
                          </div>
                          <div className="text-xs text-slate-600 dark:text-zinc-300 mt-1">
                            CSR Personalized PageRank forward iteration committed to branch.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidecar Footer Status */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-500 font-mono">
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" />
                  Deterministic Source Proof
                </span>
                <span>Zero Hallucinations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
