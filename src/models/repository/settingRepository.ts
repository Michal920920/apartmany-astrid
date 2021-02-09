import {RichText} from 'prismic-reactjs'

export function getSettingsData(data) {

	return {
		email: RichText.asText(data.email),
		head_title: RichText.asText(data.head_title),
		logo_image: {
			alt: data.logo_image.alt,
			url: data.logo_image.url,
			width: data.logo_image.dimensions.width,
			height: data.logo_image.dimensions.height
		},
		phone: RichText.asText(data.phone),
	};
}
