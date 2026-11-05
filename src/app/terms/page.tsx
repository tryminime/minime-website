import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | MiniMe - Sovereign Digital Twin",
  description:
    "Terms of Service governing the use of MiniMe desktop software, cloud relay signaling, and website.",
};

export default function TermsPage() {
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-4">
              <FileText className="w-3.5 h-3.5 mr-1" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-400">
              Effective Date: <strong>November 5, 2026</strong> • Last Updated: <strong>November 5, 2026</strong>
            </p>
          </div>

          <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
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
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                2. Software License &amp; Sovereignty
              </h2>
              <p>
                Subject to these Terms, MiniMe grants you a revocable, non-exclusive, non-transferable,
                limited license to install and run the Software on compatible operating systems (Windows,
                and upcoming macOS/Linux builds).
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="font-semibold text-white">Data Ownership:</div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  You retain 100% ownership, title, and intellectual property rights to all documents,
                  code diffs, notes, vectors, and chat transcripts generated or processed by MiniMe on
                  your devices. MiniMe claims zero copyright or proprietary interest in your data.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Bring Your Own Cloud (BYOC) &amp; Keys (BYOK)
              </h2>
              <p>
                MiniMe operates on a Bring Your Own Cloud model:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong className="text-white">Cloud Storage:</strong> You are responsible for maintaining
                  your own Google Drive or Microsoft OneDrive account and abiding by their respective terms.
                </li>
                <li>
                  <strong className="text-white">API Keys:</strong> If you supply your own API keys for
                  commercial third-party LLMs (Anthropic, OpenAI, Google Gemini), you are solely responsible
                  for API consumption charges incurred on those accounts.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                4. Acceptable Use Policy
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Reverse-engineer or disassemble the proprietary binary runtime beyond fair use allowances.</li>
                <li>Use MiniMe in violation of any applicable local, state, national, or international privacy laws.</li>
                <li>Deploy MiniMe onto third-party machines without express administrative authorization.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                5. Disclaimer of Warranties &amp; Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wide font-mono bg-white/[0.02] p-4 rounded-xl border border-white/5">
                THE SOFTWARE IS PROVIDED &ldquo;AS IS,&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL MINIME INC. BE LIABLE FOR ANY CLAIM, DAMAGES,
                OR LOSS OF DATA ARISING FROM THE USE OF OR INABILITY TO USE THE SOFTWARE.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                6. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                California, without regard to conflict of law principles. Any legal proceeding shall be
                instituted in the federal or state courts situated in San Francisco County, California.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                7. Contact
              </h2>
              <p>
                Questions regarding these Terms should be sent to{" "}
                <a href="mailto:legal@tryminime.com" className="text-violet-400 hover:underline">
                  legal@tryminime.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
