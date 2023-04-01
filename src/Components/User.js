import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function User({ eachUser, setSelectedId }) {
	const navigate = useNavigate();
	const handleClick = () => {
		setSelectedId(eachUser.id);
		navigate('/userInfo');
	};
	return (
		<div className='eachUser fb ac jc' onClick={handleClick}>
			<div className='userAvatar fb ac jc'>
				<img src={eachUser.profilepicture} alt='' />
			</div>
			<div className='userName fb ac js'>
				<h3>{eachUser.name}</h3>
			</div>
		</div>
	);
}
