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
  let isLogged = JSON.parse(localStorage.getItem('login')) === 1 ? true : false;

  return (
    <Router>
      <div className="App">
        <NavBar />

        {!isLogged && <Login />}
        {isLogged && (
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<ManageEvents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/team" element={<ManageTeam />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
