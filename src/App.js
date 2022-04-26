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
import AddPost from "./Pages/AddPost/AddPost";
import Post from "./Pages/Post/Post";
import Dates from "./Pages/Dates/Dates";
import Chats from "./Pages/Chats/Chats";
import BuyTokens from "./Pages/BuyTokens/BuyTokens";
import UserProfile from "./Pages/UserProfile/UserProfile";
import MemberProfile from "./Pages/MemberProfile/MemberProfile";
import PersonalProfile from "./Pages/PersonalProfile/PersonalProfile";
import EditProfile from "./Pages/EditProfile/EditProfile";

import VerifyProfile from "./Pages/VerifyProfile/VerifyProfile";
import ProfileImages from "./Pages/ProfileImages/ProfileImages";

import Imprint from "./Pages/Imprint/Imprint";
import Voucher from "./Pages/Voucher/Voucher";
import Faq from "./Pages/Faq/Faq";

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
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/buy-tokens" element={<BuyTokens />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/user/:username" element={<MemberProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/imprint" element={<Imprint />} /> 
          <Route path="/faq" element={<Faq />} />
          <Route path="/Voucher" element={<Voucher />} />
          <Route path="/verify-profile" element={<VerifyProfile />} />
          <Route path="/profile-images" element={<ProfileImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
