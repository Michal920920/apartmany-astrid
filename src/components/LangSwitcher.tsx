import * as React from 'react';
import {navigate} from 'gatsby'
import linkResolver from './../utils/linkResolver.js'

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
		<li className="language-switcher">
			<select
				value={currentLang}
				onChange={handleLangChange}
			>
				{currentLangOption}
				{alternateLangOptions}
			</select>
		</li>
	)
}

export default LangSwitcher
