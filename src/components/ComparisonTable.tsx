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
    { name: "Notion AI", highlight: false },
  ];

  const rows = [
    {
      dimension: "Observation Method",
      tooltip: "How digital workflows are observed on your machine",
      minime: {
        text: "Win32 OS Metadata + Pure-Rust Document Parsers (0 Screenshots)",
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
      notion: {
        text: "Cloud wiki only (blind to local desktop & code)",
        status: "bad",
      },
    },
    {
      dimension: "Understands Document Content?",
      tooltip: "Ability to extract headings, pages, code diffs, and slides",
      minime: {
        text: "Yes — Exact Page, Slide, Heading Text & Line AST Diffs",
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
      notion: {
        text: "Only pages typed directly into Notion",
        status: "neutral",
      },
    },
    {
      dimension: "Conversational Chat Surfaces",
      tooltip: "Where and how you can query your work memory",
      minime: {
        text: "4 Surfaces (Studio Canvas, Spotlight HUD, Active-Doc, Universal MCP)",
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
        text: "None — Raw dashboard charts only",
        status: "bad",
      },
      notion: {
        text: "Notion app sidebar only",
        status: "neutral",
      },
    },
    {
      dimension: "Annual Storage Footprint",
      tooltip: "Disk and sync storage consumed per year of daily use",
      minime: {
        text: "1.54 MB / year (22.12x zstd columnar compression)",
        status: "best",
      },
      recall: {
        text: "50 GB – 100 GB (bloats disk with raw images)",
        status: "bad",
      },
      rewind: {
        text: "100+ GB (massive video & audio compression buffers)",
        status: "bad",
      },
      pieces: {
        text: "1 GB – 5 GB (local SQLite snippet cache)",
        status: "neutral",
      },
      activityWatch: {
        text: "50 MB – 200 MB (local SQLite time tracking)",
        status: "good",
      },
      notion: {
        text: "Hosted on Notion cloud servers",
        status: "neutral",
      },
    },
    {
      dimension: "Cryptographic Security",
      tooltip: "Encryption guarantees protecting your private data",
      minime: {
        text: "Zero-Knowledge BYOC, Hardware DPAPI, Argon2id, <50ms GDPR shred",
        status: "best",
      },
      recall: {
        text: "Plaintext SQLite historically; CISO banned",
        status: "bad",
      },
      rewind: {
        text: "Proprietary cloud servers (centralized target)",
        status: "bad",
      },
      pieces: {
        text: "Local/cloud hybrid with proprietary sync",
        status: "neutral",
      },
      activityWatch: {
        text: "Unencrypted local SQLite database",
        status: "neutral",
      },
      notion: {
        text: "Standard cloud encryption (Notion holds keys)",
        status: "bad",
      },
    },
    {
      dimension: "Universal MCP Protocol",
      tooltip: "Support for Model Context Protocol stdio server",
      minime: {
        text: "Official rmcp 3.8.0 stdio server with 7 tools (Cursor/Claude)",
        status: "best",
      },
      recall: {
        text: "No MCP support (Microsoft ecosystem lock-in)",
        status: "bad",
      },
      rewind: {
        text: "No MCP support",
        status: "bad",
      },
      pieces: {
        text: "Proprietary plugin extensions only",
        status: "neutral",
      },
      activityWatch: {
        text: "REST API only (no MCP server)",
        status: "neutral",
      },
      notion: {
        text: "Cloud webhook / REST API only",
        status: "neutral",
      },
    },
    {
      dimension: "Resource Footprint",
      tooltip: "CPU and memory consumed while running in the background",
      minime: {
        text: "< 0.2% CPU • < 35 MB RAM (Pure-Rust Daemon)",
        status: "best",
      },
      recall: {
        text: "High NPU/GPU & CPU load for continuous OCR",
        status: "bad",
      },
      rewind: {
        text: "High CPU & battery drain (continuous video encoding)",
        status: "bad",
      },
      pieces: {
        text: "Moderate (~150 MB – 300 MB RAM)",
        status: "neutral",
      },
      activityWatch: {
        text: "Low (~20 MB – 50 MB RAM, Python/Rust)",
        status: "good",
      },
      notion: {
        text: "Heavy Electron / Chromium tab consumption",
        status: "bad",
      },
    },
    {
      dimension: "HIPAA & Healthcare Readiness",
      tooltip: "Protection for Protected Health Information (PHI)",
      minime: {
        text: "18-ID Safe Harbor Scrubber + EHR Window Blockers",
        status: "best",
      },
      recall: {
        text: "Prohibited by hospital CISOs (captures patient charts)",
        status: "bad",
      },
      rewind: {
        text: "Violates HIPAA (records medical audio/screens to cloud)",
        status: "bad",
      },
      pieces: {
        text: "No built-in HIPAA Safe Harbor scrubbing",
        status: "bad",
      },
      activityWatch: {
        text: "No scrubbing (records EHR window titles verbatim)",
        status: "neutral",
      },
      notion: {
        text: "Requires enterprise BAA contract",
        status: "neutral",
      },
    },
  ];

  return (
    <section id="comparison" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-700 dark:text-violet-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Competitive Architectural Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How MiniMe Outclasses
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Invasive &amp; Screenshot-Based Tools.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            A direct, honest comparison across architecture, privacy, multi-device sync, and system efficiency.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 w-1/4">
                    Architectural Dimension
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider ${
                        c.highlight
                          ? "bg-violet-600/10 dark:bg-violet-600/20 text-violet-800 dark:text-violet-300 border-x border-violet-500/30"
                          : "text-slate-700 dark:text-zinc-400"
                      }`}
                    >
                      <div className="flex items-center space-x-1.5">
                        {c.logo && <span>{c.logo}</span>}
                        <span>{c.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">
                      <div>{row.dimension}</div>
                      <div className="text-[11px] font-normal text-slate-500 dark:text-zinc-400 mt-0.5">
                        {row.tooltip}
                      </div>
                    </td>

                    {/* MINIME COLUMN */}
                    <td className="p-4 sm:p-5 bg-violet-600/[0.04] dark:bg-violet-600/[0.07] border-x border-violet-500/20 font-medium text-slate-900 dark:text-zinc-100">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-violet-900 dark:text-violet-200">
                          {row.minime.text}
                        </span>
                      </div>
                    </td>

                    {/* RECALL COLUMN */}
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-start space-x-2">
                        {row.recall.status === "bad" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.recall.text}</span>
                      </div>
                    </td>

                    {/* REWIND COLUMN */}
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-start space-x-2">
                        {row.rewind.status === "bad" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.rewind.text}</span>
                      </div>
                    </td>

                    {/* PIECES COLUMN */}
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-start space-x-2">
                        {row.pieces.status === "bad" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : row.pieces.status === "good" ? (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.pieces.text}</span>
                      </div>
                    </td>

                    {/* ACTIVITYWATCH COLUMN */}
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-start space-x-2">
                        {row.activityWatch.status === "bad" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : row.activityWatch.status === "good" ? (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.activityWatch.text}</span>
                      </div>
                    </td>

                    {/* NOTION AI COLUMN */}
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-zinc-400">
                      <div className="flex items-start space-x-2">
                        {row.notion.status === "bad" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.notion.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
