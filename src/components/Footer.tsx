"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

interface SocialLink {
  name: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "X",
    label: "Follow MiniMe on X",
    href: "https://x.com/tryminime",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    label: "MiniMe on GitHub",
    href: "https://github.com/tryminime/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    label: "MiniMe on YouTube",
    href: "https://www.youtube.com/@tryminime",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "MiniMe Inc. on LinkedIn",
    href: "https://www.linkedin.com/company/minimeinc",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    label: "Follow MiniMe on Instagram",
    href: "https://www.instagram.com/tryminimeai/",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    label: "MiniMe on Facebook",
    href: "https://www.facebook.com/tryminime",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-300 dark:border-white/10 bg-slate-100/90 dark:bg-black/80 backdrop-blur-2xl text-slate-700 dark:text-zinc-300 text-xs sm:text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2.5 group">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="MiniMe Logo"
                  width={38}
                  height={22}
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                MiniMe
              </span>
            </Link>
            <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm max-w-sm leading-relaxed">
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
                Zero-Knowledge E2EE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-medium">
                0 Screenshots
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-zinc-200 font-medium">
                100% Offline AI
              </span>
            </div>

            {/* Social & Community Links */}
            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 block mb-2.5">
                Community &amp; Updates
              </span>
              <div className="flex flex-wrap items-center gap-2" aria-label="MiniMe social links">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="w-9 h-9 rounded-xl inline-flex items-center justify-center bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-700 hover:text-violet-700 hover:border-violet-400 dark:text-zinc-300 dark:hover:text-white dark:hover:border-violet-400/50 shadow-sm transition-all"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
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
                  Core Features
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
                <a
                  href="https://www.tryminime.com/downloads/MiniMe.exe"
                  className="inline-flex items-center text-violet-700 dark:text-violet-300 font-bold hover:underline"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  <span>Download MiniMe.exe (x64)</span>
                </a>
              </li>
              <li>
                <Link href="/download" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Enterprise MSI &amp; System Specs
                </Link>
              </li>
              <li>
                <Link href="/download#enterprise" className="hover:text-slate-900 dark:hover:text-white transition-colors">
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
        <div className="pt-12 mt-12 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 dark:text-zinc-300 gap-4">
          <div>
            &copy; 2026 MiniMe Inc. All rights reserved. 100% Zero-Knowledge &amp; Anti-Recall Architecture.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
