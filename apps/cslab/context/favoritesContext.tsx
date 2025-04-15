// context/FavoritesContext.tsx
"use client"

import { createContext, useContext, ReactNode } from "react"
import { useFavorites } from "@/utils/useFavorites"

interface FavoritesContextType {
	favorites: string[]
	isLoaded: boolean
	addFavorite: (questionId: string) => boolean
	removeFavorite: (questionId: string) => boolean
	toggleFavorite: (questionId: string) => boolean
	isFavorite: (questionId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined
)

export function FavoritesProvider({ children }: { children: ReactNode }) {
	const favoritesData = useFavorites()

	return (
		<FavoritesContext.Provider value={favoritesData}>
			{children}
		</FavoritesContext.Provider>
	)
}

export function useFavoritesContext() {
	const context = useContext(FavoritesContext)
	if (context === undefined) {
		throw new Error(
			"useFavoritesContext must be used within a FavoritesProvider"
		)
	}
	return context
}
