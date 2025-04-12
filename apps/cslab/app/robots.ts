// app/robots.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://cs-lab.0120.im/sitemap.xml",
	}
}
