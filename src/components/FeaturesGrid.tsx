"use client";

import React, { useState } from "react";
import {
  EyeOff,
  BookmarkCheck,
  Search,
  FolderKanban,
  CloudOff,
  ShieldCheck,
  Cpu,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export function FeaturesGrid() {
  const [showTechSpecs, setShowTechSpecs] = useState(false);

  const cards = [
    {
      icon: EyeOff,
      badge: "Zero-Pixel Capture",
      badgeClass: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/25",
      iconClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      title: "Zero Screenshots. Zero Keyloggers.",
      description:
        "MiniMe never snapshots your screen or records video frames. It reads only the structured text of PDFs, Word docs, slides, spreadsheets, and code files you actually spend time in—using under 0.2% CPU and 35 MB RAM.",
      bullets: [
        "Parses PDFs, Word (.docx), PowerPoint (.pptx), Excel (.xlsx), Markdown & 45+ code languages",
        "Respects password fields and excludes private/incognito sessions automatically",
      ],
    },
    {
      icon: BookmarkCheck,
      badge: "Verified Proof",
      badgeClass: "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25",
      iconClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
      title: "Answers With Exact Quotes & Diffs",
      description:
        "No more guessing if AI made something up. Every answer links directly to the exact highlighted sentence, page number, or working-tree code diff inside your local files.",
      bullets: [
        "Side-by-side document & unified diff viewer synced to every answer",
        "Strict quote verification filters out unsupported claims automatically",
      ],
    },
    {
      icon: Search,
      badge: "Alt + Space",
      badgeClass: "bg-violet-500/10 text-violet-800 dark:text-violet-300 border-violet-500/25",
      iconClass: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
      title: "Instant Recall & One-Click Standups",
      description:
        "Press Alt + Space from anywhere on Windows to find a contract clause, browser reference, or yesterday's code edit in milliseconds—or generate an accurate daily standup recap.",
      bullets: [
        "Filter instantly with natural scopes like @doc, @file, @project, or @today",
        "Automatic 24-hour work timeline grouped across your desktop and laptop",
      ],
    },
    {
      icon: FolderKanban,
      badge: "Always Organized",
      badgeClass: "bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/25",
      iconClass: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
      title: "Automatic Project & Decision Memory",
      description:
        "Stop digging through old Slack threads to remember why a choice was made. MiniMe maps your active projects in the background and saves architectural decisions from chat, desktop, or IDE.",
      bullets: [
        "Background analyzer keeps project stack, key modules, and summaries current",
        "Capture decisions anytime in chat ('Record decision: ...') or via MCP",
      ],
    },
    {
      icon: CloudOff,
      badge: "Offline & BYOC",
      badgeClass: "bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/25",
      iconClass: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
      title: "Works 100% Offline. Syncs to Your Drive.",
      description:
        "Use MiniMe's built-in offline engine or local GGUF / Ollama models at $0 API cost. Want multi-device sync? Encrypted deltas sync straight to your own Google Drive or OneDrive.",
      bullets: [
        "Tiny ~1.54 MB/year compressed backup footprint fits easily in free Drive tiers",
        "Optional BYOK cloud LLM routing guarded by local compliance policies",
      ],
    },
    {
      icon: ShieldCheck,
      badge: "HIPAA, GDPR & MCP",
      badgeClass: "bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-500/25",
      iconClass: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
      title: "Built for Regulated & Developer Teams",
      description:
        "Enterprise-grade Windows DPAPI encryption, automated 18-identifier HIPAA redaction with EHR portal blockers, instant < 50ms vault shredding, and an official 8-tool MCP server for Cursor & Claude.",
      bullets: [
        "Personal & Org vault separation so work secrets never mix with personal notes",
        "Tamper-evident local BLAKE3 audit log and one-click JSON data export",
      ],
    },
  ];

  const techSpecs = [
    {
      label: "Local Retrieval Engine",
      value: "6-Head Temporal RRF (FTS5 BM25 + 384B Int8 ONNX + CSR PageRank + Actions + Intel + Decisions)",
    },
    {
      label: "Graph & Embedding Speed",
      value: "All-MiniLM-L6-v2 Int8 ONNX (>99.5% cosine fidelity) • CSR PageRank in 837.4µs on 25k nodes",
    },
    {
      label: "Offline & Local Models",
      value: "Speculative MMR (< 5ms / < 15ms offline TTFT) + Embedded GGUF (Qwen 2.5 3B, Llama 3.2 3B, SmolLM2 1.7B) & Ollama",
    },
    {
      label: "Cryptography & Sync",
      value: "Windows DPAPI + Argon2id + XChaCha20/ChaCha20 AEAD • 22.12x zstd (.mmz) • < 1ms lock wipe / < 50ms vault shred",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-300 mb-4 font-semibold">
            <Cpu className="w-3.5 h-3.5 mr-1" />
            <span>Everything You Need. Zero Bloat.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why People Switch to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              MiniMe.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            All your work context—indexed cleanly on your machine so you can find answers fast without
            giving up speed, battery life, or privacy.
          </p>
        </div>

        {/* Clean 6-Card Grid (Readable Immediately) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-xl p-6 sm:p-7 shadow-lg shadow-slate-200/40 dark:shadow-none flex flex-col justify-between hover:border-violet-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.iconClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${card.badgeClass}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-2">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Collapsible Technical Architecture Drawer for Engineers */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <button
              onClick={() => setShowTechSpecs(!showTechSpecs)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-xs sm:text-sm font-mono font-semibold text-slate-800 dark:text-zinc-200 hover:bg-slate-100/70 dark:hover:bg-white/[0.04] transition-colors"
              aria-expanded={showTechSpecs}
            >
              <span>Want the engineering specs? Inspect Rust core, retrieval &amp; crypto architecture</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-700 dark:text-zinc-300 transition-transform duration-200 ${
                  showTechSpecs ? "rotate-180" : ""
                }`}
              />
            </button>

            {showTechSpecs && (
              <div className="px-5 pb-5 pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {techSpecs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5"
                  >
                    <div className="font-mono font-bold text-violet-800 dark:text-violet-300 mb-1">
                      {spec.label}
                    </div>
                    <div className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
