"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Download,
  Check,
  Copy,
  Terminal,
  Monitor,
  Building2,
  FileCheck,
} from "lucide-react";

export default function DownloadPage() {
  const [copiedExeHash, setCopiedExeHash] = useState(false);
  const [copiedMsiHash, setCopiedMsiHash] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const exeVerifyCommand = "Get-FileHash <MiniMe-x64-setup>.exe -Algorithm SHA256";
  const msiVerifyCommand = "Get-FileHash <MiniMe-x64>.msi -Algorithm SHA256";

  const handleCopyExe = () => {
    navigator.clipboard.writeText(exeVerifyCommand);
    setCopiedExeHash(true);
    setTimeout(() => setCopiedExeHash(false), 2000);
  };

  const handleCopyMsi = () => {
    navigator.clipboard.writeText(msiVerifyCommand);
    setCopiedMsiHash(true);
    setTimeout(() => setCopiedMsiHash(false), 2000);
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-700 dark:text-violet-400 mb-4">
              <Download className="w-3.5 h-3.5 mr-1" />
              <span>Windows 10 &amp; 11 (64-bit) • v0.1.0 Beta</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Download MiniMe for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
                Windows.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
              Run the full cognitive digital twin locally on your PC. 100% offline-capable,
              non-invasive deep document memory, and zero-knowledge synchronization.
            </p>
          </div>

          {/* Download Packages Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Card 1: Standard Windows Installer (EXE) */}
            <div className="rounded-2xl border-2 border-violet-500/40 bg-gradient-to-b from-violet-500/5 via-white to-white dark:from-violet-950/20 dark:via-zinc-950/80 dark:to-zinc-950/90 p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                    Recommended for Most Users
                  </span>
                  <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">Standard Installer (.exe)</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  MiniMe Setup (x64)
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                  Standard Windows per-user NSIS installer target with Tauri desktop integration,
                  Mica blur window styling, and system tray resident background mode.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                    <span>Single-click NSIS installation • No admin rights required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                    <span>Auto-registers global hotkey <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-[10px] text-slate-900 dark:text-white font-bold">Alt + Space</kbd></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                    <span>Includes pure-Rust parsers for PDF, Word, Excel &amp; Code</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://www.tryminime.com/downloads/MiniMe.exe"
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 border border-violet-400/30 transition-all group mb-4 whitespace-nowrap"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Download MiniMe.exe (x64)</span>
                </a>

                {/* SHA-256 Verification Command Box */}
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                  <div className="truncate mr-2">
                    <span className="text-slate-700 dark:text-zinc-400 mr-1">Verify:</span>
                    <span className="text-slate-900 dark:text-zinc-200 font-bold">{exeVerifyCommand}</span>
                  </div>
                  <button
                    onClick={handleCopyExe}
                    className="p-1 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 flex items-center space-x-1"
                    title="Copy SHA-256 verification command"
                  >
                    {copiedExeHash ? (
                      <span className="text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">Copied!</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Enterprise MSI Package */}
            <div
              id="enterprise"
              className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] p-8 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20">
                    Enterprise &amp; IT Admins
                  </span>
                  <span className="text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">Enterprise Package (.msi)</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  MiniMe Enterprise MSI (x64)
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                  Standard Windows Installer package target for silent per-machine deployments via
                  Microsoft Intune, SCCM, or Active Directory Group Policy (GPO).
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <span>Supports silent deployment: <code className="bg-slate-100 dark:bg-white/5 px-1 py-0.5 rounded text-[11px] font-mono text-slate-900 dark:text-zinc-200">msiexec /i MiniMe.msi /qn</code></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <span>Policy-managed exclusions &amp; HIPAA Safe Harbor scrubbing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <span>Hardware DPAPI keys, SOC 2 BLAKE3 ledger &amp; &lt; 50ms crypto-shred</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="mailto:enterprise@tryminime.com?subject=MiniMe%20Enterprise%20MSI%20Deployment"
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-base font-semibold text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-cyan-500/30 hover:border-cyan-500/50 transition-all group mb-4"
                >
                  <Building2 className="w-5 h-5 mr-2 text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Request Enterprise MSI &amp; Intune Kit</span>
                </a>

                {/* SHA-256 Verification Command Box */}
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                  <div className="truncate mr-2">
                    <span className="text-slate-700 dark:text-zinc-400 mr-1">Verify:</span>
                    <span className="text-slate-900 dark:text-zinc-200 font-bold">{msiVerifyCommand}</span>
                  </div>
                  <button
                    onClick={handleCopyMsi}
                    className="p-1 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 flex items-center space-x-1"
                    title="Copy SHA-256 verification command"
                  >
                    {copiedMsiHash ? (
                      <span className="text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">Copied!</span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Developer Verification & Local Build */}
          <details
            id="source-build-verify"
            className="max-w-5xl mx-auto mb-16 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl group"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between text-sm font-bold text-slate-900 dark:text-white">
              <span className="inline-flex items-center space-x-2.5">
                <Terminal className="w-4 h-4 text-violet-700 dark:text-violet-400 shrink-0" />
                <span>Developer &amp; IT Verification: SHA-256 Checksum &amp; Source Build</span>
              </span>
              <span className="text-xs font-mono text-slate-600 dark:text-zinc-400">
                Click to expand
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                Verify your downloaded Windows installer checksum in PowerShell or build reproducible binaries directly from the Rust + Tauri v2 workspace:
              </p>
              <pre className="p-3 rounded-xl bg-slate-900 text-emerald-300 text-xs font-mono overflow-x-auto border border-slate-700">
{`Get-FileHash MiniMe.exe -Algorithm SHA256
# Optional reproducible source build:
cargo tauri build --bundles nsis,msi`}
              </pre>
            </div>
          </details>

          {/* System Requirements & Walkthrough */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* System Requirements */}
            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl shadow-md">
              <div className="flex items-center space-x-2 text-violet-700 dark:text-violet-400 mb-4">
                <Monitor className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Requirements</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-sans">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mr-2.5 mt-2 shrink-0" />
                  <span>
                    <strong>Operating System:</strong> Windows 10 (version 21H2 or later) or Windows 11 (all 64-bit editions).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mr-2.5 mt-2 shrink-0" />
                  <span>
                    <strong>Architecture:</strong> x64 (AMD64 / Intel 64-bit) or ARM64 (Snapdragon X Elite via Prism emulation).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mr-2.5 mt-2 shrink-0" />
                  <span>
                    <strong>Memory &amp; CPU Footprint:</strong> &lt; 0.2% background CPU, &lt; 35 MB resident RAM footprint.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mr-2.5 mt-2 shrink-0" />
                  <span>
                    <strong>AI Acceleration (Optional):</strong> Embedded FastEmbed ONNX runs on standard CPU; optional local Ollama/LM Studio.
                  </span>
                </li>
              </ul>
            </div>

            {/* 3-Step Walkthrough */}
            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl shadow-md">
              <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-400 mb-4">
                <FileCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Installation Walkthrough</h3>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-sans">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-violet-600/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Run the Windows Installer:</strong> Launch{" "}
                    <code className="font-mono font-semibold">MiniMe.exe</code> (64-bit) &mdash; setup takes under 30 seconds with zero cloud telemetry.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Windows Defender SmartScreen:</strong> On initial pre-release
                    local builds, click <em>&ldquo;More info&rdquo;</em> then{" "}
                    <em>&ldquo;Run anyway&rdquo;</em>.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Press Alt + Space:</strong> The floating Spotlight
                    HUD will appear instantly. Your digital twin begins silently indexing your opened files without taking screenshots.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* macOS & Linux Waitlist */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-300 dark:border-white/10 bg-gradient-to-r from-violet-500/5 via-white to-cyan-500/5 dark:from-violet-950/20 dark:via-zinc-950/60 dark:to-cyan-950/20 p-8 backdrop-blur-xl text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Looking for macOS or Linux?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 mb-6">
              MiniMe&apos;s native engine is cross-platform, with Apple Silicon (macOS) and Linux (AppImage / Flatpak) desktop packages following the Windows release. Join the early access queue:
            </p>

            {waitlistSubmitted ? (
              <div className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                <Check className="w-4 h-4" />
                <span>You&apos;re on the priority waitlist! We&apos;ll notify you first.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shrink-0 shadow-lg shadow-violet-600/25"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
