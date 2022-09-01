/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.APP_URL}api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `${process.env.APP_URL}uploads/:path*`,
			},
		]
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
}

module.exports = nextConfig
