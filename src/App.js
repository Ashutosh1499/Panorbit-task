import { useState } from 'react';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInfo from './Screens/UserInfo';

function App() {
	//Declaring data as useState so that it can be passed on to multiple components
	const [data, setData] = useState([]);
	//keeping track of the selected id from the list
	const [selectedId, setSelectedId] = useState(1);
	return (
		<Router>
			<div className='App'>
				<Routes>
					{/* Routing the Home page and userInfo page with the required Data */}
					<Route
						exact
						path='/'
						element={
							<Home
								data={data}
								setData={setData}
								selectedId={selectedId}
								setSelectedId={setSelectedId}
							/>
						}
					/>
					<Route
						exact
						path='/userInfo'
						element={
							<UserInfo
								data={data}
								setData={setData}
								selectedId={selectedId}
								setSelectedId={setSelectedId}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
