"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  KeyRound,
  CheckCircle2,
  Binary,
  CloudOff,
  Stethoscope,
} from "lucide-react";

type SecurityTab = "keychain" | "byoc" | "hipaa" | "audit";

export function SecurityDeepDive() {
  const [activeTab, setActiveTab] = useState<SecurityTab>("keychain");

  const tabs = [
    { id: "keychain", label: "1. Device-Locked Keys", icon: KeyRound },
    { id: "byoc", label: "2. Your Own Cloud Sync", icon: CloudOff },
    { id: "hipaa", label: "3. HIPAA PHI Redaction", icon: Stethoscope },
    { id: "audit", label: "4. Instant Data Erasure", icon: Binary },
  ];

  return (
    <section id="security" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-300 mb-4 font-semibold">
            <Lock className="w-3.5 h-3.5 mr-1" />
            <span>Zero-Knowledge Privacy Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Private by Math.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Your Keys Never Leave Your PC.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            MiniMe cannot read, browse, or hand over your memory because we never host your files or hold your encryption keys.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/85 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 backdrop-blur-xl max-w-3xl mx-auto mb-8 shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SecurityTab)}
                className={`flex-1 min-w-[165px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                    : "text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
          <AnimatePresence mode="wait">
            {activeTab === "keychain" && (
              <motion.div
                key="keychain"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/30">
                    Windows DPAPI + Argon2id + AEAD Encryption
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Protected by Your Windows Hardware Enclave
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    Your encryption keys are sealed inside Windows Data Protection (DPAPI), and optional passphrase keys use
                    memory-hard Argon2id derivation paired with XChaCha20-Poly1305 and ChaCha20-Poly1305 encryption.
                  </p>
                  <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Locking Windows (Win + L) immediately wipes active keys from memory (&lt; 1ms)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Sensitive text, code diffs, and decisions are encrypted on disk with per-row authentication</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 text-xs">
                  <div className="text-xs font-mono text-slate-700 dark:text-zinc-300 font-bold pb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span>Key Protection Flow</span>
                    <span className="text-emerald-800 dark:text-emerald-300">Local Hardware Only</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-violet-800 dark:text-violet-300 font-bold font-mono">1. Sealed to Your Windows Login</div>
                    <div className="text-slate-700 dark:text-zinc-300">DPAPI hardware enclave unwraps vault keys only inside your active signed-in session.</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-cyan-800 dark:text-cyan-300 font-bold font-mono">2. Authenticated Encryption at Rest</div>
                    <div className="text-slate-700 dark:text-zinc-300">Vault records and synced backup files are authenticated with ChaCha20-Poly1305 AEAD.</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-rose-800 dark:text-rose-300 font-bold font-mono">3. Instant Wipe on Screen Lock</div>
                    <div className="text-slate-700 dark:text-zinc-300">Pressing Win + L zeroes out volatile encryption keys in under 1 millisecond.</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "byoc" && (
              <motion.div
                key="byoc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30">
                    Google Drive (App Data) • OneDrive • Local NAS
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bring Your Own Cloud — Syncs ~1.54 MB Per Year
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    Instead of uploading your life to vendor servers, MiniMe encrypts compact sync bundles locally and saves them
                    to a hidden, app-isolated folder inside your own Google Drive or OneDrive.
                  </p>
                  <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Compressed 22.12x with deduplication—an entire year takes ~1.54 MB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Each device rebuilds AI search embeddings locally—no bloated uploads</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-4">
                  <div className="text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 pb-2 border-b border-slate-200 dark:border-white/10">
                    Annual Cloud Storage Comparison
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-slate-700 dark:text-zinc-300 mb-1">
                        <span>Screenshot Recorders</span>
                        <span className="font-bold">50 GB – 100+ GB / yr</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 dark:bg-zinc-500" style={{ width: "100%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-emerald-800 dark:text-emerald-300 mb-1">
                        <span>MiniMe Encrypted .mmz Deltas</span>
                        <span className="font-bold">~1.54 MB / yr</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: "4.5%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200">
                    Fits inside free personal cloud storage forever—readable only by your authenticated devices.
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "hipaa" && (
              <motion.div
                key="hipaa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                    HIPAA 45 CFR § 164.514(b)(2) Safe Harbor
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Automatic Clinical PHI Redaction &amp; EHR Blockers
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    Built so doctors, researchers, and legal teams never leak sensitive client records. Patient names, MRNs,
                    SSNs, dates, and emails are scrubbed automatically before indexing, and 18 clinical EHR portals are excluded by default.
                  </p>
                  <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Redacts 18 HIPAA Safe Harbor identifiers before embeddings or storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Blocks Epic, Cerner, AthenaHealth, NextGen &amp; eClinicalWorks windows automatically</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 font-mono text-xs">
                  <div className="text-xs text-slate-700 dark:text-zinc-300 font-bold pb-2 border-b border-slate-200 dark:border-white/10">
                    Live Safe Harbor Redaction Example
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-slate-700 dark:text-zinc-300 uppercase">Source Passage:</div>
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-900 dark:text-red-200 text-[11px]">
                      Patient: John Doe (MRN: 8492019, DOB: 04/12/1982, Email: j.doe@clinic.org) evaluated for arrhythmia.
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] text-slate-700 dark:text-zinc-300 uppercase">Saved Locally After Redaction:</div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200 text-[11px]">
                      [REDACTED_PHI_PATIENT] (MRN: [REDACTED_MRN], DOB: [REDACTED_PHI_DATE], Email: [REDACTED_EMAIL]) evaluated for arrhythmia.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "audit" && (
              <motion.div
                key="audit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                    GDPR Article 17 &amp; 20 • SOC 2 Audit Chain
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Erase Everything Permanently in Under 50ms
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    Every sensitive action is logged in a local tamper-evident BLAKE3 hash chain. When you trigger vault
                    erasure under GDPR Article 17, MiniMe rotates and destroys the encryption keys and truncates WAL logs
                    in under 50ms—or lets you export everything in one click as portable JSON.
                  </p>
                  <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>Instant cryptographic vault erasure (&lt; 50ms)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>One-click full JSON data export (GDPR Article 20 portability)</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 text-xs">
                  <div className="text-xs font-mono text-slate-700 dark:text-zinc-300 font-bold pb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span>Compliance Controls</span>
                    <span className="text-emerald-800 dark:text-emerald-300">Tamper-Evident</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-mono font-bold text-slate-900 dark:text-white">Cryptographic Erasure Receipt</div>
                    <div className="text-slate-700 dark:text-zinc-300">Rotates DPAPI DEK, clears relational rows, truncates SQLite WAL, and records a verifiable purge receipt.</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-mono font-bold text-slate-900 dark:text-white">Split-Horizon Vault Isolation</div>
                    <div className="text-slate-700 dark:text-zinc-300">Keeps personal notes strictly separate from organization workspaces with domain-separated BLAKE3 audit chains.</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
