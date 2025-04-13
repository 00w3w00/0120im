import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "개발자 CS 면접 질문 모음집",
		short_name: "CS-Lab",
		description:
			"자료구조, 알고리즘, 운영체제, 네트워크, 데이터베이스, 웹/프론트엔드 등 개발자 기술 면접 준비를 위한 필수 CS 질문 모음",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-310x310.png",
				sizes: "310x310",
				type: "image/png",
			},
		],
	}
}
