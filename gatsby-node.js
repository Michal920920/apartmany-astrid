const path = require("path")
const {defaultLanguage} = require("./prismic-configuration");

exports.createPages = async function ({actions, graphql}) {
	const {data} = await graphql(`
{
  allPrismicBlog {
 totalCount
    nodes {
      type
      url
      lang
      slugs
       alternate_languages {
        lang
      }
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
	data.allPrismicSettings.nodes.forEach((page) => {
		actions.createPage({
			path     : '/blog' + (page.lang === defaultLanguage ? '' : `/${page.lang}`),
			component: path.resolve(__dirname, 'src/templates/blog.tsx'),
			context  : {
				lang: page.lang,
			},
		})
	});

	data.allPrismicBlog.nodes.forEach(page => {
		actions.createPage({
			path     : page.url,
			component: path.resolve(`src/templates/post.tsx`),
			context  : {
				slug: page.slugs[0],
				lang: page.lang,
			},
		});
	})

}
