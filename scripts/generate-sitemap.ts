import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildSitemapXml, getSitemapEntries } from "@/lib/sitemap-xml";

const entries = getSitemapEntries();
const xml = buildSitemapXml(entries);
const outputPath = join(process.cwd(), "sitemap.xml");

writeFileSync(outputPath, xml, "utf8");

console.log(`Wrote sitemap.xml (${entries.length} URLs) to ${outputPath}`);
