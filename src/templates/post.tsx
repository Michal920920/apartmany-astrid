import * as React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {RichText} from "prismic-reactjs";
import * as moment from "moment";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";

const Post = ({data}) => {
	if (!data) {
		return null;
	}
	const settings = data.allPrismicSettings.edges[0].node.data;

	const settingsData = {
		head_title: settings.head_title[0] ? settings.head_title[0].text : '',
	};
	const textEditor = data.allPrismicBlog.nodes[0].dataRaw.blog_content;
	console.log(data.allPrismicBlog);
	const values = data.allPrismicBlog.nodes[0].dataRaw;
	return (
		<Layout data={settingsData}>
			<section className="breadcrumb-area" style={{backgroundImage: "url(" + settings.blog_list_image.url + ")"}}>
				<div className="container">
					<div className="breadcrumb-text">
						<h2 className="page-title">{settings.blog_list_title[0].text}</h2>
						<ul className="breadcrumb-nav">
							<li><Link to="/"><FormattedMessage id="go_home"/></Link></li>
							<li><Link to="/blog"><FormattedMessage id="blog_button"/></Link></li>
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
									<p>{values.blog_anotation ? values.blog_anotation[0].text : ''}</p>
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
    query PostBySlug($slug: String,$language: String) {
        allPrismicSettings(filter: {lang: {eq: $language}}) {
            edges {
                node {
                    data {
                        blog_list_image {
                            url
                        }
                        blog_list_title {
                            text
                        }
                        head_title {
                            text
                        }
                    }
                }
            }
        },
        allPrismicBlog(filter: {slugs: {eq: $slug}}) {
            nodes {
                dataRaw {
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
                    blog_content {
                        spans {
                            end
                            start
                            type
                        }
                        text
                        type
                    }
                }
            }
        }
    }
`
export default injectIntl(Post)
