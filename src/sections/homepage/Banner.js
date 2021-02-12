import React, {Component} from 'react';
import {Link} from "gatsby"
import Slider from 'react-slick';

import img1 from '../../assets/img/banner/01.jpg';
import img2 from '../../assets/img/banner/02.jpg';

const bannerposts = [
	{img: img1},
	{img: img2},
];

const Banner = ({data}) => {
	const settings = {
		slidesToShow  : 1,
		slidesToScroll: 1,
		fade          : true,
		infinite      : true,
		autoplay      : true,
		autoplaySpeed : 4000,
		arrows        : false,
		dots          : false,
	}
	return (
		<section className="banner-area banner-style-one">
			<div className="container container-custom-two">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6">
						<div className="banner-content">
							<span className="promo-tag wow fadeInDown" data-wow-delay=".3s">{data.sub_title}</span>
							<h1 className="title wow fadeInLeft" data-wow-delay=".5s"> {data.title}
							</h1>
							<ul>
								<li>
									<Link className="main-btn btn-filled wow fadeInUp" data-wow-delay=".7s" to="/contact">take a
										tour</Link>
								</li>
								<li>
									<Link className="main-btn btn-border wow fadeInUp" data-wow-delay=".9s" to="/about">Learn
										More</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0.5s">
						<div className="banner-thumb d-none d-md-block">
							<Slider className="hero-slider-one" {...settings}>
								{data.image_slider.map((item, i) => (
									<div key={i} className="single-thumb">
										<img src={item.image.url} alt={item.image.alt}/>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
