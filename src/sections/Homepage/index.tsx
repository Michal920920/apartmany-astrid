import * as React from 'react';

import {THomepage} from "../../models/dataManager/PrismicDataSource";
import Features from "./Features";
import Banner from "./Banner";
import About from "./About";
import Awards from "./Awards";
import Blogpost from "./Blogpost";
import Facilities from "./Apartments";

// const Banner = React.lazy(() => import("./Banner"));
// const About = React.lazy(() => import("./About"));
// const Facilities = React.lazy(() => import("./Apartments"));
// const Awards = React.lazy(() => import("./Awards"));
// const Blogpost = React.lazy(() => import("./Blogpost"));

export default class Homepage extends React.Component<{ data: THomepage }> {
	render() {
		const {about, main, apartments, awards, blogPostThumbs} = this.props.data;
		return (
			<>
				<Banner data={main}/>
				<About data={about}/>
				<Facilities data={apartments}/>
				<Awards data={awards}/>
				<Features/>
				<Blogpost data={blogPostThumbs}/>
			</>
		)
	}
}

