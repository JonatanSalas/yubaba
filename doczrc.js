const pkg = require('./packages/yubaba/package.json');

module.exports = {
  title: 'yubaba 🧙✨',
  description: `yubaba ${pkg.description}`,
  typescript: true,
  dest: '/docs',
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: '#468cee',
    },
  },
};
