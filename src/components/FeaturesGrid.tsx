"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Flame,
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
      accent: "text-violet-400 border-violet-500/30",
      title: "Deep Document & Code Ingestion",
      subtitle: "Zero Screenshots • Zero Invasive Keyloggers",
      description:
        "MiniMe parses the actual text, headings, functions, pages, slides, and sheets of local files you work in. Pure-Rust extractors parse PDFs, Word (.docx), PowerPoint (.pptx), Excel (.xlsx), Markdown, and 45+ code languages with semantic line-level diffs (+lines / -lines).",
      specs: [
        "Native PDF, Word (.docx), PowerPoint (.pptx) & Excel (.xlsx) parsers",
        "45+ programming languages with AST function & diff tracking",
        "Dwell-gated accessibility viewport reader (<=16KB text, zero pixels)",
        "BLAKE3 content hashing & cryptographic deduplication",
      ],
      previewBadge: "Zero Pixels Processed",
    },
    {
      id: "surfaces",
      number: "02",
      icon: MessageSquare,
      tag: "Omnipresent AI",
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400 border-cyan-500/30",
      title: "4-Surface Digital Twin Chat",
      subtitle: "Studio • Spotlight • Active-Doc • MCP Protocol",
      description:
        "Interact with your digital twin whenever inspiration strikes across 4 dedicated surfaces: the full in-app Chat Studio, the global Alt + Space floating HUD, a 1-click 'Ask About Active Window' shortcut, or via Universal Model Context Protocol (MCP) directly inside Cursor and Claude Desktop.",
      specs: [
        "In-App Digital Twin Studio with persistent scoped sessions",
        "Global Alt + Space Spotlight HUD with 0ms launch latency",
        "1-Click 'Ask About Active Window' tray & header trigger",
        "Universal rmcp server integration for Claude & Cursor IDE",
      ],
      previewBadge: "Universal MCP Active",
    },
    {
      id: "sync",
      number: "03",
      icon: CloudOff,
      tag: "Zero-Knowledge BYOC",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400 border-emerald-500/30",
      title: "Zero-Knowledge BYOC Cloud Sync",
      subtitle: "No Central Database • <5 MB/Year Footprint",
      description:
        "There is no centralized company database that can be hacked, subpoenaed, or leaked. Your memories sync conflict-free as Hybrid Logical Clock (HLC) CRDT deltas compressed with zstd dictionary compression into your private sandboxed Google Drive (appDataFolder) or OneDrive (approot).",
      specs: [
        "Client-side XChaCha20-Poly1305 symmetric AEAD encryption",
        "Syncs directly to sandboxed Google Drive (appdata) or OneDrive (approot)",
        "18.2x zstd dictionary compression (<5 MB total annual footprint)",
        "Zero raw vector sync: Int8 embeddings generated on-device",
      ],
      previewBadge: "<5 MB/Year Footprint",
    },
    {
      id: "split-horizon",
      number: "04",
      icon: GitBranch,
      tag: "Dual-Vault",
      color: "from-indigo-500/20 to-violet-500/10",
      accent: "text-indigo-400 border-indigo-500/30",
      title: "Enterprise Dual-Vault Split-Horizon",
      subtitle: "Personal Sovereign Vault ↔ Org Workspace",
      description:
        "Never accidentally mix private side projects, personal taxes, or medical records with company work. MiniMe provides cryptographically separated dual vaults with smart routing rules based on Git remotes, repo URLs, active domains, and folder hierarchies.",
      specs: [
        "Cryptographically isolated encryption keys per vault",
        "Smart routing rules: Git remotes, domains, and folder paths",
        "3 Content Capture Levels: FullDeep, LocalFilesOnly, MetadataOnly",
        "Instant hotkey vault toggling with zero data leakage",
      ],
      previewBadge: "Sovereign Separation",
    },
    {
      id: "ai-brain",
      number: "05",
      icon: BrainCircuit,
      tag: "Zero Dead Ends",
      color: "from-pink-500/20 to-rose-500/10",
      accent: "text-pink-400 border-pink-500/30",
      title: "3-Tier Zero-Dead-End AI Brain",
      subtitle: "Local Ollama • Governed Cloud BYOK • Offline RAG",
      description:
        "MiniMe never locks you into a single proprietary LLM. Tier 1: Auto-discovered 100% on-device Ollama/LM Studio ($0 cost, 100% offline). Tier 2: Governed BYOK cloud endpoints (Claude 3.7, Gemini 2.0, OpenAI) with PHI scrubbing. Tier 3: Offline Extractive RAG synthesizer works without any LLM configured.",
      specs: [
        "Tier 1: 100% Local Ollama / LM Studio (qwen2.5:3b, llama3.2:3b)",
        "Tier 2: Governed BYOK Cloud APIs (OpenAI, Claude, Gemini)",
        "Tier 3: Built-In Offline Extractive RAG Synthesizer",
        "Live AI Data Boundary badge on every conversation",
      ],
      previewBadge: "100% Offline-Capable",
    },
    {
      id: "compliance",
      number: "06",
      icon: ShieldCheck,
      tag: "Enterprise Ready",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400 border-amber-500/30",
      title: "Enterprise Compliance Shield",
      subtitle: "HIPAA Safe Harbor • GDPR Art. 17 • SOC 2 Merkle",
      description:
        "Engineered for healthcare, finance, and legal compliance. Includes a built-in 18-identifier HIPAA Safe Harbor scrubber that removes PHI before SQLite writes, GDPR Article 17 cryptographic shredding (<50ms instantaneous key destruction), and SOC 2 BLAKE3 Merkle-chained tamper-evident local audit ledger.",
      specs: [
        "18-identifier HIPAA Safe Harbor PHI & secret auto-scrubber",
        "GDPR Article 17 Right to Erasure with cryptographic key destruction",
        "GDPR Article 20 1-click full JSON / CSV data portability archive",
        "SOC 2 BLAKE3 Merkle-chained tamper-evident local audit ledger",
      ],
      previewBadge: "HIPAA & GDPR Ready",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Architecture Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 6 Core Superpowers of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              MiniMe.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Rebuilding operating system intelligence from first principles. Fast, non-invasive,
            cryptographically unassailable, and 100% owned by you.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-all duration-300 backdrop-blur-xl group flex flex-col justify-between"
              >
                {/* Glow accent in corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-bl-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`}
                />

                <div>
                  {/* Top Bar with Number, Icon, & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-zinc-200 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-400">
                        {feature.tag}
                      </span>
                      <span className="text-xs font-mono text-zinc-600 font-bold">
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                    {feature.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {feature.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-4 border-t border-white/5 space-y-2.5">
                  {feature.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {feature.previewBadge}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
