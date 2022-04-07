import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { createRoot } from 'react-dom/client';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Signup from "./Pages/Signup/Signup";
import Community from "./Pages/Community/Community";
import './App.css';
import OtpVerification from "./Pages/OtpVerification/OtpVerification";
import AccountSetup from "./Pages/AccountSetup/AccountSetup";
import Notification from "./Pages/Notification/Notification";

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
          <Route path="/Community" element={<Community />} />
          <Route path="/Notification" element={<Notification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
