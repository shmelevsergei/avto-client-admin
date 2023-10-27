/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements-react/dist/js/**/*.js'
	],
	theme: {
		container: {
			padding: '2rem',
			center: true
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		'prettier-plugin-tailwindcss',
		require('tw-elements-react/dist/plugin.cjs')
	]
}
