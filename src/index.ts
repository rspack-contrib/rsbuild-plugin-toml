import type { RsbuildPlugin } from '@rsbuild/core';

export const PLUGIN_TOML_NAME = 'rsbuild:toml';

export type PluginTomlOptions = {
	esModule?: boolean;
};

export const pluginToml = (options: PluginTomlOptions = {}): RsbuildPlugin => ({
	name: PLUGIN_TOML_NAME,

	async setup(api) {
		const { parse } = await import('toml');
		const { esModule = true } = options;

		api.transform({ test: /\.toml$/ }, ({ code }) => {
			const parsed = parse(code);
			const exportType = esModule ? 'export default' : 'module.exports =';
			return `${exportType} ${JSON.stringify(parsed, undefined, '\t')};`;
		});
	},
});
