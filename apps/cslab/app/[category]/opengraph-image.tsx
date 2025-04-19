import { ImageResponse } from "next/og"

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = "image/png"

export async function generateImageMetadata({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params
	return [
		{
			id: "og-image",
			size,
			contentType,
			alt: `${category} 면접 질문 모음집`,
		},
	]
}

// 이미지 생성 함수
export default async function Image({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params

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
					gap: "16px",
					color: "white",
					fontWeight: "bold",
					textAlign: "center",
					padding: "40px",
				}}
			>
				<div style={{ fontSize: 64, opacity: 0.8 }}>
					{category} 면접 질문 모음집
				</div>

				<div style={{ fontSize: 36, opacity: 0.7 }}>
					여러분의 취뽀를 기원합니다 🌟
				</div>
			</div>
		),
		{ ...size }
	)
}
