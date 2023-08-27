import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/TodoList/',
	resolve: {
		alias: {
			hoc: path.resolve(__dirname, './src/hoc'),
			assets: path.resolve(__dirname, './src/assets'),
			styles: path.resolve(__dirname, './src/styles'),
			contexts: path.resolve(__dirname, './src/contexts'),
			reducers: path.resolve(__dirname, './src/reducers'),
			components: path.resolve(__dirname, './src/components'),
		},
	},
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
		}),
	],
})