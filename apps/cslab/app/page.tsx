export const dynamic = "force-static"
import React from "react"
import { Star } from "lucide-react"
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import Link from "next/link"
import { categories } from "@/data/categories"

const CSInterviewApp = () => {
	return (
		<div className="min-h-screen bg-gray-50 font-sans">
			{/* 헤더 */}
			<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-10 md:py-12 px-6">
				<div className="container mx-auto max-w-5xl">
					<h1 className="text-2xl font-bold mb-4 md:text-4xl sm:text-3xl">
						개발자 CS 면접 질문 모음집
					</h1>
					<p className="text-sm sm:text-md md:text-xl  opacity-90 max-w-3xl">
						٩( ͡◉ ̯ ͡◉)۶ 여러분의 취뽀를 기원합니다 ٩( ͡◉ ̯ ͡◉)۶
					</p>
				</div>
			</div>

			{/* 메인 컨텐츠 */}
			<main className="container mx-auto  py-5 bg-gray flex justify-center px-6 ">
				<div className="max-w-5xl w-full">
					<div className="mb-5 ">
						<div className="flex gap-1 items-center w-full">
							<Badge
								className="text-sm leading-none font-semibold p-2"
								variant="outline"
							>
								<Star className="h-4 w-4 text-amber-400 flex-shrink-0 " />
								{`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`}{" "}
								업데이트
							</Badge>
						</div>
					</div>

					<div className="flex flex-col gap-6 w-full">
						{categories.map((category) => (
							<Link key={category.id} href={category.path} className="w-full">
								<Card
									key={category.id}
									className={`${category.color} cursor-pointer border-none transition-all py-6 duration-300 hover:translate-y-[-4px]`}
								>
									<CardHeader>
										<div className="text-xl  flex items-center gap-2">
											<div>{category.icon}</div>
											<CardTitle className="text-xl ">
												{category.title}
											</CardTitle>
										</div>
										<CardDescription className="text-gray-700">
											{category.description}
										</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default CSInterviewApp
