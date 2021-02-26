import * as React from 'react';
import {TFeatures} from "../../models/dataManager/PrismicDataSource";

class Features extends React.Component<{ data: TFeatures }> {
	render() {
		const data = this.props.data;
		return (
			<section className="core-feature-section bg-white pt-115 pb-115">
				<div className="container">
					<div className="section-title text-center mb-50">
						<span className="title-tag">{data.subtitle}</span>
						<h2>{data.main_title}</h2>
					</div>
					{/* Featre Loop */}
					<div className="row features-loop">
						{data.features.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 col-sm-6 order-1">
									<div className="feature-box wow fadeInLeft" data-wow-delay=".3s">
										<div className="icon">
											<i><img src={item.image_url}/></i>
										</div>
										<h3>{item.title}</h3>
										<p>
											{item.text}
										</p>
										<span className="count">0{index + 1}</span>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default Features;
