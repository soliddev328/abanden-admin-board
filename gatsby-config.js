const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

module.exports = {
	siteMetadata: {
		title: 'Morgan Richardson — Fullstack Developer and Content Creator"',
		author: 'Morgan Richardson',
		description:
			'Morgan is a fullstack software developer based in Chicago and shares her journey as a woman in technology on her Instagram blog, @morgan.codes.',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: '2qh3ihm8gfwy',
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		'@contentful/gatsby-transformer-contentful-richtext',
	],
};
