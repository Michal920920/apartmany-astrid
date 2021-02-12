const linkResolver = (doc) => {
	console.log(doc);
	if (doc.type === 'page') {
		return `/${doc.uid}`
	}
	return '/'
}

module.exports = linkResolver
