import * as React from 'react';

import Backtotop from './Backtotop';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import {TSettings} from "../models/dataManager/PrismicDataSource";
import {RichText} from 'prismic-reactjs';
import moment from 'moment';

type Props = {
	data: TSettings
};

export class Footer extends React.Component<Props, any> {
	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.data;
		const Map = ReactMapboxGl({
			accessToken:
				'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
		});
		return (
			<>
				<Backtotop/>
				<footer className="footer-two">
					<div className="footer-subscibe-area style-2 pt-50 pb-50">
						<div className="container">
							<div className="row justify-content-center align-items-center">
								<div className="col-lg-3">
									<div className="subscribe">
										<h3 className="mb-0 text-white">Těšíme se na Vás</h3>
									</div>
								</div>
								<div className="col-lg-12 contact_us">
									<div className="blocks">
										<div className="block">
											<div>
												<h3>Adresa</h3>
												<RichText render={data.address}/>
											</div>
										</div>
										<div className="block">
											<div>
												<h3>Telefonní číslo</h3>
												<p>{data.phone}</p>
											</div>
										</div>
										<div className="block">
											<div>
												<h3>Emailová adresa</h3>
												<p>{data.email}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Map
						style="mapbox://styles/mapbox/light-v10"
						className="contact-maps"
					>
						<Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
							<Feature coordinates={[-77.04, 38.907]}/>
						</Layer>
					</Map>
					<div className="copyright-area pt-30 pb-30">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-5 order-2 order-md-1">
									<p className="copyright-text copyright-two">Copyrights {moment().format('YYYY')} - Apartmány Astrid</p>
								</div>
								<div className="col-lg-6 col-md-7 order-1 order-md-2">
									<div className="footer-menu text-center text-md-right">
										<ul>
											<li><p>vytvořil Michal Buráň</p></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}
