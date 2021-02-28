const path = require("path")

exports.createPages = async function ({actions, graphql}) {
	const blogPostTemplate = path.resolve(`src/templates/post.tsx`)
	const {data} = await graphql(`
{
  allPrismicBlog {
    nodes {
      slugs
      id
      type
      url
      lang
    }
  }
  allPrismicHomepage {
    totalCount
    nodes {
      type
      url
      lang
    }
  }
  allPrismicSettings {
    nodes {
      url
      lang
      type
    }
  }
}

  `);
	data.allPrismicHomepage.nodes.forEach((page) => {
		actions.createPage({
			path     : page.url,
			component: path.resolve(__dirname, 'src/pages/index.tsx'),
			context  : {...page},
		})
	});

	data.allPrismicBlog.nodes.forEach(page => {
		actions.createPage({
			path     : page.url,
			component: blogPostTemplate,
			context  : {
				slug: page.slugs[0],
			},
		})
	})
}
