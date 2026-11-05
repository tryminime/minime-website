import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SpotlightDemo } from "@/components/SpotlightDemo";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FlowRibbonVisualizer } from "@/components/FlowRibbonVisualizer";
import { SecurityDeepDive } from "@/components/SecurityDeepDive";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <SpotlightDemo />
        <FeaturesGrid />
        <ComparisonTable />
        <FlowRibbonVisualizer />
        <SecurityDeepDive />
        <Pricing />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
