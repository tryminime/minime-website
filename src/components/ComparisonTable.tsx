"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, Minus } from "lucide-react";

export function ComparisonTable() {
  const competitors = [
    { name: "MiniMe", highlight: true, logo: "⚡" },
    { name: "Microsoft Recall", highlight: false },
    { name: "Rewind / Limitless", highlight: false },
    { name: "Pieces", highlight: false },
    { name: "ActivityWatch", highlight: false },
  ];

  const rows = [
    {
      dimension: "Observation Method",
      tooltip: "How digital workflows are observed on your machine",
      minime: {
        text: "Win32 OS Metadata + Pure-Rust Document Parsers (Zero Screenshots)",
        status: "best",
      },
      recall: {
        text: "Continuous 3s Screenshots + invasive OCR",
        status: "bad",
      },
      rewind: {
        text: "Screen recording + microphone audio recording",
        status: "bad",
      },
      pieces: {
        text: "IDE extensions + clipboard & OCR snapshots",
        status: "neutral",
      },
      activityWatch: {
        text: "Window titles & URLs only (completely blind to docs)",
        status: "bad",
      },
    },
    {
      dimension: "Understands Document Content?",
      tooltip: "Ability to extract headings, pages, code diffs, and slides",
      minime: {
        text: "Yes — Exact Page, Slide, Heading Text & Code Diffs",
        status: "best",
      },
      recall: {
        text: "Yes, but via invasive pixel OCR",
        status: "neutral",
      },
      rewind: {
        text: "Yes, via heavy video OCR & audio transcripts",
        status: "neutral",
      },
      pieces: {
        text: "Code snippets only (no office docs or spreadsheets)",
        status: "neutral",
      },
      activityWatch: {
        text: "No — Window titles only",
        status: "bad",
      },
    },
    {
      dimension: "Conversational Chat Surfaces",
      tooltip: "Where and how you can query your work memory",
      minime: {
        text: "4 Surfaces (Chat Studio, Spotlight HUD, Active-Doc Ask, MCP)",
        status: "best",
      },
      recall: {
        text: "Windows Copilot lock-in only",
        status: "neutral",
      },
      rewind: {
        text: "App-only cloud chat",
        status: "neutral",
      },
      pieces: {
        text: "In-IDE copilot only",
        status: "neutral",
      },
      activityWatch: {
        text: "None (Dashboard queries only)",
        status: "bad",
      },
    },
    {
      dimension: "Annual Cloud Storage Footprint",
      tooltip: "Storage required to store and sync your memory",
      minime: {
        text: "<5 MB/year (Columnar zstd CRDT on Google Drive/OneDrive)",
        status: "best",
      },
      recall: {
        text: "Massive local SSD disk burn (25–100 GB)",
        status: "bad",
      },
      rewind: {
        text: "15–50 GB / month heavy cloud video blobs",
        status: "bad",
      },
      pieces: {
        text: "Proprietary cloud database sync",
        status: "neutral",
      },
      activityWatch: {
        text: "Unsynced local SQLite database",
        status: "neutral",
      },
    },
    {
      dimension: "Multi-Device Sync",
      tooltip: "Synchronizing seamlessly between desktop, laptop, and work PC",
      minime: {
        text: "Yes — Conflict-Free HLC CRDT over Google Drive or OneDrive",
        status: "best",
      },
      recall: {
        text: "Single PC lock-in (Copilot+ PCs only)",
        status: "bad",
      },
      rewind: {
        text: "Single Mac / Proprietary cloud lock-in",
        status: "bad",
      },
      pieces: {
        text: "Proprietary cloud account",
        status: "neutral",
      },
      activityWatch: {
        text: "Manual JSON export only (No live sync)",
        status: "bad",
      },
    },
    {
      dimension: "Regulatory Compliance",
      tooltip: "HIPAA, GDPR, and enterprise CISO approval posture",
      minime: {
        text: "HIPAA Safe Harbor 18-PHI + GDPR Art. 17 Crypto-Shredding",
        status: "best",
      },
      recall: {
        text: "Widely banned by enterprise CISOs due to plain text screenshots",
        status: "bad",
      },
      rewind: {
        text: "High HIPAA/GDPR liability from audio & screen records",
        status: "bad",
      },
      pieces: {
        text: "Partial developer redaction filters",
        status: "neutral",
      },
      activityWatch: {
        text: "Unencrypted local storage; no PHI scrubbing",
        status: "neutral",
      },
    },
  ];

  return (
    <section id="comparison" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Category Definition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Competitive Matrix.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Why MiniMe Makes Recall Obsolete.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Compare MiniMe&apos;s privacy-first, zero-screenshot deep memory architecture against
            traditional passive monitors and invasive screenshot recorders.
          </p>
        </div>

        {/* Matrix Table Container */}
        <div className="relative rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/5">
                    Evaluation Matrix
                  </th>
                  {/* MiniMe Header Column */}
                  <th className="py-5 px-6 text-sm font-bold text-white bg-violet-600/15 border-x border-violet-500/30 w-1/4 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />
                    <div className="flex items-center space-x-2">
                      <span className="text-violet-400">⚡</span>
                      <span className="text-white text-base font-extrabold">MiniMe</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Category Winner
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-5 text-sm font-medium text-zinc-400 w-1/6">
                    Microsoft Recall
                  </th>
                  <th className="py-5 px-5 text-sm font-medium text-zinc-400 w-1/6">
                    Rewind / Limitless
                  </th>
                  <th className="py-5 px-5 text-sm font-medium text-zinc-400 w-1/6">
                    Pieces
                  </th>
                  <th className="py-5 px-5 text-sm font-medium text-zinc-400 w-1/6">
                    ActivityWatch
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    {/* Dimension Column */}
                    <td className="py-5 px-6 font-medium text-white align-top">
                      <div className="font-semibold">{row.dimension}</div>
                      <div className="text-xs text-zinc-500 mt-1">{row.tooltip}</div>
                    </td>

                    {/* MiniMe Cell (Glowing) */}
                    <td className="py-5 px-6 bg-violet-600/[0.07] border-x border-violet-500/25 align-top">
                      <div className="flex items-start space-x-2 text-zinc-100 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{row.minime.text}</span>
                      </div>
                    </td>

                    {/* Microsoft Recall */}
                    <td className="py-5 px-5 text-zinc-400 align-top">
                      <div className="flex items-start space-x-2">
                        {row.recall.status === "bad" ? (
                          <X className="w-4 h-4 text-red-400/80 mt-0.5 shrink-0" />
                        ) : (
                          <Minus className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                        )}
                        <span className="leading-snug">{row.recall.text}</span>
                      </div>
                    </td>

                    {/* Rewind / Limitless */}
                    <td className="py-5 px-5 text-zinc-400 align-top">
                      <div className="flex items-start space-x-2">
                        {row.rewind.status === "bad" ? (
                          <X className="w-4 h-4 text-red-400/80 mt-0.5 shrink-0" />
                        ) : (
                          <Minus className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                        )}
                        <span className="leading-snug">{row.rewind.text}</span>
                      </div>
                    </td>

                    {/* Pieces */}
                    <td className="py-5 px-5 text-zinc-400 align-top">
                      <div className="flex items-start space-x-2">
                        <Minus className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                        <span className="leading-snug">{row.pieces.text}</span>
                      </div>
                    </td>

                    {/* ActivityWatch */}
                    <td className="py-5 px-5 text-zinc-400 align-top">
                      <div className="flex items-start space-x-2">
                        {row.activityWatch.status === "bad" ? (
                          <X className="w-4 h-4 text-red-400/80 mt-0.5 shrink-0" />
                        ) : (
                          <Minus className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                        )}
                        <span className="leading-snug">{row.activityWatch.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                MiniMe stores <strong>0 screenshots</strong> and transfers <strong>0 bytes</strong> to any company server.
              </span>
            </div>
            <a
              href="#security"
              className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center"
            >
              <span>Explore Cryptographic Security Specs</span>
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
