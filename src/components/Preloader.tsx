import * as React from 'react';
import {Component} from "react";

class Preloader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="preloader d-flex align-items-center justify-content-center">
					<div className="cssload-container">
						<div className="cssload-loading"><i/><i/><i/><i/></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Preloader;
