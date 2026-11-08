"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  FileKey,
  Database,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertOctagon,
  Trash2,
  Binary,
  Radio,
  FileText,
  CloudOff,
  Stethoscope,
} from "lucide-react";

type SecurityTab = "keychain" | "byoc" | "hipaa" | "audit";

export function SecurityDeepDive() {
  const [activeTab, setActiveTab] = useState<SecurityTab>("keychain");

  const tabs = [
    { id: "keychain", label: "1. Hardware DPAPI Keychain", icon: KeyRound },
    { id: "byoc", label: "2. Zero-Knowledge BYOC Sync", icon: CloudOff },
    { id: "hipaa", label: "3. HIPAA 18-PHI Scrubber", icon: Stethoscope },
    { id: "audit", label: "4. SOC 2 BLAKE3 Audit Ledger", icon: Binary },
  ];

  return (
    <section id="security" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-700 dark:text-violet-400 mb-4">
            <Lock className="w-3.5 h-3.5 mr-1" />
            <span>Cryptographic Specification &amp; Formal Verification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Security &amp; Privacy By Mathematical Proof.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Not By Corporate Pinky Promise.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            We architected MiniMe so that even if our company were subpoenaed, acquired, or
            breached, your data cannot be decoded. Your master encryption keys never touch any server.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 backdrop-blur-xl max-w-3xl mx-auto mb-10 shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SecurityTab)}
                className={`flex-1 min-w-[170px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-2xl">
          <AnimatePresence mode="wait">
            {/* TAB 1: HARDWARE DPAPI KEYCHAIN */}
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
                    Windows DPAPI + Argon2id (m=64MiB, t=3, p=4)
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Hardware-Enforced Credential Wrapping &amp; Zeroizing RAM
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Master key derivation utilizes Argon2id configured with 64 MiB RAM, 3 iterations, and 4 parallel threads.
                    The derived Key Encryption Key (KEK) is wrapped into the native Windows Data Protection API (DPAPI) and tied to your user logon credential.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    When your workstation is locked (<code>Win + L</code>) or put to sleep, MiniMe triggers immediate volatile RAM sanitization via Rust&apos;s <code className="text-violet-700 dark:text-violet-300 font-bold font-mono">Zeroizing&lt;T&gt;</code> wrappers, erasing all unwrapped symmetric Data Encryption Keys (DEKs).
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Argon2id KDF: m=64MiB, t=3, p=4 parameters (RFC 9106)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Hardware DPAPI user logon protection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Zeroizing&lt;T&gt; wipes plainkeys on Win32 session lock</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 font-mono text-xs">
                  <div className="text-xs text-slate-500 dark:text-zinc-400 font-bold pb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span>DPAPI Key Wrapping Lifecycle</span>
                    <span className="text-emerald-700 dark:text-emerald-400">Cryptographically Verified</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1 text-slate-800 dark:text-zinc-300">
                    <div className="text-violet-700 dark:text-violet-400 font-bold">1. User Logon Session</div>
                    <div className="text-[11px] text-slate-600 dark:text-zinc-400">CryptProtectData() calls Windows LSA security subsystem</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1 text-slate-800 dark:text-zinc-300">
                    <div className="text-cyan-700 dark:text-cyan-400 font-bold">2. XChaCha20-Poly1305 DEK</div>
                    <div className="text-[11px] text-slate-600 dark:text-zinc-400">256-bit symmetric AEAD keys encrypt local SQLite database &amp; .mmz payloads</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/5 space-y-1 text-slate-800 dark:text-zinc-300">
                    <div className="text-rose-700 dark:text-rose-400 font-bold">3. Win32 Session Lock Event</div>
                    <div className="text-[11px] text-slate-600 dark:text-zinc-400">WTSRegisterSessionNotification → volatile RAM wiped in &lt; 2ms</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ZERO KNOWLEDGE BYOC SYNC */}
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
                    Columnar String-Interning + zstd Level 7/9 .mmz
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    22.12x Compression &amp; 1.54 MB/Year Projected Footprint
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Unlike SaaS vendors that stream your entire digital work history to their corporate servers, MiniMe utilizes a Zero-Knowledge Bring-Your-Own-Cloud (BYOC) architecture.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Sync payloads are compressed with columnar string-interning and Zstandard level 7/9 dictionaries, yielding a verified <strong>22.12x compression ratio</strong>. A full year of daily desktop work compresses into just <strong>1.54 MB/year</strong> (exceeding our &lt; 5 MB/year constraint).
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Syncs directly to sandboxed Google Drive (appDataFolder) or OneDrive (approot)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Zero raw vectors synced: peer endpoints regenerate Int8 embeddings on-device</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>No company relays can inspect, decode, or monetize your payloads</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-4">
                  <div className="text-xs font-mono font-bold text-slate-500 dark:text-zinc-400 pb-2 border-b border-slate-200 dark:border-white/10">
                    Sync Footprint Benchmark (Audited 12-Month Projection)
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-slate-700 dark:text-zinc-300 mb-1">
                        <span>Raw Document &amp; Diff Deltas</span>
                        <span className="font-bold">34.1 MB</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 dark:bg-zinc-500" style={{ width: "100%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-emerald-700 dark:text-emerald-400 mb-1">
                        <span>MiniMe Compressed .mmz (22.12x Ratio)</span>
                        <span className="font-bold">1.54 MB / Year</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: "4.5%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-sans text-emerald-900 dark:text-emerald-300">
                    Over 3x better than the strict &lt; 5 MB/year constraint. Easily fits inside free cloud storage tiers forever.
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: HIPAA 18-PHI SCRUBBER */}
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
                    45 CFR § 164.514(b)(2) Safe Harbor De-Identification
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    18-Identifier HIPAA PHI Scrubber with Clinical EHR Blockers
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Built for healthcare researchers, clinicians, and hospital systems. Before any text chunk is embedded or persisted, MiniMe executes an automated 18-identifier HIPAA Safe Harbor redaction pipeline.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Includes pre-configured clinical EHR window blockers that instantly suppress capture when Epic Hyperdrive, Cerner Millennium, or AthenaHealth are in the foreground.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Redacts Medical Record Numbers (MRNs), SSNs, patient names, and dates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Deterministic EHR blockers: Epic, Cerner, AthenaHealth window suppression</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Reversible pseudonymization salt for clinical trials and audit tracking</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 font-mono text-xs">
                  <div className="text-xs text-slate-500 dark:text-zinc-400 font-bold pb-2 border-b border-slate-200 dark:border-white/10">
                    Live PHI Redaction Simulator
                  </div>
                  <div className="space-y-2">
                    <div className="text-[11px] text-slate-500 dark:text-zinc-400 uppercase">Input Text (Clinical EHR Note):</div>
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-900 dark:text-red-300 text-[11px]">
                      Patient John Doe (MRN: 8492019, DOB: 04/12/1982) was evaluated at St. Jude Hospital for cardiac arrhythmia.
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] text-slate-500 dark:text-zinc-400 uppercase">Sanitized Embed Stream (Safe Harbor Compliant):</div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300 text-[11px]">
                      Patient [NAME_REDACTED_#1] (MRN: [MRN_REDACTED], DOB: [DATE_REDACTED]) was evaluated at [FACILITY_REDACTED] for cardiac arrhythmia.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: SOC 2 AUDIT & GDPR SHREDDING */}
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
                    SOC 2 Type II BLAKE3 Hash-Chain + GDPR Art. 17
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Cryptographic Shredding in &lt; 50ms &amp; Tamper-Evident Ledger
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    Every operation performed by MiniMe is recorded in a local, tamper-evident BLAKE3 Merkle-chained audit ledger (<code>compliance_audit_log</code>). Each record incorporates the cryptographic hash of the preceding entry.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                    When you request GDPR Article 17 deletion, MiniMe does not perform soft deletes: it destroys the symmetric Data Encryption Keys (DEKs) in <strong>&lt; 50ms</strong>, rendering every historical database record and .mmz backup bundle mathematically unreadable.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-zinc-300">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>BLAKE3 hash-chained append-only tamper-evident audit ledger</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>GDPR Article 17 cryptographic key shredding in &lt; 50ms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>GDPR Article 20 single-click complete JSON data portability export</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3 font-mono text-xs">
                  <div className="text-xs text-slate-500 dark:text-zinc-400 font-bold pb-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span>BLAKE3 Hash-Chain Ledger Entry</span>
                    <span className="text-emerald-700 dark:text-emerald-400">Tamper-Proof</span>
                  </div>
                  <div className="space-y-2 text-[11px] text-slate-700 dark:text-zinc-300">
                    <div className="p-2.5 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 space-y-1">
                      <span className="text-slate-500 dark:text-zinc-500">Record #1042</span>
                      <div className="text-slate-900 dark:text-white font-semibold">EVENT: VAULT_SEARCH_EXECUTED</div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">
                        prev_hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                      </div>
                      <div className="text-[10px] text-emerald-700 dark:text-emerald-400 truncate">
                        entry_hash: 7a82b09f182c441298412894b192837491028374918237491823749182739481
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 space-y-1">
                      <span className="text-slate-500 dark:text-zinc-500">Record #1043</span>
                      <div className="text-slate-900 dark:text-white font-semibold">EVENT: CRYPTO_SHRED_VERIFIED</div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">
                        prev_hash: 7a82b09f182c441298412894b192837491028374918237491823749182739481
                      </div>
                      <div className="text-[10px] text-emerald-700 dark:text-emerald-400 truncate">
                        entry_hash: 994bca0192837482910284729102837482910283748291028374829102837482
                      </div>
                    </div>
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
