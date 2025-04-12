"use client"

import { useState, useEffect } from "react"
import { Question, getQuestionById } from "@/data/questions"
import { categories } from "@/data/categories"
import { Bookmark, Trash2, Star, Home, Search, Link } from "lucide-react"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"

import { ScrollArea } from "@repo/ui/components/scroll-area"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@repo/ui/components/alert-dialog"

const FAVORITES_KEY = "cs_favorite_questions"

export default function FavoriteQuestionsList() {
	const [favoriteQuestions, setFavoriteQuestions] = useState<Question[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [currentCategory, setCurrentCategory] = useState<number | "all">("all")
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// 클라이언트 사이드에서만 로컬스토리지에 접근
		const savedFavorites = localStorage.getItem(FAVORITES_KEY)
		const favoriteIds: string[] = savedFavorites
			? JSON.parse(savedFavorites)
			: []

		// 즐겨찾기 ID로 질문 객체 찾기
		const favoriteQs = favoriteIds
			.map((id) => getQuestionById(id))
			.filter((q): q is Question => q !== undefined)

		setFavoriteQuestions(favoriteQs)
		setIsLoading(false)
	}, [])

	const removeFavorite = (questionId: string) => {
		// 로컬스토리지에서 현재 즐겨찾기 목록 불러오기
		const savedFavorites = localStorage.getItem(FAVORITES_KEY)
		const favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : []

		// 즐겨찾기 제거
		const updatedFavorites = favorites.filter((id) => id !== questionId)
		localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))

		// 상태 업데이트
		setFavoriteQuestions((prev) => prev.filter((q) => q.id !== questionId))
	}

	const clearAllFavorites = () => {
		localStorage.setItem(FAVORITES_KEY, JSON.stringify([]))
		setFavoriteQuestions([])
	}

	// 카테고리 ID로 카테고리 경로와 이름 찾기
	const getCategoryInfo = (categoryId: number) => {
		const category = categories.find((c) => c.id === categoryId)
		return category
			? { path: category.path, name: category.title, color: category.color }
			: { path: "", name: "알 수 없음", color: "" }
	}

	// 필터링된 질문 목록
	const filteredQuestions = favoriteQuestions.filter((question) => {
		// 카테고리 필터링
		const categoryMatch =
			currentCategory === "all" || question.categoryId === currentCategory

		// 검색어 필터링 (제목 또는 키워드에 포함)
		const searchMatch =
			searchTerm === "" ||
			question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			question.keywords.some((keyword) =>
				keyword.toLowerCase().includes(searchTerm.toLowerCase())
			)

		return categoryMatch && searchMatch
	})

	// 카테고리별 질문 수 계산
	const categoryQuestionCounts = categories.map((category) => ({
		id: category.id,
		name: category.title,
		count: favoriteQuestions.filter((q) => q.categoryId === category.id).length,
		icon: category.icon,
		color: category.color,
	}))

	if (isLoading) {
		return (
			<Card className="w-full">
				<CardContent className="flex flex-col items-center justify-center pt-6 pb-6">
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent mb-4"></div>
					<p className="text-muted-foreground">
						즐겨찾기 목록을 불러오는 중...
					</p>
				</CardContent>
			</Card>
		)
	}

	if (favoriteQuestions.length === 0) {
		return (
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
	}

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h2 className="text-2xl font-semibold">내 즐겨찾기</h2>
					<p className="text-muted-foreground">
						총 {favoriteQuestions.length}개의 즐겨찾기한 질문이 있습니다
					</p>
				</div>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="destructive" size="sm">
							<Trash2 className="mr-2 h-4 w-4" />
							모두 삭제
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								정말 모든 즐겨찾기를 삭제하시겠습니까?
							</AlertDialogTitle>
							<AlertDialogDescription>
								이 작업은 되돌릴 수 없으며, 즐겨찾기한 모든 질문이 목록에서
								제거됩니다.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>취소</AlertDialogCancel>
							<AlertDialogAction
								onClick={clearAllFavorites}
								className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
							>
								삭제
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* 사이드바: 카테고리 필터 */}
				<Card className="lg:col-span-1 h-fit">
					<CardHeader>
						<CardTitle className="text-lg">카테고리 필터</CardTitle>
						<CardDescription>카테고리별로 질문을 필터링합니다</CardDescription>
					</CardHeader>
					<CardContent className="p-0">
						<ScrollArea className="h-[300px]">
							<div className="px-4 pb-4">
								<div className="mb-2">
									<Button
										variant={currentCategory === "all" ? "default" : "ghost"}
										className="w-full justify-start mb-1"
										onClick={() => setCurrentCategory("all")}
									>
										<Bookmark className="mr-2 h-4 w-4" />
										모든 카테고리
										<Badge className="ml-auto">
											{favoriteQuestions.length}
										</Badge>
									</Button>
								</div>

								{categoryQuestionCounts
									.filter((cat) => cat.count > 0)
									.map((cat) => (
										<Button
											key={cat.id}
											variant={currentCategory === cat.id ? "default" : "ghost"}
											className="w-full justify-start mb-1"
											onClick={() => setCurrentCategory(cat.id)}
										>
											<span className="mr-2">{cat.icon}</span>
											{cat.name}
											<Badge className="ml-auto">{cat.count}</Badge>
										</Button>
									))}
							</div>
						</ScrollArea>
					</CardContent>
				</Card>

				{/* 메인 컨텐츠: 질문 목록 */}
				<div className="lg:col-span-2 space-y-4">
					{/* 검색 */}
					<Card>
						<CardContent className="pt-4 pb-2">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="text"
									placeholder="즐겨찾기한 질문 검색..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-8"
								/>
							</div>
						</CardContent>
					</Card>

					{/* 질문 목록 */}
					{filteredQuestions.length > 0 ? (
						<div className="space-y-4">
							{filteredQuestions.map((question) => {
								const categoryInfo = getCategoryInfo(question.categoryId)

								return (
									<Card key={question.id} className="group relative">
										<Link
											href={`/${categoryInfo.path}/questions/${question.id}`}
										>
											<CardHeader className="pb-2">
												<div className="flex items-start">
													<div>
														<Badge
															variant="outline"
															className={categoryInfo.color.replace(
																"hover:",
																""
															)}
														>
															{categoryInfo.name}
														</Badge>
														<CardTitle className="text-lg mt-2">
															{question.title}
														</CardTitle>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-sm text-muted-foreground line-clamp-2">
													{question.description}
												</p>
											</CardContent>
											<CardFooter className="flex flex-wrap gap-2 pt-0">
												{question.keywords.slice(0, 3).map((keyword, idx) => (
													<Badge
														key={idx}
														variant="outline"
														className="bg-blue-50"
													>
														{keyword}
													</Badge>
												))}
											</CardFooter>
										</Link>

										<Button
											variant="ghost"
											size="icon"
											className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
											onClick={() => removeFavorite(question.id)}
										>
											<Trash2 className="h-4 w-4 text-destructive" />
											<span className="sr-only">삭제</span>
										</Button>
									</Card>
								)
							})}
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
