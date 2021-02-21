import * as React from 'react';
import {graphql} from "gatsby";
import Layout from "../components/layout";

const Post = (data) => {
	const values = data.data.allPrismicBlog.edges[0].node.data;
	return (
		<Layout>
			<h1>{values.blog_title[0].text}</h1>
		</Layout>
	)
}
export default Post
export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        allPrismicBlog(filter: {slugs: {eq: $slug}}) {
            edges {
                node {
                    data {
                        blog_title {
                            text
                        }
                        blog_date
                        blog_author
                        blog_anotation {
                            text
                        }
                        main_image {
                            url
                        }
                    }
                }
            }
        }
    }
`
