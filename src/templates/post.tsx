import * as React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {RichText} from "prismic-reactjs";
import * as moment from "moment";
import {withPreview} from "gatsby-source-prismic";

const Post = ({data}) => {
	if (!data || !data.allPrismicBlog.nodes[0].data.body[0]) {
		return null;
	}

	const textEditor = data.allPrismicBlog.nodes[0].data.body[0].primary.text_editor;
	const values = data.allPrismicBlog.nodes[0].data;
	const settingValues = data.allPrismicSettings.edges[0].node.data;
	return (
		<Layout>
			<section className="breadcrumb-area" style={{backgroundImage: "url(" + settingValues.blog_list_image.url + ")"}}>
				<div className="container">
					<div className="breadcrumb-text">
						<h2 className="page-title">{settingValues.blog_list_title[0].text}</h2>
						<ul className="breadcrumb-nav">
							<li><Link to="/">Domů</Link></li>
							<li className="active">{settingValues.blog_list_title[0].text}</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="blog-section pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="news-details-box">
								<div className="entry-content">
									<h2 className="title">{values.blog_title[0].text}</h2>
									<ul className="post-meta">
										<li><i className="fal fa-user"/>{values.blog_author}</li>
										<li><i className="fal fa-calendar-alt"/>{moment(values.blog_date).format('d. M. YYYY')}</li>
									</ul>
									<p>{values.blog_anotation[0].text}</p>
									<RichText render={textEditor}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const pageQuery = graphql`
    query PostBySlug($slug: String!,$lang: String) {
        prismicBlog(lang: {eq: $lang}) {
            lang
            type
            url
            alternate_languages {
                lang
                type
            }
        },
        allPrismicSettings(filter: {lang: {eq: $lang}}) {
            edges {
                node {
                    data {
                        blog_list_image {
                            url
                        }
                        blog_list_title {
                            text
                        }
                    }
                }
            }
        },
        allPrismicBlog(filter: {slugs: {eq: $slug}}) {
            nodes {
                data {
                    blog_date
                    main_image {
                        url
                    }
                    blog_author
                    blog_anotation {
                        text
                        type
                    }
                    blog_title {
                        text
                    }
                    body {
                        primary {
                            text_editor {
                                spans {
                                    end
                                    start
                                    type
                                }
                                text
                                type
                                url
                                dimensions {
                                    height
                                    width
                                }
                            }
                        }
                        slice_type
                    }
                }
            }
        }
    }
`
export default withPreview(Post)
