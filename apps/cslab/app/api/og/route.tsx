import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url)

	const title = searchParams.get("title") || "개발자 CS 면접 질문 모음집"
	const category = searchParams.get("category") || ""

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "white", // 그라디언트는 backgroundImage로만 설정
					backgroundImage: "linear-gradient(to right, #2563eb, #9333ea)",
					fontSize: 32,
					fontWeight: 600,
					color: "white",
					padding: "40px 80px",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 30,
						left: 30,
						fontSize: 25,
						opacity: 0.8,
					}}
				>
					개발자 CS 면접 질문 모음집
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					{category && (
						<span
							style={{
								fontSize: 35,
								marginBottom: 20,
								padding: "8px 24px",
								borderRadius: 10,
								backgroundColor: "rgba(255, 255, 255, 0.2)",
							}}
						>
							{category}
						</span>
					)}

					<h1
						style={{
							fontSize: 55,
							margin: "30px 0",
							lineHeight: 1.1,
							textAlign: "center",
							maxWidth: "800px",
						}}
					>
						{title}
					</h1>

					<div
						style={{
							fontSize: 30,
							opacity: 0.9,
							marginTop: 20,
							display: "flex",
							alignItems: "center",
							gap: "12px",
						}}
					>
						<span>٩( ͡◉ ̯ ͡◉)۶</span>
						<span>여러분의 취뽀를 기원합니다</span>
						<span>٩( ͡◉ ̯ ͡◉)۶</span>
					</div>
				</div>

				<div
					style={{
						position: "absolute",
						bottom: 30,
						right: 30,
						fontSize: 25,
						opacity: 0.7,
					}}
				>
					{new Date().getFullYear()}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	)
}
