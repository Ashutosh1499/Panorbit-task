import React, { useEffect, useRef, useState } from 'react';
import Profile from './Profile';
import ComingSoon from './ComingSoon';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({
	reference,
	setActiveTabComponent,
	setActiveTab,
	userData,
	selectedId,
	sideBarClass,
}) {
	// Handling tab switching animation.
	const navigate = useNavigate();
	const [tabNo, setTabNo] = useState(1);
	const handleOF = (e, info) => {
		setActiveTab(info);
		switch (info) {
			case 'Profile':
				setTabNo(1);
				break;
			case 'Posts':
				setTabNo(2);
				break;

			case 'Gallery':
				setTabNo(3);
				break;

			case 'ToDo':
				setTabNo(4);
				break;
			default:
				console.log(0);
		}
	};
	const emptyRef = useRef();
	const [refs, setRefs] = useState(() =>
		window.innerWidth < 920 ? reference : emptyRef,
	);
	useEffect(() => {
		if (window.innerWidth < 920) {
			setRefs(reference);
		} else {
			setRefs(emptyRef);
		}
	}, [setRefs, reference]);
	return (
		<div className={sideBarClass} ref={refs}>
			<div className='homeIcon fb ac jc'>
				<Home
					sx={{ color: 'white', cursor: 'pointer' }}
					onClick={() => navigate('/')}
				/>
			</div>
			<div className='tabContainer fb ac jc'>
				<div className='tabsArea'>
					<div
						id='profileTab'
						className={tabNo === 1 ? 'tabs fb ac js active' : 'tabs fb ac js'}
						onClick={e => {
							setActiveTabComponent(
								<Profile userData={userData} selectedId={selectedId} />,
							);
							handleOF(e, 'Profile');
						}}>
						Profile
					</div>
					<div
						className={
							tabNo === 1 ? 'activeIndicator' : 'inactiveIndicator'
						}></div>
					<hr />
					<div
						id='postsTab'
						className={tabNo === 2 ? 'tabs fb ac js active' : 'tabs fb ac js'}
						onClick={e => {
							setActiveTabComponent(<ComingSoon />);
							handleOF(e, 'Posts');
						}}>
						Posts
					</div>
					<div
						className={
							tabNo === 2 ? 'activeIndicator' : 'inactiveIndicator'
						}></div>
					<hr />
					<div
						id='galleryTab'
						className={tabNo === 3 ? 'tabs fb ac js active' : 'tabs fb ac js'}
						onClick={e => {
							setActiveTabComponent(<ComingSoon />);
							handleOF(e, 'Gallery');
						}}>
						Gallery
					</div>
					<div
						className={
							tabNo === 3 ? 'activeIndicator' : 'inactiveIndicator'
						}></div>
					<hr />
					<div
						id='toDoTab'
						className={tabNo === 4 ? 'tabs fb ac js active' : 'tabs fb ac js'}
						onClick={e => {
							setActiveTabComponent(<ComingSoon />);
							handleOF(e, 'ToDo');
						}}>
						ToDo
					</div>
					<div
						className={
							tabNo === 4 ? 'activeIndicator' : 'inactiveIndicator'
						}></div>
				</div>
			</div>
		</div>
	);
}
