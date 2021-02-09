import * as React from 'react';
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import {getHomepageData} from "../models/repository/homepageRepository";
import {getSettingsData} from "../models/repository/settingRepository";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import M from 'materialize-css';
import {useEffect} from "react";

export default function Homepage({data}) {
	AOS.init();
	M.AutoInit();
	if (!data) return null
	const homepageData = getHomepageData(data.allPrismicHomepage.edges[0].node.data);
	const settingsData = getSettingsData(data.allPrismicSettings.edges[0].node.dataRaw);
	const settings = {
		autoplay: true,
		infinite: true,
		fade: true,
		speed: 800,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	useEffect(() => {
		M.Sidenav.init(document.querySelectorAll('.sidenav'), {
			edge: "right"
		})
	});
	return (
		<Layout data={settingsData}>
			<section className='introduce'>
				<div data-aos="fade-right" data-aos-offset="100">
					<h2>{homepageData.main.sub_title}</h2>
					<h1>{homepageData.main.title}</h1>
					<div className='buttons'>
						<a href='#' className='button_main'>Prohlídka</a>
						<a href='#' className='button_secondary'>Ubytovat</a>
					</div>
				</div>
				<div data-aos="fade-left" data-aos-offset="200">
					<Slider {...settings} className='img_wrp'>
						{homepageData.main.image_slider.map((slide, index) => {
							return (
								<img key={index} alt={slide.image.alt} src={slide.image.url}/>
							)
						})}
					</Slider>
				</div>
				{/*<img className={styles.scroll} alt='scroll-down' src='/scroll.svg'/>*/}
			</section>

		</Layout>
	)
}

export const query = graphql`
    query MyQuery {
        allPrismicHomepage {
            edges {
                node {
                    data {
                        sub_title {
                            raw
                        }
                        title {
                            raw
                        }
                        image_slider {
                            image {
                                alt
                                copyright
                                url
                                thumbnails
                            }
                        }
                    }
                }
            }
        },
        allPrismicSettings {
            edges {
                node {
                    dataRaw {
                        email {
                            text
                        }
                        head_title {
                            text
                        }
                        logo_image {
                            alt
                            url
                            dimensions {
                                height
                                width
                            }
                        }
                        phone {
                            text
                        }
                    }
                }
            }
        }
    }

`
