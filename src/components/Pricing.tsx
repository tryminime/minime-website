"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Shield, Building2, User, ArrowRight } from "lucide-react";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Honest, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sovereign by Default.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Powerful for Teams.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            MiniMe is 100% free and sovereign for personal use. Upgrade for cloud relay signaling,
            governed BYOK endpoints, or enterprise governance.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <span
              className={`text-sm font-medium ${
                !annual ? "text-white" : "text-zinc-500"
              }`}
            >
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors border border-white/10 focus:outline-none"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-violet-500 transition-transform shadow-md ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center space-x-1.5 ${
                annual ? "text-white" : "text-zinc-500"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* TIER 1: SOVEREIGN ($0 FREE) */}
          <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                  Sovereign Tier
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-zinc-300 border border-white/10">
                  Individual
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-zinc-400 text-sm">Free Forever</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                100% on-device digital twin with zero subscription fees, zero cloud databases, and
                unlimited document parsing.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-zinc-300">
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>100% Local-First Engine (Pure-Rust, &lt;35 MB RAM)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Unlimited PDFs, Word, Excel &amp; 45+ Code Languages</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>BYOC Google Drive &amp; OneDrive Sync (&lt;5 MB/yr)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Tier 1 Local Ollama &amp; LM Studio integration ($0 cost)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Tier 3 Offline Extractive RAG Synthesizer</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Spotlight HUD (Alt + Space) &amp; 24h Flow Ribbon</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Zero telemetry, zero tracking, zero company servers</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/download"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all text-center"
              >
                <span>Download Free for Windows</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* TIER 2: PRO POWER USER ($12/MO OR $120/YR) */}
          <div className="rounded-2xl p-8 bg-gradient-to-b from-violet-900/30 via-zinc-950/80 to-zinc-950/90 border-2 border-violet-500/50 backdrop-blur-xl flex flex-col justify-between shadow-2xl shadow-violet-900/20 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white border border-violet-400/40 shadow-lg shadow-violet-600/40">
              MOST POPULAR
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-violet-300 uppercase tracking-wider font-bold">
                  Pro Power User
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Power User
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-white">
                  ${annual ? "10" : "12"}
                </span>
                <span className="text-zinc-400 text-sm">
                  / user / month {annual && "(billed $120/yr)"}
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                For developers, researchers, and professionals who demand instant multi-device
                rehydration and governed frontier cloud AI.
              </p>

              <div className="space-y-3 pt-4 border-t border-violet-500/20 text-xs text-zinc-200">
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">Everything in Sovereign Tier, plus:</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Sub-2-second multi-device cloud relay signaling</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>
                    Governed BYOK Cloud AI (Claude 3.7, GPT-4.5, Gemini 2.0 Pro)
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Universal MCP server for Cursor and Claude Desktop</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Automatic daily standup &amp; weekly retrospective export</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Cross-device context rehydration (1-click resume)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-violet-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Priority Discord community &amp; developer support</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/download"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 transition-all text-center"
              >
                <span>Get Pro for Windows</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* TIER 3: ENTERPRISE WORKSPACE ($29/SEAT/MO) */}
          <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                  Enterprise Workspace
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Organizations
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-extrabold text-white">
                  ${annual ? "24" : "29"}
                </span>
                <span className="text-zinc-400 text-sm">/ seat / month</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Complete split-horizon isolation, signed policy manifests, and compliance tooling
                for healthcare, legal, and financial teams.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-zinc-300">
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">Everything in Pro, plus:</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Dual-Vault Split Horizon (Personal ↔ Org Workspace)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Cryptographically signed OrgPolicyManifest governance</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>SAML 2.0 / OIDC SSO (Okta, Azure AD, Google)</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>SOC 2 BLAKE3 Merkle-chain audit log SIEM export</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Enterprise MSI package for silent Intune / GPO deploy</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                  <span>Executed HIPAA Business Associate Agreement (BAA)</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/download#enterprise"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-cyan-500/20 hover:border-cyan-500/40 transition-all text-center"
              >
                <span>Deploy Enterprise MSI</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
