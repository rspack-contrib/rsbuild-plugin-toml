# @rsbuild/plugin-toml

An Rsbuild plugin to import TOML files and convert them to JavaScript objects.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-toml">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-toml?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-toml -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginToml } from "@rsbuild/plugin-toml";

export default {
  plugins: [pluginToml()],
};
```

## License

[MIT](./LICENSE).
