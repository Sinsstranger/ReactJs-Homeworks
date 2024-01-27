import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
	},
	server: {
		hmr: {
			overlay: true, // Отображение уведомлений об ошибках поверх приложения
		},
	},
	watch: {
		// Игнорировать изменения в указанных файлах/папках
		exclude: ['node_modules', 'dist', 'public'],
	},
	resolve: {
		alias: {
			// Псевдонимы для удобства импорта
			'@components': resolve(__dirname, 'src/components'),
			'@context': resolve(__dirname, 'src/contexts'),
			'@css': resolve(__dirname, 'src/css'),
			'@helpers': resolve(__dirname, 'src/helpers'),
			'@hooks': resolve(__dirname, 'src/hooks'),
			'@layouts': resolve(__dirname, 'src/layouts'),
			'@middlewares': resolve(__dirname, 'src/middlewares'),
			'@reducers': resolve(__dirname, 'src/reducers'),
			'@routes': resolve(__dirname, 'src/routes'),
			'@slices': resolve(__dirname, 'src/reducers/slices'),
		},
	},
	plugins: [react(), nodePolyfills()],
});
