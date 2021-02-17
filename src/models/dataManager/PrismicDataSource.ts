import {RichText} from 'prismic-reactjs'
import {graphql, useStaticQuery} from "gatsby";
import {TAbout} from "../../sections/Homepage/About";
import {TMain} from "../../sections/Homepage/Banner";
import {TApartments} from "../../sections/Homepage/Apartments";
import {TBlogPostThumb} from "../../sections/Homepage/Blogpost";
import {TAwards} from "../../sections/Homepage/Awards";

export type THomepage = {
	main: TMain,
	about: TAbout,
	apartments: TApartments
	awards: TAwards,
	blogPostThumbs: TBlogPostThumb[]
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
	let hpData = data.allPrismicHomepage.edges[0].node.data
	let blogData = data.allPrismicBlog.nodes;
	return {
		main: {
			title: hpData.title.text,
			sub_title: hpData.sub_title.text,
			image_slider: hpData.image_slider,
		},
		about: {
			title: hpData.ab_title.text,
			sub_title: hpData.ab_small_title.text,
			text: hpData.ab_text.text,
			background_img: hpData.ab_backgroud_image,
			columns: hpData.ab_columns.map((item) => {
				return {
					icon_url: item.ab_column_icon.url,
					image_url: item.ab_column_image.url,
					text: item.ab_column_text.text,
					title: item.ab_column_title.text
				}
			})
		},
		apartments: {
			main_subtitle: hpData.ap_main_subtitle.text,
			main_title: hpData.ap_main_title.text,
			apartments: hpData.apartments.map((item) => {
				return {
					image: item.ap_image.url,
					price: item.ap_price.text,
					title: item.ap_title.text,
					sub_title: item.ap_sub_title.text,
				}
			})
		},
		awards: {
			image_url: hpData.aw_background.url,
			link: hpData.aw_link.url,
			title: hpData.aw_text.text,
		},
		blogPostThumbs: blogData.map((item) => {
			return {
				date: item.data.blog_date,
				author: item.data.blog_author,
				title: item.data.blog_title.length > 0 ? item.data.blog_title[0].text : '',
				anotation: item.data.blog_anotation.length > 0 ? item.data.blog_anotation[0].text : '',
				main_image_url: item.data.main_image.url,
			}
		})
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

