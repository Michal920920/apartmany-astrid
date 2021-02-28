module.exports = {

	// The repo name for your Prismic repository (found in the url of your repo: https://your-repo-name.prismic.io/)
	prismicRepo: 'apartmany-astrid',

	// Release ID to build (requires access)
	releaseID: 'YDa2rRIAACYAO7IP',

	// access token to access the release
	accessToken: 'MC5ZREFkSVJFQUFDUUFUZE02.77-977-9U0bvv71zczzvv71v77-9cO-_ve-_vRt4W--_vSjvv73vv71977-977-977-9Su-_ve-_vSxF77-9QA',

	// Language configuration in your Prismic repository: Settings / Translations & locals
	defaultLanguage: 'cs-cz',
	langs          : ["cs-cz", "en-gb", "de-de"],
	pages          : [
		{
			type     : "Homepage",
			match    : "/:lang?",
			component: require.resolve("./src/pages/index.tsx"),
		},
		{
			type     : "Blog",
			match    : "/blog/:uid",
			component: require.resolve("./src/templates/post.tsx"),
		},
	],
}
