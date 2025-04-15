import { algorithmQuestions } from "./category/algorithm"
import { dataStructureQuestions } from "./category/data-structure"
import { databaseQuestions } from "./category/database"
import { networkQuestions } from "./category/network"
import { osQuestions } from "./category/os"
import { webFrontendQuestions } from "./category/webFrontendQuestions"

export interface Question {
	id: string
	categoryId: number
	title: string
	description: string
	keywords: string[]
	answer?: {
		mainPoints: string[]
		explanation: string
		examples?: string[]
		codeExample?: string
	}
}

export const allQuestions: Question[] = [
	...dataStructureQuestions,
	...algorithmQuestions,
	...osQuestions,
	...networkQuestions,
	...databaseQuestions,
	...webFrontendQuestions,
]

// 카테고리 ID로 질문 필터링
export function getQuestionsByCategoryId(categoryId: number): Question[] {
	return allQuestions.filter((q) => q.categoryId === categoryId)
}

// 질문 ID로 질문 찾기
export function getQuestionById(questionId: string): Question | undefined {
	return allQuestions.find((q) => q.id === questionId)
}
