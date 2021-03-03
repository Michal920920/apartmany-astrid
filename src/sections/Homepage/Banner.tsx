import * as React from 'react';
import Slider from 'react-slick';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export type TMain = {
	title: string,
	sub_title: string,
	image_slider: {
		image: {
			url: string,
			alt: string
		}
	}[]
	buttons: {
		url: string,
		text: string
	}[]
}

class Banner extends React.Component<{ data: TMain }> {
	render() {
		const settings = {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: false,
		}
		const data = this.props.data;
		return (
			<section className="banner-area banner-style-one">
				<div className="container container-custom-two">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="banner-content">
								<span className="promo-tag fade-down">{data.sub_title}</span>
								<h1 className="title fade-left"> {data.title}
								</h1>
								<ul>
									{data.buttons.map((item, index) => (
										<li key={index}>
											<AnchorLink className={`main-btn ${index % 2 ? 'btn-border ' : 'btn-filled'} fade-up`} href={item.url}>{item.text}</AnchorLink>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 fade-right">
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
}

export default Banner;
