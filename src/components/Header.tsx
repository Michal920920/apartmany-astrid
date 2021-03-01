import * as React from 'react';
import classNames from 'classnames'
import {Link} from "gatsby"
import {TSettings} from "../models/dataManager/PrismicDataSource";
import LangSwitcher from "./LangSwitcher";

type State = {
	classMethod: boolean,
	toggleMethod: boolean,
	isMobile: boolean,
	isTop: boolean
}
type Props = {
	data: TSettings
	activeDocMeta: any
};


export class Header extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			classMethod: false,
			toggleMethod: false,
			isMobile: false,
			isTop: false,
		};
		this.addClass = this.addClass.bind(this);
		this.removeClass = this.removeClass.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
	}

	addClass() {
		this.setState({
			classMethod: true
		});
	}

	removeClass() {
		this.setState({
			classMethod: false,
		});
	}

	toggleClass() {
		this.setState({
			toggleMethod: !this.state.toggleMethod
		});
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({
				isMobile: window.innerWidth < 991
			});
		}, false);
		window.addEventListener('load', () => {
			this.setState({
				isMobile: window.innerWidth < 991
			});
		}, false);

		window.addEventListener('scroll', () => {
			this.setState({
				isTop: window.scrollY > 110
			});
		}, false);
	}

	render() {
		const className: string = this.state.isMobile ? 'breakpoint-on' : '';
		const classNamess: string = this.state.isMobile ? 'd-none' : '';
		const stickyheader: string = this.state.isTop ? 'sticky-active' : '';
		const data = this.props.data;
		console.log('data', data)
		return (
			<>
				<header className={`header-absolute sticky-header ${stickyheader}`} id="header">
					<div className="container container-custom-one">
						<div className={`nav-container d-flex align-items-center justify-content-between ${className}`}>
							{/* Main Menu */}
							<div className={classNames("nav-menu d-lg-flex align-items-center", {"menu-on": this.state.toggleMethod})}>
								{/* Navbar Close Icon */}
								<div className="navbar-close" onClick={this.toggleClass}>
									<div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
								</div>
								{/* Mneu Items */}
								<div className="menu-items">
									<ul>
										{data.main_menu.length > 0 ? data.main_menu.map((item, i) => (

											<li key={i} className="menu-item">
												<a href={item.anchor[0].text}>{item.anchor[0].text} {item.link_name[0].text}</a>
											</li>
										)) : null}
									</ul>
								</div>
								<div className="nav-pushed-item"/>
							</div>
							<div className="site-logo">
								<Link to={'/'}><img src={data.logo_image.url} alt={data.logo_image.alt}/></Link>
							</div>
							<div className={`nav-push-item ${classNamess}`}>
								<LangSwitcher activeDocMeta={this.props.activeDocMeta}/>
								<div className="header-info d-lg-flex align-items-center">
									<div className="item">
										<i className="fal fa-phone"/>
										<span>Telefon</span>
										<a href="callto:+90898787709">
											<h5 className="title">{data.phone}</h5>
										</a>
									</div>
									<div className="item">
										<i className="fal fa-envelope"/>
										<span>Email</span>
										<a href="mailto:info@webmail.com">
											<h5 className="title">{data.email}</h5>
										</a>
									</div>
								</div>
							</div>
							{/* Navbar Toggler */}
							<div className={classNames("navbar-toggler", {"active": this.state.toggleMethod})} onClick={this.toggleClass}>
								<span/><span/><span/>
							</div>
						</div>
					</div>
				</header>
			</>
		);
	}
}

