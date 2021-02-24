/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const linkResolver = require('./src/utils/linkResolver');

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title      : 'Apartmány Astrid | Mikulov',
		description: 'Learn how to integrate Prismic into your Gatsby project.',
	},
	plugins     : [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-source-prismic',
			options: {
				repositoryName: 'apartmany-astrid',
				accessToken   : 'MC5ZREFkSVJFQUFDUUFUZE02.77-977-9U0bvv71zczzvv71v77-9cO-_ve-_vRt4W--_vSjvv73vv71977-977-977-9Su-_ve-_vSxF77-9QA',
				linkResolver  : ({node, key, value}) => post => `/${post.uid}`,
				releaseID     : 'YDa2rRIAACYAO7IP',
				schemas       : {
					homepage: require('./custom_types/homepage.json'),
				},
			},
		},
		'gatsby-plugin-react-helmet',
		//'gatsby-transformer-sharp',
		//'gatsby-plugin-sharp',
		//{
		//	resolve: 'gatsby-plugin-manifest',
		//	options: {
		//		icon: 'src/images/favicon.png',
		//	},
		//},
		//{
		//	resolve: 'gatsby-source-filesystem',
		//	options: {
		//		name: 'images',
		//		path: `${__dirname}/src/images`,
		//	},
		//},
		//{
		//	resolve: 'gatsby-plugin-google-fonts',
		//	options: {
		//		fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
		//	},
		//},
	],
}
