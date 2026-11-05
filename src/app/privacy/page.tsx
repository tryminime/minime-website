import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, AlertTriangle, ArrowLeft, CheckCircle2, FileText, Database } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | MiniMe - Zero-Knowledge Anti-Recall Architecture",
  description:
    "Official privacy policy for MiniMe. Explaining our zero-knowledge encryption, zero-screenshot guarantee, and mandatory Google Drive and Microsoft Graph OAuth disclosures.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              <span>Back to MiniMe Overview</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>GDPR • HIPAA • CCPA Compliant</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy &amp; OAuth Disclosure
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-400">
              Effective Date: <strong>November 5, 2026</strong> • Last Updated: <strong>November 5, 2026</strong>
            </p>
          </div>

          {/* HIGHLIGHTED OAUTH DISCLOSURE CARD (MANDATORY REQUIREMENT) */}
          <div
            id="oauth-disclosure"
            className="mb-12 rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 to-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Mandatory Third-Party Cloud OAuth Disclosure
                </h2>
                <span className="text-xs font-mono text-cyan-400">
                  Google Drive (drive.appdata) &amp; Microsoft Graph (Files.ReadWrite.AppFolder)
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              <p>
                MiniMe allows users to optionally synchronize encrypted backup checkpoints and workstream
                deltas across their own personal devices using their own existing cloud storage accounts:
                <strong> Google Drive</strong> or <strong>Microsoft OneDrive</strong>.
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3">
                <div className="font-semibold text-white flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exact Scopes Requested and Their Purpose:</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-300 text-xs sm:text-sm">
                  <li>
                    <code className="text-cyan-300 bg-white/5 px-1.5 py-0.5 rounded">
                      https://www.googleapis.com/auth/drive.appdata
                    </code>
                    : Strictly used to read and write application configuration and client-side encrypted{" "}
                    <code>.mmz</code> delta files within Google Drive&apos;s hidden, app-sandboxed{" "}
                    <code>appDataFolder</code>.
                  </li>
                  <li>
                    <code className="text-cyan-300 bg-white/5 px-1.5 py-0.5 rounded">
                      Files.ReadWrite.AppFolder
                    </code>
                    : Strictly used to read and write encrypted delta bundles within Microsoft OneDrive&apos;s
                    isolated application folder (<code>Apps/MiniMe</code>).
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/30 text-violet-200 space-y-2">
                <div className="font-bold flex items-center space-x-2 text-white">
                  <Lock className="w-4 h-4 text-violet-400" />
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

              <p className="text-xs text-zinc-400">
                You can revoke MiniMe&apos;s access at any time directly through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  Google Account Permissions
                </a>{" "}
                or{" "}
                <a
                  href="https://account.microsoft.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  Microsoft Account Privacy Dashboard
                </a>
                .
              </p>
            </div>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                1. Core Architectural Privacy Principles
              </h2>
              <p>
                MiniMe was created in explicit opposition to invasive surveillance tools like Microsoft
                Recall. Our architecture adheres to the following non-negotiable principles:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-white">Zero Screenshots &amp; Zero Video:</strong> We do not take
                  periodic desktop snapshots, record pixel buffers, or capture webcam streams.
                </li>
                <li>
                  <strong className="text-white">Zero Keyloggers:</strong> We never capture raw keyboard keystrokes
                  or input buffers.
                </li>
                <li>
                  <strong className="text-white">Local-First Persistence:</strong> All documents, code AST
                  diffs, session intervals, and Int8 ONNX vector embeddings are stored locally in an SQLite
                  Write-Ahead-Log (WAL) database on your local machine.
                </li>
                <li>
                  <strong className="text-white">Zero Centralized Corporate Database:</strong> We operate no
                  database of user work activities. There is nothing to breach or compromise on our end.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Data We Process on Your Local Device
              </h2>
              <p>
                To provide semantic search and conversational memory, the MiniMe desktop daemon processes
                the following categories of information strictly on your local computer:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong className="text-white">Foreground Window Metadata:</strong> Active application
                  process name (e.g. `code.exe`, `WINWORD.EXE`), window title, and active duration.
                </li>
                <li>
                  <strong className="text-white">Document &amp; File Contents:</strong> When an active local
                  file is focused for &gt;= 5 seconds, MiniMe extracts text from PDFs (`.pdf`), Word (`.docx`),
                  PowerPoint (`.pptx`), Excel (`.xlsx`), and code files.
                </li>
                <li>
                  <strong className="text-white">Semantic Edit Diffs:</strong> Line count deltas (`+lines / -lines`)
                  and active Git repository branch names.
                </li>
                <li>
                  <strong className="text-white">Dwell-Gated Accessibility Text:</strong> Bounded visible
                  accessibility text (`&lt;= 16 KB`) from browser tabs when dwell exceeds 8 seconds. Password fields,
                  private browsing windows, and known electronic health record (EHR) portals are strictly excluded.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. HIPAA Safe Harbor De-Identification (45 CFR § 164.514(b))
              </h2>
              <p>
                MiniMe includes a built-in automated 18-identifier HIPAA Safe Harbor scrubber. Before any
                window metadata, URL, or document chunk is committed to local SQLite storage or provided to
                an AI model, the following identifiers are sanitized:
              </p>
              <p className="text-xs font-mono bg-white/[0.03] p-3 rounded-lg border border-white/5 text-zinc-400">
                Names • Geographic subdivisions • All dates related to an individual • Telephone numbers • Fax
                numbers • Email addresses • Social Security Numbers • Medical Record Numbers (MRNs) • Health
                plan beneficiary numbers • Account numbers • Certificate/license numbers • Vehicle identifiers •
                Device serial numbers • Web URLs • IP addresses • Biometric identifiers • Full-face photos.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. GDPR Rights &amp; Cryptographic Shredding (Articles 15, 17, 20)
              </h2>
              <p>
                We believe in true technological data sovereignty. MiniMe provides the following tools:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong className="text-white">Article 17 (Right to Erasure / Crypto-Shredding):</strong> You
                  can trigger instantaneous cryptographic deletion of any vault. Destroying the Data Encryption
                  Key renders all encrypted cloud chunks and local databases mathematically irreversible within 50ms.
                </li>
                <li>
                  <strong className="text-white">Article 20 (Right to Data Portability):</strong> Export your
                  entire workstream memory, document chunks, and standups in standard open JSON, Markdown, or CSV.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Contact &amp; Data Protection Officer (DPO)
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise any legal rights,
                contact our security team at:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-zinc-300">
                MiniMe Inc. — Privacy &amp; Cryptographic Security Team<br />
                Email: <a href="mailto:privacy@tryminime.com" className="text-violet-400 hover:underline">privacy@tryminime.com</a><br />
                Address: 548 Market St, Suite 89201, San Francisco, CA 94104
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
