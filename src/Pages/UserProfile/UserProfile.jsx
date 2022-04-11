import React from 'react'
import './UserProfile.css'
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

const UserProfile = () => {
  return (
    <div>
        <LoggedInHeader />

        <div className="d-flex mr-2 ml-2 ">
            <Sidebar />
            <div className='user-profile-center-content-wrapper'>
                <div className='user-profile-sect-heading-nav'>
                    <BsArrowLeft className='back-arrow' />
                    <div className='user-profile-heading'>Profile</div>
                </div>

                <div className='user-profile-center-content'>
                    <div>

                        <div className='user-profile-top-card'>
                            <div className='user-profile-img-container'>
                                <img className='user-profile-img' src={sidenav_profile} alt="" />
                            </div>

                            <div className='profile-name-details'>
                                <div className='profile-name-and-location'>
                                    <div className='profile-user-name'>Elena</div>
                                    <div className='location-det'>
                                        <MdLocationPin className='location-icon' />
                                        <div>Lagos, Nigeria</div>
                                    </div>
                                </div>

                                <div className='nots-container'>
                                    <div className='nots-mini-icon-wrapper'>
                                        <VscDeviceCamera className='nots-mini-icon' />
                                        <div>10</div>
                                    </div>

                                    <div className='nots-mini-icon-wrapper'>
                                        <BsCameraVideo className='nots-mini-icon' />
                                        <div>10</div>
                                    </div>

                                      <div className='nots-mini-icon-wrapper'>
                                          <MdOutlineMessage className='nots-mini-icon' />
                                          <div>10</div>
                                      </div>
                                </div>
                                <button className='profile-nots-btn'>Open Chat</button>
                            </div>
                        </div>

                        <div className='user-profile-middle-second-section'>
                            <div className='mid-heading'>
                                <div>Profile Image</div>
                                <div>2</div>
                            </div>

                            <div className='mid-images-container'>
                                <img src={midImgOne} alt="" />
                                <img src={midImgTwo} alt="" />
                                <img src={midImgTwo} alt="" />
                            </div>
                            
                        </div>

                        <ProfileAboutSection />

                        <UserContentSection />

                    </div>


                    <div>

                        <div>Recommendations</div>

                        <div className='profile-recommended-section'>
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                            <HotpicksHolder userData={null} />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default UserProfile