"use client";

import React from "react";
import { Check, X, Sparkles, CheckCircle2, Minus } from "lucide-react";

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
      dimension: "How It Captures Work",
      tooltip: "Privacy & capture method on your PC",
      minime: {
        text: "Reads open docs & diffs directly (0 screenshots)",
        status: "best",
      },
      recall: { text: "Continuous desktop screenshots", status: "bad" },
      rewind: { text: "Screen video + microphone recording", status: "bad" },
      pieces: { text: "IDE extensions + clipboard OCR", status: "neutral" },
      activityWatch: { text: "Window titles & URLs only", status: "neutral" },
      notion: { text: "Cloud pages only (blind to PC)", status: "bad" },
    },
    {
      dimension: "Understands Docs & Code?",
      tooltip: "PDF pages, Office files & code changes",
      minime: {
        text: "Exact PDF pages, Office docs & working-tree diffs",
        status: "best",
      },
      recall: { text: "Via screenshot pixel OCR", status: "neutral" },
      rewind: { text: "Via video OCR & transcripts", status: "neutral" },
      pieces: { text: "Code snippets only", status: "neutral" },
      activityWatch: { text: "No document reading", status: "bad" },
      notion: { text: "Only notes typed in Notion", status: "neutral" },
    },
    {
      dimension: "Where Your Data Lives",
      tooltip: "Ownership & backup control",
      minime: {
        text: "On your PC + your encrypted Drive / OneDrive",
        status: "best",
      },
      recall: { text: "Local image store; Copilot tied", status: "neutral" },
      rewind: { text: "Vendor cloud infrastructure", status: "bad" },
      pieces: { text: "Local + vendor cloud sync", status: "neutral" },
      activityWatch: { text: "Unencrypted local SQLite", status: "neutral" },
      notion: { text: "Vendor cloud servers", status: "bad" },
    },
    {
      dimension: "Storage & System Load",
      tooltip: "CPU, RAM & annual sync size",
      minime: {
        text: "< 0.2% CPU • < 35 MB daemon (~85 MB GUI) • ~1.54 MB/yr sync",
        status: "best",
      },
      recall: { text: "50 – 100 GB screenshots + NPU load", status: "bad" },
      rewind: { text: "100+ GB video files & battery drain", status: "bad" },
      pieces: { text: "~150 – 300 MB RAM • 1 – 5 GB cache", status: "neutral" },
      activityWatch: { text: "~20 – 50 MB RAM • 50 – 200 MB/yr", status: "good" },
      notion: { text: "Cloud hosted • Electron/browser memory", status: "neutral" },
    },
    {
      dimension: "Search, Projects & AI Agents",
      tooltip: "Studio, Alt+Space, Decisions & MCP",
      minime: {
        text: "Studio chat, Alt+Space, project intel & 8-tool MCP",
        status: "best",
      },
      recall: { text: "Windows timeline search only", status: "bad" },
      rewind: { text: "In-app search only", status: "bad" },
      pieces: { text: "IDE copilot & snippets", status: "neutral" },
      activityWatch: { text: "Time charts only (no AI)", status: "bad" },
      notion: { text: "Workspace Q&A only", status: "neutral" },
    },
    {
      dimension: "Healthcare & Compliance",
      tooltip: "PHI redaction, keys & erasure",
      minime: {
        text: "18-ID HIPAA scrubber, DPAPI keys, < 50ms wipe",
        status: "best",
      },
      recall: { text: "Frequently restricted by security teams", status: "bad" },
      rewind: { text: "Captures screen/audio to cloud", status: "bad" },
      pieces: { text: "No HIPAA Safe Harbor redaction", status: "bad" },
      activityWatch: { text: "Logs raw window titles unredacted", status: "neutral" },
      notion: { text: "Requires enterprise BAA tier", status: "neutral" },
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-300 mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Side-by-Side Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why MiniMe Beats{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Screen Recorders.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            Get better answers from your actual files and code without sacrificing gigabytes of storage or exposing sensitive screens.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[860px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                  <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 w-1/4">
                    What Matters
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider ${
                        c.highlight
                          ? "bg-violet-600/10 dark:bg-violet-600/20 text-violet-800 dark:text-violet-300 border-x border-violet-500/30"
                          : "text-slate-700 dark:text-zinc-300"
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
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-900 dark:text-white">
                      <div>{row.dimension}</div>
                      <div className="text-[11px] font-normal text-slate-700 dark:text-zinc-300 mt-0.5">
                        {row.tooltip}
                      </div>
                    </td>

                    <td className="p-4 sm:p-5 bg-violet-600/[0.04] dark:bg-violet-600/[0.07] border-x border-violet-500/20 font-medium text-slate-900 dark:text-zinc-100">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-violet-900 dark:text-violet-200">
                          {row.minime.text}
                        </span>
                      </div>
                    </td>

                    {[row.recall, row.rewind, row.pieces, row.activityWatch, row.notion].map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 sm:p-5 text-slate-700 dark:text-zinc-300">
                        <div className="flex items-start space-x-2">
                          {cell.status === "bad" ? (
                            <X className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                          ) : cell.status === "good" ? (
                            <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <Minus className="w-4 h-4 text-slate-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                          )}
                          <span>{cell.text}</span>
                        </div>
                      </td>
                    ))}
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
