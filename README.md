# @rsbuild/plugin-toml

An Rsbuild plugin to import TOML files and convert them to JavaScript objects.

> [TOML](https://toml.io/) is a semantically explicit, easy-to-read configuration file format.

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

## Example

Suppose the project has the following code in `example.toml`:

```toml title="example.toml"
hello = "world"

[foo]
bar = "baz"
```

After using the TOML plugin, you can reference it as follows:

```js
import example from "./example.toml";

console.log(example.hello); // 'world';
console.log(example.foo); // { bar: 'baz' };
```

## Options

### esModule

By default, `@rsbuild/plugin-toml` generates JS modules that use the ES modules syntax. If you want to generate a CommonJS module, you can set the `esModule` option to `false`.

- Type: `boolean`
- Default: `true`
- Example:

```js
pluginToml({
  exModule: false,
});
```

## Type Declaration

When you import TOML files in TypeScript code, please create a `src/env.d.ts` file in your project and add the type declarations.

```ts title="src/env.d.ts"
declare module "*.toml" {
  const content: Record<string, any>;
  export default content;
}
```

## License

[MIT](./LICENSE).
