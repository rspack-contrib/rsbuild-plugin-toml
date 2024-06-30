import { defineConfig } from '@rsbuild/core';
import { pluginToml } from '../src';

export default defineConfig({
	plugins: [pluginToml()],
});
