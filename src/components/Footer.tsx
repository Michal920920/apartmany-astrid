import * as React from 'react';
import Backtotop from './Backtotop';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import {RichText} from 'prismic-reactjs';
import * as moment from 'moment'
import call_ico from './../assets/img/icon/call.svg';
import email_ico from './../assets/img/icon/email.svg';
import home_ico from './../assets/img/icon/home.svg';
import pointer from './../assets/img/icon/pointer.png';
import {Marker} from "react-mapbox-gl/lib-esm";
import {FormattedMessage} from "gatsby-plugin-intl"
import {graphql, useStaticQuery} from "gatsby";
import 'mapbox-gl/dist/mapbox-gl.css';
import Iframe from 'react-iframe'

export const Footer = () => {
	let data = useStaticQuery(
		graphql`
            query FooterQuery {
                allPrismicSettings {
                    nodes {
                        dataRaw {
                            address {
                                type
                                text
                                spans {
                                    end
                                    start
                                }
                            }
                            email {
                                text
                            }
                            phone {
                                text
                            }
                        }
                    }
                }
            }

		`
	);
	const settings = data.allPrismicSettings.nodes[0].dataRaw;
	data = {
		email: settings.email[0] ? settings.email[0].text : '',
		phone: settings.phone[0] ? settings.phone[0].text : '',
		address: settings.address,
	}
	const Map = ReactMapboxGl({
		accessToken:
			'pk.eyJ1IjoibWljaGFsOTIiLCJhIjoiY2tobDQxcWY0MDM3OTMxcm41MGxlNjZ0cSJ9.7By8mjnPT5zSKeoc8nUDWA'
	});

	return (
		<>
			<Backtotop/>
			<footer className="footer-two" id="footer">
				<div className="footer-subscibe-area style-2 pt-50 pb-50">
					<div className="container">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-3">
								<div className="subscribe">
									<h3 className="mb-0 text-white text-center">
										<FormattedMessage id="subscribe"/>
									</h3>
								</div>
							</div>
							<div className="col-lg-12 contact_us">
								<div className="blocks">
									<div className="block">
										<img className="image" alt='home_ico' src={home_ico}/>
										<div>
											<h3><FormattedMessage id="address"/></h3>
											<RichText render={data.address}/>
										</div>
									</div>
									<div className="block">
										<img className="image" alt='home_ico' src={call_ico}/>
										<div>
											<h3><FormattedMessage id="phone"/></h3>
											<p>{data.phone}</p>
										</div>
									</div>
									<div className="block">
										<img className="image" alt='home_ico' src={email_ico}/>
										<div>
											<h3><FormattedMessage id="email"/></h3>
											<p>{data.email}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<iframe style={{border:'none'}} src="https://frame.mapy.cz/s/gobekagoco" width="1920" height="700" frameBorder="0"></iframe>*/}
				<Iframe url="https://frame.mapy.cz/s/gobekagoco"
				        width="100%"
				        height="700px"
				        id="myId"
				        className="myClassname"
				        styles={{border: 'none'}}
				        position="relative"/>
				<div className="copyright-area pt-30 pb-30">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-5 order-2 order-md-1">
								<p className="copyright-text copyright-two">Copyrights {moment().format('YYYY')} - Apartmány Astrid</p>
							</div>
							<div className="col-lg-6 col-md-7 order-1 order-md-2">
								<div className="footer-menu text-center text-md-right">
									<ul>
										<li><a href="mailto:michal92.mb@gmail.com">vytvořil Michal Buráň</a></li>
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
