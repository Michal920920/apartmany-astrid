import * as React from 'react';
import Layout from "../components/layout";

const NotFound = () => {
	return (
		<Layout>
			<section className="blog-section pt-120 pb-120">
				<div className="container justify-content-center text-center mt-100">
					<h1>404 - Stránka neexistuje</h1>
					<p className="mt-20">Odkaz na který jste kliknul je asi rozbitý. Taky se mohlo stát, že stránka byla odstraněna nebo přejmenována.</p>
				</div>
			</section>
		</Layout>
	)
}
export default NotFound;
