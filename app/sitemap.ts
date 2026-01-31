import { MetadataRoute } from "next";
import { locales } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://kalimov.com";

	return locales.map((locale) => ({
		url: `${baseUrl}/${locale}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 1,
	}));
}
