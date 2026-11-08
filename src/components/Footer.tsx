"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Terminal, Download, Sparkles, ExternalLink, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-300 dark:border-white/10 bg-slate-100/90 dark:bg-black/80 backdrop-blur-2xl text-slate-600 dark:text-zinc-400 text-xs sm:text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-lockup.svg"
                alt="MiniMe"
                width={150}
                height={36}
                className="h-8 w-auto object-contain dark:brightness-100 brightness-90"
              />
            </Link>
            <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your Operating System&apos;s Cognitive Digital Twin. Search &amp; chat with every
              document, code file, and web page you&apos;ve ever touched—without creepy screenshots
              or centralized corporate databases.
            </p>

            {/* Status indicator */}
            <div className="pt-2 flex items-center space-x-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-700 dark:text-zinc-300 font-mono font-medium">
                System Status: Sovereign &amp; 100% Operational
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-slate-600 dark:text-zinc-400">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-medium">
                100% Zero-Knowledge E2EE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-medium">
                Win32 Native Pure-Rust
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-medium">
                84/84 Tests Passing
              </span>
            </div>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Product &amp; Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  8 Architectural Pillars
                </a>
              </li>
              <li>
                <a href="#studio-canvas" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Dual-Surface Studio (58% / 42%)
                </a>
              </li>
              <li>
                <a href="#spotlight-demo" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Alt+Space Spotlight HUD
                </a>
              </li>
              <li>
                <a href="#flow-ribbon" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Multi-Device Flow Ribbon
                </a>
              </li>
              <li>
                <a href="#mcp-integration" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Universal MCP Server (Cursor/Claude)
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  MiniMe vs Recall vs Rewind
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Security & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Security &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Hardware DPAPI Keychain
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Zero-Knowledge BYOC Sync
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  HIPAA 18-PHI Scrubber
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  SOC 2 BLAKE3 Audit Ledger
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Privacy Policy &amp; OAuth
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Download & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold">
              Get MiniMe
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/download"
                  className="inline-flex items-center text-violet-700 dark:text-violet-400 font-bold hover:underline"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  <span>Download for Windows (x64)</span>
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Enterprise MSI Package
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Pricing Plans ($0 Sovereign)
                </a>
              </li>
              <li>
                <Link href="/auth/verify" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Sign In / Magic Link
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-500 gap-4">
          <div>
            &copy; 2026 MiniMe Inc. All rights reserved. 100% Zero-Knowledge &amp; Anti-Recall Architecture.
          </div>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://twitter.com/tryminime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/tryminime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
