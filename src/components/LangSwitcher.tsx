import * as React from 'react';
import {navigate} from 'gatsby'
const linkResolver = require('./../utils/linkResolver.js')

const LangSwitcher = ({activeDocMeta}) => {
	const currentLang = activeDocMeta.lang
	const currentLangOption = (
		<option value={currentLang}>
			{currentLang.slice(0, 2).toUpperCase()}
		</option>
	)
	const alternateLangOptions = activeDocMeta.alternateLanguages.map((altLang, index) => {
			return (
				<option
					value={linkResolver(altLang)}
					key={`alt-lang-${index}`}
				>
					{altLang.lang.slice(0, 2).toUpperCase()}
				</option>
			)
		}
	)
	const handleLangChange = (event) => {
		navigate(event.target.value)
	}

	return (
		<div className="language-switcher">
			<select
				value={currentLang}
				onChange={handleLangChange}
			>
				{currentLangOption}
				{alternateLangOptions}
			</select>
		</div>
	)
}

export default LangSwitcher
