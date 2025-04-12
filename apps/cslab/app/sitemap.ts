// app/sitemap.ts
import { categories } from "@/data/categories"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://cs-lab.0120.im/"

	// 메인 페이지
	const mainRoute = {
		url: baseUrl,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 1,
	}

	// 카테고리 페이지들
	const categoryRoutes = categories.map((category) => ({
		url: `${baseUrl}/${category.path}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.9,
	}))

	return [mainRoute, ...categoryRoutes]
}
