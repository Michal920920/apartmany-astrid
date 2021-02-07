import * as React from 'react';

type Props = {
	className: string | null;
}

export default function Layout({children, classname}) {

	return (
		<div style={{margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}} className={classname}>
			{children}
		</div>
	)
}
