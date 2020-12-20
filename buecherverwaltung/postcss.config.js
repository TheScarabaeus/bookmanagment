/*
 * PostCSS configuration
 *
 * Docs: https://github.com/postcss/postcss#usage
 */
module.exports = {
  ident: "postcss",
  syntax: "postcss",
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
