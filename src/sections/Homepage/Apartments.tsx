import * as React from 'react';

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
		if (data.apartments.length > 0) {
			return (
				<section className="pt-115 pb-115 bg-white" id="apartments">
					<div className="container">
						<div className="section-title text-center mb-30">
							<span className="title-tag">{data.main_subtitle}</span>
							<h2>{data.main_title}</h2>
						</div>
						<div className="row justify-content-center">
							{data.apartments.map((item, i) => (
								<div key={i} className="col-lg-3 col-md-6">
									<div className="apartment-box">
										<div className="image-box">
											<div className="d-block">
												<img src={item.image} alt="img"/>
											</div>
										</div>
										<div className="content-box-2">
											<h3 className="title">
												{item.title}
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
		} else {
			return ''
		}
	}
}

export default Apartments;
