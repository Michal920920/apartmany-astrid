import * as React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export type TAbout = {
	title: string,
	sub_title: string,
	text: string,
	background_img: {
		url: string,
		alt: string
	},
	columns: {
		icon_url: string,
		image_url: string,
		text: string,
		title: string,
	}[]
}
const imagesLoadedOptions = {
	itemSelector: '.col-sm-6',
	percentPosition: false,
	resize: true,
	fitWidth: true
};

class About extends React.Component<{ data: TAbout }> {
	render() {

		const data = this.props.data;
		if (data.columns.length > 0) {
			return (
				<section className={`about-section ${window.innerWidth > 991 ? 'pt-115 pb-115 mt-100' : 'pt-60 pb-60 mt-30'}`} id="about">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-10" data-aos="fade-right" data-aos-offset="80">
								<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2}}>
									<Masonry gutter="10px" className="col about-features-boxes fetaure-masonary">
										{data.columns.map((item, id) => {
												let odd = true;
												if (id % 2 === 0) {
													odd = false;
												}
												return (
													<div key={id}>
														<div>
															<div className={`single-feature-box ${odd ? 'dark' : ''}`}>
																<div style={{
																	width: '70px',
																	height: '70px',
																	margin: '0 auto',
																	background: "url(" + item.icon_url + ") no-repeat"
																}}></div>
																<h4>{item.title}</h4>
																<p>
																	{item.text}
																</p>
															</div>
														</div>
														<div>
															<div className="single-feature-box only-bg mt-30"
															     style={{background: "url(" + item.image_url + ") no-repeat"}}>
															</div>
														</div>
													</div>
												)
											}
										)
										}
									</Masonry>
								</ResponsiveMasonry>
							</div>
							<div className="col-lg-6 col-md-8 col-sm-10">
								<div className="abour-text pl-50 pr-50">
									<div className="section-title mb-30">
										<span className="title-tag">{data.sub_title}</span>
										<h2>{data.title}</h2>
									</div>
									<p style={{color: 'black'}}>
										{data.text}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="about-right-bottom">
						<div className="about-bottom-img">
							<img src={data.background_img.url} alt={data.background_img.alt}/>
						</div>
					</div>
				</section>
			);
		} else {
			return '';
		}

	}
}

export default About;
