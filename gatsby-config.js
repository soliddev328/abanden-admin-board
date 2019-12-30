const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
      title: 'Morgan Richardson - Software Developer',
      author: 'Morgan Richardson',
      description: 'Morgan Richardson is a software developer based in Chicago, specializing in modern JavaScript and full-stack development. Morgan has been sharing her journey as a woman in technology on Instagram (@morgan.codes) since she began her journey.'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',

    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId:'2qh3ihm8gfwy',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext'
  ],
}
