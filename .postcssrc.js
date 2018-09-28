// https://github.com/michael-ciniawsky/postcss-load-config

const tailwindcss = require('tailwindcss')
module.exports = {
  "plugins": [
    require('postcss-import')(), 
    tailwindcss('./tailwind-config.js'),
    require('autoprefixer')
  ]
}
