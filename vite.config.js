import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
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
			'@helpers': resolve(__dirname, 'src/helpers'),
			'@slices': resolve(__dirname, 'src/slices'),
			'@css': resolve(__dirname, 'src/css'),
			'@context': resolve(__dirname, 'src/contexts'),
			'@routes': resolve(__dirname, 'src/routes'),
			'@layouts': resolve(__dirname, 'src/layouts'),
			'@hooks': resolve(__dirname, 'src/hooks'),
		},
	},
	plugins: [react()],
});
