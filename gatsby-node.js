const path = require("path")
exports.createPages = async function ({actions, graphql}) {
	const {createPage} = actions
	const result = await graphql(`
	{
  allPrismicBlog {
    edges {
      node {
        lang
        slugs
        type
      }
    }
  }
	}
  `);
	result.data.allPrismicBlog.edges.forEach(edge => {
		createPage({
			path     : `blog/${edge.node.slugs[0]}`,
			component: path.resolve(`src/templates/post.tsx`),
			context  : {
				lang: edge.node.lang,
				slug: edge.node.slugs[0],
			},
		});
	})

}
