export const dynamic = "force-static"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { categories } from "@/data/categories"
import { getQuestionsByCategoryId } from "@/data/questions"
import { Suspense } from "react"
import Script from "next/script"
import { Badge } from "@repo/ui/components/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import { Breadcrumb } from "@/components/breadcrumb"
import QuestionList from "@/components/questionList"

type Props = {
	params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const categoryParams = (await params).category

	const category = categories.find((c) => c.path === categoryParams)

	if (!category) {
		return {
			title: "카테고리를 찾을 수 없음",
			description: "요청하신 CS 면접 카테고리를 찾을 수 없습니다.",
		}
	}

	return {
		title: `${category.title} 면접 질문 | 개발자 CS 면접 질문 모음집`,
		description: category.description,
		keywords: [
			`${category.title} 면접 질문`,
			"개발자 면접",
			"CS 면접",
			...category.seoKeywords,
		],
		alternates: {
			canonical: `https://cs-lab.0120.im/${category.path}`,
		},
		openGraph: {
			title: `${category.title} 면접 질문 모음`,
			description: category.description,
			type: "website",
			url: `https://cs-lab.0120.im/${category.path}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${category.title} 면접 질문 모음`,
			description: category.description,
		},
	}
}

export async function generateStaticParams() {
	return categories.map((category) => ({
		category: category.path,
	}))
}

export default async function CategoryPage({ params }: Props) {
	const categoryParams = (await params).category

	const category = categories.find((c) => c.path === categoryParams)
	if (categoryParams === "robots.txt" || categoryParams === "sitemap.xml") {
		return
	}
	if (!category) {
		notFound()
	}

	const questions = getQuestionsByCategoryId(category.id)

	const categoryJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.slice(0, 5).map((question) => ({
			"@type": "Question",
			name: question.title,
			acceptedAnswer: {
				"@type": "Answer",
				text: question.description,
			},
		})),
	}

	return (
		<>
			<Script
				id="category-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
			/>

			<div className="min-h-screen bg-gray-50 font-sans">
				{/* <div className="px-6 py-3 bg-gray-50  border-b  sticky top-0 py-2  z-10 backdrop-blur-sm  w-full mb-4">
					<Suspense fallback={<div className="h-6" />}>
						<Breadcrumb
							items={[
								{ label: "홈", href: "/" },
								{ label: category.title, href: `/${category.path}` },
							]}
						/>
					</Suspense>
				</div> */}

				<main className="mx-auto pb-8  flex justify-center px-6 pt-4">
					<div className="max-w-5xl w-full">
						<div className="mb-8">
							<Card className={`${category.color.split(" ")[0]} border-none`}>
								<CardHeader>
									<div className="flex items-center gap-2 mb-2">
										<span className="text-2xl" aria-hidden="true">
											{category.icon}
										</span>
										<CardTitle className="text-2xl">
											{category.title} 면접 질문
										</CardTitle>
									</div>
									<CardDescription className="text-base">
										{category.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2 mt-2">
										{category.seoKeywords.map((keyword, idx) => (
											<Badge key={idx} variant="secondary">
												{keyword}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
						{/* 질문 통계 카드
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-lg">총 질문 수</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-3xl font-bold">{questions.length}개</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader className="pb-2">
									<CardTitle className="text-lg">도움말</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										별표(⭐) 아이콘을 클릭하여 자주 복습할 질문을 즐겨찾기에
										추가하세요.
									</p>
								</CardContent>
							</Card>
						</div> */}
						<QuestionList questions={questions} categoryPath={category.path} />
					</div>
				</main>
			</div>
		</>
	)
}
