/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const linkResolver = require('./src/utils/linkResolver');

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
				linkResolver  : () => (doc) => linkResolver(doc),
				//accessToken                : 'MC5ZQ0JKT2hJQUFDTUFOcVFl.JO-_vV0Xe--_vTMg77-9Ku-_vUjvv71D77-977-977-977-977-9JVHvv73vv71-b--_ve-_ve-_ve-_vQQsFw',
				//releaseID                  : 'YB8FRxIAACAAMRN5',
				schemas: {
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
