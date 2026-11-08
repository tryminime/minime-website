# MiniMe Official Website (`https://www.tryminime.com/`)

This repository contains the complete source code, assets, and serverless routes for the official **MiniMe** marketing website, legal compliance hub, and native authentication bridges.

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 1. Architectural Highlights

- **First-Class Dual-Theme Engine (Dark & Light Mode)**:
  - Custom client-side `ThemeProvider` with local storage persistence and system preference detection.
  - Smooth animated Sun/Moon toggle in the navigation bar.
  - WCAG AAA contrast ratio ($\ge 7:1$) across all typography, panels, and cards.
  - **Light Mode**: Pristine Frost Glass (`bg-slate-50`, `text-slate-900`, `border-slate-200`).
  - **Dark Mode**: Cybernetic Obsidian (`bg-zinc-950`, `text-zinc-100`, `border-white/10`).
  - **Amber Quote Card**: High-contrast amber card for verifiable LongCite quote citations.

- **8 Audited Production Pillars**:
  1. *Deep Document & AST Ingestion*: Pure-Rust parsers (< 0.2% CPU, < 35 MB RAM, 0 screenshots, 45+ code languages).
  2. *CSR Personalized PageRank*: Forward power iterations running in 837.4µs on 25k nodes & 75k edges (< 1ms).
  3. *Int8 Vector Quantization*: FastEmbed All-MiniLM-L6-v2 ONNX 384-byte symmetric Int8 vectors (>99.5% cosine fidelity).
  4. *Tri-Modal TD-RRF Hybrid Retrieval*: FTS5 BM25 + Int8 Cosine + CSR PPR fused with Cormack-Clarke $k=60.0$, $\lambda=0.0693$ (24h half-life).
  5. *LongCite Grounding*: Sentence attribution scoring ($\gamma=0.65$ ROUGE-1 recall + cosine similarity, $\tau_{\text{attr}}=0.72$), exact quotes ($|Q| \ge 24\text{ chars}$).
  6. *Speculative 2-Stage Drafting*: Stage 1 MMR extractive drafting in < 5ms; Stage 3 offline speculative execution in < 15ms TTFT.
  7. *Dual-Surface Desktop Interaction*: 58% Conversational Control Room (`LiveChat.tsx`) + 42% Sidecar Canvas (`ArtifactCanvas.tsx`) + Universal `rmcp 3.8.0` stdio server with 7 tools.
  8. *Enterprise Zero-Knowledge BYOC*: Columnar string-interning + zstd level 7/9 .mmz achieving 22.12x compression ratio (1.54 MB/year projected footprint). Hardware DPAPI, Argon2id ($m=64\text{MiB}, t=3, p=4$), 18-ID HIPAA Safe Harbor scrubber, <50ms GDPR crypto-shredding, and SOC 2 BLAKE3 audit ledger.

---

## 2. Directory Structure

```
website/
├── public/                     # Brand assets & logos
│   ├── favicon.ico             # Multi-resolution browser icon
│   ├── logo.svg                # Master vector infinity mark
│   ├── logo-lockup.svg         # Horizontal navbar lockup (Logo + MiniMe)
│   ├── og-image.png            # 1200x630 social preview card
│   ├── app-icon.png            # 1024x1024 high-res icon
│   └── oauth-logo.png          # 215x215 square OAuth verification logo
├── src/
│   ├── app/
│   │   ├── page.tsx            # Full modernized landing page
│   │   ├── layout.tsx          # Root layout with ThemeProvider, anti-flash script & JSON-LD
│   │   ├── globals.css         # Tailwind v4 theme variables & AAA contrast tokens
│   │   ├── download/page.tsx   # Windows x64 EXE & MSI packages with verified SHA-256 hashes
│   │   ├── privacy/page.tsx    # Privacy policy & mandatory Google/Microsoft OAuth disclosure
│   │   ├── terms/page.tsx      # Terms of Service & user data sovereignty guarantee
│   │   └── auth/
│   │       ├── verify/page.tsx # Magic link & 6-digit OTP landing redirector
│   │       └── callback/page.tsx # OAuth fallback bridge
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header with ThemeToggle & version pill
│   │   ├── ThemeToggle.tsx     # Animated Sun/Moon toggle switch
│   │   ├── Hero.tsx            # User-first narrative, anti-recall trust badge, metrics bar
│   │   ├── DualSurfaceStudioDemo.tsx # 58% Chat / 42% Canvas interactive simulator
│   │   ├── SpotlightDemo.tsx   # Alt+Space HUD simulator with 4 interactive tabs
│   │   ├── FeaturesGrid.tsx    # 8 architectural pillars with verified metrics
│   │   ├── FlowRibbonVisualizer.tsx # 24h scrubbable multi-device timeline
│   │   ├── McpIntegrationDemo.tsx # Universal rmcp 3.8.0 setup guide & copyable JSON
│   │   ├── ComparisonTable.tsx # MiniMe vs Recall vs Rewind vs Pieces vs ActivityWatch vs Notion
│   │   ├── SecurityDeepDive.tsx # 4 deep security tabs (DPAPI, BYOC, HIPAA, SOC 2)
│   │   ├── Pricing.tsx         # Sovereign Free ($0), Pro BYOC ($8/mo), Enterprise ($20/user/mo)
│   │   ├── Faq.tsx             # 10 transparent questions and answers
│   │   └── Footer.tsx          # Navigation links, legal anchors & status indicator
│   └── context/
│       └── ThemeContext.tsx    # Client-side theme context with localStorage persistence
├── package.json
└── next.config.ts
```

---

## 3. Development & Build

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build (type checking + optimization)
npm run build
```
