export const dynamic = "force-static"
import { categories } from "@/data/categories"
import { notFound } from "next/navigation"
import Script from "next/script"

interface CategoryLayoutProps {
	children: React.ReactNode
	params: Promise<{ category: string }>
}

export default async function CategoryLayout({
	children,
	params,
}: CategoryLayoutProps) {
	const categoryParams = (await params).category

	const category = categories.find((c) => c.path === categoryParams)

	if (!category) {
		notFound()
	}

	const categoryJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: `${category.title}에서 가장 많이 물어보는 면접 질문은 무엇인가요?`,
				acceptedAnswer: {
					"@type": "Answer",
					text: `${category.title} 분야에서는 주로 ${category.description} 등에 관한 질문을 많이 합니다.`,
				},
			},
			{
				"@type": "Question",
				name: `${category.title} 면접을 위한 핵심 개념은 무엇인가요?`,
				acceptedAnswer: {
					"@type": "Answer",
					text: `${category.title} 분야의 핵심 개념과 주요 질문들을 확인하고 준비하세요.`,
				},
			},
		],
	}

	// 빵 부스러기 데이터 생성
	const breadcrumbJsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "홈",
				item: "https://cslab.0120.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: category.title,
				item: `https://cslab.0120.com/${category.path}`,
			},
		],
	}
	return (
		<>
			<Script
				id="category-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
			/>
			<Script
				id="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			{children}
		</>
	)
}
