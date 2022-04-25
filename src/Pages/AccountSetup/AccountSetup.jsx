import React, { useEffect } from "react";
import './AccountSetup.css';
import './AccountSetupMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';

import {BsGenderFemale, BsGenderMale} from 'react-icons/bs'
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";

const AccountSetup = ()=>{
    const pathname = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return(
        <div className="acct-setup-container">
            <Header />
            <div className="acct-setup-content-wrapper">
                <img className="acct-setup-left-img" src={LoginImg} alt="" />
                <img className="acct-setup-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">
                        {/* <AiOutlineArrowLeft /> */}

                        <div className="acct-setup-input-container">
                            <div className="acct-setup-heading-container">
                                <div className="acct-setup-heading-one">Account Set Up</div>
                                <div className="acct-setup-heading-two">Kindly provide the required details to set up your account</div>
                            </div>

                            <form className='acct-setup-input-form' action="">

                                <div className='acct-setup-input-wrapper'>
                                    <div className="label-wrapper">
                                        <div>Gender</div>
                                        <div>Check one option that reflects your gender</div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <input type="text" placeholder='I am a Man ' />
                                        <div className="input-icon-wrapper">
                                            <BsGenderMale className="input-icon" />
                                        </div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <input type="text" placeholder='I am a Woman' />
                                        <div className="input-icon-wrapper">
                                            <BsGenderFemale className="input-icon" />
                                        </div>
                                    </div>

                                </div>

                                <div className='acct-setup-input-wrapper'>
                                    <div className="label-wrapper">
                                        <div>Preference</div>
                                        <div>Who are you looking for?</div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <input type="text" placeholder='I am a Man ' />
                                        <div className="input-icon-wrapper">
                                            <BsGenderMale className="input-icon" />
                                        </div>
                                    </div>

                                    <div className="single-input-wrapper">
                                        <input type="text" placeholder='I am a Woman' />
                                        <div className="input-icon-wrapper">
                                            <BsGenderFemale className="input-icon" />
                                        </div>
                                    </div>

                                </div>


                                <button>Continue</button>

                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
            <img className="acct-setup-btm-right-img" src={LoginBtmRightImg} alt="" />
        </div>
    )
}

export default AccountSetup;