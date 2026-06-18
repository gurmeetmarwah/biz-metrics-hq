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
        <div className="order-1 lg:order-1">
          <HeroSection />
        </div>
        <div className="order-6 lg:order-2">
          <QuickStats />
        </div>
        <div className="order-7 lg:order-3">
          <BrowseIndustries />
        </div>
        <div className="order-2 lg:order-4">
          <BrowseByMetric />
        </div>
        <div className="order-3 lg:order-5">
          <FeaturedBenchmarks />
        </div>
        <div className="order-5 lg:order-6">
          <LatestReports />
        </div>
        <div className="order-8 lg:order-7">
          <MethodologySection />
        </div>
        <div className="order-9 lg:order-8">
          <IndustryComparisons />
        </div>
        <div className="order-4 lg:order-9">
          <Calculators />
        </div>
        <div className="order-10 lg:order-10">
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
