import { notFound } from "next/navigation"
import { categories } from "@/data/categories"
import { getQuestionsByCategoryId } from "@/data/questions"
import Script from "next/script"
import { Badge } from "@repo/ui/components/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import QuestionList from "@/components/questionList"
import StudyTips from "@/components/studyTips"

export const dynamic = "force-static"

type Props = {
	params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
	const categoryParams = (await params).category

	const category = categories.find((c) => c.path === categoryParams)

	if (!category) {
		notFound()
	}

	const questions = getQuestionsByCategoryId(category.id)
	// SEO를 위한 JSON-LD 데이터
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
				<main className="mx-auto pb-8 flex justify-center p-4">
					<div className="max-w-4xl w-full">
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

						{/* 학습 관련 컴포넌트 */}
						<div className="mb-8">
							{/* 학습 도움말 */}
							<StudyTips />
						</div>

						<QuestionList questions={questions} categoryPath={category.path} />
					</div>
				</main>
			</div>
		</>
	)
}
