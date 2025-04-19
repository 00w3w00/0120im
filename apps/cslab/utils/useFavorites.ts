import { useState, useEffect } from "react"

interface FavoritesState {
	favorites: string[]
	isLoaded: boolean
}

interface UseFavoritesReturn {
	favorites: string[]
	isLoaded: boolean
	addFavorite: (questionId: string) => boolean
	removeFavorite: (questionId: string) => boolean
	toggleFavorite: (questionId: string) => boolean
	isFavorite: (questionId: string) => boolean
}

export const FAVORITES_KEY = "cs_favorite_questions"

export function useFavorites(): UseFavoritesReturn {
	const [state, setState] = useState<FavoritesState>({
		favorites: [],
		isLoaded: false,
	})

	const loadFavorites = () => {
		try {
			const savedFavorites = localStorage.getItem(FAVORITES_KEY)
			const parsedFavorites = savedFavorites ? JSON.parse(savedFavorites) : []
			setState({ favorites: parsedFavorites, isLoaded: true })
		} catch (error) {
			console.error("즐겨찾기 불러오기 실패:", error)
			setState({ favorites: [], isLoaded: true })
		}
	}

	useEffect(() => {
		loadFavorites()
	}, [])

	const saveFavorites = (updatedFavorites: string[]) => {
		try {
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
			setState((prev) => ({ ...prev, favorites: updatedFavorites }))
		} catch (error) {
			console.error("즐겨찾기 저장 실패:", error)
		}
	}

	const addFavorite = (questionId: string): boolean => {
		if (!state.favorites.includes(questionId)) {
			const updatedFavorites = [...state.favorites, questionId]
			saveFavorites(updatedFavorites)
			return true
		}
		return false
	}

	const removeFavorite = (questionId: string): boolean => {
		if (state.favorites.includes(questionId)) {
			const updatedFavorites = state.favorites.filter((id) => id !== questionId)
			saveFavorites(updatedFavorites)
			return true
		}
		return false
	}

	const toggleFavorite = (questionId: string): boolean => {
		if (state.favorites.includes(questionId)) {
			return removeFavorite(questionId)
		}
		return addFavorite(questionId)
	}

	const isFavorite = (questionId: string): boolean => {
		return state.favorites.includes(questionId)
	}

	return {
		favorites: state.favorites,
		isLoaded: state.isLoaded,
		addFavorite,
		removeFavorite,
		toggleFavorite,
		isFavorite,
	}
}
