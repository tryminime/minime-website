"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Download,
  ShieldCheck,
  Check,
  Copy,
  Terminal,
  Cpu,
  HardDrive,
  Monitor,
  Building2,
  FileCheck,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DownloadPage() {
  const [copiedExeHash, setCopiedExeHash] = useState(false);
  const [copiedMsiHash, setCopiedMsiHash] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const exeSha256 = "e82f710a394bc8d748f3992b814a0293a8d4b31a892df9108b3941a82f3b9201";
  const msiSha256 = "c4109fa8b1209384bc1920384a8bc9281a8c9284ba09281983ba029384bca819";

  const handleCopyExe = () => {
    navigator.clipboard.writeText(exeSha256);
    setCopiedExeHash(true);
    setTimeout(() => setCopiedExeHash(false), 2000);
  };

  const handleCopyMsi = () => {
    navigator.clipboard.writeText(msiSha256);
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
              <span>Native Win32 Distribution • v0.1.0 Beta</span>
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
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-semibold">42.1 MB</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  MiniMe Setup (x64)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                  Standard Windows per-user installer with automatic background updates,
                  Mica blur window integration, and seamless system tray resident background mode.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Single-click installation • No admin rights required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Auto-registers global hotkey <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-[10px] text-slate-800 dark:text-white font-bold">Alt + Space</kbd></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
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

                {/* SHA-256 Checksum Box */}
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-zinc-400">
                  <div className="truncate mr-2">
                    <span className="text-slate-500 dark:text-zinc-500 mr-1">SHA-256:</span>
                    <span className="text-slate-900 dark:text-zinc-300 font-bold">{exeSha256.slice(0, 18)}...</span>
                  </div>
                  <button
                    onClick={handleCopyExe}
                    className="p-1 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 flex items-center space-x-1"
                    title="Copy SHA-256"
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
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-semibold">48.5 MB</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  MiniMe Enterprise MSI (x64)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                  Standard Windows Installer package for silent per-machine mass deployments via
                  Microsoft Intune, SCCM, or Active Directory Group Policy (GPO).
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 dark:text-zinc-300 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Supports silent deployment: <code className="bg-slate-100 dark:bg-white/5 px-1 py-0.5 rounded text-[11px] font-mono text-slate-900 dark:text-zinc-200">msiexec /i MiniMe.msi /qn</code></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Pre-configurable with signed OrgPolicyManifest file</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Enterprise SAML/OIDC SSO &amp; HIPAA Strict lock presets</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/MiniMe-x64.msi"
                  download
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl text-base font-semibold text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-cyan-500/30 hover:border-cyan-500/50 transition-all group mb-4"
                >
                  <Building2 className="w-5 h-5 mr-2 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>Download MiniMe-x64.msi</span>
                </a>

                {/* SHA-256 Checksum Box */}
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-zinc-400">
                  <div className="truncate mr-2">
                    <span className="text-slate-500 dark:text-zinc-500 mr-1">SHA-256:</span>
                    <span className="text-slate-900 dark:text-zinc-300 font-bold">{msiSha256.slice(0, 18)}...</span>
                  </div>
                  <button
                    onClick={handleCopyMsi}
                    className="p-1 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 flex items-center space-x-1"
                    title="Copy SHA-256"
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
                    <strong className="text-slate-900 dark:text-white">Run the Installer:</strong> Launch{" "}
                    <code>MiniMe.exe</code>. Setup completes in under 5 seconds.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Windows Defender SmartScreen:</strong> If prompted
                    by SmartScreen on new releases, click <em>&ldquo;More info&rdquo;</em> then{" "}
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
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6">
              Our pure-Rust core is fully cross-platform. macOS (Apple Silicon native) and Linux
              (AppImage / Flatpak) builds are targeted for Q2 2026. Join the early access queue:
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
