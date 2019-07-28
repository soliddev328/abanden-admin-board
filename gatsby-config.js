const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
      title: 'MORGAN.CODES BLOG',
      author: 'Morgan Richardson',
      description: 'Thoughts of Morgan'
  },
  plugins: [
    'gatsby-plugin-sass',

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
