import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import { glob } from "glob"
import { MDXComponents } from "../components/MDXComponents"

// 메타데이터 타입 정의
export type Metadata = {
	title: string
	date: string
	excerpt: string
	tags?: string[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any
}

// MDX 콘텐츠와 메타데이터를 포함하는 타입
export type Post = {
	slug: string
	metadata: Metadata
	content: React.ReactElement
}

// 블로그 포스트 디렉토리 경로
const POSTS_PATH = path.join(process.cwd(), "content", "blog")

// 블로그 포스트 슬러그 목록 가져오기
export async function getPostSlugs(): Promise<string[]> {
	const mdxFiles = await glob("*.mdx", { cwd: POSTS_PATH })
	return mdxFiles.map((file) => file.replace(/\.mdx$/, ""))
}

// 특정 슬러그에 해당하는 포스트 데이터 가져오기
export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
		const fileContent = fs.readFileSync(filePath, "utf8")

		// front matter와 콘텐츠 분리
		const { data, content } = matter(fileContent)

		// MDX 컴파일
		const mdxSource = await compileMDX<Metadata>({
			source: content,
			components: MDXComponents,
			options: {
				parseFrontmatter: true,
			},
		})

		return {
			slug,
			metadata: {
				...data,
				title: data.title || "",
				date: data.date || "",
				excerpt: data.excerpt || "",
			} as Metadata,
			content: mdxSource.content,
		}
	} catch (error) {
		console.error(`Error processing MDX file for slug "${slug}":`, error)
		return null
	}
}

// 모든 블로그 포스트 가져오기
export async function getAllPosts(): Promise<Post[]> {
	const slugs = await getPostSlugs()
	const postsPromises = slugs.map((slug) => getPostBySlug(slug))
	const posts = await Promise.all(postsPromises)

	// null 값 필터링하고 날짜순으로 정렬
	return posts
		.filter((post): post is Post => post !== null)
		.sort((a, b) => {
			const dateA = new Date(a.metadata.date).getTime()
			const dateB = new Date(b.metadata.date).getTime()
			return dateB - dateA // 최신순 정렬
		})
}
