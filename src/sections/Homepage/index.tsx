import * as React from 'react';

// import Blogpost from "../sections/homepage/Blogpost";
// import Features from "../sections/homepage/Features";
import {THomepage} from "../../models/dataManager/PrismicDataSource";
import Features from "./Features";

const Banner = React.lazy(() => import("./Banner"));
const About = React.lazy(() => import("./About"));
const Facilities = React.lazy(() => import("./Apartments"));
const Awards = React.lazy(() => import("./Awards"));
const Blogpost = React.lazy(() => import("./Blogpost"));

export default class Homepage extends React.Component<{ data: THomepage }> {
	render() {
		const {about, main, apartments, awards} = this.props.data;
		return (
			<>
				{/*<section className='introduce'>*/}
				<Banner data={main}/>
				<About data={about}/>
				<Facilities data={apartments}/>
				<Awards data={awards}/>
				<Blogpost/>
				<Features/>
			</>
		)
	}
}

