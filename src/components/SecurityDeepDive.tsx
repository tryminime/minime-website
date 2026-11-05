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
} from "lucide-react";

export function SecurityDeepDive() {
  const [activeTab, setActiveTab] = useState<"crypto" | "keychain" | "hipaa" | "audit">("crypto");

  const tabs = [
    { id: "crypto", label: "Zero-Knowledge Encryption", icon: Lock },
    { id: "keychain", label: "Hardware DPAPI Keychain", icon: KeyRound },
    { id: "hipaa", label: "HIPAA 18-PHI Scrubber", icon: ShieldCheck },
    { id: "audit", label: "SOC 2 Merkle Audit Ledger", icon: Binary },
  ];

  return (
    <section id="security" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-4">
            <Lock className="w-3.5 h-3.5 mr-1" />
            <span>Zero-Knowledge Cryptographic Specification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Security &amp; Privacy By Proof.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Not By Corporate Pinky Promise.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            We architected MiniMe so that even if our company were subpoenaed, acquired, or
            breached, your data cannot be decoded. Your encryption keys never leave your machine.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-3xl mx-auto mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[160px] flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {/* TAB 1: ZERO KNOWLEDGE CRYPTO */}
            {activeTab === "crypto" && (
              <motion.div
                key="crypto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Client-Side ChaCha20-Poly1305 AEAD
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    End-to-End Encrypted Before Touching Any Cloud Drive
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    Every workstream record, document passage, and code diff is bundled into a
                    compressed `.mmz` payload and encrypted on your CPU using 256-bit
                    ChaCha20-Poly1305 AEAD authenticated encryption before being uploaded to
                    your private Google Drive `appDataFolder` or OneDrive `approot`.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Argon2id Key Derivation:</strong> 64 MB memory cost, 3 iterations, 4 parallelism threads.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Int8 Scalar Quantized ONNX Vectors:</strong> Embeddings generated locally on CPU with zero remote inference required.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Zero Telemetry:</strong> 0 analytics trackers, 0 error pings, 0 external beacons.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Architecture Card */}
                <div className="p-6 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-3">
                  <div className="text-zinc-500 pb-2 border-b border-white/5 flex justify-between">
                    <span>CRYPTOGRAPHIC FLOW PIPELINE</span>
                    <span className="text-emerald-400 font-mono">100% On-Device</span>
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between text-zinc-300">
                    <span>1. Raw Window &amp; Document Text</span>
                    <span className="text-zinc-500">Unencrypted Memory</span>
                  </div>
                  <div className="text-center text-violet-400 text-xs">↓ (HIPAA 18-PHI Auto-Scrubber)</div>
                  <div className="p-2.5 rounded bg-violet-950/30 border border-violet-500/30 flex items-center justify-between text-violet-200">
                    <span>2. Scrubbed Chunks + BLAKE3 Hash</span>
                    <span className="text-violet-400">Dedup &amp; Clean</span>
                  </div>
                  <div className="text-center text-violet-400 text-xs">↓ (ChaCha20-Poly1305 + 256-bit DEK)</div>
                  <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-emerald-200">
                    <span>3. Ciphertext .mmz CRDT Bundles</span>
                    <span className="text-emerald-400">Zero-Knowledge Sync</span>
                  </div>
                  <div className="text-center text-emerald-400 text-xs">↓ (TLS 1.3 Direct to User Drive)</div>
                  <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between text-zinc-400">
                    <span>4. Google Drive / OneDrive Sandbox</span>
                    <span className="text-zinc-500">Invisible to Others</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: HARDWARE DPAPI KEYCHAIN */}
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
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Hardware-Backed Key Storage
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Windows Credential Manager &amp; DPAPI Sealed
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    MiniMe utilizes the native Windows Data Protection API (DPAPI) and Windows
                    Credential Manager backed by your computer&apos;s physical TPM (Trusted
                    Platform Module) chip. Your Data Encryption Key (DEK) is unwrapped exclusively
                    in volatile RAM and is never stored in plaintext on disk.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>TPM-Bound Master Secret:</strong> Keys cannot be extracted even if the physical SSD is cloned.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Passphrase-Wrapped Recovery Key:</strong> Emergency BIP39 24-word recovery seed for cross-device rehydration.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Volatile Memory Only:</strong> DEK wiped from memory upon OS lock or MiniMe shutdown.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-4 text-zinc-300">
                  <div className="text-zinc-500 pb-2 border-b border-white/5 flex justify-between">
                    <span>OS HARDWARE KEYCHAIN STATE</span>
                    <span className="text-cyan-400">Windows 11 CredMgr</span>
                  </div>
                  <div className="p-3 rounded bg-zinc-900 border border-cyan-500/20 space-y-1">
                    <div className="text-xs text-zinc-500">Target Credential Name:</div>
                    <div className="text-cyan-300">minime:vault:personal:dek:v1</div>
                    <div className="text-xs text-zinc-500 pt-1">Persistence:</div>
                    <div className="text-emerald-400">CRED_PERSIST_LOCAL_MACHINE (DPAPI Encrypted)</div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    When you switch users or log out, DPAPI automatically seals the cryptographic
                    context. No background process can access the vault key without an active Win32
                    user token.
                  </p>
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
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    45 CFR § 164.514(b) Compliant
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    18-Identifier Safe Harbor De-Identification
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    Working in medical, clinical, or health tech environments? MiniMe runs an
                    ultra-fast in-process PHI sanitization pipeline across every extracted window
                    title, URL, and document chunk before storing it in SQLite or passing it to any
                    LLM.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>All 18 Identifiers Redacted:</strong> Names, geographic data, dates, phone/fax, emails, SSNs, MRNs, health plan beneficiary IDs, certificate numbers.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>EHR Domain Auto-Blocker:</strong> Automatically silences capture when Epic Systems, Cerner, AthenaHealth, or custom portal domains are in focus.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>Cloud LLM Lock:</strong> Forces 100% on-device Ollama when HIPAA Strict mode is enabled.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-3">
                  <div className="text-zinc-500 pb-2 border-b border-white/5 flex justify-between">
                    <span>LIVE PHI SANITIZATION SAMPLE</span>
                    <span className="text-emerald-400">Deterministic</span>
                  </div>
                  <div className="p-3 rounded bg-red-950/20 border border-red-500/20 text-red-300">
                    <div className="text-xs text-red-400 font-bold mb-1">ORIGINAL VIEWPORT:</div>
                    &quot;Patient Johnathan Doe (MRN: 9482-1029) admitted on 2026-04-12 with hypertension...&quot;
                  </div>
                  <div className="text-center text-zinc-500 text-xs">↓ In-Process Scrubber (&lt;0.1ms)</div>
                  <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
                    <div className="text-xs text-emerald-400 font-bold mb-1">STORED CHUNK &amp; VECTOR:</div>
                    &quot;Patient [REDACTED_NAME] (MRN: [REDACTED_MRN]) admitted on [REDACTED_DATE] with hypertension...&quot;
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: SOC 2 AUDIT LEDGER */}
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
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Cryptographic Audit Verifier
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    BLAKE3 Merkle-Chained Tamper-Evident Ledger
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    Every sync transaction, vault switch, deletion, and AI prompt is logged into a
                    locally chained BLAKE3 Merkle ledger. Any unauthorized modification to the
                    underlying SQLite database breaks the cryptographic hash chain immediately.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>GDPR Article 17 Crypto-Shredding:</strong> Destroying a vault key renders all historic data cryptographically unrecoverable in &lt;50ms.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>GDPR Article 20 Export:</strong> 1-click comprehensive export of your entire history in standardized JSON, Markdown, or CSV.
                      </span>
                    </div>
                    <div className="flex items-start text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>
                        <strong>SIEM &amp; SOC 2 Forwarding:</strong> Enterprise tier supports real-time forwarding to Splunk, Datadog, or AWS CloudWatch.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-3 text-zinc-300">
                  <div className="text-zinc-500 pb-2 border-b border-white/5 flex justify-between">
                    <span>AUDIT MERKLE CHAIN VERIFICATION</span>
                    <span className="text-emerald-400">Verified Valid ✓</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-900 border border-white/5">
                    <div className="text-[11px] text-zinc-500">HEAD BLOCK HASH (BLAKE3):</div>
                    <div className="text-violet-300 font-bold truncate">
                      e82f710a394bc8d748f3992b814a0293a8d4...
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-900 border border-white/5">
                    <div className="text-[11px] text-zinc-500">PREVIOUS BLOCK HASH:</div>
                    <div className="text-zinc-400 truncate">
                      91c0b39f182d847aa038f99e382d921b74a1...
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400 pt-1 flex items-center justify-between">
                    <span>Chain Integrity: <strong className="text-emerald-400">100% Uncompromised</strong></span>
                    <span>1,842 Recorded Events</span>
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
