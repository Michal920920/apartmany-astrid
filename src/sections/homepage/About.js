import React, {Component} from 'react';
import {Link} from "gatsby"
import Masonry from 'react-masonry-component';

import singlefeature from '../../assets/img/feature/04.jpg';
import singlefeature1 from '../../assets/img/feature/05.jpg';
import bottomimg from '../../assets/img/bg/03.jpg';

const About = ({data}) => {
	const imagesLoadedOptions = {
		itemSelector   : '.col-sm-6',
		percentPosition: false,
		resize         : true,
		fitWidth       : true
	};
	return (
		<section className="about-section pt-115 pb-115">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-10 wow fadeInLeft" data-wow-delay=".3s">
						<Masonry className="row about-features-boxes fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
							<div className="col-sm-6">
								<div className="single-feature-box">
									<div className="icon">
										<i className="flaticon-team"/>
									</div>
									<h4><Link to="#">Strong Team</Link></h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="single-feature-box only-bg mt-30" style={{backgroundImage: "url(" + singlefeature + ")"}}>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="single-feature-box only-bg mt-30" style={{backgroundImage: "url(" + singlefeature1 + ")"}}>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="single-feature-box dark mt-30">
									<div className="icon">
										<i className="flaticon-hotel"/>
									</div>
									<h4><Link to="#">Luxury Apartment</Link></h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</Masonry>
					</div>
					<div className="col-lg-6 col-md-8 col-sm-10 wow fadeInRight" data-wow-delay=".3s">
						<div className="abour-text pl-50 pr-50">
							<div className="section-title mb-30">
								<span className="title-tag">{data.sub_title}</span>
								<h2>{data.title}</h2>
							</div>
							<p>
								{data.text}
							</p>
							<Link to="#" className="main-btn btn-filled mt-40"> Book Now</Link>
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
}

export default About;
