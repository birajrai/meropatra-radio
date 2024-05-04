import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import ViewportHeightCorrection from 'postcss-viewport-height-correction';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: mode === 'production' ? '/' : '/',
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['radio_black.svg'],
            manifest: {
                name: 'Mero Patra - Radio',
                short_name: 'meropatraradio',
                description: 'Listen Nepali Radio/FM Online 24/7.',
                theme_color: '#ffffff',
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg}'],
            },
            pwaAssets: {
                config: true,
                overrideManifestIcons: true,
            },
            devOptions: {
                enabled: true,
                suppressWarnings: true,
                type: 'module',
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [ViewportHeightCorrection({ variable: 'vh' })],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
}));
