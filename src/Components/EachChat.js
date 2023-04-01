import { Circle } from '@mui/icons-material';
import React from 'react';

export default function EachChat({ eachData, setSelectedChat }) {
	return (
		<>
			<div
				className='eachChat fb as jc'
				onClick={() => {
					setSelectedChat(eachData.id);
				}}>
				<div className='chatPic fb ac jc'>
					<img src={eachData.profilepicture} alt='' />
				</div>
				<div className='name'>{eachData.name}</div>
				<div className='chatStatus fb ac jc'>
					{eachData.id % 3 === 0 || eachData.id % 5 === 0 ? (
						<Circle fontSize='xx-small' sx={{ color: 'green' }} />
					) : (
						<Circle fontSize='xx-small' sx={{ color: '#bbbbbb' }} />
					)}
				</div>
			</div>
		</>
	);
}
