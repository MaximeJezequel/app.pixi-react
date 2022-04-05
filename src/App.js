import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import Gallery from './screens/Gallery';
import Login from './screens/Login';
import ManageEvents from './screens/ManageEvents';
import NewEvent from './screens/NewEvent';
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/gallery/:event_id" element={<Gallery />} />
            <Route path="/upload/:event_id" element={<Upload />} />
            <Route path="/events/:event_id" element={<ManageEvents />} />
            <Route path="/events" element={<NewEvent />} />
            <Route path="/team/" element={<ManageTeam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
