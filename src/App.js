import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Signup from "./Pages/Signup/Signup";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
