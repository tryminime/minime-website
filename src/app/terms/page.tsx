import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Terms of Service | MiniMe - Sovereign Digital Twin",
  description:
    "Terms of Service governing the use of MiniMe desktop software, cloud relay signaling, and website.",
};

export default function TermsPage() {
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-800 dark:text-violet-400 mb-4 font-semibold">
              <FileText className="w-3.5 h-3.5 mr-1" />
              <span>Legal Agreement &amp; User Sovereignty</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-sans">
              Effective Date: <strong>November 7, 2026</strong> • Last Updated: <strong>November 7, 2026</strong>
            </p>
          </div>

          <div className="space-y-10 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, accessing, or using MiniMe (the &ldquo;Software&rdquo;) or
                the website located at tryminime.com (the &ldquo;Site&rdquo;), provided by MiniMe Inc.
                (&ldquo;MiniMe,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree
                to be legally bound by these Terms of Service. If you do not agree to these terms, do not
                install or use the Software.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                2. Software License &amp; User Data Ownership
              </h2>
              <p>
                Subject to these Terms, MiniMe grants you a revocable, non-exclusive, non-transferable,
                limited license to install and run the Software on compatible operating systems (Windows 10/11 x64).
              </p>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>100% User Data Sovereignty:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  You retain 100% ownership, title, and intellectual property rights to all documents,
                  code diffs, notes, vectors, and chat transcripts generated or processed by MiniMe on
                  your devices. MiniMe claims zero copyright, licensing rights, or proprietary interest in your data.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                3. Bring Your Own Cloud (BYOC) &amp; Keys (BYOK)
              </h2>
              <p>
                MiniMe operates on a Bring Your Own Cloud model:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 dark:text-zinc-300">
                <li>
                  <strong className="text-slate-900 dark:text-white">Cloud Storage:</strong> You are responsible for maintaining
                  your own Google Drive or Microsoft OneDrive account and abiding by their respective terms of service.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">API Keys:</strong> If you supply your own API keys for
                  commercial third-party LLMs (Anthropic Claude, OpenAI GPT, Google Gemini), you are solely responsible
                  for API consumption charges incurred on those accounts.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                4. Acceptable Use Policy
              </h2>
              <p>
                You agree not to reverse engineer, decompile, or disassemble the binary distribution
                for malicious purposes, nor use the Software to infringe third-party intellectual property rights
                or violate applicable healthcare privacy regulations (such as HIPAA) when operating in shared corporate environments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                5. Contact Information
              </h2>
              <p>
                For questions regarding these Terms, contact:
                <br />
                <a href="mailto:legal@tryminime.com" className="text-violet-700 dark:text-violet-400 font-mono font-semibold underline">
                  legal@tryminime.com
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
