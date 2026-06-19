import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickStats } from "@/components/home/QuickStats";
import { BrowseIndustries } from "@/components/home/BrowseIndustries";
import { BrowseByMetric } from "@/components/home/BrowseByMetric";
import { FeaturedBenchmarks } from "@/components/home/FeaturedBenchmarks";
import { MethodologySection } from "@/components/home/MethodologySection";
import { IndustryComparisons } from "@/components/home/IndustryComparisons";
import { Calculators } from "@/components/home/Calculators";
import { LatestReports } from "@/components/home/LatestReports";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <QuickStats />
        <BrowseIndustries />
        <BrowseByMetric />
        <FeaturedBenchmarks />
        <LatestReports />
        <MethodologySection />
        <IndustryComparisons />
        <Calculators />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
