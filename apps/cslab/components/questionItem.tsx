"use client"

import { Question } from "@/data/questions"
import FavoriteQuestionButton from "./favoriteButton"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useState, useCallback, memo } from "react"
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react"

type TQuestion = {
	getCategoryInfo?: (id: string) => void
	question: Question
}

function QuestionItemComponent({ question }: TQuestion) {
	const [isOpen, setIsOpen] = useState(false)
	const [copied, setCopied] = useState(false)

	const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), [])

	const copyToClipboard = useCallback((text: string) => {
		navigator.clipboard.writeText(text)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}, [])

	// 코드 예시 영역을 별도 컴포넌트로 분리하면 더 좋을 수 있음
	const renderCodeExample = () => {
		if (!question.answer?.codeExample) return null

		return (
			<div>
				<div className="flex items-center justify-between my-2">
					<h4 className="text-md font-bold">코드 예시</h4>
					<button
						onClick={() => copyToClipboard(question.answer!.codeExample!)}
						className="flex items-center text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
						<span className="ml-1">{copied ? "복사됨" : "복사"}</span>
					</button>
				</div>
				<div className="rounded-md overflow-hidden">
					<SyntaxHighlighter
						language="typescript"
						style={atomDark}
						customStyle={{ margin: 0, borderRadius: "0.375rem" }}
						wrapLines={true}
						wrapLongLines={true}
						className="text-xs"
					>
						{question.answer.codeExample}
					</SyntaxHighlighter>
				</div>
			</div>
		)
	}

	return (
		<div className="border rounded-sm shadow-sm p-4 bg-white dark:bg-gray-800 relative">
			<FavoriteQuestionButton
				className="absolute top-[-15px] "
				question={question}
				size="sm"
			/>

			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={toggleOpen}
			>
				<div className="flex-1 flex flex-row items-start sm:items-center gap-2">
					<div>
						<h3 className="text-lg font-medium">{question?.title}</h3>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
							{question?.description}
						</p>
					</div>
				</div>
				<button className="ml-2 flex-shrink-0 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
					{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
				</button>
			</div>

			{/* 질문 내용 - 조건부 렌더링 */}
			{isOpen && (
				<div className="pt-4">
					{/* 키워드 태그 */}
					{question?.keywords && question.keywords.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-4">
							{question.keywords.map((keyword, idx) => (
								<span
									key={idx}
									className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
								>
									{keyword}
								</span>
							))}
						</div>
					)}

					{/* 답변 섹션 */}
					{question?.answer && (
						<div className="space-y-4 mt-4 border-t pt-4">
							{/* 메인 포인트 */}
							{question.answer.mainPoints &&
								question.answer.mainPoints.length > 0 && (
									<>
										<h4 className="text-md font-bold mb-2">핵심 포인트</h4>
										<ul className="list-disc pl-5 space-y-1">
											{question.answer.mainPoints.map((point, idx) => (
												<li key={idx} className="text-sm">
													{point}
												</li>
											))}
										</ul>
									</>
								)}

							{/* 설명 */}
							{question.answer.explanation && (
								<div className="flex flex-col border-t pt-4">
									<h4 className="text-md font-bold">설명</h4>
									<div className="text-sm whitespace-pre-line">
										{question.answer.explanation}
									</div>
								</div>
							)}

							{/* 예시 */}
							{question.answer.examples &&
								question.answer.examples.length > 0 && (
									<div>
										<h4 className="text-sm font-bold mb-2">예시:</h4>
										<ul className="list-disc pl-5 text-sm space-y-1">
											{question.answer.examples.map((example, idx) => (
												<li key={idx}>{example}</li>
											))}
										</ul>
									</div>
								)}

							{/* 코드 예시 */}
							{renderCodeExample()}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

// memo를 사용하여 불필요한 리렌더링 방지
export const QuestionItem = memo(QuestionItemComponent)
