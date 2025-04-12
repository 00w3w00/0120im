import { ImageResponse } from "next/og"
import { categories } from "@/data/categories"

export const size = {
	width: 1200,
	height: 630,
}

// 콘텐츠 유형 설정
export const contentType = "image/png"

// 에지 런타임 사용
export const runtime = "edge"

export function generateImageMetadata({
	params,
}: {
	params: { category: string }
}) {
	const category = categories.find((c) => c.path === params.category)
	if (!category) return []

	return [
		{
			id: "og-image",
			size,
			contentType,
			alt: `${category.title} - CS 면접 질문 모음집`,
		},
	]
}

// 이미지 생성 함수
export default async function Image({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const categoryParams = (await params).category
	const category = categories.find((c) => c.path === categoryParams)

	// 카테고리가 없을 경우 기본 이미지 반환
	if (!category) {
		return new ImageResponse(
			(
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
						backgroundColor: "#f4f4f5",
						color: "#18181b",
						fontSize: 64,
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					<div>CS 면접 질문 모음집</div>
				</div>
			),
			{ ...size }
		)
	}

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
					color: "white",
					fontSize: 64,
					fontWeight: "bold",
					textAlign: "center",
					padding: "40px",
				}}
			>
				<div style={{ fontSize: 32, marginBottom: 24, opacity: 0.8 }}>
					CS 면접 질문 모음집
				</div>
				<div style={{ fontSize: 72, marginBottom: 24 }}>{category.title}</div>
				<div style={{ fontSize: 36, marginTop: "auto", opacity: 0.7 }}>
					{category.icon} {category.description.slice(0, 50)}...
				</div>
			</div>
		),
		{ ...size }
	)
}
