import "./globals.css"
import type { Metadata, Viewport } from "next"
import Link from "next/link"

// 메타데이터
export const metadata: Metadata = {
	title: {
		template: "%s | MDX 블로그",
		default: "MDX 블로그",
	},
	description: "Next.js App Router와 MDX를 사용한 정적 블로그 예제",
}
export const viewport: Viewport = {
	themeColor: "black",
	viewportFit: "contain",
	width: "device-width",
	initialScale: 1,
}

// 루트 레이아웃
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ko">
			<body className="min-h-screen flex flex-col">
				<header className="bg-white border-b border-gray-200">
					<div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
						<Link href="/" className="text-2xl font-bold">
							MDX 블로그
						</Link>
						<nav>
							<ul className="flex space-x-6">
								<li>
									<Link href="/" className="hover:text-blue-600">
										홈
									</Link>
								</li>
								<li>
									<Link href="/blog" className="hover:text-blue-600">
										블로그
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>

				<div className="flex-grow">{children}</div>

				<footer className="bg-gray-100 border-t border-gray-200 py-8">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<p className="text-gray-600">
							&copy; {new Date().getFullYear()} MDX 블로그 예제
						</p>
					</div>
				</footer>
			</body>
		</html>
	)
}
