import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	server: {
		hmr: {
			overlay: true, // Отображение уведомлений об ошибках поверх приложения
		},
	},
	watch: {
		// Игнорировать изменения в указанных файлах/папках
		exclude: ["node_modules", "dist", "public"],
	},
	resolve: {
		alias: {
			// Псевдонимы для удобства импорта
			"@components": resolve(__dirname, "src/components"),
			"@utils": resolve(__dirname, "src/utils"),
			"@slices": resolve(__dirname, "src/slices"),
		},
	},
	plugins: [react()],
});
