import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tryminime.com"),
  title: "MiniMe | Your Operating System's Cognitive Digital Twin",
  description:
    "Privacy-first, operating-system-level conversational Digital Twin and deep document memory layer. Zero screenshots, zero keyloggers, 100% zero-knowledge encrypted.",
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
  ],
  authors: [{ name: "MiniMe Team" }],
  creator: "MiniMe",
  publisher: "MiniMe Inc.",
  robots: "index, follow",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/app-icon.png" />
      </head>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-violet-600/30 selection:text-white relative">
        {/* Ambient cybernetic background glow */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/15 via-cyan-500/5 to-transparent blur-[120px]" />
          <div className="absolute top-[800px] -left-40 w-[600px] h-[600px] bg-violet-900/10 blur-[140px]" />
          <div className="absolute top-[1800px] -right-40 w-[600px] h-[600px] bg-cyan-900/10 blur-[140px]" />
          <div className="absolute top-[2800px] left-1/3 w-[800px] h-[600px] bg-emerald-950/10 blur-[160px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
