import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profileMenu.css';

const HandleOutSideMenuHandler = (ref, setToggle) => {
	useEffect(() => {
		const outSideMenyClicked = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				setToggle(false);
			} else {
			}
		};
		document.addEventListener('mousedown', outSideMenyClicked);
		return () => {
			document.removeEventListener('mousedown', outSideMenyClicked);
		};
	}, [ref, setToggle]);
};

export default function ProfileMenu({
	userData,
	user1Data,
	user2Data,
	user1,
	user2,
	setSelectedId,
}) {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState(false);
	const menuRef = useRef();
	HandleOutSideMenuHandler(menuRef, setToggle);
	return (
		<>
			{userData === undefined ? (
				''
			) : (
				<>
					<div
						className='menuToggleArea fb ac je'
						onClick={() =>
							toggle === true ? setToggle(false) : setToggle(true)
						}>
						<div className='picture fb ac jc'>
							<img src={userData.profilepicture} alt='' />
						</div>
						<div className='menuToggleHeading fb ac je'>{userData.name}</div>
					</div>
					{toggle === true ? (
						<div ref={menuRef} className='profileMenuContainer fb ac jc'>
							<div className='profileWrapper'>
								<div className='upperDiv'>
									<div className='bigPicture fb ac jc'>
										<img src={userData.profilepicture} alt='' />
									</div>
									<div className='profileName fb ac jc'>{userData.name}</div>
									<div className='mailId fb as jc'>{userData.email}</div>
								</div>
								<div className='middleDiv'>
									<div
										className='users fb ac jc'
										onClick={() => {
											setSelectedId(user1 + 1);
										}}>
										<img src={user1Data.profilepicture} alt='' />
										<div className='fb ac je'>{user1Data.name}</div>
									</div>
									<div
										className='users fb ac jc'
										onClick={() => setSelectedId(user2 + 1)}>
										<img src={user2Data.profilepicture} alt='' />
										<div className='fb ac je'>{user2Data.name}</div>
									</div>
								</div>
								<div className='lowerDiv fb ac jc'>
									<button onClick={() => navigate('/')}>Sign Out</button>
								</div>
							</div>
						</div>
					) : (
						''
					)}
				</>
			)}
		</>
	);
}
