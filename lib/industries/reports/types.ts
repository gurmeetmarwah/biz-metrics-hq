export type ReportBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: readonly string[] }
  | { type: "stats"; items: readonly { label: string; value: string }[] }
  | { type: "table"; headers: readonly string[]; rows: readonly (readonly string[])[] };

export type ReportSection = {
  id: string;
  title: string;
  blocks: readonly ReportBlock[];
};

export type ReportMeta = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  published: string;
  dataVintage: string;
  readTime: string;
  href: string;
  sources: readonly string[];
};
