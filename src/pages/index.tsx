import * as React from 'react';
import {Link} from "gatsby"
import Layout from "../components/layout"

export default function Home() {
	return (
		<Layout classname={'homepage'}>

			<section className='introduce'>
				{/*<div data-aos="fade-right" data-aos-offset="100">*/}
				{/*	<h2>{values.Subtitle}</h2>*/}
				{/*	<h1>{values.Title}</h1>*/}
				<div className='buttons'>
					<a href='#' className='button_main'>Prohlídka</a>
					<a href='#' className='button_secondary'>Ubytovat</a>
				</div>
				{/*</div>*/}
				<div data-aos="fade-left" data-aos-offset="200">
					{/*<Slider {...settings} className={styles.img_wrp}>*/}
					{/*	{values.Slider.map((slide, index) => {*/}
					{/*		return (*/}
					{/*			<img key={index} alt={slide.name} src={GRAPHQL_URL + slide.url}/>*/}
					{/*		)*/}
					{/*	})}*/}
					{/*</Slider>*/}
				</div>
				{/*<img className={styles.scroll} alt='scroll-down' src='/scroll.svg'/>*/}
			</section>

		</Layout>
	)
}
