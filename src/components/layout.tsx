import * as React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "gatsby"

type Props = {
	className: string | null;
}

export default function Layout({children, data}) {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>{data.head_title}</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name='googlebot' content='index,follow'/>
				<meta name='robots' content='index,follow'/>
				<meta name='author' content='Michal Buráň / michal.92@email.cz'/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Helmet>
			<header>
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="left hide-on-med-and-down">
							<li>
								<Link to="/">
									Domů
								</Link>
							</li>
							<li>
								<Link to="/apartments">
									Apartmány
								</Link>
							</li>
							<li>
								<Link to="/aboutUs">
									O nás
								</Link>
							</li>
							<li>
								<Link to="/contact">
									Kontakty
								</Link>
							</li>
						</ul>
						<img src={data.logo_image.url} width={data.logo_image.width} height={data.logo_image.height} alt="Apartmány Astrid" className='logo'/>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<p>Telefonní kontakt</p>
								<a href="tel:{data.head_title}">{data.phone}</a>
							</li>
							<li>
								<p>Emailová adresa</p>
								<a href="`mailto:${data.email}`">{data.email}</a>
							</li>
						</ul>
					</div>
				</nav>
				<a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
				<ul className="sidenav" id="mobile-demo">
					<li><a href="sass.html">Sass</a></li>
					<li><a href="badges.html">Components</a></li>
					<li><a href="collapsible.html">Javascript</a></li>
					<li><a href="mobile.html">Mobile</a></li>
				</ul>
			</header>
			{children}
		</>

	)
}
