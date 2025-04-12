import { ImageResponse } from "next/og"

export const size = {
	width: 1200,
	height: 630,
}

export const contentType = "image/png"

// 에지 런타임 사용
export const runtime = "edge"

export function generateImageMetadata() {
	return [
		{
			id: "og-image",
			size,
			contentType,
			alt: `CS 면접 질문 모음집`,
		},
	]
}

// 이미지 생성 함수
export default async function Image() {
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

				<div style={{ fontSize: 36, marginTop: "auto", opacity: 0.7 }}>
					٩( ͡◉ ̯ ͡◉)۶ 여러분의 취뽀를 기원합니다 ٩( ͡◉ ̯ ͡◉)۶
				</div>
			</div>
		),
		{ ...size }
	)
}
