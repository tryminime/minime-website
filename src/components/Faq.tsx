"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "How is MiniMe fundamentally different from Microsoft Recall?",
      answer:
        "Microsoft Recall takes continuous screenshots every 3 to 5 seconds and runs OCR over raw desktop pixels—which consumes massive disk space (up to 100 GB), risks recording passwords or private messages, and has been widely banned by enterprise CISOs. In contrast, MiniMe is an Anti-Recall architecture: it takes zero screenshots, zero video recordings, and zero keylogs. Instead, it extracts structured text directly from opened files (PDFs, Word documents, PowerPoint decks, spreadsheets, and 45+ code languages) via pure-Rust parsers and dwell-gated accessibility readers, storing 100% zero-knowledge encrypted chunks.",
    },
    {
      question: "Does MiniMe store any of my documents, code, or chats on your company servers?",
      answer:
        "No. MiniMe has zero centralized databases. We do not store, host, or relay your personal documents or chats. When you enable multi-device sync, your encrypted .mmz backup bundles sync directly into an isolated, sandboxed application folder on your own personal Google Drive (drive.appdata) or Microsoft OneDrive (approot). We cannot read, inspect, sell, or subpoena your data even if ordered to do so.",
    },
    {
      question: "How can multi-device sync take under 5 MB per year when syncing everything?",
      answer:
        "MiniMe achieves this through three core breakthroughs: (1) BLAKE3 content-addressed deduplication, which ensures a document or code hunk is stored once no matter how many times you open it; (2) Zstandard (zstd) columnar dictionary compression, delivering 18.2x compression ratios over text deltas; and (3) zero raw vector sync. Embedding vectors are regenerated locally on-device on each peer device, so heavy float matrices never touch the network.",
    },
    {
      question: "Can MiniMe work completely offline with no internet connection?",
      answer:
        "Yes, 100%. MiniMe includes a built-in Offline Extractive RAG Synthesizer that ranks and surfaces exact document passages, code diffs, and page citations with zero external network connectivity. You can also connect auto-discovered local Ollama or LM Studio models (like qwen2.5:3b or llama3.2:3b) for full conversational intelligence at $0 cost without a single packet leaving your device.",
    },
    {
      question: "Does MiniMe take screenshots or record audio from my microphone?",
      answer:
        "Never. MiniMe contains zero screen capture APIs, zero video codecs, and zero audio recording libraries. We believe desktop intelligence should be non-invasive and respect human privacy unconditionally.",
    },
    {
      question: "How does MiniMe extract text from PDFs, Word docs, and code files?",
      answer:
        "When an active window has been focused for at least 5 seconds, MiniMe resolves the file path through native Win32 window handles, OS shell link history (%APPDATA%\\Recent\\*.lnk), or IDE metadata. A high-performance pure-Rust ingestor parses the local file into structured text chunks (headings, pages, slide notes, sheet cells, and AST code functions) with sub-millisecond execution.",
    },
    {
      question: "Is MiniMe compliant with HIPAA, GDPR, and enterprise CISO policies?",
      answer:
        "Yes. MiniMe features an automated 18-identifier HIPAA Safe Harbor de-identification engine that redacts names, MRNs, SSNs, and dates before any data is embedded or written to disk. It also provides GDPR Article 17 cryptographic shredding (<50ms instantaneous key destruction), Article 20 data export, and a SOC 2 BLAKE3 Merkle-chained tamper-evident local audit ledger.",
    },
    {
      question: "Which AI models can I use with MiniMe?",
      answer:
        "MiniMe operates on a 3-Tier Zero-Dead-End model: (1) Local On-Device: Ollama or LM Studio running models such as Qwen 2.5, Llama 3.2, DeepSeek, or Mistral; (2) Governed BYOK Cloud: your own API keys for Anthropic Claude 3.7, OpenAI GPT-4.5, or Google Gemini 2.0 Pro with automatic PHI scrubbing; and (3) Offline Extractive RAG: pure rule-based semantic synthesis without any LLM configured.",
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Zero Marketing Fluff.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Everything you need to know about how MiniMe safeguards your operating system memory.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-200 hover:border-violet-500/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-violet-600/20 text-violet-400" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed font-sans border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
