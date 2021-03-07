import * as React from 'react';
import classNames from 'classnames'
import LangSwitcher from "./LangSwitcher";
import {FormattedMessage, Link} from "gatsby-plugin-intl";
import {useStaticQuery, graphql, StaticQuery} from "gatsby"

type State = {
	classMethod: boolean,
	toggleMethod: boolean,
	isMobile: boolean,
	isTop: boolean
}


export class Header extends React.Component<any, State> {
	constructor(props) {
		super(props);
		this.state = {
			classMethod: false,
			toggleMethod: false,
			isMobile: window.innerWidth < 991,
			isTop: window.scrollY > 110,
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
		return (
			<StaticQuery query={graphql`
		            query HeaderQuery {
		                allPrismicSettings{
		                    nodes {
		                        data {
		                            email {
		                                text
		                            }
		                            head_title {
		                                text
		                            }
		                            logo_image {
		                                alt
		                                url
		                            }
		                            phone {
		                                text
		                            }
		                        }
		                    }
		                }
		            }
				`} render={data => {
				data = data.allPrismicSettings.nodes[0].data;
				return (
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
											<li className="menu-item">
												<Link to='/'><FormattedMessage id="go_home"/></Link>
											</li>
											<li className="menu-item">
												<Link to='/blog'><FormattedMessage id="blog_button"/></Link>
											</li>
										</ul>
									</div>
									{this.state.isMobile &&
									<div className={`nav-push-item`}>
										{/* Header Info */}
										<div className="header-info d-lg-flex align-items-center">
											<div className="item">
												<i className="fal fa-phone"/>
												<span><FormattedMessage id="phone"/></span>
												<a href={`callto:${data.phone[0].text}`}>
													<h5 className="title">{data.phone[0].text}</h5>
												</a>
											</div>
											<div className="item">
												<i className="fal fa-envelope"/>
												<span><FormattedMessage id="email"/></span>
												<a href={`mailto:${data.email[0].text}`}>
													<h5 className="title">{data.email[0].text}</h5>
												</a>
											</div>
										</div>
									</div>
									}
								</div>
								<div className="site-logo">
									<Link to={'/'}><img src={data.logo_image.url} alt={data.logo_image.alt}/></Link>
								</div>
								<div className={`nav-push-item ${classNamess}`}>
									<LangSwitcher/>
									<div className="header-info d-lg-flex align-items-center">
										<div className="item">
											<i className="fal fa-phone"/>
											<span><FormattedMessage id="phone"/></span>
											<a href={`callto:${data.phone[0].text}`}>
												<h5 className="title">{data.phone[0].text}</h5>
											</a>
										</div>
										<div className="item">
											<i className="fal fa-envelope"/>
											<span><FormattedMessage id="email"/></span>
											<a href={`mailto:${data.email[0].text}`}>
												<h5 className="title">{data.email[0].text}</h5>
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
				)
			}}
			>

			</StaticQuery>
		);
	}
}
