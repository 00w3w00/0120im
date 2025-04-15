// hooks/useFavorites.ts
import { useState, useEffect } from "react"

export const FAVORITES_KEY = "cs_favorite_questions"

/**
 * 즐겨찾기 관리를 위한 커스텀 훅
 * @returns 즐겨찾기 관련 상태와 기능들
 */
export function useFavorites() {
	const [favorites, setFavorites] = useState<string[]>([])
	const [isLoaded, setIsLoaded] = useState(false)

	// 로컬스토리지에서 즐겨찾기 불러오기
	useEffect(() => {
		try {
			const savedFavorites = localStorage.getItem(FAVORITES_KEY)
			const parsedFavorites: string[] = savedFavorites
				? JSON.parse(savedFavorites)
				: []
			setFavorites(parsedFavorites)
		} catch (error) {
			console.error("즐겨찾기 불러오기 실패:", error)
			setFavorites([])
		} finally {
			setIsLoaded(true)
		}
	}, [])

	// 로컬스토리지에 즐겨찾기 저장하는 함수
	const saveFavorites = (updatedFavorites: string[]) => {
		try {
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
			setFavorites(updatedFavorites)
		} catch (error) {
			console.error("즐겨찾기 저장 실패:", error)
		}
	}

	// 즐겨찾기 추가
	const addFavorite = (questionId: string) => {
		if (!favorites.includes(questionId)) {
			const updatedFavorites = [...favorites, questionId]
			saveFavorites(updatedFavorites)
			return true
		}
		return false
	}

	// 즐겨찾기 제거
	const removeFavorite = (questionId: string) => {
		if (favorites.includes(questionId)) {
			const updatedFavorites = favorites.filter((id) => id !== questionId)
			saveFavorites(updatedFavorites)
			return true
		}
		return false
	}

	// 즐겨찾기 토글
	const toggleFavorite = (questionId: string) => {
		if (favorites.includes(questionId)) {
			removeFavorite(questionId)
			return false
		} else {
			// 즐겨찾기에 없으면 추가하고 true 반환
			addFavorite(questionId)
			return true
		}
	}

	// 즐겨찾기 여부 확인
	const isFavorite = (questionId: string) => {
		return favorites.includes(questionId)
	}

	return {
		favorites,
		isLoaded,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		isFavorite,
	}
}
