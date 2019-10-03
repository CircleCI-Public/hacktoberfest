# CircleCI 2019 Hacktoberfest

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Run your tests

```sh
npm run test
```

### Lints and fixes files

```sh
npm run lint
```

### Run your unit tests

```sh
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## For Dev

1. Open `vue.config.js`.
2. Comment out the following lines.

```js
  chainWebpack: config => {
    config.plugin('optimize-css').tap(([options]) => {
      options.cssnanoOptions.preset[1].svgo = false
      return [options]
    })
  },
```

3. Remove comments for production.

---
