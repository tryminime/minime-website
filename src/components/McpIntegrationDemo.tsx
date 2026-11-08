"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Code2,
  CheckCircle2,
  Settings,
  Flame,
} from "lucide-react";

type ClientType = "cursor" | "claude" | "windsurf";

export function McpIntegrationDemo() {
  const [activeClient, setActiveClient] = useState<ClientType>("cursor");
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [selectedToolIndex, setSelectedToolIndex] = useState(0);

  const snippets: Record<ClientType, { path: string; config: string }> = {
    cursor: {
      path: "~/.cursor/mcp.json",
      config: JSON.stringify(
        {
          mcpServers: {
            minime: {
              command: "C:\\Users\\mufak\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: ["--stdio"],
              env: {
                MINIME_VAULT: "personal",
                MINIME_LOG_LEVEL: "info",
              },
            },
          },
        },
        null,
        2
      ),
    },
    claude: {
      path: "%APPDATA%\\Claude\\claude_desktop_config.json",
      config: JSON.stringify(
        {
          mcpServers: {
            minime: {
              command: "C:\\Users\\mufak\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: ["--stdio"],
            },
          },
        },
        null,
        2
      ),
    },
    windsurf: {
      path: "~/.codeium/windsurf/mcp_config.json",
      config: JSON.stringify(
        {
          mcpServers: {
            minime: {
              command: "C:\\Users\\mufak\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: ["--stdio"],
            },
          },
        },
        null,
        2
      ),
    },
  };

  const tools = [
    {
      name: "ask_memory",
      signature: 'ask_memory(query: string, scope?: "@doc" | "@file" | "@today", tier?: string)',
      description:
        "Ask natural language questions about your digital memory, documents, code files, and activity history. Powered by vault-scoped Hybrid RAG (FTS5 + ONNX Int8 vector cosine + recency decay).",
      returns: "Synthesized markdown answer with verifiable LongCite document citations.",
    },
    {
      name: "search_workstream",
      signature: "search_workstream(query: string, limit?: number, vault_id?: string)",
      description:
        "Search past application window titles, visited browser URLs, terminal commands, and developer tools using full-text BM25 index.",
      returns: "Chronological array of matching window events and dwell intervals.",
    },
    {
      name: "search_documents",
      signature: "search_documents(query: string, source_kind?: string, limit?: number)",
      description:
        "Search inside the contents of all ingested documents, PDFs, Word docs, spreadsheets, presentations, code files, and browser viewports using FTS5 BM25 passage search.",
      returns: "Ranked document text chunks with source file paths and byte offsets.",
    },
    {
      name: "get_document_chunks",
      signature: "get_document_chunks(artifact_id: string, vault_id?: string)",
      description:
        "Retrieve all structured text chunks and page/slide/sheet citations for a specific document artifact by artifact UUID.",
      returns: "Full segmented artifact passages with BLAKE3 hashes and page bounds.",
    },
    {
      name: "get_daily_standup",
      signature: "get_daily_standup(vault_id?: string, format?: 'markdown' | 'json')",
      description:
        "Generate a comprehensive daily standup report summarizing today's focus blocks, completed work actions, Git commits, top applications, and dwell time.",
      returns: "Formatted markdown or structured JSON report ready for Slack or Jira.",
    },
    {
      name: "get_project_context",
      signature: "get_project_context(project_name?: string, vault_id?: string)",
      description:
        "Inspect a workspace project's active Git repository state, current branch, HEAD SHA, staged changes, recent commits, touched files, and associated document artifacts.",
      returns: "Live repository manifest, active branch name, and line-level diff summary.",
    },
    {
      name: "get_active_context",
      signature: "get_active_context(vault_id?: string)",
      description:
        "Get instant real-time context about the user's current foreground application, window title, active URL/document, current project, Git branch, and idle state.",
      returns: "Foreground window metadata, active process ID, and dwell duration.",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeClient].config);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="mcp-integration" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5 mr-1" />
            <span>Universal Model Context Protocol (MCP) Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Universal MCP Server.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Supercharge Cursor, Claude &amp; Windsurf.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            MiniMe includes an official <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-xs text-slate-900 dark:text-white font-bold">rmcp 3.8.0</code> stdio server binary (<code>minime-mcp.exe</code>).
            Connect your favorite coding agent to your local memory with 7 deterministic tools.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configuration Snippet Box (Cols 1-6) */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                  Client Configuration
                </span>
              </div>

              {/* Client Selector Buttons */}
              <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setActiveClient("cursor")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeClient === "cursor"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Cursor
                </button>
                <button
                  onClick={() => setActiveClient("claude")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeClient === "claude"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Claude Desktop
                </button>
                <button
                  onClick={() => setActiveClient("windsurf")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeClient === "windsurf"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Windsurf
                </button>
              </div>
            </div>

            {/* Target Config Path */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-zinc-400">Target Config File:</span>
              <span className="text-violet-700 dark:text-violet-300 font-bold">
                {snippets[activeClient].path}
              </span>
            </div>

            {/* JSON Code Snippet */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 text-slate-100 dark:bg-black/80 font-mono text-xs">
              <div className="px-4 py-2 bg-slate-800 dark:bg-white/5 border-b border-slate-700 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>JSON Stdio Specification</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? "Copied!" : "Copy Configuration"}</span>
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-emerald-400 dark:text-emerald-300 leading-relaxed text-xs">
                <code>{snippets[activeClient].config}</code>
              </pre>
            </div>

            {/* Security Guarantee Pill */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 flex items-start space-x-2.5 font-sans leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero-Leakage MCP Sanitizer:</strong> All tool responses pass through a 5-stage secret
                scrubber and 18-identifier HIPAA Safe Harbor redaction engine before sending data to external LLMs.
              </span>
            </div>
          </div>

          {/* Right: 7 Official Tools Explorer (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>7 Official rmcp Tools Included</span>
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                Pure-Rust stdio daemon
              </span>
            </div>

            <div className="space-y-2.5">
              {tools.map((tool, idx) => {
                const isSelected = selectedToolIndex === idx;
                return (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedToolIndex(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white dark:bg-zinc-900 border-violet-500 shadow-md shadow-violet-500/15"
                        : "bg-white/70 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-400">
                        tool.{tool.name}()
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                        Tool #{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
                      {tool.description}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 space-y-2 font-mono text-[11px]"
                      >
                        <div className="text-slate-500 dark:text-zinc-400">
                          Signature: <span className="text-slate-800 dark:text-zinc-200 font-semibold">{tool.signature}</span>
                        </div>
                        <div className="text-slate-500 dark:text-zinc-400">
                          Returns: <span className="text-emerald-700 dark:text-emerald-400">{tool.returns}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
