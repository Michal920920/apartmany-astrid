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
// import Homepage from "../sections/Homepage";
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
	const homeData = getHomepageData(data.allPrismicHomepage.edges[0].node.data);
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
                    }
                }
            }
        }
    }

`
export default Index;
