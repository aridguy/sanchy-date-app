import React from 'react'
import './PersonalProfile.css'
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BsArrowLeft, BsCameraVideo } from 'react-icons/bs';
import { MdLocationPin, MdOutlineMessage } from 'react-icons/md';
import { VscDeviceCamera } from 'react-icons/vsc';
import midImgOne from '../../assets/images/prof-placeholder-one.png'
import midImgTwo from '../../assets/images/prof-placeholder-two.png'


import sidenav_profile from "../../assets/images/sidenav-profile.svg";
import ProfileAboutSection from '../../components/ProfileAboutSection/ProfileAboutSection';
import UserContentSection from '../../components/UserContentSection/UserContentSection';
import HotpicksHolder from '../../components/HotpicksHolder/HotpicksHolder';

import hookup1 from "../../assets/images/hookup1.svg";
import hookup2 from "../../assets/images/hookup2.svg";
import testPic from "../../assets/images/test.png";
import ProfileBio from '../../components/ProfileBio/ProfileBio';

const PersonalProfile = () => {
    const hotPicks = [{ image: testPic, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, 
                        { image: hookup2, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, { image: hookup2, id: 1, rate: true, verified: true }, { image: hookup1, id: 1, rate: true, verified: true }, { image: hookup2, id: 1, rate: true, verified: false }, 
                        { image: hookup1, id: 1, rate: true, verified: false }, { image: hookup2, id: 1, rate: true, verified: false }]
  return (
    <div>
        <LoggedInHeader />

        <div className="d-flex mr-2 ml-2 ">
            <Sidebar />
            <div className='personal-profile-center-content-wrapper'>

                <div className='personal-prof-heading-nav-container'>
                    <div className='personal-profile-sect-heading-nav'>
                        <BsArrowLeft className='back-arrow' />
                        <div className='personal-profile-heading'>Profile</div>
                    </div>

                    <div className='personal-profile-toggle-wrapper'>
                        <div>                        
                            <input type="checkbox"  className='pers-profile-toggle'/>
                            <span className='toggle-slider'></span>
                        </div>

                        <div>Stealth mode</div>
                    </div>
                </div>

                <div className='personal-profile-center-content'>
                    <div>
                        <div className='personal-profile-top-card'>
                            <div className='personal-profile-and-name-container'>
                                <div className='personal-profile-img-container'>
                                    <img className='personal-profile-img' src={sidenav_profile} alt="" />
                                </div>

                                <div className='profile-name-and-location'>
                                    <div className='profile-user-name'>Elena</div>
                                    <div className='location-det'>
                                        <MdLocationPin className='location-icon' />
                                        <div>Lagos, Nigeria</div>
                                    </div>
                                </div>
                            </div>

                            <div className='profile-name-details'>
                                <div className='pers-profile-btn-container'>
                                    <button className='profile-nots-btn'>Edit Profile</button>
                                    <button className='profile-nots-btn-two'>Share</button>
                                </div>
                            </div>
                        </div>

                        <ProfileBio />

                    </div>

                    <div>

                        <div>Recommendations</div>

                        <div className='profile-recommended-section'>
                            {hotPicks.map((user, userID) =>
                                <div key={userID}> <HotpicksHolder userData={user} /></div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default PersonalProfile