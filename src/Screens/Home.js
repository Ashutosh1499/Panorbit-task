import React, { useEffect } from 'react';
import User from '../Components/User';
import '../css/home.css';

export default function Home({ data, setData, setSelectedId }) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const loadData = async () => {
		let response = await fetch('https://panorbit.in/api/users.json');
		response = await response.json();
		setData(response.users);
	};
	useEffect(() => {
		loadData();
	}, [loadData]);
	return (
		<div className='homeContainer fb ac jc'>
			<div className='userListContainer'>
				<div className='header fb ac jc'>
					<h1>Select an account</h1>
				</div>
				<div className='userListArea fb ac jc'>
					<div className='userList'>
						{data.map(eachUser => {
							return (
								<User
									key={eachUser.id}
									eachUser={eachUser}
									setSelectedId={setSelectedId}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
