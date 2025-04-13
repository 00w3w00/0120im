"use client"

import { useState } from "react"
import { Question } from "@/data/questions"
import { Search } from "lucide-react"
import { Input } from "@repo/ui/components/input"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import FavoriteQuestionButton from "./favoriteButton"

interface QuestionListProps {
	questions: Question[]
	categoryPath: string
}

export default function QuestionList({ questions }: QuestionListProps) {
	const [searchTerm, setSearchTerm] = useState<string>("")

	const filteredQuestions = questions.filter((question) => {
		const searchMatch =
			searchTerm === "" ||
			question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			question.keywords.some((keyword) =>
				keyword.toLowerCase().includes(searchTerm.toLowerCase())
			)

		return searchMatch
	})

	return (
		<div className="space-y-6">
			{/* 필터링 컨트롤 */}
			<Card className="gap-2">
				<CardHeader className="pb-3">
					<CardTitle>질문 검색 및 필터</CardTitle>
					<CardDescription>
						질문 제목이나 키워드로 검색하고 난이도별로 필터링할 수 있습니다.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="relative flex-1 pb-4">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								type="text"
								placeholder="질문 또는 키워드 검색..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-8"
							/>
						</div>
					</div>
				</CardContent>
				<CardFooter className="pt-0 border-t flex justify-between items-center">
					<p className="text-sm text-muted-foreground">
						별표(⭐) 아이콘을 클릭하여 자주 복습할 질문을 즐겨찾기에 추가하세요.
					</p>
					<div className="text-sm text-muted-foreground"></div>
				</CardFooter>
			</Card>

			{/* 질문 목록 */}
			{filteredQuestions.length > 0 ? (
				<div className="grid grid-cols-1 gap-4">
					{filteredQuestions.map((question) => (
						<div key={question.id} className="block">
							<Card className="h-full group transition-all hover:shadow-md border-transparent hover:border-primary/20">
								<CardHeader className="pb-2">
									<div className="flex justify-between items-start">
										<CardTitle className="text-lg pr-8">
											{question.title}
										</CardTitle>
										<div className="flex-shrink-0">
											<FavoriteQuestionButton question={question} size="sm" />
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										{question.description}
									</p>
								</CardContent>
								<CardFooter className="flex flex-wrap gap-2 pt-1">
									{question.keywords.slice(0, 3).map((keyword, idx) => (
										<Badge key={idx} variant="outline" className="bg-blue-50">
											{keyword}
										</Badge>
									))}
									{question.keywords.length > 3 && (
										<span className="text-xs text-muted-foreground">
											+{question.keywords.length - 3}개
										</span>
									)}
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			) : (
				<Card className="py-12">
					<div className="text-center">
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							검색 결과가 없습니다
						</h3>
						<p className="text-sm text-gray-500">
							다른 검색어나 필터를 시도해보세요
						</p>
					</div>
				</Card>
			)}
		</div>
	)
}
