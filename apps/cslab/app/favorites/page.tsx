"use client"
import { useEffect } from "react"
import FavoriteQuestionsList from "@/components/favoriteQuestionsList"
import Script from "next/script"
export const dynamic = "force-static"

export default function FavoritesPage() {
	// 페이지 로딩 시 스크롤 위치 초기화
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	// 마이크로데이터 구조화
	const favoritesJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: "https://cs-lab.0120.im/favorites",
		name: "즐겨찾기",

		description: "즐겨찾기한 면접 질문을 관리하고 복습하세요.",
		mainContentOfPage: {
			"@type": "WebPageElement",
			isPartOf: {
				"@id": "https://cs-lab.0120.im/favorites",
			},
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "홈",
					item: "https://cs-lab.0120.im/",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "즐겨찾기",
					item: "https://cs-lab.0120.im/favorites",
				},
			],
		},
	}

	return (
		<>
			<Script
				id="favorites-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(favoritesJsonLd) }}
			/>

			<div className="min-h-screen bg-gray-50 font-sans">
				<main className="mx-auto pb-8 flex justify-center p-4">
					<div className="max-w-4xl w-full">
						<FavoriteQuestionsList />
					</div>
				</main>
			</div>
		</>
	)
}
