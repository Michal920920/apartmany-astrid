import * as React from 'react';

// import Blogpost from "../sections/homepage/Blogpost";
// import Features from "../sections/homepage/Features";
import {THomepage} from "../../models/dataManager/PrismicDataSource";

const Banner = React.lazy(() => import("./Banner"));
const About = React.lazy(() => import("./About"));
const Facilities = React.lazy(() => import("./Facilities"));

export default class Homepage extends React.Component<{ data: THomepage }> {
	render() {
		const {about, main} = this.props.data;
		return (
			<>
				{/*<section className='introduce'>*/}
				<Banner data={main}/>
				<About data={about}/>
				<Facilities/>
				{/*<Blogpost/>*/}
				{/*<Features/>*/}
			</>
		)
	}
}

