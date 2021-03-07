import * as React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {getBlogListData} from "../models/dataManager/PrismicDataSource";
import * as moment from 'moment'
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";

const Blog = ({data}) => {
	if (!data) {
		return null;
	}
	const blogData = getBlogListData(data);
	const settingValues = data.allPrismicSettings.edges[0].node.data;
	return (
		<Layout data={blogData.settings}>
			<section className="breadcrumb-area" style={{backgroundImage: "url(" + settingValues.blog_list_image.url + ")"}}>
				<div className="container">
					<div className="breadcrumb-text">
						<h2 className="page-title">{settingValues.blog_list_title[0].text}</h2>
						<ul className="breadcrumb-nav">
							<li><Link to="/"><FormattedMessage id="go_home"/></Link></li>
							<li className="active">{settingValues.blog_list_title[0].text}</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="blog-section pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-lg-around">
						{blogData.blogPostThumbs.map((item, id) => (
							<div key={id} className="col-lg-5 col-md-10">
								<div className="post-box mb-40">
									<div className="post-media">
										<img src={item.main_image_url} alt=""/>
									</div>
									<div className="post-desc">
										<h2>
											<Link to={item.url}>{item.title}</Link>
										</h2>
										<ul className="post-meta">
											<li><Link to="/news-details"><i className="far fa-calendar-alt"/>{moment(item.date).format('d. M. YYYY')}</Link></li>
										</ul>
										<p>{item.anotation}</p>
										<div className="post-footer">
											<div className="author">
												{item.author}
											</div>
											<div className="read-more">
												<Link to={item.url}><i className="far fa-arrow-right"/><FormattedMessage id="read_more"/></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}
export const query = graphql`
    query BlogListQuery($language: String) {
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
                    }
                }
            },
            nodes {
                data {
                    email {
                        text
                    }
                    head_title {
                        text
                    }
                    phone {
                        text
                    }
                    address {
                        type
                        text
                        spans {
                            start
                            end
                            type
                        }
                    }
                }
            }
        },
        allPrismicBlog(filter: {lang: {eq: $language}}) {
            edges {
                node {
                    data {
                        blog_title {
                            text
                        }
                        blog_author
                        blog_anotation {
                            text
                        }
                        blog_date
                        main_image {
                            url
                        }
                    }
                    slugs
                }
            }
        }
    }

`
export default injectIntl(Blog);
