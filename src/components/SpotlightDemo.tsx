"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  FileText,
  GitCommit,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Code2,
  FolderLock,
  Layers,
  FileCode,
  FileSpreadsheet,
  FileBox,
  Terminal,
  ShieldAlert,
} from "lucide-react";

type DemoMode = "search" | "chat" | "standup";

export function SpotlightDemo() {
  const [activeMode, setActiveMode] = useState<DemoMode>("search");
  const [activeVault, setActiveVault] = useState<"personal" | "org">("personal");
  const [copied, setCopied] = useState(false);
  const [query, setQuery] = useState("");

  const handleCopyStandup = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="spotlight-demo" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 mr-1" />
            <span>0ms Latency Omnibar • Windows 11 Mica Blur</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Floating Spotlight HUD.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              One Keypress Away from Everything.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Press <kbd className="px-2 py-1 text-xs font-mono bg-white/10 rounded border border-white/10 text-white">Alt</kbd> +{" "}
            <kbd className="px-2 py-1 text-xs font-mono bg-white/10 rounded border border-white/10 text-white">Space</kbd> anywhere on your system.
            Search extracted PDFs, live Git diffs, or chat with your digital twin in real-time.
          </p>

          {/* Interactive Mode Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-xl mx-auto">
            <button
              onClick={() => {
                setActiveMode("search");
                setQuery("");
              }}
              className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === "search"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Search className="w-4 h-4" />
              <span>1. Deep Search</span>
            </button>

            <button
              onClick={() => {
                setActiveMode("chat");
                setQuery("What was the penalty clause in the vendor contract?");
              }}
              className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === "chat"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>2. Quick-Ask Chat</span>
            </button>

            <button
              onClick={() => {
                setActiveMode("standup");
                setQuery("/standup today");
              }}
              className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === "standup"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>3. Standup Gen</span>
            </button>
          </div>
        </div>

        {/* Mock Desktop Window Frame with Spotlight Floating Over It */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-zinc-950/80 shadow-2xl shadow-violet-950/30">
          {/* Simulated IDE / Desktop Background (faded) */}
          <div className="p-4 sm:p-6 bg-zinc-950/90 font-mono text-xs text-zinc-600 border-b border-white/5 select-none opacity-40 blur-[0.5px]">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-zinc-500 text-xs ml-2">crates/minime-daemon/src/sessionizer.rs — Visual Studio Code</span>
            </div>
            <p className="text-zinc-500">1  use crate::db::document_chunks::DocumentArtifact;</p>
            <p className="text-zinc-500">2  use blake3::Hash;</p>
            <p className="text-zinc-500">3  pub async fn process_active_window(window_id: HWND) -&gt; Result&lt;()&gt; &#123;</p>
            <p className="text-zinc-500">4      let active_chunk = extract_pdf_headings(window_id)?;</p>
            <p className="text-zinc-500">5      // HIPAA Safe Harbor 18-PHI automatic scrubber pipeline</p>
          </div>

          {/* Floating Spotlight HUD Container */}
          <div className="relative p-3 sm:p-8 -mt-16 sm:-mt-24 z-20 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl bg-[#09090b]/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/80 overflow-hidden ring-1 ring-violet-500/20">
              {/* Omnibar Header Bar */}
              <div className="p-3.5 sm:p-4 border-b border-white/10 flex items-center justify-between gap-3 bg-white/[0.02]">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    {activeMode === "search" && <Search className="w-4 h-4" />}
                    {activeMode === "chat" && <MessageSquare className="w-4 h-4 text-cyan-400" />}
                    {activeMode === "standup" && <Sparkles className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={
                      activeMode === "search"
                        ? "Vendor_Agreement termination clause breach notice"
                        : activeMode === "chat"
                        ? "What was the termination clause in @doc:Vendor_Contract.pdf?"
                        : "/standup today --include-git-diffs"
                    }
                    className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder-zinc-500 focus:outline-none"
                  />
                </div>

                {/* Vault Toggle & Esc Pill */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveVault(activeVault === "personal" ? "org" : "personal")}
                    className={`hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border transition-all ${
                      activeVault === "personal"
                        ? "bg-violet-500/10 text-violet-300 border-violet-500/30"
                        : "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                    }`}
                  >
                    <FolderLock className="w-3 h-3 mr-1" />
                    <span>{activeVault === "personal" ? "Personal Vault" : "Org Workspace"}</span>
                  </button>

                  <span className="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-white/5 rounded border border-white/10">
                    ESC
                  </span>
                </div>
              </div>

              {/* Scope Filters Row */}
              <div className="px-4 py-2 border-b border-white/5 bg-black/40 flex items-center space-x-2 overflow-x-auto text-xs">
                <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-mono">Scope:</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono text-[11px]">
                  @doc
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 hover:text-white border border-white/10 font-mono text-[11px] cursor-pointer">
                  @file
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 hover:text-white border border-white/10 font-mono text-[11px] cursor-pointer">
                  @project:MiniMe
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 font-mono text-[11px]">
                  @today
                </span>
                <span className="ml-auto text-[11px] text-zinc-500 hidden sm:inline">
                  Hybrid RAG • Int8 ONNX Vectors
                </span>
              </div>

              {/* Dynamic Content based on Active Mode */}
              <div className="p-4 sm:p-5 min-h-[320px] bg-zinc-950/70">
                <AnimatePresence mode="wait">
                  {/* MODE 1: INSTANT DEEP SEARCH */}
                  {activeMode === "search" && (
                    <motion.div
                      key="search-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-medium text-zinc-400 flex items-center justify-between pb-1">
                        <span>3 document matches found across 45,210 indexed chunks</span>
                        <span className="text-emerald-400 font-mono">0.4ms FTS5 + BLAKE3</span>
                      </div>

                      {/* Result 1: PDF Extracted Heading */}
                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-violet-500/30 hover:border-violet-500/60 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-xs">
                              PDF
                            </span>
                            <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                              Vendor_Master_Services_Agreement_2026.pdf
                            </span>
                          </div>
                          <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                            Section 14.2 • Page 7
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                          &ldquo;...either party may terminate this Agreement upon{" "}
                          <mark className="bg-violet-500/30 text-violet-200 px-1 rounded">
                            thirty (30) business days written breach notice
                          </mark>{" "}
                          if material cure has not been established within sixty (60) calendar days...&rdquo;
                        </p>
                        <div className="mt-2 flex items-center space-x-3 text-[11px] text-zinc-500">
                          <span>Opened in Adobe Acrobat • 14 mins ago</span>
                          <span>•</span>
                          <span className="text-emerald-400">Zero Screenshots Captured</span>
                        </div>
                      </div>

                      {/* Result 2: Git Diff in Code File */}
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs">
                              RUST
                            </span>
                            <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                              crates/minime-daemon/src/auth/token_refresh.rs
                            </span>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            +48 / -4 lines
                          </span>
                        </div>
                        <p className="text-xs font-mono text-zinc-400 leading-relaxed bg-black/40 p-2 rounded border border-white/5">
                          + pub async fn handle_notice_expiry(claims: &amp;JwtClaims) -&gt; Result&lt;()&gt; &#123; <br />
                          + &nbsp;&nbsp;log_termination_event(&quot;breach_notice_acknowledged&quot;).await?;
                        </p>
                      </div>

                      {/* Result 3: Word Document Spec */}
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="p-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs">
                              DOCX
                            </span>
                            <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                              Enterprise_Security_Remediation_Plan.docx
                            </span>
                          </div>
                          <span className="text-xs font-mono text-zinc-500">Heading 3 • 2 hours ago</span>
                        </div>
                        <p className="text-xs text-zinc-400">
                          Identified breach disclosure SLA requirement aligned with Section 14.2 guidelines.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* MODE 2: QUICK-ASK CHAT */}
                  {activeMode === "chat" && (
                    <motion.div
                      key="chat-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* AI Boundary Tag */}
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
                        <span className="text-zinc-400">Response synthesized from 2 verified document chunks</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                          100% On-Device Ollama (qwen2.5:3b)
                        </span>
                      </div>

                      {/* Streaming AI Answer Card */}
                      <div className="p-4 rounded-xl bg-white/[0.04] border border-cyan-500/30 text-zinc-200 text-sm leading-relaxed space-y-3">
                        <p>
                          Under Section 14.2 of the agreement, either party may terminate for cause upon{" "}
                          <strong className="text-white">30 business days&apos; written notice</strong> if a material
                          breach is not cured.
                        </p>
                        <p className="text-xs text-zinc-300">
                          Additionally, in the event of an uncured breach involving cloud service uptime falling
                          below 99.9%, liquidated damages of 15% monthly license credit apply automatically.
                        </p>

                        {/* Citation Chips */}
                        <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono">
                            <FileText className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                            [Vendor_Contract.pdf • Page 7]
                          </span>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-300 font-mono">
                            <Code2 className="w-3.5 h-3.5 mr-1.5 text-violet-400" />
                            [auth/token_refresh.rs:142]
                          </span>
                          <button className="ml-auto text-xs text-zinc-400 hover:text-white flex items-center space-x-1">
                            <span>Open In PDF Viewer</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODE 3: STANDUP GENERATOR */}
                  {activeMode === "standup" && (
                    <motion.div
                      key="standup-mode"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
                        <span className="text-zinc-400">
                          Aggregated from 7 Git commits, 4 modified files, and 3 reviewed PDFs
                        </span>
                        <button
                          onClick={handleCopyStandup}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 transition-all font-mono text-xs"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                          <span>{copied ? "Copied to Clipboard!" : "Copy Standup"}</span>
                        </button>
                      </div>

                      {/* Formatted Markdown Standup Card */}
                      <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/30 font-mono text-xs space-y-3 text-zinc-300">
                        <div>
                          <span className="text-emerald-400 font-bold block mb-1">
                            🚀 Yesterday / What I Did:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1">
                            <li>
                              Completed Pure-Rust PDF &amp; Docx ingestor parser with BLAKE3 deduplication (
                              <code className="text-violet-300">+284 / -38 lines</code> in `crates/minime-daemon`).
                            </li>
                            <li>
                              Implemented Argon2id key-wrapping and Windows DPAPI credential storage for DEK unwrap.
                            </li>
                            <li>
                              Reviewed and cited termination obligations in `Vendor_Master_Agreement.pdf` (Page 7).
                            </li>
                          </ul>
                        </div>

                        <div>
                          <span className="text-cyan-400 font-bold block mb-1">
                            🎯 Today / What I&apos;m Doing:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1">
                            <li>
                              Finalizing zstd columnar dictionary compression for Google Drive &amp; OneDrive CRDT sync.
                            </li>
                            <li>
                              Enforcing HIPAA 18-PHI redaction gate prior to local SQLite WAL writes.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <span className="text-red-400 font-bold block mb-1">
                            🛑 Blockers:
                          </span>
                          <p className="text-zinc-400 pl-1">
                            None. All 142 integration tests passing locally with 0ms leak footprint.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Omnibar Footer Bar */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded mr-1 text-zinc-300">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded mr-1 text-zinc-300">↵</kbd> Select
                  </span>
                  <span className="flex items-center">
                    <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded mr-1 text-zinc-300">Tab</kbd> Quick-Ask
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  MiniMe v0.1.0 • Win32 Hook Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
