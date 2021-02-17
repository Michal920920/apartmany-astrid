import * as React from 'react';
import {Link} from "gatsby"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";


export type TBlogPostThumb = {
	date: string,
	author: string,
	title: string,
	anotation: string,
	main_image_url: string
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
		const settings = {
			slidesToShow: 3,
			slidesToScroll: 1,
			fade: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		}
		const data = this.props.data;

		return (
			<section className="latest-news pt-115 pb-115">
				<div className="container">
					<div className="section-title text-center">
						<span className="title-tag">aktuality</span>
						<h2>Blog</h2>
					</div>
					{/* Latest post loop */}
					<div className="row justify-content-center mt-50">
						{data.map((item, i) => (
							<div key={i} className="col-lg-4 col-md-6">
								<div className="latest-post-box mt-30">
									<div className="post-img" style={{backgroundImage: "url(" + item.main_image_url + ")"}}/>
									<div className="post-desc">
										<ul className="post-meta">
											<li>
												<Link to={`/Blog/${item.title}`}><i className="fal fa-calendar-alt"/>{moment(item.date).format('DD.MM.YYYY')}</Link>
											</li>
											<li>
												<Link to={`/Blog/${item.title}`}><i className="fal fa-user"/>{item.author}</Link>
											</li>
										</ul>
										<h4><Link to="/news-details">{item.title}</Link></h4>
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
	}
}

export default Blogpost;
