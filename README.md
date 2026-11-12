# MiniMe — Public Website

This directory contains the production marketing website, authentication flows, legal documentation, and Windows download portal for **MiniMe** (`tryminime.com`), built with **Next.js 15 App Router**, **React 19**, **TypeScript 5.7**, and **Tailwind CSS v4**.

## Verified Architecture Highlights

Every claim on the website aligns with the verified MiniMe Windows desktop codebase:

- **Zero-Capture Privacy**: Uses pure Win32 OS event hooks and accessibility metadata rather than screenshots, screen recording, or keyloggers (`< 0.2% CPU`, `< 35 MB RAM`).
- **Local Hybrid Memory**: Indexes local PDFs, Office files, diffs, and active tabs with on-device embeddings (`All-MiniLM-L6-v2` 384-dim vectors) and keyword + workspace graph search.
- **Grounded Q&A & Verified Citations**: Sentence attribution ensures answers link directly back to exact highlighted quotes in the side-by-side Studio inspector.
- **Unified Spotlight & 24h Flow Ribbon**: `Alt + Space` HUD for instant search, Q&A, standup generation, and scrubbing across your daily workstream.
- **Zero-Knowledge BYOC Sync**: Deduplicates with BLAKE3 and compresses `.mmz` snapshots 22.12x (`~1.54 MB/year`) directly to your personal Google Drive app folder or OneDrive while leaving vectors on-device.
- **Universal MCP Server**: Ships `minime-mcp.exe` (`rmcp` stdio) exposing **8 tools**: `ask_memory`, `search_workstream`, `search_documents`, `get_document_chunks`, `get_daily_standup`, `get_project_context`, `get_active_context`, and `record_decision`.
- **Enterprise Cryptography & Compliance**: Windows DPAPI keychain (`Argon2id` + `XChaCha20-Poly1305`), 18-identifier HIPAA Safe Harbor scrubber, SOC 2 BLAKE3 hash-chained ledger, and `< 50ms` GDPR Article 17 key shredding.

## Project Structure

```text
website/
├── public/                 # Brand assets & SVG logos
├── src/
│   ├── app/
│   │   ├── api/auth/send-magic-link/route.ts
│   │   ├── auth/
│   │   │   ├── callback/page.tsx   # OAuth bridge (minime://auth/callback)
│   │   │   └── verify/page.tsx     # Magic-link & 6-digit OTP verification
│   │   ├── download/page.tsx       # Direct MiniMe.exe, Enterprise MSI & system specs
│   │   ├── privacy/page.tsx        # Zero-knowledge privacy & OAuth disclosure
│   │   ├── terms/page.tsx          # Terms of Service
│   │   ├── globals.css             # Cybernetic Glass dual-theme styles
│   │   ├── layout.tsx              # Root metadata & JSON-LD schema
│   │   └── page.tsx                # Landing page flow
│   └── components/
│       ├── ComparisonTable.tsx     # MiniMe vs Microsoft Recall & cloud assistants
│       ├── DualSurfaceStudioDemo.tsx # Interactive split Chat + Document/Diff inspector
│       ├── Faq.tsx                 # Straight-answer 7-item FAQ accordion
│       ├── FeaturesGrid.tsx        # 6 core user benefits + optional engineering drawer
│       ├── Footer.tsx              # Navigation, direct Windows download & legal links
│       ├── Hero.tsx                # Above-the-fold CTA (MiniMe.exe) & live preview
│       ├── McpIntegrationDemo.tsx  # 1-minute MCP config & 8-tool explorer
│       ├── Navbar.tsx              # Responsive header with theme switcher & download CTA
│       ├── Pricing.tsx             # Sovereign Free ($0), Pro ($8/mo), Enterprise ($20/user/mo)
│       ├── SecurityDeepDive.tsx    # 4-tab DPAPI, BYOC, HIPAA PHI & GDPR wipe proofs
│       ├── SpotlightDemo.tsx       # Unified 4-tab Alt+Space HUD & 24h Flow Ribbon demo
│       ├── ThemeProvider.tsx       # Next-themes light/dark mode provider
│       └── ThemeToggle.tsx         # Accessible theme switcher
└── README.md
```

## Development & Verification

```bash
npm install
npx tsc --noEmit
npm run build
```
