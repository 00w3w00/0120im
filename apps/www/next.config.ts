/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: "/", // 상대 경로로 에셋 참조
}

export default nextConfig
