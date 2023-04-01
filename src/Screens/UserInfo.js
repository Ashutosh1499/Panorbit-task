import React, { useEffect, useRef, useState } from 'react';
import Chatbox from '../Components/Chatbox';
import ProfileMenu from '../Components/ProfileMenu';
import Sidebar from '../Components/Sidebar';
import Profile from '../Components/Profile';
import '../css/userInfo.css';
import { Menu } from '@mui/icons-material';

const HandleSideBarOutsideClick = (ref, setSideBarClass) => {
	useEffect(() => {
		const outsideSidebarClick = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				setSideBarClass('sideBar hidden');
			}
		};
		document.addEventListener('mousedown', outsideSidebarClick);
		return () => {
			document.removeEventListener('mousedown', outsideSidebarClick);
		};
	}, [ref, setSideBarClass]);
};

export default function UserInfo({ selectedId, setSelectedId }) {
	const user1 = selectedId - 1 === 0 ? 1 : 0;
	const user2 = selectedId - 1 === 1 ? 2 : user1 + 1;
	//keeping track of the selected/active tab on the View
	const [activeTab, setActiveTab] = useState('Profile');
	const [activeTabComponent, setActiveTabComponent] = useState('');
	const [data, setData] = useState([]);
	const sideBarRef = useRef();
	const [sideBarClass, setSideBarClass] = useState(() =>
		window.innerWidth >= 920 ? 'sideBar' : 'sideBar hidden',
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const loadData = async () => {
		let response = await fetch('https://panorbit.in/api/users.json');
		response = await response.json();
		setData(response.users);
	};
	const handleSideBar = () => {
		setSideBarClass('sideBar');
	};
	HandleSideBarOutsideClick(sideBarRef, setSideBarClass);
	useEffect(() => {
		loadData();
	}, [loadData, data, selectedId]);
	return (
		<>
			<div className='dashboardContainer fb ac jc'>
				<div className='dashboard fb ac jc'>
					{/* Two parts of User Profile page :-
					1. SideBar used for tab navigation
					2. The contents of the tab */}
					<Sidebar
						reference={sideBarRef}
						setActiveTabComponent={setActiveTabComponent}
						setActiveTab={setActiveTab}
						userData={data[selectedId - 1]}
						selectedId={selectedId}
						sideBarClass={sideBarClass}
					/>
					{/* Dashboard consist of 2 parts :- 
					1. Header
					2. Contents */}
					<div className='dashboardTabContents'>
						<div className='headerContents fb ac jc'>
							<div className='headerContentsInner fb ac jc'>
								<div className='hamBurger' onClick={handleSideBar}>
									<Menu sx={{ color: '#727272' }} />
								</div>
								<div className='tabHeading fb ac js'>
									<h3>{activeTab}</h3>
								</div>
								<div className='profileMenuArea fb ac je'>
									<ProfileMenu
										userData={data[selectedId - 1]}
										user1Data={data[user1]}
										user2Data={data[user2]}
										user1={user1}
										user2={user2}
										setSelectedId={setSelectedId}
									/>
								</div>
							</div>
						</div>
						<div className='dashboardTabBody'>
							{activeTab === 'Profile' ? (
								<Profile
									userData={data[selectedId - 1]}
									selectedId={selectedId}
								/>
							) : (
								activeTabComponent
							)}
						</div>
					</div>
				</div>
			</div>
			{/* The ChatBox to be declared independent of the tab components */}
			<Chatbox data={data} selectedId={selectedId} />
		</>
	);
}
