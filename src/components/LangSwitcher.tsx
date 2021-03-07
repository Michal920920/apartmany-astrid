import * as React from 'react';
import {changeLocale, IntlContextConsumer} from "gatsby-plugin-intl";

const LangSwitcher = () => {

	// const languageName = {
	// 	en: "English",
	// 	cz: "Čeština",
	// 	de: "Deutsch",
	// }
	return (
		<div>
			<IntlContextConsumer>
				{({languages, language: currentLocale}) =>
					languages.map(language => (
						<a
							key={language}
							onClick={() => changeLocale(language)}
							style={{
								color: currentLocale === language ? `black` : `blue`,
								margin: 10,
								textDecoration: `underline`,
								cursor: `pointer`,
							}}
						>
							{language}
						</a>
					))
				}
			</IntlContextConsumer>
		</div>
	)
}

export default LangSwitcher
