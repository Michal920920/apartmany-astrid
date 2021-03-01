import * as React from 'react';
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";
import {getBlogListData, getSettingData} from "../models/dataManager/PrismicDataSource";
import * as moment from 'moment'
import {withPreview} from "gatsby-source-prismic";

const Blog = ({data}) => {
	if (!data) {
		return null;
	}
	const blogData = getBlogListData(data);
	const settingData = getSettingData();
	return (
		<Layout>
			<section className="breadcrumb-area" style={{backgroundImage: "url(" + settingData.blog_list_image + ")"}}>
				<div className="container">
					<div className="breadcrumb-text">
						<h2 className="page-title">{settingData.blog_list_title}</h2>
						<ul className="breadcrumb-nav">
							<li><Link to="/">Domů</Link></li>
							<li className="active">Novinky</li>
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
											<Link to={'/blog/' + item.url}>{item.title}</Link>
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
												<Link to={'/blog/' + item.url}><i className="far fa-arrow-right"/>Číst dál</Link>
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
    query BlogListQuery($lang: String) {
        prismicHomepage(lang: {eq: $lang}) {
            alternate_languages {
                uid
                type
                lang
                url
            }
            lang
            url
            type
        },
        allPrismicBlog(filter: {lang: {eq: $lang}}) {
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
export default withPreview(Blog);
