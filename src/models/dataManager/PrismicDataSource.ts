import {RichText, RichTextBlock} from 'prismic-reactjs'
import {graphql, useStaticQuery} from "gatsby";
import {TAbout} from "../../sections/Homepage/About";
import {TMain} from "../../sections/Homepage/Banner";
import {TApartments} from "../../sections/Homepage/Apartments";
import {TBlogPostThumb} from "../../sections/Homepage/Blogpost";
import {TAwards} from "../../sections/Homepage/Awards";

var PrismicDOM = require('prismic-dom');

export type THomepage = {
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
	let hpData = data.allPrismicHomepage.edges[0].node.data;
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
	blogPostThumbs: TBlogPostThumb[]
}

export function getBlogListData(data): TBlogList | null {
	let blogData = data.allPrismicBlog.edges;

	return {
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
	settings = data.allPrismicSettings.edges[0].node.dataRaw;
	const {lang, type, url} = data.prismicHomepage || {}
	const alternateLanguages = data.prismicHomepage.alternate_languages
	const activeDoc = {
		lang,
		type,
		url,
		alternateLanguages,
	}

	return {
		email: RichText.asText(settings.email),
		head_title: RichText.asText(settings.head_title),
		logo_image: {
			alt: settings.logo_image.alt,
			url: settings.logo_image.url,
		},
		phone: RichText.asText(settings.phone),
		address: settings.address,
		main_menu: settings.main_menu,
		langs: activeDoc
	};
}

