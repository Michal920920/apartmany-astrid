import * as React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {RichText} from "prismic-reactjs";
import * as moment from "moment";

const Post = (data) => {
	if (!data || !data.data.allPrismicBlog.nodes[0].data.body[0]) {
		return null;
	}

	const textEditor = data.data.allPrismicBlog.nodes[0].data.body[0].primary.text_editor;
	const values = data.data.allPrismicBlog.nodes[0].data;
	return (
		<Layout>
			<section className="breadcrumb-area" style={{backgroundImage: "url(" + values.main_image.url + ")"}}>
				<div className="container">
					<div className="breadcrumb-text">
						<h2 className="page-title">{values.blog_list_title}</h2>
						<ul className="breadcrumb-nav">
							<li><Link to="/">Domů</Link></li>
							<li className="active">Novinky</li>
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
export default Post
export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
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
