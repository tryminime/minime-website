"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  Download,
  ArrowRight,
  Sparkles,
  KeyRound,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";
  const challenge = searchParams.get("challenge") || "";
  const rawOtp = searchParams.get("otp") || "";

  // Compute or extract 6-digit OTP when token or otp param is present
  const [otpCode, setOtpCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [autoRedirected, setAutoRedirected] = useState(false);

  useEffect(() => {
    if (rawOtp) {
      setOtpCode(rawOtp);
    } else if (token) {
      let sum = 0;
      for (let i = 0; i < token.length; i++) {
        sum = (sum * 31 + token.charCodeAt(i)) % 900000;
      }
      const derived = (100000 + sum).toString();
      setOtpCode(derived);
    }

    if (token) {
      const deepLink = `minime://auth/verify?token=${encodeURIComponent(
        token
      )}&email=${encodeURIComponent(email)}&challenge=${encodeURIComponent(challenge)}`;

      try {
        window.location.href = deepLink;
        setAutoRedirected(true);
      } catch (err) {
        console.warn("Desktop protocol handler dispatch failed", err);
      }
    }
  }, [token, email, challenge, rawOtp]);

  const deepLink = `minime://auth/verify?token=${encodeURIComponent(
    token || "demo-token"
  )}&email=${encodeURIComponent(email)}&challenge=${encodeURIComponent(challenge)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(otpCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-2xl text-center relative overflow-hidden">
      {/* Glow Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-500" />

      {/* Brand Icon */}
      <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-500/10 border border-violet-500/30 flex items-center justify-center mb-6">
        <Image
          src="/logo.svg"
          alt="MiniMe Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 mb-3">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Hardware-Sealed Authentication</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
        Verify Your MiniMe Login
      </h1>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 font-sans">
        {email ? (
          <>
            Signing in as <strong className="text-slate-900 dark:text-zinc-200">{email}</strong>
          </>
        ) : (
          "Complete verification to unlock your sovereign desktop vault."
        )}
      </p>

      {/* Desktop Redirect Status */}
      <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 mb-6 text-xs text-slate-700 dark:text-zinc-300 font-medium">
        <p className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span>Attempting to launch MiniMe Desktop...</span>
        </p>
      </div>

      {/* Primary CTA: Open MiniMe Desktop */}
      <div className="space-y-3 mb-8">
        <a
          href={deepLink}
          className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 border border-violet-400/30 transition-all group"
        >
          <span>Open MiniMe Desktop</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-[11px] text-slate-500 dark:text-zinc-400">
          Click above if your browser did not automatically open the desktop app.
        </p>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase font-mono">
          <span className="bg-white dark:bg-zinc-950 px-3 text-slate-500 dark:text-zinc-400 font-semibold">
            Or use 6-digit OTP code
          </span>
        </div>
      </div>

      {/* 6-Digit OTP Box */}
      {otpCode ? (
        <div className="rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 p-5 mb-6">
          <span className="text-xs font-mono text-slate-600 dark:text-zinc-400 block mb-2 font-medium">
            Your One-Time Login Code:
          </span>
          <div className="flex items-center justify-center space-x-2 mb-3">
            {otpCode.split("").map((digit, index) => (
              <span
                key={index}
                className="w-10 h-12 flex items-center justify-center text-xl font-mono font-bold text-slate-900 dark:text-white bg-white dark:bg-white/[0.04] border border-violet-500/40 rounded-lg shadow-inner"
              >
                {digit}
              </span>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-zinc-200 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400">Code Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                <span>Copy 6-Digit Code</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 p-5 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
          Open the verification link from your email to generate your one-time 6-digit login code for MiniMe Desktop.
        </div>
      )}

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300 space-y-2">
        <p>This verification link expires in 15 minutes and can only be used once.</p>
        <p>
          Don&apos;t have the desktop client?{" "}
          <a
            href="https://www.tryminime.com/downloads/MiniMe.exe"
            className="text-violet-700 dark:text-violet-300 font-semibold hover:underline"
          >
            Download MiniMe.exe for Windows
          </a>
        </p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] transition-colors duration-300">
      <div className="p-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          <span>Home</span>
        </Link>
        <ThemeToggle />
      </div>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative">
        <Suspense
          fallback={
            <div className="text-center p-12 text-slate-500 dark:text-zinc-400 font-mono text-sm">
              Loading verification credentials...
            </div>
          }
        >
          <VerifyContent />
        </Suspense>
      </main>
    </div>
  );
}
