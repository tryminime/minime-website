"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Terminal, Download, Heart, Sparkles, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-2xl text-zinc-400 text-xs sm:text-sm">
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
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your Operating System&apos;s Cognitive Digital Twin. Search &amp; chat with every
              document, code file, and web page you&apos;ve ever touched—without creepy screenshots
              or centralized corporate databases.
            </p>

            {/* Status indicator */}
            <div className="pt-2 flex items-center space-x-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300 font-mono">
                System Status: Sovereign &amp; Fully Operational
              </span>
            </div>

            <div className="flex items-center space-x-3 pt-2 text-zinc-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                100% Zero-Knowledge E2EE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                Win32 Native
              </span>
            </div>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  6 Core Superpowers
                </a>
              </li>
              <li>
                <a href="/#spotlight-demo" className="hover:text-white transition-colors">
                  Spotlight HUD (Alt + Space)
                </a>
              </li>
              <li>
                <a href="/#flow-ribbon" className="hover:text-white transition-colors">
                  24h Flow Ribbon
                </a>
              </li>
              <li>
                <a href="/#comparison" className="hover:text-white transition-colors">
                  MiniMe vs Recall Matrix
                </a>
              </li>
              <li>
                <Link href="/download" className="hover:text-white transition-colors text-violet-400 flex items-center space-x-1">
                  <span>Download for Windows</span>
                  <Download className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/download#enterprise" className="hover:text-white transition-colors">
                  Enterprise MSI Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Privacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Security &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (GDPR/HIPAA)
                </Link>
              </li>
              <li>
                <Link href="/privacy#oauth-disclosure" className="hover:text-white transition-colors text-cyan-400">
                  Google &amp; Microsoft OAuth Disclosure
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="/#security" className="hover:text-white transition-colors">
                  ChaCha20-Poly1305 AEAD Spec
                </a>
              </li>
              <li>
                <Link href="/auth/verify" className="hover:text-white transition-colors">
                  Magic Link &amp; OTP Login
                </Link>
              </li>
              <li>
                <Link href="/auth/callback" className="hover:text-white transition-colors">
                  OAuth Bridge Fallback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Ecosystem & Developers */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Developers &amp; Community
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/tryminime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Model Context Protocol (MCP)
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Local Ollama Integration
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  Anti-Recall Whitepaper
                </a>
              </li>
              <li>
                <a href="mailto:security@tryminime.com" className="hover:text-white transition-colors">
                  Vulnerability Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} MiniMe Inc. All rights reserved. 100% Zero-Knowledge
            Architecture.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/download" className="hover:text-zinc-300 transition-colors">
              Download x64
            </Link>
            <span>•</span>
            <span className="text-emerald-400 font-mono">v0.1.0 Beta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
