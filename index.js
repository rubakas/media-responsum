const plugin = require('tailwindcss/plugin');

const screens = {
  // 'phone': {'raw': '(max-width: 507px) or (max-height: 507px)'},
  // https://parsnip.io/post/ios-9-ipad-multitasking-and-ios-safari/
  'tablet': {'raw': '(min-width: 507px) and (min-height: 507px)'},
  'laptop': '1200px',
  'desktop': '1537px',
  'desktop-4k': '2049px'
}

module.exports = plugin(
  function ({ theme }) {
    // If your plugin requires user config,
    // you can access these options here.
    // Docs: https://tailwindcss.com/docs/plugins#exposing-options
    // const options = theme('rubakasMediaResponsum');

    
    // Add CSS-in-JS syntax to create utility classes.
    // Docs: https://tailwindcss.com/docs/plugins#adding-utilities
    // const utilities = {
    //   '.example-utility-class': {
    //     display: 'block',
    //   },
    // };

    // Conditionally add utility class based on user configuration.
    // if (options.YOUR_PLUGIN_CUSTOM_OPTION) {
    //   utilities['.custom-utility-class'] = {
    //     'background-color': 'red',
    //   };
    // }

    // addUtilities(utilities, {
    //   variants: variants('rubakasMediaResponsum'),
    // });
  },
  {
    theme: {
      screens: {
        ...screens
      }
      // Default options for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#exposing-options
      // rubakasMediaResponsum: {
      //   YOUR_PLUGIN_CUSTOM_OPTION: false,
      // },
    },
  }
);
