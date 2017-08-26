# Eslint Config Flying Rocket 🚀

[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/SaraVieira/eslint-config-flying-rocket/master.svg
[travis-url]: https://travis-ci.org/SaraVieira/eslint-config-flying-rocket
[npm-image]: https://img.shields.io/npm/v/eslint-config-flying-rocket.svg
[npm-url]: https://npmjs.org/package/eslint-config-flying-rocket
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-flying-rocket.svg
[downloads-url]: https://img.shields.io/npm/dm/eslint-config-flying-rocket.svg

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for the style I use and you may like too 🍕

## Install

```bash
yarn add eslint-config-flying-rocket --dev
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Add this to your .eslintrc file:

```
{
  "extends": "flying-rocket"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

## Learn more

### Packages:
    * [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
    * [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    * [eslint-plugin-compat](https://www.npmjs.com/package/eslint-plugin-compat)
    * [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
    * [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    * [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
    * [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
    * [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
    * [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)


### Custom Rules:
  * Use signgle quotes (prettier)
  * No semicolons (prettier)
  * no-weak-types - No using Array and Object in flow ( only warning)
  * react-in-jsx-scope - Turned off because I use preact a lot with .js files


## License

MIT. Copyright (c) [Sara Vieira](http://iamsaravieira.com) 🚀
