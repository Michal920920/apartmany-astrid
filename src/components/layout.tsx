import * as React from 'react';
import {Suspense} from 'react';
import {Helmet} from "react-helmet";
import {Footer} from "./Footer";
import {Header} from "./Header";
import Preloader from "./Preloader";

const Layout = ({children, data}) => {

	const isSSR = typeof window === "undefined"
	return (
		!isSSR &&
		<Suspense fallback={<Preloader/>}>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>{data.head_title}</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name='googlebot' content='index,follow'/>
				<meta name='robots' content='index,follow'/>
				<meta name='author' content='Michal Buráň / michal.92@email.cz'/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
				<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet'/>
			</Helmet>
			<Header data={data} activeDocMeta={data.langs}/>
			{children}
			<Footer data={data}/>
		</Suspense>
	)

}

export default Layout;
