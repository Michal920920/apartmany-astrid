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

class Apartments extends React.Component<{ data: TApartments }> {
	render() {
		const data = this.props.data;
		return (
			<section className="pt-115 pb-115 bg-white">
				<div className="container">
					<div className="section-title text-center mb-30">
						<span className="title-tag">{data.main_subtitle}</span>
						<h2>{data.main_title}</h2>
					</div>
					<div className="text-center mb-20">
						<Link to="/apartment-grid">View more
							<i className="fal fa-arrow-right ml-2"/>
						</Link>
					</div>
					<div className="row justify-content-center">
						{data.apartments.map((item, i) => (
							<div key={i} className="col-lg-3 col-md-6">
								<div className="apartment-box">
									<div className="image-box">
										<Link to="/apartment-details" className="d-block">
											<img src={item.image} alt="img"/>
										</Link>
									</div>
									<div className="content-box-2">
										<h3 className="title">
											<Link to="/apartment-details">{item.title}</Link>
										</h3>
										<p>{item.sub_title}</p>
										<span className="price">{item.price}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default Apartments;
