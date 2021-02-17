import * as React from 'react';
import {Link} from "gatsby"

export type TApartments = {
	main_subtitle: string
	main_title: string
	apartments: {
		image: string
		price: string
		sub_title: string
		title: string
	}[]
}

class BlogPost extends React.Component<{ data: TApartments }> {
	render() {
		const data = this.props.data;
		return (
			<section className="pt-115 pb-115 bg-white">
			</section>
		);
	}
}

export default BlogPost;
