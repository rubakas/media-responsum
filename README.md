# @rubakas/media-responsum

> Responsive breakpoints per device form-factor

Install the plugin from npm:

```
$ npm install rubakas-media-responsum
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    rubakasMediaResponsum: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    rubakasMediaResponsum: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('rubakas-media-responsum'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

@rubakas/media-responsum is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
