import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tryminime.com"),
  title: "MiniMe | Your Operating System's Cognitive Digital Twin",
  description:
    "Private AI work memory for your Windows PC. Ask questions about your PDFs, Office docs, code, and tabs with verified quotes and exact sources — zero screenshots, zero keyloggers.",
  keywords: [
    "Digital Twin",
    "Operating System AI",
    "Document Memory",
    "Local-First AI",
    "Zero-Knowledge",
    "Privacy-First AI",
    "Anti-Recall",
    "HIPAA Safe Harbor",
    "GDPR Compliant",
    "Workstream Intelligence",
    "Model Context Protocol",
    "MCP Server",
    "Offline Windows AI",
    "Microsoft Recall Alternative",
  ],
  authors: [{ name: "MiniMe Team" }],
  creator: "MiniMe Inc.",
  publisher: "MiniMe Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/app-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tryminime.com",
    title: "MiniMe | Your Operating System's Cognitive Digital Twin",
    description:
      "Search & chat with every document, code file & web page you've ever touched. Zero screenshots, zero keyloggers. 100% Zero-Knowledge encrypted.",
    siteName: "MiniMe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MiniMe - Your Operating System's Cognitive Digital Twin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniMe | Your Operating System's Cognitive Digital Twin",
    description:
      "Privacy-first, operating-system-level conversational Digital Twin. Zero screenshots, zero keyloggers, 100% Zero-Knowledge encrypted.",
    images: ["/og-image.png"],
    creator: "@tryminime",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.tryminime.com/#software",
      "name": "MiniMe",
      "operatingSystem": "Windows 10, Windows 11 (x64)",
      "applicationCategory": "ProductivityApplication",
      "downloadUrl": "https://www.tryminime.com/download",
      "softwareVersion": "v0.1.0-beta",
      "offers": [
        {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "name": "Sovereign Free Tier"
        },
        {
          "@type": "Offer",
          "price": "8",
          "priceCurrency": "USD",
          "name": "Pro BYOC"
        },
        {
          "@type": "Offer",
          "price": "20",
          "priceCurrency": "USD",
          "name": "Enterprise Governance"
        }
      ],
      "description":
        "Privacy-first conversational digital twin and deep document memory engine for Windows. Zero screenshots, zero keyloggers, 100% zero-knowledge encrypted.",
      "featureList": [
        "Local-first semantic search across PDFs, Office docs, code, and active tabs",
        "Zero-knowledge BYOC Cloud Sync to personal Google Drive or OneDrive (~1.54 MB/year)",
        "On-device offline AI Q&A with sentence-level verified quotes and citations",
        "Automated workspace intelligence and architectural decision log",
        "Universal Model Context Protocol (MCP) server with 8 local tools for Cursor, Claude, and Windsurf",
        "Windows Credential Locker encryption, 18-identifier HIPAA redaction, and instant GDPR erase"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.tryminime.com/#organization",
      "name": "MiniMe Inc.",
      "url": "https://www.tryminime.com",
      "logo": "https://www.tryminime.com/app-icon.png",
      "sameAs": ["https://twitter.com/tryminime", "https://github.com/tryminime"]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('minime_theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] antialiased selection:bg-violet-600/30 selection:text-white relative transition-colors duration-300">
        <ThemeProvider>
          {/* Ambient background glow for Light & Dark modes (optimized for mobile performance) */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Dark mode glow */}
            <div className="hidden dark:block">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[350px] md:h-[500px] bg-gradient-to-b from-violet-600/15 via-cyan-500/5 to-transparent blur-[60px] md:blur-[120px] transform-gpu" />
              <div className="hidden md:block absolute top-[800px] -left-40 w-[600px] h-[600px] bg-violet-900/10 blur-[140px] transform-gpu" />
              <div className="hidden md:block absolute top-[1800px] -right-40 w-[600px] h-[600px] bg-cyan-900/10 blur-[140px] transform-gpu" />
              <div className="hidden md:block absolute top-[2800px] left-1/3 w-[800px] h-[600px] bg-emerald-950/10 blur-[160px] transform-gpu" />
            </div>
            {/* Light mode glow */}
            <div className="block dark:hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[350px] md:h-[500px] bg-gradient-to-b from-violet-200/50 via-cyan-100/40 to-transparent blur-[50px] md:blur-[100px] transform-gpu" />
              <div className="hidden md:block absolute top-[800px] -left-40 w-[600px] h-[600px] bg-indigo-100/40 blur-[120px] transform-gpu" />
              <div className="hidden md:block absolute top-[1800px] -right-40 w-[600px] h-[600px] bg-cyan-100/40 blur-[120px] transform-gpu" />
              <div className="hidden md:block absolute top-[2800px] left-1/3 w-[800px] h-[600px] bg-emerald-100/30 blur-[140px] transform-gpu" />
            </div>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
