import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { createRoot } from 'react-dom/client';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Signup from "./Pages/Signup/Signup";

import './App.css';
import OtpVerification from "./Pages/OtpVerification/OtpVerification";
import AccountSetup from "./Pages/AccountSetup/AccountSetup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/acct-setup" element={<AccountSetup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
