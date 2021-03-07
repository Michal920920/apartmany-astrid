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
		description: '',
	},
	plugins     : [
		`gatsby-plugin-sass`,
		`gatsby-plugin-gatsby-cloud`,
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: [`cs-cz`, `en-gb`, `de-de`],
				// language file path
				defaultLanguage: `cs-cz`,
				// option to redirect to `/ko` when connecting `/`
				//redirect: true,
			},
		},
		{
			resolve       : 'gatsby-source-prismic',
			prismicToolbar: true,
			options       : {
				repositoryName: 'apartmany-astrid',
				accessToken   : 'MC5ZREFkSVJFQUFDUUFUZE02.77-977-9U0bvv71zczzvv71v77-9cO-_ve-_vRt4W--_vSjvv73vv71977-977-977-9Su-_ve-_vSxF77-9QA',
				releaseID     : 'YEE3eRAAACIA6qfZ',
				schemas       : {
					homepage : require('./custom_types/homepage.json'),
					blog_post: require('./custom_types/blogPost.json'),
				},

			},
		},
		'gatsby-plugin-react-helmet',
	],
}
