import Image from "next/image"
import Link from "next/link"
import React from "react"

// MDX에서 사용할 컴포넌트들을 정의
export const MDXComponents = {
	// 기본 HTML 요소 오버라이드
	h1: ({ children }: { children: React.ReactNode }) => (
		<h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
	),
	h2: ({ children }: { children: React.ReactNode }) => (
		<h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
	),
	h3: ({ children }: { children: React.ReactNode }) => (
		<h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>
	),
	p: ({ children }: { children: React.ReactNode }) => (
		<p className="my-4 leading-7">{children}</p>
	),
	a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
		<Link href={href || "#"} className="text-blue-600 hover:underline">
			{children}
		</Link>
	),
	ul: ({ children }: { children: React.ReactNode }) => (
		<ul className="list-disc pl-6 my-4">{children}</ul>
	),
	ol: ({ children }: { children: React.ReactNode }) => (
		<ol className="list-decimal pl-6 my-4">{children}</ol>
	),
	li: ({ children }: { children: React.ReactNode }) => (
		<li className="mb-1">{children}</li>
	),
	blockquote: ({ children }: { children: React.ReactNode }) => (
		<blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
			{children}
		</blockquote>
	),
	code: ({
		children,
		className,
	}: {
		children: React.ReactNode
		className?: string
	}) => {
		// 인라인 코드와 코드 블록 구분
		const isInline = !className
		return isInline ? (
			<code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded">
				{children}
			</code>
		) : (
			<div className="bg-gray-800 rounded-md my-4 overflow-hidden">
				<pre className={`${className} p-4 overflow-x-auto`}>
					<code className="text-gray-200">{children}</code>
				</pre>
			</div>
		)
	},

	// 커스텀 컴포넌트
	Image: ({
		src,
		alt,
		width = 800,
		height = 500,
	}: {
		src: string
		alt: string
		width?: number
		height?: number
	}) => (
		<div className="my-6">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="rounded-md"
			/>
			{alt && <p className="text-center text-sm text-gray-500 mt-1">{alt}</p>}
		</div>
	),

	// 구분선
	hr: () => <hr className="my-8 border-t border-gray-300" />,

	// 테이블
	table: ({ children }: { children: React.ReactNode }) => (
		<div className="overflow-x-auto my-6">
			<table className="min-w-full divide-y divide-gray-300">{children}</table>
		</div>
	),
	thead: ({ children }: { children: React.ReactNode }) => (
		<thead className="bg-gray-50">{children}</thead>
	),
	tbody: ({ children }: { children: React.ReactNode }) => (
		<tbody className="divide-y divide-gray-200">{children}</tbody>
	),
	tr: ({ children }: { children: React.ReactNode }) => <tr>{children}</tr>,
	th: ({ children }: { children: React.ReactNode }) => (
		<th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
			{children}
		</th>
	),
	td: ({ children }: { children: React.ReactNode }) => (
		<td className="px-4 py-3 text-sm text-gray-500">{children}</td>
	),
}
