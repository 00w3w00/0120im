"use client"

import { useState, useEffect, useMemo } from "react"
import { Question, getQuestionById } from "@/data/questions"
import { categories } from "@/data/categories"
import { Bookmark, Star, Home } from "lucide-react"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { useFavoritesContext } from "@/context/favoritesContext"
import { QuestionItem } from "./questionItem"
import Link from "next/link"

// 카테고리 선택 컴포넌트 - 성능 최적화를 위해 분리
const CategorySelector = ({
	currentCategory,
	setCurrentCategory,
	categoryQuestionCounts,
	totalCount,
}: {
	currentCategory: number | "all"
	setCurrentCategory: (category: number | "all") => void
	categoryQuestionCounts: Array<{
		id: number
		name: string
		count: number
		icon: string
		color: string
	}>
	totalCount: number
}) => (
	<div className="h-max w-full md:w-full lg:w-50 shrink-0 border rounded-lg shadow-sm bg-white overflow-hidden lg:sticky lg:top-[80px] ">
		<div className="p-4 border-b bg-gradient-to-r from-gray-50 to-white">
			<h3 className="text-lg font-semibold text-gray-800 flex items-center">
				<Bookmark className="mr-2 h-5 w-5 text-primary" />
				카테고리 필터
			</h3>
			<p className="text-sm text-gray-500 mt-1">원하는 카테고리를 선택하세요</p>
		</div>

		<div className="p-3">
			<div className="mb-2 px-1">
				<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
					전체 보기
				</div>
				<Button
					variant={currentCategory === "all" ? "secondary" : "ghost"}
					className="w-full justify-between mb-2"
					onClick={() => setCurrentCategory("all")}
				>
					<div className="flex items-center">
						<Bookmark className="mr-2 h-4 w-4" />
						<span>모든 카테고리</span>
					</div>
					<Badge
						variant="secondary"
						className="ml-auto bg-primary/10 text-primary hover:bg-primary/20"
					>
						{totalCount}
					</Badge>
				</Button>
			</div>

			<div className="space-y-1">
				<div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-1">
					카테고리 목록
				</div>
				<div className="max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
					{categoryQuestionCounts
						.filter((cat) => cat.count > 0)
						.map((cat) => (
							<Button
								key={cat.id}
								variant={currentCategory === cat.id ? "secondary" : "ghost"}
								className={`w-full justify-between mb-1 ${
									currentCategory === cat.id
										? "bg-primary/10 text-primary hover:bg-primary/20"
										: "hover:bg-gray-100"
								}`}
								onClick={() => setCurrentCategory(cat.id)}
							>
								<div className="flex items-center">
									<span className="flex items-center justify-center w-6 h-6 rounded-full mr-2 text-sm bg-gray-100">
										{cat.icon}
									</span>
									<span className="truncate">{cat.name}</span>
								</div>
								<Badge
									variant={currentCategory === cat.id ? "default" : "outline"}
									className={currentCategory === cat.id ? "bg-primary" : ""}
								>
									{cat.count}
								</Badge>
							</Button>
						))}
				</div>
			</div>
		</div>
	</div>
)

// 빈 즐겨찾기 상태 컴포넌트
const EmptyFavorites = () => (
	<Card className="w-full">
		<CardContent className="flex flex-col items-center justify-center pt-10 pb-10">
			<div className="flex justify-center items-center w-20 h-20 rounded-full bg-primary/10 mb-6">
				<Star className="h-10 w-10 text-primary" />
			</div>
			<h2 className="text-2xl font-semibold mb-2 text-center">
				즐겨찾기한 질문이 없습니다
			</h2>
			<p className="text-muted-foreground text-center mb-6 max-w-md">
				질문 페이지에서 별표 아이콘을 클릭하여 즐겨찾기에 추가해보세요.
			</p>
			<Button asChild>
				<Link href="/">
					<Home className="mr-2 h-4 w-4" />
					카테고리 살펴보기
				</Link>
			</Button>
		</CardContent>
	</Card>
)

// 로딩 상태 컴포넌트
const LoadingState = () => (
	<Card className="w-full">
		<CardContent className="flex flex-col items-center justify-center pt-6 pb-6">
			<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent mb-4"></div>
			<p className="text-muted-foreground">즐겨찾기 목록을 불러오는 중...</p>
		</CardContent>
	</Card>
)

export default function FavoriteQuestionsList() {
	const { favorites, isLoaded } = useFavoritesContext()
	const [favoriteQuestions, setFavoriteQuestions] = useState<Question[]>([])
	const [currentCategory, setCurrentCategory] = useState<number | "all">("all")
	const [isLoading, setIsLoading] = useState(true)

	// 즐겨찾기 목록 로드
	useEffect(() => {
		if (!isLoaded) return

		// 즐겨찾기 ID를 기반으로 질문 객체 로드
		const favoriteQs = favorites
			.map((id) => getQuestionById(id))
			.filter((q): q is Question => q !== undefined)

		setFavoriteQuestions(favoriteQs)
		setIsLoading(false)
	}, [favorites, isLoaded])

	// 카테고리별 질문 수 계산 - 메모이제이션
	const categoryQuestionCounts = useMemo(() => {
		return categories.map((category) => ({
			id: category.id,
			name: category.title,
			count: favoriteQuestions.filter((q) => q.categoryId === category.id)
				.length,
			icon: category.icon,
			color: category.color,
		}))
	}, [favoriteQuestions])

	// 필터링된 질문 목록 - 메모이제이션
	const filteredQuestions = useMemo(() => {
		return favoriteQuestions.filter((question) => {
			return (
				currentCategory === "all" || question.categoryId === currentCategory
			)
		})
	}, [favoriteQuestions, currentCategory])

	if (isLoading) {
		return <LoadingState />
	}

	if (favoriteQuestions.length === 0) {
		return <EmptyFavorites />
	}

	return (
		<div className="space-y-6 w-full max-w-4xl mx-auto">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h2 className="text-2xl font-semibold">내 즐겨찾기</h2>
					<p className="text-muted-foreground">
						총 {favoriteQuestions.length}개의 즐겨찾기한 질문이 있습니다
					</p>
				</div>
			</div>

			<div className="flex gap-6 flex-col lg:flex-row">
				{/* 카테고리 선택 컴포넌트 */}
				<CategorySelector
					currentCategory={currentCategory}
					setCurrentCategory={setCurrentCategory}
					categoryQuestionCounts={categoryQuestionCounts}
					totalCount={favoriteQuestions.length}
				/>

				{/* 메인 컨텐츠: 질문 목록 */}
				<div className="w-full">
					{filteredQuestions.length > 0 ? (
						<div className="space-y-4">
							{filteredQuestions.map((question) => (
								<QuestionItem key={question.id} question={question} />
							))}
						</div>
					) : (
						<Card className="py-8">
							<div className="text-center">
								<h3 className="text-lg font-medium mb-2">
									검색 결과가 없습니다
								</h3>
								<p className="text-sm text-muted-foreground">
									다른 검색어나 필터를 시도해보세요
								</p>
							</div>
						</Card>
					)}
				</div>
			</div>
		</div>
	)
}
