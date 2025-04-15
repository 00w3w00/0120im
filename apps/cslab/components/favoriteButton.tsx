"use client"

import { memo } from "react"
import { Star } from "lucide-react"
import { Button } from "@repo/ui/components/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@repo/ui/components/tooltip"
import { toast } from "sonner"

import { Question } from "@/data/questions"
import { useFavoritesContext } from "@/context/favoritesContext"

interface FavoriteQuestionButtonProps {
	question: Question
	size?: "sm" | "md" | "lg"
	className?: string
}

// 버튼 사이즈 설정을 객체로 분리하여 재사용성 높임
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

function FavoriteQuestionButton({
	question,
	className,
	size = "md",
}: FavoriteQuestionButtonProps) {
	const { isFavorite, toggleFavorite, isLoaded } = useFavoritesContext()
	const isFav = isLoaded && isFavorite(question.id)

	// 서버 사이드 렌더링 시 초기 상태
	if (!isLoaded) {
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

	const handleToggleFavorite = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		const wasAdded = toggleFavorite(question.id)
		toast(
			wasAdded ? "즐겨찾기에 추가 되었습니다." : "즐겨찾기에서 제거되었습니다"
		)
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleToggleFavorite}
						variant={isFav ? "default" : "outline"}
						size="icon"
						className={`${className || ""} ${sizeClasses[size]} cursor-pointer ${
							isFav ? "bg-amber-400 hover:bg-amber-500 border-amber-400" : ""
						}`}
					>
						<Star
							className={`${iconSizes[size]} ${isFav ? "fill-white text-white" : ""}`}
						/>
						<span className="sr-only">즐겨찾기</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{isFav ? "즐겨찾기에서 제거" : "즐겨찾기에 추가"}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

// 불필요한 리렌더링 방지를 위한 메모이제이션
export default memo(FavoriteQuestionButton)
