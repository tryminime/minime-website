"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const WINDOWS_DOWNLOAD_URL = "https://www.tryminime.com/downloads/MiniMe.exe";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Live Demo", href: "/#studio-canvas" },
    { name: "Features", href: "/#features" },
    { name: "Compare", href: "/#comparison" },
    { name: "Privacy", href: "/#security" },
    { name: "Developers", href: "/#mcp-integration" },
    { name: "Pricing", href: "/#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-black/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Brand Logo Lockup */}
          <div className="flex items-center space-x-3 shrink-0">
            <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="MiniMe Logo"
                  width={38}
                  height={22}
                  priority
                  className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                MiniMe
              </span>
            </Link>

            <span className="hidden 2xl:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 shadow-sm whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              Windows x64 • Local-First
            </span>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-slate-700 hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all duration-200 whitespace-nowrap shrink-0"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <ThemeToggle />

            <Link
              href="/auth/verify"
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] rounded-xl transition-all duration-200 border border-slate-300 dark:border-white/10 whitespace-nowrap shrink-0"
            >
              Sign In
            </Link>

            <a
              href={WINDOWS_DOWNLOAD_URL}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white transition-all duration-300 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-600/25 hover:shadow-violet-600/40 border border-violet-400/20 group overflow-hidden whitespace-nowrap shrink-0"
            >
              <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="w-4 h-4 mr-1.5 text-white/90 group-hover:scale-110 transition-transform duration-300 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
              </svg>
              <span>Download Windows</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <ThemeToggle />
            <a
              href={WINDOWS_DOWNLOAD_URL}
              className="p-2 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-violet-600/10 dark:bg-violet-600/20 rounded-lg border border-violet-500/30"
              title="Download MiniMe for Windows"
            >
              <Download className="w-4 h-4 text-violet-700 dark:text-violet-300" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5">
            <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              v0.1.0 Beta
            </span>
            <span className="text-xs text-slate-700 dark:text-zinc-300 font-mono">
              Windows x64 • 100% Local-First
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex flex-col space-y-2">
            <a
              href={WINDOWS_DOWNLOAD_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl shadow-lg shadow-violet-600/30 whitespace-nowrap"
            >
              <Download className="w-4 h-4 mr-2" />
              Download MiniMe.exe (Windows)
            </a>
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.03] rounded-xl border border-slate-300 dark:border-white/10"
            >
              Enterprise MSI &amp; System Specs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
