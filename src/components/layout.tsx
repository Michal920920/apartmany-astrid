import * as React from 'react';
import {Suspense} from 'react';
import {Helmet} from "react-helmet";
import {transformSettingData, TSettings} from "../models/dataManager/PrismicDataSource";
import {Footer} from "./Footer";
import {Header} from "./Header";
import Preloader from "./Preloader";
import {graphql, useStaticQuery} from "gatsby";

const Layout = ({children}) => {
	let data = useStaticQuery(graphql`
        query MyQuerya($lang: String) {
            prismicHomepage {
                alternate_languages {
                    uid
                    type
                    lang
                    url
                }
                lang
                url
                type
            },
            allPrismicSettings(filter: {lang: {eq: $lang}}) {
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
                            }
                            phone {
                                text
                            }
                            address {
                                type
                                text
                                spans {
                                    start
                                    end
                                    type
                                }
                            },
                            main_menu {
                                link_name {
                                    type
                                    text
                                }
                                link {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
	`);
	if (!data) {
		return null
	}
	const settingsData: TSettings = transformSettingData(data);
	const isSSR = typeof window === "undefined"
	return (
		!isSSR &&
		<Suspense fallback={<Preloader/>}>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>{settingsData.head_title}</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name='googlebot' content='index,follow'/>
				<meta name='robots' content='index,follow'/>
				<meta name='author' content='Michal Buráň / michal.92@email.cz'/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
				<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet'/>
			</Helmet>
			<Header data={settingsData} activeDocMeta={settingsData.langs}/>
			{children}
			<Footer data={settingsData}/>
		</Suspense>
	)

}

export default Layout;
