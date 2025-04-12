export const dynamic = "force-static"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getPostBySlug, getPostSlugs } from "@/lib/mdx"

export async function generateStaticParams() {
	const slugs = await getPostSlugs()
	return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const paramValues = await params
	const slug = paramValues.slug
	const post = await getPostBySlug(slug)

	if (!post) {
		return {
			title: "포스트를 찾을 수 없음",
		}
	}

	return {
		title: `${post.metadata.title} | MDX 예제`,
		description: post.metadata.excerpt,
	}
}

// 2. 컴포넌트 정의
export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	// 3. params를 await 하여 사용
	const paramValues = await params
	const slug = paramValues.slug

	const post = await getPostBySlug(slug)

	if (!post) {
		notFound()
	}

	const { metadata, content } = post

	const formattedDate = new Date(metadata.date).toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	return (
		<main className="max-w-4xl mx-auto px-4 py-8">
			<div className="mb-6">
				<Link href="/blog" className="text-blue-600 hover:underline">
					&larr; 블로그 목록으로 돌아가기
				</Link>
			</div>

			<article className="prose prose-lg max-w-none">
				<header className="mb-10">
					<h1 className="text-4xl font-bold mb-3">{metadata.title}</h1>
					<div className="text-gray-500 mb-4">{formattedDate}</div>

					{metadata.tags && metadata.tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-6">
							{metadata.tags.map((tag) => (
								<span
									key={tag}
									className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</header>

				{/* MDX 콘텐츠 렌더링 */}
				<div className="mdx-content">{content}</div>
			</article>
		</main>
	)
}
