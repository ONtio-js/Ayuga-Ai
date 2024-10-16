/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#FCF1BB',
				secondary: '#87CEEB',
				white: '#F0F8FF',
				black: '#363636',
				yellow: '#FFD700',
			},
			backgroundImage: {
				background2: "url('/src/assets/onboarding/vectorbg.svg')",
			},
			dropShadow: {
				'4xl':'0px 6px black'
			}
		},
	},
	plugins: [],
};

