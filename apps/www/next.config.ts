/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix:
		process.env.NODE_ENV === "production"
			? "https://github.com/00w3w00/0120im/tree/www"
			: "",
}

export default nextConfig
