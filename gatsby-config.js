/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-source-prismic',
			options: {
				repositoryName             : 'testuju-prismic',
				accessToken                : 'MC5ZQ0JKT2hJQUFDTUFOcVFl.JO-_vV0Xe--_vTMg77-9Ku-_vUjvv71D77-977-977-977-977-9JVHvv73vv71-b--_ve-_ve-_ve-_vQQsFw',
				releaseID                  : 'YB8FRxIAACAAMRN5',
				linkResolver               : ({node, key, value}) => (doc) => {
					// Your link resolver
				},
				fetchLinks                 : [
					// Your list of links
				],
				htmlSerializer             : ({node, key, value}) => (
					type,
					element,
					content,
					children,
				) => {
					// Your HTML serializer
				},
				schemas                    : {
					homepage: require('./src/schemas/homepage.json'),
				},
				lang                       : '*',
				prismicToolbar             : true,
				shouldDownloadImage        : ({node, key, value}) => {
					// Return true to download the image or false to skip.
				},
				imageImgixParams           : {
					auto: 'compress,format',
					fit : 'max',
					q   : 50,
				},
				imagePlaceholderImgixParams: {
					w   : 100,
					blur: 15,
					q   : 50,
				},
				typePathsFilenamePrefix    :
					'prismic-typepaths---testuju-prismic',
			},
		},
	],
}
