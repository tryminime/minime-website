import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

// Dynamic imports with SSR enabled for maximum mobile performance and SEO preservation
const DualSurfaceStudioDemo = dynamic(
  () => import("@/components/DualSurfaceStudioDemo").then((mod) => mod.DualSurfaceStudioDemo),
  { ssr: true }
);

const SpotlightDemo = dynamic(
  () => import("@/components/SpotlightDemo").then((mod) => mod.SpotlightDemo),
  { ssr: true }
);

const FeaturesGrid = dynamic(
  () => import("@/components/FeaturesGrid").then((mod) => mod.FeaturesGrid),
  { ssr: true }
);

const FlowRibbonVisualizer = dynamic(
  () => import("@/components/FlowRibbonVisualizer").then((mod) => mod.FlowRibbonVisualizer),
  { ssr: true }
);

const McpIntegrationDemo = dynamic(
  () => import("@/components/McpIntegrationDemo").then((mod) => mod.McpIntegrationDemo),
  { ssr: true }
);

const ComparisonTable = dynamic(
  () => import("@/components/ComparisonTable").then((mod) => mod.ComparisonTable),
  { ssr: true }
);

const SecurityDeepDive = dynamic(
  () => import("@/components/SecurityDeepDive").then((mod) => mod.SecurityDeepDive),
  { ssr: true }
);

const Pricing = dynamic(
  () => import("@/components/Pricing").then((mod) => mod.Pricing),
  { ssr: true }
);

const Faq = dynamic(
  () => import("@/components/Faq").then((mod) => mod.Faq),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: true }
);

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] transition-colors duration-300">
      {/* Sticky Header with Theme Toggle */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <DualSurfaceStudioDemo />
        <SpotlightDemo />
        <FeaturesGrid />
        <FlowRibbonVisualizer />
        <McpIntegrationDemo />
        <ComparisonTable />
        <SecurityDeepDive />
        <Pricing />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
