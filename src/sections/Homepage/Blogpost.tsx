import * as React from 'react';
import {Link} from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as moment from 'moment'
import {FormattedMessage} from "gatsby-plugin-intl";

export type TBlogPostThumb = {
	date: string,
	author: string,
	title: string,
	anotation: string,
	main_image_url: string,
	url: string,
}
type Props = {}

class Blogpost extends React.Component<{ data: TBlogPostThumb[] }> {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	public slider;

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	render() {
		if (!this.props.data) {
			return null;
		}
		const data = this.props.data;
		if (data && data.length > 0) {
			return (
				<section className="latest-news pt-115 pb-115">
					<div className="container">
						<div className="section-title text-center">
							<span className="title-tag"><FormattedMessage id="blog_subtitle"/></span>
							<h2><FormattedMessage id="blog_title"/></h2>
						</div>
						<div className="row justify-content-center mt-50">
							{data.map((item, i) => (
								<div key={i} className="col-lg-4 col-md-6">
									<div className="latest-post-box mt-30">
										<div className="post-img" style={{backgroundImage: "url(" + item.main_image_url + ")"}}/>
										<div className="post-desc">
											<ul className="post-meta">
												<li>
													<Link to={`/blog/${item.url}`}><i className="fal fa-calendar-alt"/>{moment(item.date).format('DD.MM.YYYY')}</Link>
												</li>
												<li>
													<Link to={`/blog/${item.url}`}><i className="fal fa-user"/>{item.author}</Link>
												</li>
											</ul>
											<h4><Link to={`/blog/${item.url}`}>{item.title}</Link></h4>
											<p>
												{item.anotation}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			);
		} else {
			return ''
		}
	}
}

export default Blogpost;
