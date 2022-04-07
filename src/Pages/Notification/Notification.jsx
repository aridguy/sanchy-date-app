import React from "react";
import "./Notification.css";
import Logo from "../../assets/images/Logo.svg";
import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import caret from "../../assets/images/caret.svg";
import com from "../../assets/images/community.svg";
import post from "../../assets/images/postIcon.svg";
import date from "../../assets/images/dating.svg";
import chat from "../../assets/images/chats.svg";
import token from "../../assets/images/buy-tokens.svg";
import logout from "../../assets/images/logout.svg";
import location from "../../assets/images/location.png";
// all story images below here
import pretty from "../../assets/images/pretty.png";
import valery from "../../assets/images/valerie.png";
import roman from "../../assets/images/roman.png";
import nice from "../../assets/images/nice.png";
import escstarcy from "../../assets/images/escstarcy.png";
import celine from "../../assets/images/celine.png";
import story from "../../assets/images/story.png";
import chev1 from "../../assets/images/chevleft.svg";
import chev2 from "../../assets/images/chevright.svg";
// hookup images around this section
import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
// hook images
import verified from "../../assets/images/verified.svg";
import rate from "../../assets/images/rating.svg";
import cam from "../../assets/images/camera.svg";
import vidcam from "../../assets/images/vidcam.svg";

// member section here
import filter from "../../assets/images/filter.svg"

const Notification = () => {
    return (
        // navbar
        <div>
            <header>
                <nav className="shadow-lg p-4 mb-4 bg-white topNav navbar-fixed-top">
                    <div className="h-contents d-flex justify-content-between">
                        {/* header logo */}
                        <img className="logo" src={Logo} alt="Logo.svg" />
                        {/* profile pics and notifications icon */}
                        <div className=" h-contents d-flex justify-content-between align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell noti" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                            <div className="profilePicsHeader"></div>
                            <img className="caret" src={caret} alt="caret.svg" />
                        </div>
                    </div>
                </nav>
            </header>

            {/* side nav */}
            <div className="d-flex mr-2 ml-2 ">
                <div className="navprofile w-25 d-flex flex-column justify-content-start align-items-center">
                    <div><img src={sidenav_profile} /></div>
                    <h3>Makayla <sup>30</sup></h3>
                    <span><img className="location" src={location} /><span>Location, Nigeria</span></span>
                    <div className="sideNavBtns">
                        <button className="community"> <img className="communityIcon" src={com} /> Community</button>
                        <button className="post"> <img className="postIcon" src={post} /> Post</button>
                        <button className="dating"> <img className="datingIcon" src={date} /> Dating</button>
                        <button className="chats"> <img className="chatIcon" src={chat} /> Chats</button>
                        <button className="buyToken"> <img className="buy-tokenIcon" src={token} /> Buy Tokens</button>
                        <button className="logOut"> <img className="logoutIcon" src={logout} /> Logout</button>
                    </div>
                </div>

                <div className="w-75 m-4">
                    <div className="story-section">
                        <img className="chevleft" src={chev1} />
                        <img className="pretty" src={pretty} />
                        <img className="valery" src={valery} />
                        <img className="celine" src={celine} />
                        <img className="nice" src={nice} />
                        <img className="roman" src={roman} />
                        <img className="escstacy" src={escstarcy} />
                        <img className="story" src={story} />
                        <img className="chevright" src={chev2} />
                    </div>
                    {/* hot pics below here */}
                    
                    </div>
            </div>
       </div>           
    )
}

export default Notification;