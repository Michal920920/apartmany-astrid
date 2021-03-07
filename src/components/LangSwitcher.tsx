import * as React from 'react';
import {changeLocale, IntlContextConsumer} from "gatsby-plugin-intl";

const LangSwitcher = () => {

	const languageName = [];
	languageName['cs-cz'] = 'CZ';
	languageName['en-gb'] = 'EN';
	languageName['de-de'] = 'DE';
	return (
		<div className="lang-switcher">
			<IntlContextConsumer>
				{({languages, language: currentLocale}) =>
					languages.map(language => (
						<a
							className={currentLocale === language ? 'active' : ''}
							key={language}
							onClick={() => changeLocale(language)}
							style={{
								margin: 10,
								cursor: `pointer`,
							}}
						>
							{languageName[language]}
						</a>
					))
				}
			</IntlContextConsumer>
		</div>
	)
}

export default LangSwitcher
