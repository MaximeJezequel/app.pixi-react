import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DashBoard from "./screens/Dashboard"
import Gallery from "./screens/Gallery"
import ManageEvents from "./screens/ManageEvents"
import ManageTeam from "./screens/ManageTeam"
import NavBar from "./screens/NavBar"
import Upload from "./screens/Upload"

import "./App.css"

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<DashBoard />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/events" element={<ManageEvents />} />
				<Route path="/team" element={<ManageTeam />} />
				<Route path="/upload" element={<Upload />} />
			</Routes>
		</Router>
	)
}

export default App
