import {RichText} from 'prismic-reactjs'

export function getHomepageData(document) {
	console.log(document.ab_small_title);
	return {
		main: {
			title: RichText.asText(document.title.raw),
			sub_title: RichText.asText(document.sub_title.raw),
			image_slider: document.image_slider
		},
		about: {
			title: document.ab_title.text,
			sub_title: document.ab_small_title.text,
			text: document.ab_text.text,
			background_img: document.ab_backgroud_image,
		}
	};
}
