const
mix = require('laravel-mix'), //laravel-mix本体
StyleLintPlugin = require('stylelint-webpack-plugin'); // stylelintを使う


const dist = `docs/assets/`;
/*
  |--------------------------------------------------------------------------
  | Mix Asset Management
  |--------------------------------------------------------------------------
  |
  | Mix provides a clean, fluent API for defining some Webpack build steps
  | for your Laravel application. By default, we are compiling the Sass
  | file for the application as well as bundling up all the JS files.
  |
 */

mix.sass(`src/scss/style.scss`, `${dist}css`)
  .options({
    processCssUrls: false,
    postCss: [require("autoprefixer")({
      grid: 'autoplace'
    }), require("css-mqpacker"), ],
  })
  .sourceMaps()

mix.js(`src/js/main.js`, `${dist}js`);

mix.webpackConfig({
  module: {
    rules: [{
      test: /\.scss/,
      loader: 'import-glob-loader'
    }]
  },
  plugins: [
    new StyleLintPlugin({
      fix: true
    })
  ]
})


mix.webpackConfig({
  devtool: "inline-source-map"
});


mix.browserSync({
  server: 'docs',
  proxy: false,
  files: [
    'docs/index.html',
    'docs/assets/js/*.js',
    'docs/assets/css/*.css',
  ]
})