# y-server-plugin-nuxt

y-server-plugin-nuxt is a [y-server](https://github.com/yued-fe/y-server) plugin to nuxt request.

## Install

```bash
npm install y-server-plugin-nuxt
```

## Usage

```javascript
const yServer = require('y-server');
const nuxtPlugin = require('y-server-plugin-nuxt');

yServer({
  plugins: [
    nuxtPlugin({
      nuxtConfig: {},
    }),
  ],
});
```

## Notes

* `nuxtConfig` is the nuxt config.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
