/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix:
		process.env.NODE_ENV === "production" ? "https://www.0120.im/" : "",
}

export default nextConfig
