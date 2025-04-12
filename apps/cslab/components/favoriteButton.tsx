"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@repo/ui/components/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@repo/ui/components/tooltip"
import { Question } from "@/data/questions"

interface FavoriteQuestionButtonProps {
	question: Question
	size?: "sm" | "md" | "lg"
}

const FAVORITES_KEY = "cs_favorite_questions"

export default function FavoriteQuestionButton({
	question,
	size = "md",
}: FavoriteQuestionButtonProps) {
	const [isFavorite, setIsFavorite] = useState(false)
	const [isClient, setIsClient] = useState(false)

	// 클라이언트 사이드에서만 로컬스토리지에 접근하기 위한 처리
	useEffect(() => {
		setIsClient(true)
		// 로컬스토리지에서 즐겨찾기 목록 불러오기
		const savedFavorites = localStorage.getItem(FAVORITES_KEY)
		const favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : []
		setIsFavorite(favorites.includes(question.id))
	}, [question.id])

	const toggleFavorite = () => {
		// 로컬스토리지에서 현재 즐겨찾기 목록 불러오기
		const savedFavorites = localStorage.getItem(FAVORITES_KEY)
		const favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : []

		if (isFavorite) {
			// 즐겨찾기 제거
			const updatedFavorites = favorites.filter((id) => id !== question.id)
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
			setIsFavorite(false)
		} else {
			// 즐겨찾기 추가
			const updatedFavorites = [...favorites, question.id]
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
			setIsFavorite(true)
		}
	}

	const sizeClasses = {
		sm: "h-8 w-8",
		md: "h-10 w-10",
		lg: "h-12 w-12",
	}

	const iconSizes = {
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6",
	}

	// 서버 사이드 렌더링 시 초기 상태
	if (!isClient) {
		return (
			<Button
				variant="ghost"
				size="icon"
				className={`${sizeClasses[size]} rounded-full`}
			>
				<Star className={iconSizes[size]} />
				<span className="sr-only">즐겨찾기</span>
			</Button>
		)
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={(e) => {
							e.preventDefault()
							toggleFavorite()
						}}
						variant={isFavorite ? "default" : "outline"}
						size="icon"
						className={`${sizeClasses[size]} rounded-full ${isFavorite ? "bg-amber-400 hover:bg-amber-500 border-amber-400" : ""}`}
					>
						<Star
							className={`${iconSizes[size]} ${isFavorite ? "fill-white text-white" : ""}`}
						/>
						<span className="sr-only">즐겨찾기</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{isFavorite ? "즐겨찾기에서 제거" : "즐겨찾기에 추가"}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
