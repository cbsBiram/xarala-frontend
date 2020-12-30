const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const webpack = require('webpack')
const path = require('path')

module.exports = withFonts(
  withCSS(
    withImages(
      withSass({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: {
              loader: 'url-loader',
            },
          })
          config.resolve.modules.push(path.resolve('./'))
          return config
        },
        env: {
          API_URL: process.env.API_URL,
          JWT_EXPIRY: process.env.JWT_EXPIRY,
          JWT_SECRET: process.env.JWT_SECRET,
          REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
        },
      })
    )
  )
)
