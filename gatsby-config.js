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
				accessToken   : 'MC5ZREFkRlJFQUFDVUFUZE1F.77-9RkpW77-9Qe-_ve-_vQZLBy5k77-9aGwqLDhBSO-_vTMlPe-_vSLvv70ZDe-_vUI',
				releaseID     : 'YEUyIBAAACIA_CeH',
				schemas       : {
					homepage : require('./custom_types/homepage.json'),
					blog_post: require('./custom_types/blogPost.json'),
				},

			},
		},
		'gatsby-plugin-react-helmet',
	],
}
