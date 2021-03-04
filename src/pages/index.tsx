import * as React from 'react';
import {graphql} from "gatsby";

// Css
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import './../assets/css/font-awesome.min.css';
import './../assets/css/flaticon.css';
import './../assets/fonts/flaticon/flaticon-2.css';
import './../assets/css/default.css';
import './../assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/layout";
import {getHomepageData} from "../models/dataManager/PrismicDataSource";
import {withPreview} from "gatsby-source-prismic";

const Index = ({data}) => {
	if (!data) {
		return null;
	}
	const Homepage = React.lazy(() => import("../sections/Homepage"));
	const homeData = getHomepageData(data);

	setTimeout(() => {
		AOS.init();
	}, 1000)

	return (
		<Layout data={homeData.settings}>
			<Homepage data={homeData}/>
		</Layout>
	)
}
export const query = graphql`
    query MyQuery($lang: String) {
        prismicHomepage(lang: {eq: $lang}) {
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
        allPrismicHomepage(filter: {lang: {eq: $lang}}){
            edges {
                node {
                    lang
                    data {
                        sub_title {
                            text
                        }
                        title {
                            text
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
                                text
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
                        features_main_subtitle {
                            text
                        }
                        features_main_title {
                            text
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
                        features {
                            feature_icon {
                                url
                            }
                            feature_text {
                                text
                            }
                            feature_title {
                                text
                            }
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
                    alternate_languages {
                        uid
                        type
                        lang
                        url
                    }
                }
            }
        },
        allPrismicSettings(filter: {lang: {eq: $lang}}) {
            nodes {
                data {
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
                    }
                    main_menu {
                        link_name {
                            type
                            text
                        }
                        link {
                            url
                        }
                    }
                    translate_address {
                        text
                    }
                    translate_email {
                        text
                    }
                    translate_footer_text1 {
                        text
                    }
                    translate_phone {
                        text
                    }
                }
                alternate_languages {
                    lang
                }
            }
        },
        allPrismicBlog(
            limit: 3,
            sort: {fields: data___blog_date, order: DESC},
            filter: {lang: {eq: $lang}}) {
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
                slugs
                lang
            }
        }
    }
`
export default withPreview(Index);
