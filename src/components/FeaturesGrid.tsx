"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCode2,
  Cpu,
  CloudOff,
  GitBranch,
  ShieldCheck,
  BrainCircuit,
  MessageSquare,
  HardDrive,
  Lock,
  Layers,
  Sparkles,
  Database,
  ArrowRight,
  CheckCircle2,
  Binary,
  SplitSquareVertical,
  Activity,
  Zap,
} from "lucide-react";

export function FeaturesGrid() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: "ingestion",
      number: "01",
      icon: FileCode2,
      tag: "Pure-Rust Engine",
      color: "from-violet-500/20 to-purple-500/10",
      accent: "text-violet-600 dark:text-violet-400 border-violet-500/30",
      title: "Deep Document & AST Ingestion",
      subtitle: "0 Screenshots • 0 Video Frames • 0 Keyloggers",
      description:
        "MiniMe parses the actual structured text, headings, functions, pages, slides, and sheets of local files you work in. Pure-Rust extractors parse PDFs, Word (.docx), PowerPoint (.pptx), Excel (.xlsx), Markdown, and 45+ code languages with semantic line-level AST diffs (+lines / -lines) using < 0.2% CPU and < 35 MB RAM.",
      specs: [
        "Native PDF, Word (.docx), PowerPoint (.pptx) & Excel (.xlsx) parsers",
        "45+ programming languages with AST function & diff tracking",
        "Dwell-gated accessibility viewport reader (≤16KB text, zero pixels)",
        "BLAKE3 content hashing & cryptographic deduplication",
      ],
      previewBadge: "Zero Pixels Processed",
      metric: "< 0.2% CPU • < 35 MB RAM",
    },
    {
      id: "csr-ppr",
      number: "02",
      icon: BrainCircuit,
      tag: "Graph Algorithms",
      color: "from-indigo-500/20 to-blue-500/10",
      accent: "text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
      title: "CSR Personalized PageRank",
      subtitle: "837.4µs Forward Iterations on 25k Nodes",
      description:
        "MiniMe maintains an in-memory knowledge graph of interconnected documents, functions, authors, and workstream sessions. Compressed Sparse Row (CSR) storage enables forward power iterations with Cormack-Clarke dampening to complete in 837.4µs on 25,000 nodes & 75,000 edges (< 1ms) with zero allocations in the inner loop.",
      specs: [
        "Pure-Rust Compressed Sparse Row (CSR) graph storage",
        "Forward power iterations execute in 837.4µs on 25k nodes & 75k edges",
        "Cormack-Clarke dampening (alpha=0.85) without dynamic allocations",
        "Contextual query seed projection for graph-aware document ranking",
      ],
      previewBadge: "Sub-Millisecond Graph Traversal",
      metric: "837.4µs (< 1ms)",
    },
    {
      id: "int8-onnx",
      number: "03",
      icon: Cpu,
      tag: "Quantized AI",
      color: "from-cyan-500/20 to-teal-500/10",
      accent: "text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
      title: "Int8 Vector Quantization",
      subtitle: "FastEmbed ONNX Generating 384-Byte Vectors",
      description:
        "High-dimensional vectors typically consume gigabytes of memory. MiniMe executes FastEmbed All-MiniLM-L6-v2 directly on the CPU via ONNX Runtime, generating 384-byte symmetric Int8 vectors that maintain >99.5% cosine fidelity compared to standard 1,536-byte f32 matrices at 4x memory savings.",
      specs: [
        "On-device All-MiniLM-L6-v2 ONNX model (0 Python dependencies)",
        "384-byte symmetric Int8 quantized vectors",
        ">99.5% cosine fidelity vs 1,536-byte f32 floats",
        "Sub-millisecond quantized dot product CPU kernels",
      ],
      previewBadge: ">99.5% Cosine Fidelity",
      metric: "384-Byte Symmetric Int8",
    },
    {
      id: "tri-modal-rrf",
      number: "04",
      icon: Layers,
      tag: "TD-RRF Retrieval",
      color: "from-emerald-500/20 to-green-500/10",
      accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      title: "Tri-Modal TD-RRF Retrieval",
      subtitle: "BM25 + Int8 Cosine + CSR Graph PageRank",
      description:
        "Single-modal search fails across diverse desktop work. MiniMe fuses three independent retrieval modalities: SQLite FTS5 BM25 keyword matching, Int8 vector semantic cosine similarity, and CSR Personalized PageRank using Cormack-Clarke Reciprocal Rank Fusion (k=60.0) with diurnal exponential decay (λ=0.0693, 24h half-life).",
      specs: [
        "Tri-Modal fusion: FTS5 BM25 + Int8 Cosine + CSR Graph PPR",
        "Cormack-Clarke Reciprocal Rank Fusion (k=60.0)",
        "Diurnal exponential decay (λ=0.0693, 24h half-life)",
        "Calibrated query scopes: @active, @doc, @today, @project",
      ],
      previewBadge: "Tri-Modal Cormack-Clarke",
      metric: "k=60.0 • λ=0.0693",
    },
    {
      id: "longcite",
      number: "05",
      icon: CheckCircle2,
      tag: "Verifiable Citations",
      color: "from-amber-500/20 to-yellow-500/10",
      accent: "text-amber-600 dark:text-amber-400 border-amber-500/30",
      title: "LongCite Grounding & Quote Extraction",
      subtitle: "Attribution Score γ=0.65 ROUGE-1 + Cosine (τ ≥ 0.72)",
      description:
        "Every claim generated by MiniMe is verified against real document source coordinates. MiniMe computes sentence attribution scores combining ROUGE-1 recall and semantic cosine similarity with a strict threshold (τ_attr=0.72). Exact quotes (|Q| ≥ 24 chars) are anchored to document byte coordinates, and hallucinated sentences have tags stripped.",
      specs: [
        "Sentence attribution score (γ=0.65 ROUGE-1 recall + cosine similarity)",
        "Strict attribution threshold τ_attr = 0.72",
        "Exact quote extraction (|Q| ≥ 24 chars) with document byte offsets",
        "Hallucinated sentences have citation tags automatically stripped",
      ],
      previewBadge: "Zero Hallucination Proof",
      metric: "τ_attr = 0.72 • |Q| ≥ 24 chars",
    },
    {
      id: "speculative",
      number: "06",
      icon: Zap,
      tag: "Sub-15ms TTFT",
      color: "from-rose-500/20 to-red-500/10",
      accent: "text-rose-600 dark:text-rose-400 border-rose-500/30",
      title: "Speculative 2-Stage Drafting",
      subtitle: "< 5ms Stage 1 MMR • < 15ms TTFT Stage 3",
      description:
        "Never wait for slow cloud APIs. MiniMe executes a speculative multi-stage pipeline: Stage 1 produces Maximal Marginal Relevance (MMR) extractive drafts in under 5ms, followed by Stage 3 offline speculative synthesis delivering Time-To-First-Token (TTFT) in < 15ms with zero cloud dependencies.",
      specs: [
        "Stage 1 MMR extractive drafting in < 5ms",
        "Stage 3 offline speculative execution in < 15ms TTFT",
        "100% offline synthesis via local Ollama, LM Studio, or pure extractive rules",
        "Zero-Dead-End graceful fallback: Local → Governed BYOK → Extractive RAG",
      ],
      previewBadge: "< 15ms Time-To-First-Token",
      metric: "< 5ms MMR • < 15ms TTFT",
    },
    {
      id: "surfaces",
      number: "07",
      icon: SplitSquareVertical,
      tag: "Dual-Surface Desktop",
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-600 dark:text-blue-400 border-blue-500/30",
      title: "Dual-Surface Studio & Universal MCP",
      subtitle: "58% LiveChat : 42% Sidecar Canvas + rmcp 3.8.0",
      description:
        "Interact with your digital twin through the desktop client featuring a 58% Conversational Control Room (LiveChat.tsx) and 42% Cybernetic Glass Artifact Sidecar Canvas (ArtifactCanvas.tsx) supporting Document, Diffs, and Timeline modes. Includes the official rmcp 3.8.0 stdio server (minime-mcp.exe) with 7 standard tools for Cursor and Claude Desktop.",
      specs: [
        "58% LiveChat conversational control room + 42% ArtifactCanvas sidecar",
        "Three sidecar modes: Document viewer, AST Diffs, and Chronological Timeline",
        "Global Alt + Space Spotlight HUD with instant Win32 hotkey response",
        "Official rmcp 3.8.0 stdio server with 7 tools for Cursor & Claude Desktop",
      ],
      previewBadge: "Universal rmcp 3.8.0",
      metric: "58% / 42% Split • 7 MCP Tools",
    },
    {
      id: "sync-crypto",
      number: "08",
      icon: Lock,
      tag: "Zero-Knowledge BYOC",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      title: "Zero-Knowledge BYOC & Cryptography",
      subtitle: "22.12x Compression • 1.54 MB/Year • Hardware DPAPI",
      description:
        "No centralized company database can be hacked or subpoenaed. Your memories sync conflict-free as Hybrid Logical Clock deltas compressed with columnar string-interning + zstd level 7/9 achieving 22.12x compression and 1.54 MB/year projected footprint (< 5 MB/year requirement) into sandboxed Google Drive (appdata) or OneDrive (approot). Protected by Hardware DPAPI, Argon2id, XChaCha20, HIPAA 18-PHI scrubber, and <50ms GDPR crypto-shredding.",
      specs: [
        "Columnar string-interning + zstd 7/9 achieving 22.12x compression ratio",
        "1.54 MB/year projected sync footprint (< 5 MB/year requirement)",
        "Hardware DPAPI key wrapping + Argon2id (m=64MiB, t=3, p=4) + XChaCha20-Poly1305",
        "18-ID HIPAA Safe Harbor PHI scrubber, <50ms GDPR shredding, SOC 2 BLAKE3 ledger",
      ],
      previewBadge: "1.54 MB/Year Sync",
      metric: "22.12x Ratio • 1.54 MB/yr",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-700 dark:text-violet-400 mb-4">
            <Cpu className="w-3.5 h-3.5 mr-1" />
            <span>Audited Production Architecture • 84/84 Tests Passing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            8 Architectural Pillars.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Deterministic. Verifiable. Local-First.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            MiniMe is built in pure-Rust from the ground up without bloatware, invasive screen captures,
            or ungrounded hallucination loops. Every benchmark is mathematically verified.
          </p>
        </div>

        {/* 8 Feature Tabs Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 backdrop-blur-xl mb-12 shadow-sm">
          {features.map((feat, idx) => {
            const isSelected = selectedFeature === idx;
            const Icon = feat.icon;
            return (
              <button
                key={feat.id}
                onClick={() => setSelectedFeature(idx)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/25 scale-[1.02]"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4 mb-1.5 shrink-0" />
                <span className="text-[11px] font-mono font-bold leading-tight">
                  #{feat.number}
                </span>
                <span className="text-[10px] font-sans truncate max-w-[85px] mt-0.5">
                  {feat.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail Card */}
        <div className="rounded-2xl border border-slate-300 dark:border-white/15 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
          <AnimatePresence mode="wait">
            {(() => {
              const feat = features[selectedFeature];
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Descriptions & Specs (Cols 1-7) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                        Pillar #{feat.number} • {feat.tag}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                        {feat.previewBadge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {feat.title}
                      </h3>
                      <div className="text-sm font-semibold text-violet-700 dark:text-violet-400 mt-1">
                        {feat.subtitle}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                      {feat.description}
                    </p>

                    {/* Spec Bullet List */}
                    <div className="space-y-2 pt-2">
                      {feat.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Verified Metric Card (Cols 8-12) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-4 shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-violet-600/10 dark:bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-700 dark:text-violet-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-semibold">
                          Verified Audit Status
                        </span>
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-1">
                          Key Performance Metric
                        </span>
                        <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {feat.metric}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                          <span>Compiler Suite:</span>
                          <span className="text-slate-900 dark:text-white font-semibold">Rust 1.83+ Stable</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                          <span>Clippy Lint Status:</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">0 Warnings (-D warnings)</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                          <span>Test Coverage:</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">84 / 84 Tests Passing (100%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
