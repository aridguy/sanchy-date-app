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
import Post from "./Pages/Post/Post";
import Dates from "./Pages/Dates/Dates";
import Chats from "./Pages/Chats/Chats";
import BuyTokens from "./Pages/BuyTokens/BuyTokens";
import UserProfile from "./Pages/UserProfile/UserProfile";

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
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/community" element={<Community />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/buy-tokens" element={<BuyTokens />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
