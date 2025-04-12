// app/sitemap.ts
import { MetadataRoute } from "next"
import { categories } from "@/data/categories"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://cs-interview.example.com"

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
