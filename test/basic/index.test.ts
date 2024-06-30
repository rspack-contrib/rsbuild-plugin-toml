import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';
import { pluginToml } from '../../src';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('should render page as expected', async ({ page }) => {
	const rsbuild = await createRsbuild({
		cwd: __dirname,
		rsbuildConfig: {
			plugins: [pluginToml()],
			server: {
				port: 3100,
			},
		},
	});

	const { server, urls } = await rsbuild.startDevServer();

	await page.goto(urls[0]);
	expect(await page.evaluate('window.a')).toBe('{"list":[1,2]}');

	await server.close();
});

test('should build succeed', async ({ page }) => {
	const rsbuild = await createRsbuild({
		cwd: __dirname,
		rsbuildConfig: {
			plugins: [pluginToml()],
			server: {
				port: 3100,
			},
		},
	});

	await rsbuild.build();
	const { server, urls } = await rsbuild.preview();

	await page.goto(urls[0]);
	expect(await page.evaluate('window.a')).toBe('{"list":[1,2]}');

	await server.close();
});
