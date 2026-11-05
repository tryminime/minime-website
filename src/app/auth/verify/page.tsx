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
} from "lucide-react";

function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";
  const challenge = searchParams.get("challenge") || "";
  const rawOtp = searchParams.get("otp") || "";

  // Compute or extract 6-digit OTP
  const [otpCode, setOtpCode] = useState("849201");
  const [copied, setCopied] = useState(false);
  const [autoRedirected, setAutoRedirected] = useState(false);

  useEffect(() => {
    if (rawOtp) {
      setOtpCode(rawOtp);
    } else if (token) {
      // Deterministically derive a 6-digit code if not explicitly passed
      let sum = 0;
      for (let i = 0; i < token.length; i++) {
        sum = (sum * 31 + token.charCodeAt(i)) % 900000;
      }
      const derived = (100000 + sum).toString();
      setOtpCode(derived);
    }

    // Attempt automatic desktop protocol launch
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
    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-violet-950/30 text-center relative overflow-hidden">
      {/* Glow Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />

      {/* Brand Icon */}
      <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/10 border border-violet-500/30 flex items-center justify-center mb-6">
        <Image
          src="/logo.svg"
          alt="MiniMe Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>

      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Hardware-Sealed Authentication</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Verify Your MiniMe Login
      </h1>

      <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-sans">
        {email ? (
          <>
            Signing in as <strong className="text-zinc-200">{email}</strong>
          </>
        ) : (
          "Complete verification to unlock your sovereign desktop vault."
        )}
      </p>

      {/* Desktop Redirect Status */}
      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-zinc-300">
        <p className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
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

        <p className="text-[11px] text-zinc-500">
          Click above if your browser did not automatically open the desktop app.
        </p>
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase font-mono">
          <span className="bg-zinc-950 px-3 text-zinc-500">Or use 6-digit OTP code</span>
        </div>
      </div>

      {/* 6-Digit OTP Box */}
      <div className="rounded-xl bg-black/50 border border-white/10 p-5 mb-6">
        <span className="text-xs font-mono text-zinc-400 block mb-2">
          Your One-Time Login Code:
        </span>
        <div className="flex items-center justify-center space-x-2 mb-3">
          {otpCode.split("").map((digit, index) => (
            <span
              key={index}
              className="w-10 h-12 flex items-center justify-center text-xl font-mono font-bold text-white bg-white/[0.04] border border-violet-500/30 rounded-lg shadow-inner"
            >
              {digit}
            </span>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Code Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy 6-Digit Code</span>
            </>
          )}
        </button>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-white/5 text-xs text-zinc-500 space-y-2">
        <p>This verification link expires in 15 minutes and can only be used once.</p>
        <p>
          Don&apos;t have the desktop client?{" "}
          <Link href="/download" className="text-violet-400 hover:underline">
            Download MiniMe for Windows
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <Suspense
          fallback={
            <div className="text-center p-12 text-zinc-400 font-mono text-sm">
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
