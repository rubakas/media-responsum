const plugin = require('tailwindcss/plugin');

const screens = {
  // 'phone': {'raw': '(max-width: 507px) or (max-height: 507px)'},
  // https://parsnip.io/post/ios-9-ipad-multitasking-and-ios-safari/
  tablet: { raw: '(min-width: 507px) and (min-height: 507px)' },
  laptop: '1200px',
  desktop: '1537px',
  'desktop-4k': '2049px',
};

module.exports = plugin(() => {}, {
  theme: {
    screens: {
      ...screens,
    },
  },
});
