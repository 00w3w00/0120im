/* eslint-disable @next/next/no-page-custom-font */
import "@repo/ui/globals.css"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Layout } from "@repo/ui/components/custom/layout"
import Script from "next/script"
export const metadata: Metadata = {
	metadataBase: new URL("https://cs-lab.0120.im/"),
	title: {
		template: "%s | 개발자 CS 면접 질문 모음집",
		default: "개발자 CS 면접 질문 모음집",
	},
	description:
		"자료구조, 알고리즘, 운영체제, 네트워크, 데이터베이스, 웹/프론트엔드 등 개발자 기술 면접 준비를 위한 필수 CS 질문 모음",
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
	alternates: {
		canonical: "https://cs-lab.0120.im/",
		languages: {
			"ko-KR": "https://cs-lab.0120.im/",
		},
	},
}

export const viewport: Viewport = {
	themeColor: "white",
	viewportFit: "contain",
	width: "device-width",
	initialScale: 1,
}
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "개발자 CS 면접 질문 모음집",
	url: "https://cs-lab.0120.im/",
	description: "개발자 기술 면접 준비를 위한 필수 CS 질문 모음",
	publisher: {
		"@type": "Organization",
		name: "개발자 면접 준비",
		logo: {
			"@type": "ImageObject",
			url: "https://cs-lab.0120.im/logo.png",
		},
	},
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ko">
			<Script
				id="json-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
