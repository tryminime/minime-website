"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "1. How is MiniMe fundamentally different from Microsoft Recall?",
      answer:
        "Microsoft Recall takes continuous screenshots every 3 to 5 seconds and runs OCR over raw desktop pixels—which consumes massive disk space (up to 100 GB), risks recording passwords or private messages, and has been widely banned by enterprise CISOs. In contrast, MiniMe is a Zero-Pixel architecture: it takes 0 screenshots, records 0 video frames, and installs 0 keyloggers. Instead, it extracts structured text directly from opened files (PDFs, Word documents, PowerPoint decks, spreadsheets, and 45+ code languages) via pure-Rust parsers and dwell-gated accessibility readers, storing 100% zero-knowledge encrypted chunks while consuming < 0.2% CPU and < 35 MB RAM.",
    },
    {
      question: "2. Does MiniMe store any of my documents, code, or chats on company servers?",
      answer:
        "No. MiniMe has zero centralized databases. We do not store, host, or relay your personal documents or chats. When you enable multi-device sync, your encrypted .mmz backup bundles sync directly into an isolated, sandboxed application folder on your own personal Google Drive (drive.appdata) or Microsoft OneDrive (approot). We cannot read, inspect, sell, or subpoena your data even if ordered to do so.",
    },
    {
      question: "3. How can multi-device sync take only 1.54 MB/year when syncing everything?",
      answer:
        "MiniMe achieves a projected 1.54 MB/year footprint (well below our < 5 MB/year requirement) through three core breakthroughs: (1) BLAKE3 content-addressed deduplication, which ensures a document or code hunk is stored once no matter how many times you open it; (2) Columnar string-interning with Zstandard (zstd) level 7/9 compression, delivering a verified 22.12x compression ratio over text deltas; and (3) Zero raw vector sync: embedding vectors are regenerated locally on-device on each peer device, so heavy float matrices never touch the network.",
    },
    {
      question: "4. What is Compressed Sparse Row (CSR) Personalized PageRank and why does it matter?",
      answer:
        "MiniMe maintains an in-memory graph of relationships between documents, functions, authors, Git commits, and focus sessions. Using Compressed Sparse Row (CSR) storage, pure-Rust forward power iterations execute in just 837.4µs on 25,000 nodes & 75,000 edges (< 1ms). This allows MiniMe to prioritize what is actually relevant to your current task based on structural proximity rather than relying solely on naive keyword search.",
    },
    {
      question: "5. What is LongCite sentence grounding and how does it prevent hallucinations?",
      answer:
        "MiniMe evaluates every generated response against real document byte coordinates using sentence attribution scoring (γ=0.65 ROUGE-1 recall + semantic cosine similarity). Sentences falling below a strict threshold (τ_attr=0.72) are flagged, and their citation tags are automatically stripped during Stage 1 drafting. Exact quotes (|Q| ≥ 24 chars) are anchored to precise document byte offsets, guaranteeing verifiable provenance.",
    },
    {
      question: "6. Can MiniMe work completely offline with no internet connection?",
      answer:
        "Yes, 100%. MiniMe includes a built-in Offline Extractive RAG Synthesizer delivering grounded citations in < 15ms Time-To-First-Token (TTFT), an embedded LocalGgufRuntime (supporting Qwen 2.5 3B, Llama 3.2 3B, and SmolLM2 1.7B weights locally), plus auto-discovery for local Ollama or LM Studio servers at $0 cost without a single packet leaving your PC.",
    },
    {
      question: "7. How does the Universal MCP Server integrate with Cursor, Claude Desktop, and Windsurf?",
      answer:
        "MiniMe ships with an official rmcp 3.8.0 stdio server binary (minime-mcp.exe). When added to your MCP config file (e.g. ~/.cursor/mcp.json, claude_desktop_config.json, or ~/.codeium/windsurf/mcp_config.json), coding agents gain access to 8 official tools: ask_memory, search_workstream, search_documents, get_document_chunks, get_daily_standup, get_project_context, get_active_context, and record_decision. All tool outputs are sanitized through our 5-stage secret scrubber and 18-identifier HIPAA Safe Harbor filter.",
    },
    {
      question: "8. How does MiniMe protect confidential medical, legal, or financial information?",
      answer:
        "MiniMe enforces multi-layered local cryptography: passphrase-locked master DEKs are wrapped with Argon2id (m=64MiB, t=3, p=4) + XChaCha20-Poly1305 and protected by the hardware Windows DPAPI enclave. Sensitive SQLite columns (enc:v1: with per-row AAD) and .mmz sync bundles are encrypted with ChaCha20-Poly1305 AEAD. On workstation lock, volatile DEKs are sanitized via Rust Zeroizing<T> (<1ms wipe). For clinical safety, an automated 18-identifier HIPAA Safe Harbor scrubber and EHR blockers suppress capture across Epic, Cerner, AthenaHealth, and 18 clinical portal patterns.",
    },
    {
      question: "9. What happens if I want to delete my data under GDPR Article 17?",
      answer:
        "MiniMe executes GDPR Article 17 Cryptographic Shredding in < 50ms. Instead of slow and incomplete row-by-row deletes, MiniMe securely overwrites and destroys the symmetric Data Encryption Keys (DEKs). Without the DEKs, every historical SQLite block and remote .mmz cloud backup bundle is instantly and irreversibly rendered into undecodable cryptographic noise.",
    },
    {
      question: "10. What are the system requirements and resource impact on Windows?",
      answer:
        "MiniMe runs natively on 64-bit Windows 10 and Windows 11. Built entirely in pure-Rust with no heavy Electron or Python runtimes, MiniMe consumes less than 0.2% CPU at idle and maintains a resident memory footprint of under 35 MB RAM. It runs silently alongside intensive IDEs, compile loops, and CAD tools with zero impact on system responsiveness.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Answers.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Zero Marketing Fluff.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Everything you need to know about MiniMe&apos;s privacy, local-first engine, and sync protocols.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-600 dark:text-violet-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans border-t border-slate-100 dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
