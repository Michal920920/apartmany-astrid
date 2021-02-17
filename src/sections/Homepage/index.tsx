import * as React from 'react';

import {THomepage} from "../../models/dataManager/PrismicDataSource";
import Features from "./Features";

const Banner = React.lazy(() => import("./Banner"));
const About = React.lazy(() => import("./About"));
const Facilities = React.lazy(() => import("./Apartments"));
const Awards = React.lazy(() => import("./Awards"));
const Blogpost = React.lazy(() => import("./Blogpost"));

export default class Homepage extends React.Component<{ data: THomepage }> {
	render() {
		const {about, main, apartments, awards,blogPostThumbs} = this.props.data;
		return (
			<>
				{/*<section className='introduce'>*/}
				<Banner data={main}/>
				<About data={about}/>
				<Facilities data={apartments}/>
				<Awards data={awards}/>
				<Blogpost data={blogPostThumbs}/>
				<Features/>
			</>
		)
	}
}
