import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashBoard from './screens/Dashboard';
import Gallery from './screens/Gallery';
import Login from './screens/Login';
import ManageEvents from './screens/ManageEvents';
import ManageTeam from './screens/ManageTeam';
import NavBar from './screens/NavBar';
import Register from './screens/Register';
import Upload from './screens/Upload';

import './App.css';

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
