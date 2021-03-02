const {defaultLanguage} = require('../../prismic-configuration')
const linkResolver = (doc) => {
	const properties = doc._meta || doc;
	if (properties.type === 'homepage') {
		return doc.lang === defaultLanguage ? '/' : `/${properties.lang}`
	}
	if (properties.type === 'blog') {
		return doc.lang === defaultLanguage
			? `/blog/${properties.slugs[0]}`
			: `/blog/${properties.lang}/${properties.slugs[0]}`
	}
	if (properties === '/blog') {
		return doc.lang === defaultLanguage
			? `/blog`
			: `/blog/${properties.lang}`
	}
	return '/'
}

module.exports = linkResolver
