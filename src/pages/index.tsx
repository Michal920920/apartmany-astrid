import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {BrowserRouter} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

// Css
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
import Header from "../components/Header";
import Footer from "../components/Footer";
import Facilities from "./../sections/homepage/Facilities";
import Blogpost from "./../sections/homepage/Blogpost";
import Features from "./../sections/homepage/Features";
import Preloader from "./../components/Preloader";
import {graphql} from "gatsby";
import {Suspense} from "react";
import {getHomepageData} from "../models/repository/homepageRepository";

const Index = ({data}) => {
	if (!data) return null;
	const homepageData = getHomepageData(data.allPrismicHomepage.edges[0].node.data);
	const Homepage = React.lazy(() => import("./../sections/homepage")); // Lazy-loaded

	// const document = data.allPrismicSettings.edges[0].node.data
	return (
		<Suspense fallback={<Preloader/>}>
			{/*<Header/>*/}
			<Homepage data={homepageData}/>
			{/*<Banner/>*/}
			{/*<Facilities/>*/}
			{/*<Blogpost/>*/}
			{/*<Features/>*/}
			{/*<Footer/>*/}
		</Suspense>
	)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

export const query = graphql`
    query HomepageQuery {
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
    #    query SettingsQuery {
    #        allPrismicSettings {
    #            edges {
    #                node {
    #                    dataRaw {
    #                        email {
    #                            text
    #                        }
    #                        head_title {
    #                            text
    #                        }
    #                        logo_image {
    #                            alt
    #                            url
    #                            dimensions {
    #                                height
    #                                width
    #                            }
    #                        }
    #                        phone {
    #                            text
    #                        }
    #                    }
    #                }
    #            }
    #        }
    #    }

`
export default Index;
