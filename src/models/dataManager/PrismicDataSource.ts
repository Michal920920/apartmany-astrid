import {RichText, RichTextBlock} from 'prismic-reactjs'
import {graphql, useStaticQuery} from "gatsby";
import {TAbout} from "../../sections/Homepage/About";
import {TMain} from "../../sections/Homepage/Banner";
import {TApartments} from "../../sections/Homepage/Apartments";
import {TBlogPostThumb} from "../../sections/Homepage/Blogpost";
import {TAwards} from "../../sections/Homepage/Awards";

var PrismicDOM = require('prismic-dom');

export type THomepage = {
	settings: TSettings,
	main: TMain,
	about: TAbout,
	apartments: TApartments,
	features: TFeatures,
	awards: TAwards,
	blogPostThumbs: TBlogPostThumb[]
}
export type TFeatures = {
	main_title: string,
	subtitle: string,
	features: TFeaturesItems[],
}
export type TFeaturesItems = {
	text: string,
	title: string,
	image_url: string,
}
export type TSettings = {
	email: string,
	head_title: string,
	translate_address: string,
	translate_email: string,
	translate_text: string,
	translate_phone: string,
	logo_image: {
		alt: string,
		url: string,
	},
	address: RichTextBlock[],
	main_menu: any,
	phone: string,
	langs: any
}

export function getHomepageData(data): THomepage {
	const settingsData: TSettings = transformSettingData(data);
	let hpData = data.allPrismicHomepage.edges[0].node.data;
	let blogData = data.allPrismicBlog.nodes;
	return {
		settings: settingsData,
		main: {
			title: hpData.title.text,
			sub_title: hpData.sub_title.text,
			image_slider: hpData.image_slider,
			buttons: hpData.buttons.map((item) => {
				return {
					url: item.button_1_link.text,
					text: item.button_1_text.text,
				}
			})
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
		features: {
			main_title: hpData.features_main_title.text,
			subtitle: hpData.features_main_subtitle.text,
			features: hpData.features.map((item) => {
				return {
					text: item.feature_text.text,
					title: item.feature_title.text,
					image_url: item.feature_icon.url,
				}
			}),
		},
		blogPostThumbs: blogData.map((item) => {
			return {
				date: item.data.blog_date,
				author: item.data.blog_author,
				title: item.data.blog_title.length > 0 ? item.data.blog_title[0].text : '',
				anotation: item.data.blog_anotation.length > 0 ? item.data.blog_anotation[0].text : '',
				main_image_url: item.data.main_image.url,
				url: item.slugs[0],
			}
		})
	};
}

export type TBlogList = {
	settings: TSettings,
	blogPostThumbs: TBlogPostThumb[]
}

export function getBlogListData(data): TBlogList | null {
	let blogData = data.allPrismicBlog.edges;
	const settingsData: TSettings = transformSettingData(data);
	return {
		settings: settingsData,
		blogPostThumbs: blogData.map((item) => {
			return {
				date: item.node.data.blog_date,
				author: item.node.data.blog_author,
				title: item.node.data.blog_title.length > 0 ? item.node.data.blog_title[0].text : '',
				anotation: item.node.data.blog_anotation.length > 0 ? item.node.data.blog_anotation[0].text : '',
				main_image_url: item.node.data.main_image.url,
				url: item.node.slugs[0],
			}
		}),
	};
}

export function transformSettingData(data): TSettings {
	let settings: TSettings;
	settings = data.allPrismicSettings.nodes[0].data;
	let activeDoc = null;
	if (data.prismicHomepage) {
		const {lang, type, url} = data.prismicHomepage || {}
		const alternateLanguages = data.prismicHomepage.alternate_languages;
		activeDoc = {
			lang,
			type,
			url,
			alternateLanguages,
		}
	} else {
		const {lang, type, url} = data.prismicBlog || {}
		const alternateLanguages = data.prismicBlog.alternate_languages;
		activeDoc = {
			lang,
			type,
			url,
			alternateLanguages,
		}
	}
	console.log('settings', settings)
	return {
		email: settings.email[0] ? settings.email[0].text : '',
		head_title: settings.head_title[0] ? settings.head_title[0].text : '',
		translate_address: settings.translate_address[0] ? settings.translate_address[0].text : '',
		translate_email: settings.translate_email[0] ? settings.translate_email[0].text : '',
		translate_text: settings.translate_footer_text1[0] ? settings.translate_footer_text1[0].text : '',
		translate_phone: settings.translate_phone[0] ? settings.translate_phone[0].text : '',
		logo_image: {
			alt: settings.logo_image.alt,
			url: settings.logo_image.url,
		},
		phone: settings.phone[0] ? settings.phone[0].text : '',
		address: settings.address,
		main_menu: settings.main_menu,
		langs: activeDoc
	};
}

