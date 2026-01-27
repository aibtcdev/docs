// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.aibtc.com',
	output: 'static',
	adapter: cloudflare({ imageService: 'compile' }),
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
				light: './src/assets/aibtc-logo-k.svg',
				dark: './src/assets/aibtc-logo-ko.svg',
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/aibtcdev' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/aibtcdev' },
			],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{ label: 'Glossary', slug: 'glossary' },
			],
		}),
	],
});
