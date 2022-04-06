import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppShellComponent from './AppShellComponent';
import Home from './pages/Home';
import LandingPage from './pages/Landing/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function AllRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/:page" element={<AppShellComponent />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}
export default AllRoutes;
