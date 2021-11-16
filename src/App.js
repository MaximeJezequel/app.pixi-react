import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DashBoard from "./screens/Dashboard"
import ManageEvents from "./screens/ManageEvents"
import ManageTeam from "./screens/ManageTeam"
import NavBar from "./screens/NavBar"

import "./App.css"

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<DashBoard />} />
				<Route path="/events" element={<ManageEvents />} />
				<Route path="/team" element={<ManageTeam />} />
			</Routes>
		</Router>
	)
}

export default App
