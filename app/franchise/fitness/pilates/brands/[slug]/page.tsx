import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FranchiseBrandStubPage } from "@/components/franchise/FranchiseBrandStubPage";
import {
  pilatesFranchiseBrandNames,
  pilatesFranchiseBrandSlugs,
} from "@/lib/franchise/fitness/pilates-franchise";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pilatesFranchiseBrandSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = pilatesFranchiseBrandNames[slug as (typeof pilatesFranchiseBrandSlugs)[number]];
  if (!name) return { title: "Franchise Brand | BizMetricsHQ" };
  return {
    title: `${name} Franchise Cost, Fees & ROI — Best Franchise for Pilates Guide | BizMetricsHQ`,
    description: `${name} Pilates franchise investment, royalty fees, unit economics, and owner earnings. Compare whether ${name} is the best franchise for Pilates for your capital and goals.`,
    keywords: [
      `${name.toLowerCase()} franchise`,
      `${name.toLowerCase()} franchise cost`,
      "best franchise for pilates",
      "pilates franchise cost",
      "pilates franchise ROI",
    ],
  };
}

export default async function PilatesFranchiseBrandPage({ params }: Props) {
  const { slug } = await params;
  const name = pilatesFranchiseBrandNames[slug as (typeof pilatesFranchiseBrandSlugs)[number]];
  if (!name) notFound();

  return (
    <FranchiseBrandStubPage
      brandName={name}
      industryLabel="Pilates"
      guideHref="/franchise/fitness/pilates/"
      guideLabel="Best Franchise for Pilates Guide"
    />
  );
}
