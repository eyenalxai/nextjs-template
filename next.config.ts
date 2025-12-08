import type { NextConfig } from "next"

const extractDomain = (url: string | undefined) => {
	if (!url) throw new Error("NEXT_PUBLIC_APP_URL is not set")

	const urlObj = new URL(url)
	return urlObj.hostname
}

const nextConfig: NextConfig = {
	transpilePackages: ["geist"],
	allowedDevOrigins:
		process.env.NODE_ENV !== "development"
			? undefined
			: [extractDomain(process.env.NEXT_PUBLIC_APP_URL)]
}

module.exports = nextConfig
