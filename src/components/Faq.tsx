"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How is MiniMe different from Microsoft Recall?",
    answer:
      "Microsoft Recall captures periodic PNG screenshots of everything on your screen and runs heavy optical character recognition (OCR), consuming gigabytes of disk space and heavy GPU cycles. MiniMe takes zero screenshots and records zero keystrokes. Instead, it quietly reads active document text, code changes, and window context directly from OS events using under 35 MB of RAM in the background daemon (~85–120 MB full desktop GUI with WebView2) and < 0.2% CPU.",
  },
  {
    question: "Does MiniMe send my work history or files to your servers?",
    answer:
      "Never. Your files, search index, and conversation history stay encrypted locally on your Windows PC. If you want multi-device backup, MiniMe supports zero-knowledge Bring Your Own Cloud (BYOC) sync directly into your personal Google Drive app folder or Microsoft OneDrive — compressed down to ~1.54 MB per year before leaving your device.",
  },
  {
    question: "Does MiniMe work completely offline without internet?",
    answer:
      "Yes. MiniMe's local search engine and embedded on-device models work 100% offline with zero network calls required. If you choose to connect an external cloud LLM key (Bring Your Own Key) for complex synthesis, MiniMe's built-in privacy firewall automatically scrubs sensitive secrets and identifiers before any prompt leaves your PC.",
  },
  {
    question: "How do I know MiniMe isn't hallucinating answers?",
    answer:
      "Every AI answer in MiniMe links back to exact source files and verbatim quotes stored in your local index. Unsupported sentences are suppressed automatically, and clicking any citation pill opens the side-by-side Studio inspector showing the exact highlighted excerpt from your PDF, Office doc, code file, or browser tab.",
  },
  {
    question: "Can Cursor, Claude Desktop, or Windsurf access my MiniMe memory?",
    answer:
      "Yes. MiniMe ships with a universal local Model Context Protocol (MCP) server (minime-mcp.exe) exposing 8 tools — including ask_memory, search_workstream, search_documents, get_daily_standup, and record_decision. Add one 5-line config block and your coding assistant gains instant access to project decisions and open docs without manual copy-pasting.",
  },
  {
    question: "How are encryption keys, HIPAA PHI, and GDPR deletion handled?",
    answer:
      "Database keys are sealed inside Windows Credential Locker (DPAPI) using Argon2id and XChaCha20-Poly1305 encryption. A built-in Safe Harbor privacy filter detects and redacts all 18 HIPAA identifier types plus secrets and payment numbers, and one click performs cryptographic GDPR Article 17 key shredding in under 50 milliseconds.",
  },
  {
    question: "What are the Windows requirements and disk footprint?",
    answer:
      "MiniMe runs natively on Windows 10 and Windows 11 (64-bit). Because vectors stay local on-device and text history is deduplicated with BLAKE3 and compressed 22.12x with Zstandard, a full year of engineering context compresses to ~1.54 MB in synced snapshots while running silently in the background.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-zinc-950/90 relative border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-violet-700 dark:text-violet-400 mr-1" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Straight Answers,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-cyan-700 dark:from-violet-400 dark:to-cyan-400">
              No Fluff
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-700 dark:text-zinc-300 text-sm sm:text-base">
            Everything you need to know about privacy, offline AI, citations, and Windows setup.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 dark:text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-700 dark:text-violet-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
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
