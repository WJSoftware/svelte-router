import { defineConfig } from 'vitest/config';
import { sveltepress } from '@sveltepress/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defaultTheme } from '@sveltepress/theme-default';

export default defineConfig({
	plugins: [sveltepress({
		siteConfig: {
			title: 'Svelte Router',
			description: 'Next-level routing for Svelte and Sveltekit',
		},
		theme: defaultTheme({
			logo: '/logo-64.svg',
			github: 'https://github.com/WJSoftware/svelte-router',
			editLink: 'https://github.com/WJSoftware/svelte-router/edit/main/src/routes/:route',
			themeColor: {
				light: '#ffffff',
				dark: '#121212',
				primary: '#2432ffff',
				hover: '#8523ccff',
				gradient: {
					start: '#4f46e5',
					end: '#3b82f6'
				}
			},
			navbar: [
				{
					title: 'Docs',
					to: '/docs/intro'
				}
			],
			sidebar: {
				'/docs/': [
					{
						title: 'Introduction',
						collapsible: true,
						items: [
							{
								title: 'About & Quickstart',
								to: '/docs/intro'
							},
							{
								title: 'Library Initialization',
								to: '/docs/library-initialization'
							},
							{
								title: 'Electron Support',
								to: '/docs/electron-support'
							},
							{
								title: 'Sveltekit Support',
								to: '/docs/sveltekit-support'
							}
						]
					}
				]
			}
		})
	}), svelteTesting()],

	test: {
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
