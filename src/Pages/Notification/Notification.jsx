import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Notification.css";
import chev1 from "../../assets/images/chevleft.svg";
import mark from "../../assets/images/markasread.svg";
import lock from "../../assets/images/lock.svg";
import token from "../../assets/images/token.svg";
import adnoti from "../../assets/images/addnoti.svg";
// footer icons
import community from "../../assets/images/comunityfooticon.svg";
import post from "../../assets/images/postfooticon.svg";
import adnotfoot from "../../assets/images/notificationfooter.svg";
import chats from "../../assets/images/chaticonfoot.svg";
import date from "../../assets/images/datingiconfoot.svg";

const Notification = () => {
    return (
        // navbar
        <div>
            <LoggedInHeader />
            {/* side nav */}
            <div className="d-flex mr-2 ml-2 ">
                <Sidebar activeLink={''} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="notifititle totimobile">
                                <div className="notitexts notitextsmobile d-flex">
                                    <ul>
                                        <li className="lefttone lefttone-mobile">
                                            <img className="chevleft" src={chev1} alt="navigate left" />
                                            <p className="thenotitext1">Notification</p>
                                        </li>
                                        
                                        <li className="rightone rightone-mobile">
                                            <img className="markicon" src={mark} alt="navigate left" />
                                            <p className="thenotitext2">Mark as read</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* next */}
                            <div className="container notisection">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <ul className="noticontents1">
                                            <li>Your password has been successfully changed</li>
                                        </ul>
                                        <small className="notocontents2">August 25, 2022 10:45pm</small>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <img className="notiplaceicon" src={lock} alt="icon" />
                            <div className="container notisection second">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <ul className="noticontents1">
                                            <li>You have received a welcome gift of 100 tokens</li>
                                        </ul>
                                        <small className="notocontents2">August 25, 2022 10:45pm</small>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <img className="tokenicon" src={token} alt="token" />
                            <div className="container notisection third">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <ul className="noticontents1">
                                            <li>Your password has been successfully changed</li>
                                        </ul>
                                        <small className="notocontents2">August 25, 2022 10:45pm</small>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <img className="notiplaceicon3" src={lock} alt="icon" />
                            <div className="container notisection fourth">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <ul className="noticontents1">
                                            <li>You have received a welcome gift of 100 tokens</li>
                                        </ul>
                                        <small className="notocontents2">May 25, 2022 3:45pm</small>
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                            </div>
                            <img className="tokenicon3" src={token} alt="token" />
                            <div className="col-md-2">
                            <img className="addnoti" src={adnoti} alt="token" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <footer className="foot">
                    <div className="footcontentsparent">
                        <span><img className="comfoot" src={community} alt="community" /></span>
                         <span><img className="postfoot" src={post} alt="posts" /></span>
                         <span><img className="notfoot" src={adnotfoot} alt="noti" /></span>
                         <span><img className="datefoot" src={date} alt="dating" /> <br /></span>
                         <span><img className="chatfoot" src={chats} alt="chats" /></span>
                    </div>
                </footer>
            </div>
            )
}

            export default Notification;