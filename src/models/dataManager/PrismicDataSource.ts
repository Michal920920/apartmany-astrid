import {RichText} from 'prismic-reactjs'
import {graphql, useStaticQuery} from "gatsby";
import {TAbout} from "../../sections/Homepage/About";
import {TMain} from "../../sections/Homepage/Banner";
import {TApartments} from "../../sections/Homepage/Apartments";
import {TAwards} from "../../components/Awards";

export type THomepage = {
	main: TMain,
	about: TAbout,
	apartments: TApartments
	awards: TAwards
}

export type TSettings = {
	email: string,
	head_title: string,
	logo_image: {
		alt: string,
		url: string,
	},
	phone: string,
}

export function getHomepageData(data): THomepage {
	return {
		main: {
			title: data.title.text,
			sub_title: data.sub_title.text,
			image_slider: data.image_slider,
		},
		about: {
			title: data.ab_title.text,
			sub_title: data.ab_small_title.text,
			text: data.ab_text.text,
			background_img: data.ab_backgroud_image,
			columns: data.ab_columns.map((item) => {
				return {
					icon_url: item.ab_column_icon.url,
					image_url: item.ab_column_image.url,
					text: item.ab_column_text.text,
					title: item.ab_column_title.text
				}
			})
		},
		apartments: {
			main_subtitle: data.ap_main_subtitle.text,
			main_title: data.ap_main_title.text,
			apartments: data.apartments.map((item) => {
				return {
					image: item.ap_image.url,
					price: item.ap_price.text,
					title: item.ap_title.text,
					sub_title: item.ap_sub_title.text,
				}
			})
		},
		awards: {
			image_url: data.aw_background.url,
			link: data.aw_link.url,
			title: data.aw_text.text,
		}
	};
}


export function getSettingData(): TSettings | null {
	let data = useStaticQuery(graphql`
        {
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
                            }
                            phone {
                                text
                            }
                        }
                    }
                }
            }
        }
	`);
	if (!data) {
		return null
	} else {
		data = data.allPrismicSettings.edges[0].node.dataRaw;
	}

	return {
		email: RichText.asText(data.email),
		head_title: RichText.asText(data.head_title),
		logo_image: {
			alt: data.logo_image.alt,
			url: data.logo_image.url,
		},
		phone: RichText.asText(data.phone),
	};
}

