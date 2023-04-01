import React from 'react';

export default function MiniDetails({ title, titleInfo }) {
	return (
		<div className='eachDetail fb'>
			<div className='title fb as je'>{title}</div>
			<div className='coln fb as jc'>:</div>
			<div className='titleInfo fb as js'>{titleInfo}</div>
		</div>
	);
}
