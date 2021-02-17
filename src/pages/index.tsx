import * as React from 'react';
import {Suspense} from 'react';
import {graphql} from "gatsby";
// import * as serviceWorker from './serviceWorker';

// Css
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

// import '../../node_modules/animate.css/animate.css';
// import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import './../assets/css/font-awesome.min.css';
import './../assets/css/flaticon.css';
import './../assets/fonts/flaticon/flaticon-2.css';
import './../assets/css/default.css';
import './../assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/layout";
import {getHomepageData} from "../models/dataManager/PrismicDataSource";
import {BrowserRouter as Router} from "react-router-dom";
import Preloader from "../components/Preloader";

// Preloader
// const Preloader = React.lazy(() => import("../components/Preloader"));

// Pages

const Index = ({data}) => {
	if (!data) {
		return null;
	}
	const Homepage = React.lazy(() => import("../sections/Homepage"));
	const homeData = getHomepageData(data);
	console.log(homeData);
	AOS.init();
	return (
		<Layout>
			<Homepage data={homeData}/>
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
                            text
                        }
                        title {
                            text
                        }
                        image_slider {
                            image {
                                alt
                                copyright
                                url
                                thumbnails
                            }
                        }
                        ab_backgroud_image {
                            alt
                            url
                        }
                        ab_columns {
                            ab_column_icon {
                                alt
                                url
                            }
                            ab_column_image {
                                alt
                                url
                            }
                            ab_column_text {
                                text
                            }
                            ab_column_title {
                                text
                            }
                        }
                        ab_small_title {
                            text
                        }
                        ab_text {
                            text
                        }
                        ab_title {
                            text
                        }
                        buttons {
                            button_1_link {
                                url
                            }
                            button_1_text {
                                text
                            }
                        }
                        ap_main_subtitle {
                            text
                        }
                        ap_main_title {
                            text
                        }
                        apartments {
                            ap_image {
                                url
                            }
                            ap_price {
                                text
                            }
                            ap_sub_title {
                                text
                            }
                            ap_title {
                                text
                            }
                        }
                        aw_link {
                            url
                        }
                        aw_text {
                            text
                        }
                        aw_background {
                            url
                        }
                    }
                }
            }
        },
        allPrismicBlog(limit: 3, sort: {fields: data___blog_date, order: DESC}) {
            nodes {
                data {
                    blog_date
                    blog_author
                    blog_title {
                        text
                    }
                    blog_anotation {
                        text
                    }
                    main_image {
                        url
                    }
                }
            }
        }
    }
`
export default Index;
