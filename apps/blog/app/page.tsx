import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export default async function Home() {
	// 최신 포스트 최대 3개만 가져오기
	const latestPosts = (await getAllPosts()).slice(0, 3)

	return (
		<main className="max-w-4xl mx-auto px-4 py-12">
			<section className="mb-16 text-center">
				<h1 className="text-4xl font-bold mb-6">Next.js와 MDX로 만든 블로그</h1>
				<p className="text-xl text-gray-600 mb-8">
					App Router를 활용한 정적 사이트 생성(SSG) 예제입니다.
				</p>
				<Link
					href="/blog"
					className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
				>
					블로그 보기
				</Link>
			</section>

			{latestPosts.length > 0 && (
				<section>
					<h2 className="text-2xl font-bold mb-6">최신 포스트</h2>
					<div className="grid gap-6 md:grid-cols-3">
						{latestPosts.map((post) => (
							<Link key={post.slug} href={`/blog/${post.slug}`}>
								<div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition h-full">
									<h3 className="text-lg font-bold mb-2">
										{post.metadata.title}
									</h3>
									<p className="text-sm text-gray-500 mb-3">
										{new Date(post.metadata.date).toLocaleDateString("ko-KR", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</p>
									<p className="text-gray-700 line-clamp-3">
										{post.metadata.excerpt}
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}
		</main>
	)
}
