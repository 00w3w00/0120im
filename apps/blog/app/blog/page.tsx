import Link from "next/link"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"

// 메타데이터 설정
export const metadata: Metadata = {
	title: "블로그 | MDX 예제",
	description: "Next.js App Router와 MDX를 사용한 블로그 예제",
}

// 정적 페이지 생성 설정
export const dynamic = "force-static"

export default async function BlogPage() {
	// 모든 블로그 포스트 가져오기
	const posts = await getAllPosts()

	return (
		<main className="max-w-4xl mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">블로그</h1>

			<div className="grid gap-8">
				{posts.map((post) => (
					<article
						key={post.slug}
						className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
					>
						<Link href={`/blog/${post.slug}`}>
							<h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
								{post.metadata.title}
							</h2>
						</Link>

						<div className="text-sm text-gray-500 mb-3">
							{new Date(post.metadata.date).toLocaleDateString("ko-KR", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</div>

						<p className="text-gray-700 mb-4">{post.metadata.excerpt}</p>

						<div className="flex flex-wrap gap-2">
							{post.metadata.tags?.map((tag) => (
								<span
									key={tag}
									className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>

						<div className="mt-4">
							<Link
								href={`/blog/${post.slug}`}
								className="text-blue-600 hover:underline font-medium"
							>
								더 읽기 &rarr;
							</Link>
						</div>
					</article>
				))}
			</div>

			{posts.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-500">아직 작성된 블로그 포스트가 없습니다.</p>
				</div>
			)}
		</main>
	)
}
