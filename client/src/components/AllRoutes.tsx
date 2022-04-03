import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppShellComponent from './AppShellComponent';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function AllRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/:page" element={<AppShellComponent />} />
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</Router>
	);
}
export default AllRoutes;
