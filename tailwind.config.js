const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#9E00FF'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			gray: {
				100: '#222328',
				200: '#1E1F24',
				500: '#6D6D77',
				600: '#2F3035',
				700: '#141519',
				800: '#141519',
			},
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
			red: {
				500: '#FF0000',
			},
		},

		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2rem',
			},
			fontSize: {
				'2md': '1.12rem',
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.gray.500'),
					color: '#fff',
					borderRadius: '0.65rem',
					padding: '8px 15px',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: theme('colors.gray.600'),
					},
				},

				'.text-link': {
					textUnderlineOffset: 4,
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.950'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
				'.text-title': {
					color: theme('colors.white'),
					fontSize: '1.5rem',
					fontWeight: 500,
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.flex-center': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					},
					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
					'.main-container': {
						position: 'relative',
						margin: '0 auto',
						maxWidth: '1250px',
						padding: '0 15px',
					},
				})
		}),
	],
}
