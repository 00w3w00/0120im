// app/robots.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://cslab.0120.com/sitemap.xml",
	}
}
