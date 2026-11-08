import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DualSurfaceStudioDemo } from "@/components/DualSurfaceStudioDemo";
import { SpotlightDemo } from "@/components/SpotlightDemo";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FlowRibbonVisualizer } from "@/components/FlowRibbonVisualizer";
import { McpIntegrationDemo } from "@/components/McpIntegrationDemo";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SecurityDeepDive } from "@/components/SecurityDeepDive";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

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
