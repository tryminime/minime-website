import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, AlertTriangle, ArrowLeft, CheckCircle2, FileText, Database, KeyRound, Binary } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | MiniMe - Zero-Knowledge Anti-Recall Architecture",
  description:
    "Official privacy policy for MiniMe. Explaining our zero-knowledge encryption, zero-screenshot guarantee, and mandatory Google Drive and Microsoft Graph OAuth disclosures.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-mono font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span>Back to MiniMe Overview</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-8 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-800 dark:text-emerald-400 mb-4 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>GDPR • HIPAA • CCPA Compliant Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Privacy Policy &amp; OAuth Disclosure
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans">
              Effective Date: <strong>November 7, 2026</strong> • Last Updated: <strong>November 7, 2026</strong>
            </p>
          </div>

          {/* HIGHLIGHTED OAUTH DISCLOSURE CARD (MANDATORY REQUIREMENT) */}
          <div
            id="oauth-disclosure"
            className="mb-12 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-cyan-500/5 to-white dark:from-cyan-950/30 dark:to-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-cyan-500/5 dark:shadow-2xl relative"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-700 dark:text-cyan-300">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Mandatory Third-Party Cloud OAuth Disclosure
                </h2>
                <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 font-semibold">
                  Google Drive (drive.appdata) &amp; Microsoft Graph (Files.ReadWrite.AppFolder)
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
              <p>
                MiniMe allows users to optionally synchronize encrypted backup checkpoints and workstream
                deltas across their own personal devices using their own existing cloud storage accounts:
                <strong> Google Drive</strong> or <strong>Microsoft OneDrive</strong>.
              </p>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/10 space-y-3">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Exact Scopes Requested and Their Purpose:</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm">
                  <li>
                    <code className="text-cyan-800 dark:text-cyan-300 bg-white dark:bg-white/5 px-1.5 py-0.5 rounded font-mono font-bold">
                      https://www.googleapis.com/auth/drive.appdata
                    </code>
                    : Strictly used to read and write application configuration and client-side encrypted{" "}
                    <code>.mmz</code> delta files within Google Drive&apos;s hidden, app-sandboxed{" "}
                    <code>appDataFolder</code>.
                  </li>
                  <li>
                    <code className="text-cyan-800 dark:text-cyan-300 bg-white dark:bg-white/5 px-1.5 py-0.5 rounded font-mono font-bold">
                      Files.ReadWrite.AppFolder
                    </code>
                    : Strictly used to read and write encrypted delta bundles within Microsoft OneDrive&apos;s
                    isolated application folder (<code>Apps/MiniMe</code>).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-violet-500/10 dark:bg-violet-950/30 border border-violet-500/30 text-violet-950 dark:text-violet-200 space-y-2">
                <div className="font-bold flex items-center space-x-2 text-slate-900 dark:text-white">
                  <Lock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <span>Our Absolute Zero-Access Guarantee:</span>
                </div>
                <p className="text-xs sm:text-sm">
                  <strong>
                    Neither MiniMe Inc., nor our employees, nor any third party ever inspects, reads,
                    accesses, transfers, stores, or sells your files or data.
                  </strong>{" "}
                  All data written to your cloud drive is encrypted on your local computer using client-side
                  ChaCha20-Poly1305 symmetric AEAD before transmission. MiniMe does not maintain servers that
                  hold your encryption keys. Therefore, your cloud backups are completely unreadable to anyone
                  other than you on your authenticated hardware.
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-zinc-400">
                You can revoke MiniMe&apos;s access at any time directly through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 dark:text-cyan-400 underline hover:text-cyan-800 dark:hover:text-cyan-300 font-medium"
                >
                  Google Account Permissions
                </a>{" "}
                or{" "}
                <a
                  href="https://account.microsoft.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 dark:text-cyan-400 underline hover:text-cyan-800 dark:hover:text-cyan-300 font-medium"
                >
                  Microsoft Account Privacy Dashboard
                </a>
                .
              </p>
            </div>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-10 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                1. Core Architectural Privacy Principles
              </h2>
              <p>
                MiniMe was created in explicit opposition to invasive surveillance tools like Microsoft
                Recall. Our architecture adheres to the following non-negotiable principles:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">Zero Screenshots &amp; Zero Video:</strong> We do not take
                  periodic desktop snapshots, record pixel buffers, or capture webcam streams.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Zero Keyloggers:</strong> MiniMe contains zero keystroke
                  capture hooks. Document content is ingested only through structured Win32 file system parsers and dwell-gated accessibility readers.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Zero Central Databases:</strong> There is no central cloud
                  vector database hosting your memory records. All SQLite files and Int8 embedding indices exist solely on your local hard drive.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                2. Enterprise Cryptography &amp; Key Storage
              </h2>
              <p>
                Master encryption keys are derived on your computer using Argon2id with 64 MiB RAM, 3 iterations, and 4 parallel threads.
                Keys are wrapped using the hardware-enforced Windows Data Protection API (DPAPI) and stored in your user profile.
                When your computer is locked (Win + L), volatile memory is immediately sanitized using Rust <code className="text-violet-700 dark:text-violet-300 font-mono font-bold">Zeroizing&lt;T&gt;</code> primitives.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                3. HIPAA Safe Harbor &amp; Clinical Protections
              </h2>
              <p>
                MiniMe incorporates an automated 18-identifier HIPAA Safe Harbor de-identification engine.
                Names, Medical Record Numbers (MRNs), Social Security Numbers, addresses, and dates are redacted
                before document passages are embedded or stored in SQLite. Clinical EHR window titles (Epic, Cerner, AthenaHealth)
                are blocked by default.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                4. GDPR Article 17 Cryptographic Shredding
              </h2>
              <p>
                Under GDPR Article 17, you have the right to erasure. MiniMe implements instant cryptographic shredding in &lt; 50ms:
                destroying the Data Encryption Keys renders all local database rows and cloud .mmz backup bundles mathematically undecodable forever.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                5. Contact &amp; Data Protection Officer
              </h2>
              <p>
                If you have questions about our zero-knowledge architecture, contact our Data Protection Officer at:
                <br />
                <a href="mailto:privacy@tryminime.com" className="text-violet-700 dark:text-violet-400 font-mono font-semibold underline">
                  privacy@tryminime.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
