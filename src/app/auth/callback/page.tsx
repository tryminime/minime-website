"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Shield, ExternalLink } from "lucide-react";

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  const [status, setStatus] = useState<"redirecting" | "success" | "error">("redirecting");

  useEffect(() => {
    if (error) {
      setStatus("error");
      return;
    }

    if (code) {
      const targetUri = `minime://auth/callback?code=${encodeURIComponent(
        code
      )}&state=${encodeURIComponent(state || "")}`;

      try {
        window.location.href = targetUri;
        setStatus("success");
      } catch (err) {
        console.warn("Desktop scheme dispatch failed", err);
      }
    }
  }, [code, state, error]);

  const targetUri = `minime://auth/callback?code=${encodeURIComponent(
    code || ""
  )}&state=${encodeURIComponent(state || "")}`;

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden">
      {/* Glow Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400" />

      {/* Brand Icon */}
      <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5">
        <Image
          src="/logo.svg"
          alt="MiniMe"
          width={36}
          height={36}
          className="w-9 h-9 object-contain"
        />
      </div>

      {status === "error" ? (
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Authorization Error</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Authentication Failed
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            {errorDescription || error || "An unexpected error occurred during cloud provider sign-in."}
          </p>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      ) : (
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Authorization Approved</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Transferring to MiniMe
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-sans">
            Your authorization code is being securely bridged into your local MiniMe desktop
            keychain.
          </p>

          <div className="space-y-3 mb-6">
            <a
              href={targetUri}
              className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-xl shadow-cyan-600/20 border border-cyan-400/30 transition-all group"
            >
              <span>Return to MiniMe App</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-400 text-left space-y-1.5">
            <div className="font-semibold text-zinc-300">Behind a corporate proxy or firewall?</div>
            <p className="text-[11px] leading-relaxed">
              If your browser blocks protocol handlers, ensure <code>minime://</code> is whitelisted,
              or manually copy your one-time challenge from the MiniMe desktop window.
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-500">
        MiniMe Sovereign Desktop Bridge • End-to-End Encrypted
      </div>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <Suspense
          fallback={
            <div className="text-center p-12 text-zinc-400 font-mono text-sm">
              Processing OAuth callback...
            </div>
          }
        >
          <CallbackContent />
        </Suspense>
      </main>
    </div>
  );
}
