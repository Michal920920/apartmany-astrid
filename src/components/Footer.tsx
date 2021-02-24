import * as React from 'react';
import {Helmet} from "react-helmet";
import Backtotop from './Backtotop';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import {TSettings} from "../models/dataManager/PrismicDataSource";
import {RichText} from 'prismic-reactjs';
import * as moment from 'moment'
import call_ico from './../assets/img/icon/call.svg';
import email_ico from './../assets/img/icon/email.svg';
import home_ico from './../assets/img/icon/home.svg';
import pointer from './../assets/img/icon/pointer.png';
import {Marker} from "react-mapbox-gl/lib-esm";

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
				'pk.eyJ1IjoibWljaGFsOTIiLCJhIjoiY2tobDQxcWY0MDM3OTMxcm41MGxlNjZ0cSJ9.7By8mjnPT5zSKeoc8nUDWA'
		});
		return (
			<>
				<Helmet>
					<link
						href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
						rel="stylesheet"
					/>
				</Helmet>
				<Backtotop/>
				<footer className="footer-two" id="footer">
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
											<img className="image" alt='home_ico' src={home_ico}/>
											<div>
												<h3>Adresa</h3>
												<RichText render={data.address}/>
											</div>
										</div>
										<div className="block">
											<img className="image" alt='home_ico' src={call_ico}/>
											<div>
												<h3>Telefon</h3>
												<p>{data.phone}</p>
											</div>
										</div>
										<div className="block">
											<img className="image" alt='home_ico' src={email_ico}/>
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
						style="mapbox://styles/michal92/ckhl4u282095t19lwp2ay3hqg"
						className="contact-maps"
						center={[16.632, 48.802]}
						pitch={[50]}
						zoom={[15]}
					>
						<Marker coordinates={[16.63145, 48.802]}>
							<img src={pointer}/>
						</Marker>
						{/*<Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>*/}
						{/*</Layer>*/}
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
