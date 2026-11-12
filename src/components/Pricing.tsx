"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Shield, Building2, User, ArrowRight, CheckCircle2 } from "lucide-react";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Honest, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sovereign by Default.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Powerful for Teams.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            MiniMe&apos;s core desktop engine—including BYOC zero-knowledge sync to your own Google Drive or OneDrive, on-device GGUF/ONNX AI, and the 8-tool MCP server—is 100% free and sovereign. Upgrade for managed relay presets or enterprise dual-vault governance.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <span
              className={`text-sm font-semibold ${
                !annual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-zinc-400"
              }`}
            >
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-slate-200 dark:bg-white/10 p-1 relative transition-colors border border-slate-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-violet-600 transition-transform shadow-md ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold flex items-center space-x-1.5 ${
                annual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-zinc-400"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* TIER 1: SOVEREIGN ($0 FREE FOREVER) */}
          <div className="rounded-2xl p-8 bg-white/80 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-slate-400 dark:hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Sovereign Tier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/10">
                  Individual
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
                <span className="text-slate-500 dark:text-zinc-400 text-sm font-medium">Free Forever</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 mb-6 font-sans leading-relaxed">
                Full local-first desktop twin with optional zero-knowledge BYOC sync to your own Google Drive or OneDrive and local GGUF/extractive AI.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pure-Rust Document, Diff &amp; Workspace Intel Ingestion (&lt; 0.2% CPU)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>FastEmbed Int8 ONNX + CSR PageRank (837.4µs) + 6-Head TD-RRF</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Personal BYOC Sync to Google Drive (appData) / OneDrive / NAS (22.12x zstd)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Universal rmcp 3.8.0 stdio server (all 8 tools incl. record_decision)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Global Alt + Space Spotlight HUD &amp; Dual-Surface Studio (58% / 42%)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero screenshots, 0 video frames, 0 keyloggers installed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/download"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl border border-slate-300 dark:border-white/10 transition-colors whitespace-nowrap"
              >
                <span>Download Sovereign Free</span>
              </Link>
            </div>
          </div>

          {/* TIER 2: PRO BYOC ($8/MO ANNUALLY OR $10/MO MONTHLY) - HIGHLIGHTED */}
          <div className="rounded-2xl p-8 bg-gradient-to-b from-violet-500/10 via-white/95 to-white/90 dark:from-violet-950/30 dark:via-zinc-950/90 dark:to-zinc-950 border-2 border-violet-500/50 backdrop-blur-xl flex flex-col justify-between shadow-2xl shadow-violet-500/10 dark:shadow-violet-950/40 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-violet-600 text-white shadow-md">
              MULTI-DEVICE &amp; POWER WORKFLOWS
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-800 dark:text-violet-300">
                  Pro Power Tier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 font-semibold">
                  Priority Cloud &amp; Support
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  {annual ? "$8" : "$10"}
                </span>
                <span className="text-slate-700 dark:text-zinc-300 text-sm font-medium">/ month</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 mb-6 font-sans leading-relaxed">
                Optional upgrade for automated multi-device conflict presets, curated GGUF model mirrors, and priority beta builds—while core BYOC stays free.
              </p>

              <div className="space-y-3 pt-4 border-t border-violet-500/20 text-xs text-slate-700 dark:text-zinc-300">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-violet-700 dark:text-violet-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900 dark:text-white">Everything in Sovereign Free (incl. BYOC &amp; 8 MCP Tools), plus:</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-device HLC sync scheduling &amp; automated rolling snapshot compaction</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Priority signed Windows updates &amp; early cross-platform previews</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Curated GGUF model weights mirror &amp; automated fallback tuning</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Governed BYOK Cloud Synthesis behind AI Compliance Firewall</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct priority engineering support channel</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/download"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-600/30 border border-violet-400/20 transition-all"
              >
                <span>Start 14-Day Pro Trial</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* TIER 3: ENTERPRISE ($20/USER/MO) */}
          <div className="rounded-2xl p-8 bg-white/80 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-slate-400 dark:hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Enterprise Tier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 font-semibold">
                  Organizations
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$20</span>
                <span className="text-slate-500 dark:text-zinc-400 text-sm font-medium">/ user / mo</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 font-sans leading-relaxed">
                Dual-Vault Split Horizon, cryptographic isolation, SOC 2 BLAKE3 audit ledgers, and HIPAA compliance for engineering &amp; clinical teams.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300">
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900 dark:text-white">Everything in Pro BYOC, plus:</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dual-Vault Split-Horizon (Personal Sovereign ↔ Org Workspace)</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Smart Routing based on Git remotes, repo URLs &amp; folder trees</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>SOC 2 Type II BLAKE3 hash-chained append-only audit ledger</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>GDPR Article 17 cryptographic key shredding in &lt; 50ms</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Signed HIPAA Business Associate Agreement (BAA) &amp; MSI deployment</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="mailto:enterprise@tryminime.com?subject=Enterprise%20Inquiry%20for%20MiniMe"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl border border-slate-300 dark:border-white/10 transition-colors"
              >
                <span>Contact Enterprise Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
