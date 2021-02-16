import * as React from 'react';
import {Suspense} from 'react';
import {Helmet} from "react-helmet";
import {getSettingData, TSettings} from "../models/dataManager/PrismicDataSource";
import Footer from "../components/Footer";
import {Header} from "./Header";
import Preloader from "./Preloader";

export default function Layout({children}) {
	const data: TSettings = getSettingData();
	return (
		<Suspense fallback={<Preloader/>}>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>{data.head_title}</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name='googlebot' content='index,follow'/>
				<meta name='robots' content='index,follow'/>
				<meta name='author' content='Michal Buráň / michal.92@email.cz'/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Helmet>
			<Header data={data}/>
			{children}
			<Footer/>
		</Suspense>

	)
}
