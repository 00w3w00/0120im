// app/[category]/not-found.tsx
import Link from "next/link"
import { categories } from "@/data/categories"

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gray-50 font-sans">
			<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-10 md:py-12 px-6">
				<div className="container mx-auto max-w-5xl">
					<h1 className="text-2xl font-bold mb-4 md:text-4xl sm:text-3xl">
						페이지를 찾을 수 없습니다
					</h1>
					<p className="text-md sm:text-xl md:text-2xl opacity-90 max-w-3xl">
						요청하신 카테고리 페이지를 찾을 수 없습니다.
					</p>
				</div>
			</div>

			<main className="mx-auto py-8 bg-gray flex justify-center px-6">
				<div className="max-w-5xl w-full text-center">
					<div className="bg-white rounded-lg shadow-sm p-8 mb-8">
						<h2 className="text-3xl font-bold mb-6 text-gray-800">404</h2>
						<p className="text-xl mb-8 text-gray-600">
							요청하신 페이지를 찾을 수 없습니다. 아래 카테고리 중에서
							선택해주세요.
						</p>

						<div className="flex flex-wrap justify-center gap-4 mt-8">
							{categories.map((category) => (
								<Link
									key={category.id}
									href={`/${category.path}`}
									className={`${category.color} px-4 py-2 rounded-lg flex items-center transition-all duration-300 hover:translate-y-[-2px]`}
								>
									<span className="mr-2" aria-hidden="true">
										{category.icon}
									</span>
									<span className="font-medium">{category.title}</span>
								</Link>
							))}
						</div>

						<div className="mt-8">
							<Link
								href="/"
								className="text-blue-600 hover:underline font-medium"
							>
								홈으로 돌아가기
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
