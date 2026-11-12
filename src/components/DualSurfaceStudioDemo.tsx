"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Code2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  SplitSquareVertical,
  Layers,
  BookmarkCheck,
} from "lucide-react";

type SidecarMode = "document" | "diffs" | "timeline";

interface QueryPreset {
  id: string;
  label: string;
  question: string;
  answerLead: string;
  quote: string;
  source: string;
  locationLabel: string;
  confidenceLabel: string;
  mode: SidecarMode;
}

const presets: QueryPreset[] = [
  {
    id: "legal",
    label: "Contract Clause Lookup",
    question: "What is our liability cap and breach notice window in Vendor_Agreement.pdf?",
    answerLead:
      "Under Section 14.2 of the Vendor Master Agreement, total indemnification liability is capped at twelve (12) months of fees paid, and written breach notice requires thirty (30) business days.",
    quote:
      "Neither party's aggregate indemnification liability under this Section shall exceed the total amount paid by Client during the twelve (12) month period immediately preceding the event giving rise to liability. Written breach notice must be delivered within thirty (30) business days.",
    source: "Vendor_Master_Services_Agreement_2026.pdf",
    locationLabel: "Page 14 • Section 14.2",
    confidenceLabel: "Exact Quote Match Verified",
    mode: "document",
  },
  {
    id: "code",
    label: "Live Code Diff Recall",
    question: "What changed in our PageRank graph scoring function this afternoon?",
    answerLead:
      "The pure-Rust graph engine was updated to compute personalized scores using pre-allocated ping-pong buffers, keeping traversal under 1 millisecond on 25,000 connected nodes.",
    quote:
      "pub fn compute_ppr_raw(&self, seed_ids: &[String], alpha: f32, max_iterations: usize) -> Vec<f32> { let mut p = vec![0.0f32; n]; let mut next_p = vec![0.0f32; n]; ... }",
    source: "ppr.rs",
    locationLabel: "Working-Tree Diff • +14 / -4 lines",
    confidenceLabel: "Verified Source Line Match",
    mode: "diffs",
  },
  {
    id: "research",
    label: "Research & Timeline Trace",
    question: "How does MiniMe prevent AI answers from inventing fake citations?",
    answerLead:
      "Every generated sentence is scored against the original source passage before appearing on screen. Unverified claims have their citation badges automatically removed.",
    quote:
      "Sentences that fail strict attribution checks against extracted document coordinates have ungrounded citation tags stripped automatically during drafting so every quote remains verifiable.",
    source: "Technical_Specification_Audit.pdf",
    locationLabel: "Section 4.3 • Extracted Note",
    confidenceLabel: "Grounded Citation Verified",
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
    <section id="studio-canvas" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-300 mb-4 font-semibold">
            <SplitSquareVertical className="w-3.5 h-3.5 mr-1" />
            <span>Interactive Workspace Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ask Anything.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              See the Proof Right Next to the Answer.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            Never guess where an AI pulled an answer from. Chat on the left while MiniMe automatically
            opens the exact PDF page, code diff, or timeline session on the right.
          </p>

          {/* Scenario Switcher */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {presets.map((preset) => {
              const isSelected = selectedPreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                      : "bg-white/85 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Split Window */}
        <div className="rounded-2xl border border-slate-300 dark:border-white/15 bg-white/90 dark:bg-zinc-950/90 shadow-2xl shadow-slate-300/50 dark:shadow-black/70 backdrop-blur-2xl overflow-hidden">
          <div className="px-4 py-3 bg-slate-100 dark:bg-zinc-900/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 ml-2">
                MiniMe Desktop Studio
              </span>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-xs font-mono font-semibold">
              Offline Synthesis Ready (&lt; 15ms)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* LEFT PANEL: CHAT */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/60">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                      Private Assistant
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                    100% On-Device Retrieval
                  </span>
                </div>

                {/* User Bubble */}
                <div className="flex items-start justify-end">
                  <div className="max-w-[85%] rounded-2xl p-4 bg-violet-600 text-white shadow-md text-sm leading-relaxed font-sans font-medium">
                    {selectedPreset.question}
                  </div>
                </div>

                {/* Assistant Bubble */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      M
                    </div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-zinc-200">
                      MiniMe
                    </span>
                  </div>

                  <div className="rounded-2xl p-5 bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 shadow-sm text-sm text-slate-800 dark:text-zinc-200 leading-relaxed space-y-4">
                    <p>{selectedPreset.answerLead}</p>

                    {/* Highlighted Verifiable Quote Card */}
                    <div className="amber-quote-card rounded-xl p-4 border text-xs sm:text-sm leading-relaxed shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1.5 font-semibold text-xs uppercase tracking-wide">
                          <BookmarkCheck className="w-4 h-4 text-amber-700 dark:text-amber-300" />
                          <span>Verbatim Source Quote</span>
                        </div>
                        <button
                          onClick={handleCopy}
                          className="text-[11px] font-mono flex items-center space-x-1 hover:opacity-80 transition-opacity"
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
                        <span>{selectedPreset.locationLabel}</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2 text-xs">
                      <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-700 dark:text-emerald-400" />
                        <span>{selectedPreset.confidenceLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-zinc-300 font-mono flex items-center justify-between">
                <span>Tip: Try clicking &ldquo;Document&rdquo;, &ldquo;Diffs&rdquo;, or &ldquo;Timeline&rdquo; on the right panel &rarr;</span>
              </div>
            </div>

            {/* RIGHT PANEL: SIDECAR PROOF */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-900/60">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                      Source Sidecar
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 p-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {(["document", "diffs", "timeline"] as const).map((tabMode) => (
                      <button
                        key={tabMode}
                        onClick={() => setSidecarMode(tabMode)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono capitalize transition-all ${
                          sidecarMode === tabMode
                            ? "bg-violet-600 text-white font-bold shadow-sm"
                            : "text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white"
                        }`}
                      >
                        {tabMode}
                      </button>
                    ))}
                  </div>
                </div>

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
                          <FileText className="w-4 h-4 text-violet-700 dark:text-violet-400" />
                          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">
                            Vendor_Master_Services_Agreement_2026.pdf
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                          Page 14
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs leading-relaxed space-y-3 text-slate-700 dark:text-zinc-300 font-serif">
                        <p className="text-slate-600 dark:text-zinc-400">
                          ...14.1 Service Level Agreement. Provider warrants 99.9% uptime during standard billing cycles.
                        </p>
                        <div className="p-2.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/60 text-amber-950 dark:text-amber-200 font-medium">
                          &ldquo;Neither party&apos;s aggregate indemnification liability under this Section shall exceed the total amount paid by Client during the twelve (12) month period immediately preceding the event giving rise to liability. Written breach notice must be delivered within thirty (30) business days.&rdquo;
                        </div>
                        <p className="text-slate-600 dark:text-zinc-400">
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
                          <Code2 className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            ppr.rs • Graph Ranking Engine
                          </span>
                        </div>
                        <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-bold">
                          +14 / -4 lines
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 dark:bg-black/60 dark:text-zinc-300 border border-slate-800 dark:border-white/10 space-y-1 overflow-x-auto text-[11px]">
                        <div className="text-slate-300 font-bold pb-1">@@ -157,10 +157,18 @@ compute_ppr_raw</div>
                        <div className="text-slate-300">  pub fn compute_ppr_raw(&amp;self, seed_ids: &amp;[String], alpha: f32) -&gt; Vec&lt;f32&gt; &#123;</div>
                        <div className="text-emerald-300 bg-emerald-950/40 px-1">+     let mut p = vec![0.0f32; n];</div>
                        <div className="text-emerald-300 bg-emerald-950/40 px-1">+     let mut next_p = vec![0.0f32; n];</div>
                        <div className="text-emerald-300 bg-emerald-950/40 px-1">+     for &amp;seed in &amp;seed_indices &#123; p[seed] = restart_prob_per_seed; &#125;</div>
                        <div className="text-slate-300">      next_p</div>
                        <div className="text-slate-300">  &#125;</div>
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
                          <Clock className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            Recent Activity Context
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                          Today
                        </span>
                      </div>

                      <div className="relative pl-6 space-y-4 border-l-2 border-slate-200 dark:border-white/10 ml-2">
                        <div className="relative">
                          <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-white dark:border-zinc-950" />
                          <div className="font-semibold text-slate-900 dark:text-white">
                            Contract Clause Reviewed
                          </div>
                          <div className="text-[11px] text-slate-700 dark:text-zinc-300 font-mono">
                            2:22 PM • Adobe Acrobat • 18m focus
                          </div>
                          <div className="text-xs text-slate-700 dark:text-zinc-300 mt-1">
                            Indexed Page 14 liability terms locally with exact quote match.
                          </div>
                        </div>

                        <div className="relative">
                          <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-cyan-500 border-2 border-white dark:border-zinc-950" />
                          <div className="font-semibold text-slate-900 dark:text-white">
                            Code Edit Captured
                          </div>
                          <div className="text-[11px] text-slate-700 dark:text-zinc-300 font-mono">
                            3:40 PM • VS Code • +14 / -4 lines
                          </div>
                          <div className="text-xs text-slate-700 dark:text-zinc-300 mt-1">
                            Tracked working-tree changes in ppr.rs alongside decision notes.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-700 dark:text-zinc-300 font-mono">
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-700 dark:text-emerald-400" />
                  Verified Source Coordinates
                </span>
                <span>0 Screenshots</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
