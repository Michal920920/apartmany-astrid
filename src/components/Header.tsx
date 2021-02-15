import * as React from 'react';
import classNames from 'classnames'
import {Link} from "gatsby"
import Canvas from "./Canvas";
import {TSettings} from "../models/dataManager/PrismicDataSource";

const navigationmenu = [
	{
		id: 1,
		linkText: 'Home',
		child: true,
		submenu: [
			{
				id: 11,
				link: '/',
				linkText: 'Home One'
			},
			{
				id: 12,
				link: '/hometwo',
				linkText: 'Home Two'
			},
			{
				id: 13,
				link: '/homethree',
				linkText: 'Home Three'
			},
		]
	},
	{
		id: 2,
		linkText: 'Apartments',
		child: true,
		submenu: [
			{
				id: 21,
				link: '/apartment-details',
				linkText: 'Apartments Details'
			},
			{
				id: 22,
				link: '/trending',
				linkText: 'Apartments List 2'
			},
			{
				id: 23,
				link: '/apartment-grid',
				linkText: 'Apartments Grid'
			},
			{
				id: 24,
				link: '/apartment-list',
				linkText: 'Apartments List'
			},
		]
	},
	{
		id: 3,
		linkText: 'News',
		child: true,
		submenu: [
			{
				id: 31,
				link: '/news',
				linkText: 'News'
			},
			{
				id: 32,
				link: '/news-details',
				linkText: 'News Details'
			},
		]
	},
	{
		id: 4,
		linkText: 'Pages',
		child: true,
		submenu: [
			{
				id: 41,
				child: true,
				linkText: 'Places',
				submenu: [
					{
						id: 411,
						link: '/places',
						linkText: 'Places Near By'
					},
					{
						id: 412,
						link: '/places-details',
						linkText: 'Places Details'
					},
				]
			},
			{
				id: 42,
				link: '/classification',
				linkText: 'Classification'
			},
			{
				id: 43,
				link: '/gallery',
				linkText: 'Our Gallery'
			},
			{
				id: 44,
				link: '/contact',
				linkText: 'Contact Us'
			},
			{
				id: 45,
				link: '/about',
				linkText: 'About Us'
			},
			{
				id: 46,
				link: '/broker',
				linkText: 'Brokers'
			},
		]
	},
]
type State = {
	classMethod: boolean,
	toggleMethod: boolean,
	isMobile: boolean,
	isTop: boolean
}
type Props = {
	data: TSettings
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

	// getNextSibling = function (elem, selector: string): Element {
	// 	let sibling = elem.nextElementSibling;
	// 	if (!selector) return sibling;
	// 	while (sibling) {
	// 		if (sibling.matches(selector)) return sibling;
	// 		sibling = sibling.nextElementSibling
	// 	}
	// }
	// triggerChild = (e) => {
	// 	let subMenu = '';
	// 	console.log('triggerChild');
	// 	subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
	// 	if (subMenu !== null && subMenu !== undefined) {
	// 		subMenu.classList.value = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
	// 	}
	// }

	render() {
		const className: string = this.state.isMobile ? 'breakpoint-on' : '';
		const classNamess: string = this.state.isMobile ? 'd-none' : '';
		const stickyheader: string = this.state.isTop ? 'sticky-active' : '';
		const data = this.props.data;
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
								{/* Off canvas Menu  */}
								<div className="toggle">
									<Link to="#" id="offCanvasBtn" onClick={this.addClass}><i className="fal fa-bars"/></Link>
								</div>
								{/* Mneu Items */}
								<div className="menu-items">
									<ul>
										{navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
											<li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `}>
												{item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={'ahoj'}> {item.linkText} </Link>}
												{item.child ?
													<ul className="submenu" role="menu">
														{item.submenu.map((sub_item, i) => (
															<li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
																{sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> :
																	<Link to={sub_item.link}> {sub_item.linkText} </Link>}
																{sub_item.submenu ?
																	<ul className="submenu">
																		{sub_item.submenu.map((third_item, i) => (
																			<li key={i}><Link
																				to={third_item.link}>{third_item.linkText}</Link>
																			</li>
																		))}
																	</ul> : null}
															</li>
														))}
													</ul>
													: null
												}
											</li>
										)) : null}
									</ul>
								</div>
								{/* from pushed-item */}
								<div className="nav-pushed-item"/>
							</div>
							{/* Site Logo */}
							<div className="site-logo">
								<Link to="/"><img src={data.logo_image.url} alt={data.logo_image.alt}/></Link>
							</div>
							{/* Header Info Pussed To Menu Wrap */}
							<div className={`nav-push-item ${classNamess}`}>
								{/* Header Info */}
								<div className="header-info d-lg-flex align-items-center">
									<div className="item">
										<i className="fal fa-phone"/>
										<span>Telefon</span>
										<Link to="tel:+90898787709">
											<h5 className="title">{data.phone}</h5>
										</Link>
									</div>
									<div className="item">
										<i className="fal fa-envelope"/>
										<span>Email</span>
										<Link to="mailto:info@webmail.com">
											<h5 className="title">{data.email}</h5>
										</Link>
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
				<div className={classNames("offcanvas-wrapper", {"show-offcanvas": this.state.classMethod})}>
					<div className={classNames("offcanvas-overly", {"show-overly": this.state.classMethod})} onClick={this.removeClass}/>
					<div className="offcanvas-widget">
						<Link to="#" className="offcanvas-close" onClick={this.removeClass}><i className="fal fa-times"/></Link>
						<Canvas/>
					</div>
				</div>
			</>
		);
	}
}

