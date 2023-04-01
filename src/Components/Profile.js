import React from 'react';
import MiniDetails from './MiniDetails';
import '../css/profile.css';
import mapImage from '../Images/mapImage.png';

export default function Profile({ userData, selectedId }) {
	return (
		// Profile Body contains 2 parts :-
		// 1. Person Details
		// 2. Address Area
		<div className='profileBody fb ac jc'>
			{userData === undefined ? (
				'Loading'
			) : (
				<>
					<div className='mainInfoArea fb ac jc'>
						<div className='detailsWrapper'>
							<div className='basicDetailsArea'>
								<div className='profilePicture fb ac jc'>
									<img src={userData.profilepicture} alt='' />
								</div>
								<div className='nameArea fb ac jc'>{userData.name}</div>
								<div className='detailSection' style={{ height: '40%' }}>
									{/* Mini Details helps to bring same type of content on the page 
						with differnt details just by passing on the parameters */}
									<MiniDetails title='UserName' titleInfo={userData.username} />
									<MiniDetails title='e-mail' titleInfo={userData.email} />
									<MiniDetails title='Phone' titleInfo={userData.phone} />
									<MiniDetails title='Website' titleInfo={userData.website} />
								</div>
							</div>
							<div className='companyDetailsArea'>
								<div className='companyHeading fb ac jc'>Company</div>
								<div className='detailSection' style={{ height: '80%' }}>
									<MiniDetails title='Name' titleInfo={userData.company.name} />
									<MiniDetails
										title='catchPhrase'
										titleInfo={userData.company.catchPhrase}
									/>
									<MiniDetails title='bs' titleInfo={userData.company.bs} />
								</div>
							</div>
						</div>
					</div>
					<div className='addressArea fb ac jc'>
						<div className='detailsWrapper' style={{ border: 'none' }}>
							<div className='addressHeading'>Address:</div>
							<div className='addressDetails'>
								<div className='detailSection'>
									<MiniDetails
										title='Street'
										titleInfo={userData.address.street}
									/>
									<MiniDetails
										title='Suite'
										titleInfo={userData.address.suite}
									/>
									<MiniDetails title='City' titleInfo={userData.address.city} />
									<MiniDetails
										title='ZipCode'
										titleInfo={userData.address.zipcode}
									/>
								</div>
							</div>
							<div className='addressMapVisual'>
								<img src={mapImage} alt='' />
							</div>
							<div className='geoDetails fb ac je'>
								<div className='geoDetailsInner fb ac je'>
									<MiniDetails
										title='Lat'
										titleInfo={userData.address.geo.lat}
									/>
									<MiniDetails
										title='Long'
										titleInfo={userData.address.geo.lng}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
