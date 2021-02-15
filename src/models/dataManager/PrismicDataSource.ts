import {RichText} from 'prismic-reactjs'
import {graphql, useStaticQuery} from "gatsby";
import {TAbout} from "../../sections/Homepage/About";
import {TMain} from "../../sections/Homepage/Banner";

export type THomepage = {
	main: TMain
	about: TAbout
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
			title: RichText.asText(data.title.raw),
			sub_title: RichText.asText(data.sub_title.raw),
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

