# @rubakas/media-responsum

> Responsive breakpoints per device form-factor

Install the plugin from npm:

```
$ npm install @rubakas/media-responsum
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // be sure to not override screens
  },
  
  plugins: [
    // ...
    require('@rubakas/media-responsum'),
    // ...
  ],
};
```

This plugin will generate following responsive breakpoints for TailwindCSS:
`tablet, laptop, desktop, desktop-4k`

## License

@rubakas/media-responsum is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
