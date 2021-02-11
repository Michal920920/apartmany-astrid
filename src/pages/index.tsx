import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ReactDOM from 'react-dom';
// import App from './App';
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
import Preloader from "./../components/Preloader";
import {graphql} from "gatsby";
import {Suspense} from "react";
import {getHomepageData} from "../models/repository/homepageRepository";


const Home = React.lazy(() => import("./Homepage"));

export default function Index({data}) {
	const homepageData = getHomepageData(data.allPrismicHomepage.edges[0].node.data);
	return (
		<Router>
			<Suspense fallback={<div></div>}>
				<Preloader/>
				<Switch>
					<Route exact path="/" component={() => <Home data={homepageData}/>}/>
				</Switch>
			</Suspense>
		</Router>
	)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

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
