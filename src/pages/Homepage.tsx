import * as React from 'react';
import {Suspense} from 'react';
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import {getHomepageData} from "../models/repository/homepageRepository";
import {getSettingsData} from "../models/repository/settingRepository";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../sections/homepage/Banner";
import Habout from "../sections/homepage/Habout";
import Facilities from "../sections/homepage/Facilities";
import Blogpost from "../sections/homepage/Blogpost";
import Features from "../sections/homepage/Features";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/animate.css/animate.css';
import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import './../assets/css/font-awesome.min.css';
import './../assets/css/flaticon.css';
import './../assets/fonts/flaticon/flaticon-2.css';
import './../assets/css/default.css';
import './../assets/css/style.css';
import '../../node_modules/animate.css/animate.css';
import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function Homepage({data}) {
	// const settingsData = getSettingsData(data.allPrismicSettings.edges[0].node.dataRaw);
	const settings = {
		autoplay: true,
		infinite: true,
		fade: true,
		speed: 800,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<>
			{/*<section className='introduce'>*/}
			{/*	<div data-aos="fade-right" data-aos-offset="100">*/}
			{/*		<h2>{homepageData.main.sub_title}</h2>*/}
			{/*		<h1>{homepageData.main.title}</h1>*/}
			{/*		<div className='buttons'>*/}
			{/*			<a href='#' className='button_main'>Prohlídka</a>*/}
			{/*			<a href='#' className='button_secondary'>Ubytovat</a>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div data-aos="fade-left" data-aos-offset="200">*/}
			{/*		<Slider {...settings} className='img_wrp'>*/}
			{/*			{homepageData.main.image_slider.map((slide, index) => {*/}
			{/*				return (*/}
			{/*					<img key={index} alt={slide.image.alt} src={slide.image.url}/>*/}
			{/*				)*/}
			{/*			})}*/}
			{/*		</Slider>*/}
			{/*	</div>*/}
			{/*	/!*<img className={styles.scroll} alt='scroll-down' src='/scroll.svg'/>*!/*/}
			{/*</section>*/}
			<Header/>
			<Banner data={data.main}/>
			<Habout/>
			<Facilities/>
			<Blogpost/>
			<Features/>
			<Footer/>
		</>
	)
}
//
// export const query = graphql`
//     query MyQuery {
//         allPrismicHomepage {
//             edges {
//                 node {
//                     data {
//                         sub_title {
//                             raw
//                         }
//                         title {
//                             raw
//                         }
//                         image_slider {
//                             image {
//                                 alt
//                                 copyright
//                                 url
//                                 thumbnails
//                             }
//                         }
//                     }
//                 }
//             }
//         },
//         allPrismicSettings {
//             edges {
//                 node {
//                     dataRaw {
//                         email {
//                             text
//                         }
//                         head_title {
//                             text
//                         }
//                         logo_image {
//                             alt
//                             url
//                             dimensions {
//                                 height
//                                 width
//                             }
//                         }
//                         phone {
//                             text
//                         }
//                     }
//                 }
//             }
//         }
//     }
//
// `