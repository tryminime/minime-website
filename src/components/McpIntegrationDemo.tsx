"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  ShieldCheck,
  Code2,
  Settings,
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
            "minime-workstream": {
              command: "C:\\Users\\<username>\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: [],
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
            "minime-workstream": {
              command: "C:\\Users\\<username>\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: [],
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
            "minime-workstream": {
              command: "C:\\Users\\<username>\\AppData\\Local\\MiniMe\\minime-mcp.exe",
              args: [],
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
      signature: 'ask_memory(query, scope?, vault_id?, tier?)',
      description:
        "Answer questions across your local documents, code edits, work sessions, and saved decisions with grounded citations.",
      returns: "Verified Markdown synthesis with exact source references.",
    },
    {
      name: "search_workstream",
      signature: "search_workstream(query, limit?, vault_id?)",
      description:
        "Search past app windows, visited URLs, terminal sessions, and developer tools (limit default: 15, max: 50).",
      returns: "Matching workstream sessions, projects, and focus durations.",
    },
    {
      name: "search_documents",
      signature: "search_documents(query, source_kind?, limit?, vault_id?)",
      description:
        "Full-text search inside ingested PDFs, Word docs, slides, spreadsheets, Markdown, and code files (limit default: 10, max: 30).",
      returns: "Ranked document excerpts with artifact IDs, file paths, and page labels.",
    },
    {
      name: "get_document_chunks",
      signature: "get_document_chunks(artifact_id, vault_id?)",
      description:
        "Read ordered chunks and page/slide/sheet locators for any indexed document artifact.",
      returns: "Full structured passages with locators and byte lengths.",
    },
    {
      name: "get_daily_standup",
      signature: 'get_daily_standup(vault_id?, format?)',
      description:
        "Generate today's standup summary across focus blocks, file edits, commits, and active apps.",
      returns: "Ready-to-paste Markdown or JSON standup report.",
    },
    {
      name: "get_project_context",
      signature: "get_project_context(project_name?, vault_id?)",
      description:
        "Inspect active Git repo state, branch, staged changes, recent commits, touched files, and linked docs.",
      returns: "Repository status, active diffs, and linked workspace artifacts.",
    },
    {
      name: "get_active_context",
      signature: "get_active_context(vault_id?)",
      description:
        "Read the user's live foreground window, active file or URL, current project, branch, and dwell time.",
      returns: "Real-time workspace and active focus block metadata.",
    },
    {
      name: "record_decision",
      signature: 'record_decision(title, content, project_name?, category?, tags?, vault_id?)',
      description:
        "Save an architectural decision, bugfix rationale, task, or note directly into your persistent project ledger.",
      returns: "Audited JSON receipt linking the decision to your project.",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeClient].config);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="mcp-integration" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-4 font-semibold">
            <Terminal className="w-3.5 h-3.5 mr-1" />
            <span>For Developers • Model Context Protocol (MCP)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Plug Your AI Agents Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-cyan-400 dark:to-emerald-400">
              Cursor, Claude &amp; Windsurf.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-zinc-300">
            Give your coding assistant instant, scrubbed access to what you were just reading, recent diffs, and saved architecture decisions via 8 built-in MCP tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: JSON Setup */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center space-x-2">
                <Settings className="w-4 h-4 text-violet-700 dark:text-violet-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                  1-Minute MCP Config
                </span>
              </div>

              <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                {(
                  [
                    { id: "cursor", label: "Cursor" },
                    { id: "claude", label: "Claude Desktop" },
                    { id: "windsurf", label: "Windsurf" },
                  ] as const
                ).map((client) => (
                  <button
                    key={client.id}
                    onClick={() => setActiveClient(client.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeClient === client.id
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {client.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-700 dark:text-zinc-300">Config file:</span>
              <span className="text-violet-800 dark:text-violet-300 font-bold">
                {snippets[activeClient].path}
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 text-slate-100 dark:bg-black/80 font-mono text-xs">
              <div className="px-4 py-2 bg-slate-800 dark:bg-white/5 border-b border-slate-700 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                <span>MCP JSON</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1 text-slate-200 hover:text-white transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? "Copied!" : "Copy Config"}</span>
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-emerald-300 leading-relaxed text-xs">
                <code>{snippets[activeClient].config}</code>
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200 flex items-start space-x-2.5 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Secret &amp; PHI Scrubber Included:</strong> Every tool output passes through MiniMe&apos;s secret detector and HIPAA Safe Harbor filter before reaching external AI assistants.
              </span>
            </div>
          </div>

          {/* Right: 8 Tools Compact Explorer */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="flex items-center justify-between pb-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                <span>8 Built-In MCP Tools</span>
              </h3>
              <span className="text-xs font-mono text-slate-700 dark:text-zinc-300">
                Local stdio server (rmcp 3.8.0)
              </span>
            </div>

            <div className="space-y-2">
              {tools.map((tool, idx) => {
                const isSelected = selectedToolIndex === idx;
                return (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedToolIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white dark:bg-zinc-900 border-violet-500 shadow-md shadow-violet-500/15"
                        : "bg-white/75 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-violet-800 dark:text-violet-300">
                        {tool.name}()
                      </span>
                      <span className="text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                        #{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {tool.description}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-white/10 space-y-1 font-mono text-[11px]"
                      >
                        <div className="text-slate-700 dark:text-zinc-300">
                          Signature: <span className="text-slate-900 dark:text-zinc-100 font-semibold">{tool.signature}</span>
                        </div>
                        <div className="text-slate-700 dark:text-zinc-300">
                          Returns: <span className="text-emerald-800 dark:text-emerald-300">{tool.returns}</span>
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
