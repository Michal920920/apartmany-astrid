import * as React from 'react';
import {Parallax} from 'react-parallax';
import icon from './../../assets/img/icon/trophy.svg';
import {Link} from "gatsby";

export type TAwards = {
	title: string,
	link: string,
	image_url: string
}

class Awards extends React.Component<{ data: TAwards }> {
	render() {
		const data = this.props.data;
		return (
			<section className='parallax'>
				<Parallax
					blur={{min: -15, max: 15}}
					bgImage={data.image_url}
					style={{zIndex: 5}}
					strength={100}
				>
					<div className='parallax_image' style={window.innerWidth > 991 ? {height: '700px'} : {height: 'auto'}}>
						<div className='parallax_text'>
							<img alt='trophy_icon' src={icon}/>
							<h3>{data.title}</h3>
							<a href={data.link}>booking.com</a>
						</div>
					</div>
				</Parallax>
			</section>
		)
	}
}

export default Awards;
