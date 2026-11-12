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
  BookmarkCheck,
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
      accent: "text-violet-700 dark:text-violet-300 border-violet-500/30",
      title: "Deep Document & Diff Ingestion",
      subtitle: "0 Screenshots • 0 Video Frames • 0 Keyloggers",
      description:
        "MiniMe parses the actual structured text, headings, pages, slides, and sheets of local files you work in via pure Win32 OS hooks (SetWinEventHook + IUIAutomation). Pure-Rust extractors parse PDFs (with ToUnicode CMap & Form XObjects), Word (.docx), PowerPoint (.pptx), Excel (.xlsx), CSV, Markdown, and 45+ code languages with working-tree Git numstat diffs using < 0.2% CPU and < 35 MB RAM.",
      specs: [
        "Native PDF (lopdf + ToUnicode CMap), Word (.docx), PowerPoint (.pptx) & Excel (.xlsx) parsers",
        "Live working-tree & non-Git unified diff tracking across 45+ programming languages",
        "Dwell-gated UIA viewport reader (<=16 KB text, password exclusion, zero pixels)",
        "BLAKE3 content hashing, Firefox XUL depth-12 URLs, and .lnk shell resolution",
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
      accent: "text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
      title: "CSR Personalized PageRank",
      subtitle: "837.4µs Forward Iterations on 25k Nodes",
      description:
        "MiniMe maintains a temporal SQLite Knowledge Graph (kg_entities & kg_relations) of interconnected documents, functions, people, and projects. Compressed Sparse Row (CSR) storage in SparseGraphPpr executes 10 power iterations with damping alpha=0.85 in 837.4µs on 25,000 nodes & 75,000 edges (< 1ms) with zero inner-loop heap allocations.",
      specs: [
        "Pure-Rust Compressed Sparse Row (CSR) graph storage with per-vault caching",
        "10 power iterations execute in 837.4µs on 25k nodes & 75k edges (< 1ms)",
        "Temporal edge validity (valid_from / valid_to) & dangling mass redistribution (alpha=0.85)",
        "Entity harvesting for Person, Document, Project, Function, Concept & Dependency",
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
      accent: "text-cyan-800 dark:text-cyan-300 border-cyan-500/30",
      title: "Int8 Vector Quantization",
      subtitle: "FastEmbed ONNX Generating 384-Byte Vectors",
      description:
        "High-dimensional vectors typically consume gigabytes of memory. MiniMe executes FastEmbed All-MiniLM-L6-v2 directly on CPU via ONNX Runtime (zero Python runtime), quantizing 384-dim f32 embeddings (1,536 bytes) into 384-byte symmetric Int8 vectors that preserve >99.5% cosine similarity fidelity at 4x memory compression.",
      specs: [
        "On-device All-MiniLM-L6-v2 ONNX model cached locally (0 Python dependencies)",
        "384-byte symmetric Int8 quantized vectors (4.0x compression vs 1,536B f32)",
        ">99.5% cosine similarity fidelity verified against unquantized f32 matrices",
        "Pure-Rust i32 integer dot product cosine similarity CPU kernels",
      ],
      previewBadge: ">99.5% Cosine Fidelity",
      metric: "384-Byte Symmetric Int8",
    },
    {
      id: "tri-modal-rrf",
      number: "04",
      icon: Layers,
      tag: "6-Head TD-RRF",
      color: "from-emerald-500/20 to-green-500/10",
      accent: "text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
      title: "6-Head TD-RRF Retrieval",
      subtitle: "BM25 + Int8 Cosine + CSR PPR + Actions + Intel + Decisions",
      description:
        "Single-modal search fails across heterogeneous desktop memory. HybridRagEngine fuses 6 memory heads (FTS5 BM25 w=1.0, Int8 Cosine w=1.25, CSR Graph PPR w=1.50, WorkActions, Project Intelligence, and Decisions) using Temporal-Decayed Reciprocal Rank Fusion (k=60.0) with exponential recency decay (lambda=0.0693, 24h diurnal scale / 10-day half-life; 7-day tau for actions & decisions).",
      specs: [
        "6-Head Fusion: FTS5 BM25 + Int8 Cosine + CSR PPR + WorkActions + Project Intel + Decisions",
        "Cormack-Clarke RRF (k=60.0) with exponential temporal decay (lambda=0.0693, 10d half-life)",
        "Active working memory injection (1.8x boost) with strict anti-bleed isolation",
        "Calibrated scope multipliers: @active (3.0x), @doc (2.5x), @today (2.3x), @project",
      ],
      previewBadge: "6-Head TD-RRF Engine",
      metric: "k=60.0 • 6 Retrieval Heads",
    },
    {
      id: "longcite",
      number: "05",
      icon: CheckCircle2,
      tag: "Verifiable Citations",
      color: "from-amber-500/20 to-yellow-500/10",
      accent: "text-amber-800 dark:text-amber-300 border-amber-500/30",
      title: "LongCite Grounding & Quote Extraction",
      subtitle: "Attribution Score (γ=0.65 ROUGE-1 + Cosine, τ >= 0.72)",
      description:
        "Every claim generated by MiniMe is verified against real document coordinates in LongCiteVerifier. Sentence attribution blends ROUGE-1 recall (gamma=0.65 weight) and cosine similarity against a strict threshold (tau_attr=0.72). Exact UTF-8 safe quotes (|Q| >= 24 chars) anchor to document chunk coordinates, while ungrounded citation tags are stripped.",
      specs: [
        "Blended attribution scoring (gamma=0.65 ROUGE-1 weight + dense similarity)",
        "Strict attribution threshold tau_attr = 0.72 filtering weak claims",
        "UTF-8 boundary-safe exact quote extraction (|Q| >= 24 chars) & byte offsets",
        "Post-generation out-of-range & ungrounded citation tag stripping",
      ],
      previewBadge: "Zero Hallucination Proof",
      metric: "τ_attr = 0.72 • |Q| ≥ 24 chars",
    },
    {
      id: "speculative",
      number: "06",
      icon: Zap,
      tag: "Local GGUF & TTFT",
      color: "from-rose-500/20 to-red-500/10",
      accent: "text-rose-800 dark:text-rose-300 border-rose-500/30",
      title: "Speculative Synthesis & Local GGUF",
      subtitle: "< 5ms Stage 1 MMR • < 15ms TTFT Stage 3 • On-Device GGUF",
      description:
        "Never wait for cloud rate limits. SpeculativeSynthesizer executes Stage 1 Maximal Marginal Relevance (MMR, lambda=0.70) drafting in < 5ms, Stage 2 streaming verification, and Stage 3 offline speculative synthesis (< 15ms TTFT), paired with an embedded LocalGgufRuntime (Qwen 2.5 3B, Llama 3.2 3B, SmolLM2 1.7B) or governed BYOK cloud behind AI Compliance Firewall.",
      specs: [
        "Stage 1 MMR extractive drafting in < 5ms; Stage 3 offline execution in < 15ms TTFT",
        "Embedded local GGUF engine + Ollama / LM Studio discovery with seamless auto-fallback",
        "3-Tier Brain: Local GGUF/Ollama -> Governed BYOK Cloud -> Extractive Offline RAG",
        "AI Compliance Firewall blocks HIPAA-Strict vaults from cloud inference",
      ],
      previewBadge: "< 15ms Time-To-First-Token",
      metric: "< 5ms MMR • < 15ms TTFT",
    },
    {
      id: "surfaces",
      number: "07",
      icon: SplitSquareVertical,
      tag: "Dual-Surface & MCP",
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-800 dark:text-blue-300 border-blue-500/30",
      title: "Dual-Surface Studio & 8-Tool MCP",
      subtitle: "58% LiveChat : 42% Sidecar Canvas + rmcp 3.8.0",
      description:
        "Interact with your digital twin via a 58% Conversational Control Room (LiveChat.tsx with modality-coded citation pills for WorkAction, Project Intel, Decision, PDF, Code, Viewport) and 42% Artifact Sidecar Canvas (ArtifactCanvas.tsx), an expandable Compliance Center Navigation Rail, Global Alt+Space Spotlight HUD, and the 8-tool rmcp 3.8.0 stdio server.",
      specs: [
        "58% LiveChat control room + 42% ArtifactCanvas (Document, Unified Diffs, Timeline)",
        "Color-coded citation badges & Cybernetic Glass Left Navigation Rail in ComplianceCenter",
        "Global Alt + Space Spotlight HUD with inline '?' Quick-Ask & keyboard navigation",
        "Official rmcp 3.8.0 stdio server (minime-mcp.exe) with 8 tools incl. record_decision",
      ],
      previewBadge: "8-Tool rmcp 3.8.0 Server",
      metric: "58% / 42% Split • 8 MCP Tools",
    },
    {
      id: "sync-crypto",
      number: "08",
      icon: Lock,
      tag: "Zero-Knowledge BYOC",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
      title: "Zero-Knowledge BYOC & Cryptography",
      subtitle: "22.12x Compression • 1.54 MB/Year • DPAPI + Argon2id",
      description:
        "No vendor database holds your memory. HLC CRDT deltas compress with columnar string-interning + Zstandard (.mmz) at 22.12x compression (1.54 MB/year projected) into your personal Google Drive (appDataFolder), OneDrive (approot), or NAS. Protected by Windows DPAPI, Argon2id (m=64MiB, t=3, p=4) + XChaCha20-Poly1305 passphrase DEK wrapping, ChaCha20-Poly1305 AAD column encryption, 18-ID HIPAA scrubber, and BLAKE3 audit chains.",
      specs: [
        "Columnar string-interning + zstd level 7/9 achieving 22.12x ratio (1.54 MB/yr)",
        "DPAPI key enclave, Argon2id + XChaCha20-Poly1305 DEK wrap & ChaCha20-Poly1305 column AEAD",
        "Dual-Vault Split-Horizon routing (personal vs org:<tenant_id> via Ed25519 manifest)",
        "18-ID HIPAA Safe Harbor scrubber, <1ms volatile DEK wipe, <50ms GDPR shred, BLAKE3 ledger",
      ],
      previewBadge: "1.54 MB/Year Sync",
      metric: "22.12x Ratio • 1.54 MB/yr",
    },
    {
      id: "workspace-decisions",
      number: "09",
      icon: BookmarkCheck,
      tag: "Workspace & Decisions",
      color: "from-indigo-500/20 to-violet-500/10",
      accent: "text-indigo-800 dark:text-indigo-300 border-indigo-500/30",
      title: "Autonomous Workspace Intel & Decisions",
      subtitle: "5-Min Scheduled AST Analyzer • Decisions CRUD Ledger",
      description:
        "MiniMe builds living architectural maps of every validated project without manual tagging. Every 5 minutes (loop_ticks % 300 == 0), a background daemon scheduler triggers analyze_workspace_intelligence() into SQLite project_intelligence, while the persistent decisions_and_notes ledger captures architectural decisions from desktop UI, direct 'Record decision:' chat prompts, or MCP Tool #8 record_decision.",
      specs: [
        "5-minute autonomous scheduler (project_intelligence: architecture, stack, key modules)",
        "Strict classification gatekeeper filtering OS shell folders, terminals, and noise",
        "Full CRUD Decisions & Architecture Notes ledger stored with AAD encryption & CRDT oplog",
        "Direct 'Record decision:' chat interception + instant '[Decision]' citation badges",
      ],
      previewBadge: "Modules 5.1 & 5.2",
      metric: "5-Min Scheduler • Full CRUD",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-300 mb-4">
            <Cpu className="w-3.5 h-3.5 mr-1" />
            <span>Audited Production Architecture • 240 Rust Tests Passing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            9 Architectural Pillars.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Deterministic. Verifiable. Local-First.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            MiniMe is built in pure-Rust from the ground up without bloatware, invasive screen captures,
            or ungrounded hallucination loops. Every metric is verified against crate implementations.
          </p>
        </div>

        {/* 9 Feature Tabs Selector */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 backdrop-blur-xl mb-12 shadow-sm">
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
                    : "text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
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
                        <div className="flex items-center justify-between text-slate-700 dark:text-zinc-300">
                          <span>Workspace Runtime:</span>
                          <span className="text-slate-900 dark:text-white font-semibold">4-Crate Rust + Tauri</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700 dark:text-zinc-300">
                          <span>Unit Test Suite:</span>
                          <span className="text-emerald-800 dark:text-emerald-300 font-semibold">182 / 182 Crate Unit Passing</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700 dark:text-zinc-300">
                          <span>Workspace Suite:</span>
                          <span className="text-emerald-800 dark:text-emerald-300 font-semibold">240 Passing (incl. 58 Integration)</span>
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
