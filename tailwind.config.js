/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			backgroundColor: {
				'macos-red': '#FF605C',
				'macos-yellow': '#FFBD44',
				'macos-green': '#00CA4E'
			}
		}
	},
	plugins: []
};
