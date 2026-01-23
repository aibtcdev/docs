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
			title: 'AIBTC Docs',
			logo: {
				light: './src/assets/aibtc-avatar.png',
				dark: './src/assets/aibtc-avatar.png',
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/aibtcdev' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/aibtcdev' },
			],
			sidebar: [
				{ label: 'Glossary', slug: 'glossary' },
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
