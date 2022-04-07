import React from "react";

// Sidebar images
import "./Sidebar.css";
import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import com from "../../assets/images/community.svg";
import post from "../../assets/images/postIcon.svg";
import date from "../../assets/images/dating.svg";
import chat from "../../assets/images/chats.svg";
import token from "../../assets/images/buy-tokens.svg";
import logout from "../../assets/images/logout.svg";
import location from "../../assets/images/location.png";
import { useNavigate } from "react-router-dom";


const Sidebar = ({activeLink}) => {
    const navigate = useNavigate();
    const logoutUser = () => console.log('log out user');
    return (
        <div className="navprofile w-25 d-flex flex-column justify-content-start align-items-center">
            <div><img src={sidenav_profile} alt="my profile" /></div>
            <h3>Makayla <sup>30</sup></h3>
            <span className="mb-4"><img className="location" src={location} alt="location" /><span>Location, Nigeria</span></span>
            <div className="sideNavBtns">
                <button className={`${activeLink === 'community' ? 'active-side-nav' : 'post'}`} onClick={()=>navigate('/community')}> <img className="communityIcon" alt="community" src={com} /> Community</button>
                <button className={`${activeLink === 'post' ? 'active-side-nav' : 'post'}`} onClick={()=>navigate('/post')}> <img className="postIcon" alt="post" src={post} /> Post</button>
                <button className={`${activeLink === 'dates' ? 'active-side-nav' : 'inactive-side-nav'}`} onClick={()=>navigate('/dates')}> <img className="datingIcon" alt="date" src={date} /> Dating</button>
                <button className={`${activeLink === 'chats' ? 'active-side-nav' : 'inactive-side-nav'}`} onClick={()=>navigate('/chats')}> <img className="chatIcon" alt="chat" src={chat} /> Chats</button>
                <button className={`${activeLink === 'buy-tokens' ? 'active-side-nav' : 'inactive-side-nav'}`} onClick={()=>navigate('/buy-tokens')}> <img className="buy-tokenIcon" alt="token" src={token} /> Buy Tokens</button>
                <button className={`${activeLink === 'logout' ? 'active-side-nav' : 'inactive-side-nav'}`} onClick={()=> logoutUser()}> <img className="logoutIcon" alt="logout" src={logout} /> Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;