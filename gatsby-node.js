const path = require("path")

exports.createPages = async function ({actions, graphql}) {
	const blogPostTemplate = path.resolve(`src/templates/post.tsx`)
	const {data} = await graphql(`
    query {
      allPrismicBlog {
    edges {
      node {
        slugs
      }
    }
  }
    }
  `);
	data.allPrismicBlog.edges.forEach(item => {
		const slug = item.node.slugs[0];
		console.log('item.node.slugs', slug[0]);

		actions.createPage({
			path     : `blog/${slug}`,
			component: blogPostTemplate,
			context  : {
				slug: slug,
			},
		})
	})
}
