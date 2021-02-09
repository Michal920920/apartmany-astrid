import {RichText} from 'prismic-reactjs'

export function getHomepageData(document) {
	return {
		main: {
			title: RichText.asText(document.title.raw),
			sub_title: RichText.asText(document.sub_title.raw),
			image_slider: document.image_slider
		}
	};
}
