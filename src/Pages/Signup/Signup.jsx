import React from "react";
// import Header from "../../components/Header/Header";
import './Signup.css';
import './SignupMobile.css';
import LoginImg from '../../assets/images/login_left_img.png';
import LoginImgMobile from '../../assets/images/login_left_img_mobile.png';
import LoginBtmRightImg from '../../assets/images/login_btm_right_img.png';

// import {AiOutlineArrowLeft} from 'react-icons/ai';
// import LoginEmailInput from "../../components/LoginEmailInput/LoginEmailInput";
// import {BiEnvelope} from 'react-icons/bi';
// import {BsPhone} from 'react-icons/bs'
// import LoginPhoneInput from "../../components/LoginPhoneInput/LoginPhoneInput";

const Signup =()=>{
    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (tab) =>{
    //     setToggleState(tab)
    // }

    return(
        <div className="signup-container">
            {/* <Header /> */}
            <div className="signup-content-wrapper">
                <img className="signup-left-img" src={LoginImg} alt="" />
                <img className="signup-left-img-mobile" src={LoginImgMobile} alt="" />
                <div></div>
                <div className="right-input-wrapper">
                    <div className="right-input-fields-wrapper">
                        {/* <AiOutlineArrowLeft /> */}

                        <div className="signup-input-container">
                            <div className="signup-heading-container">
                                <div className="signup-heading-one">Let’s Get You Started</div>
                                <div className="signup-heading-two">Please enter the details to verify your identity</div>
                            </div>

                            <form className='signup-input-form' action="">
                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder='Enter Username' />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Country/City</label>
                                    <input type="text" placeholder='Enter Country/city name' />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="username">Email</label>
                                    <input type="text" placeholder='Enter your email address' />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder='Enter your password' />
                                </div>

                                <div className='signup-input-wrapper'>
                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" placeholder='Enter your password' />
                                </div>

                                <div className='signup-check-inputs'>
                                    <div className="signup-checkbox-wrapper">
                                        <input type="checkbox" />
                                        <div>I guarantee that I am at least 18 years old.</div>
                                    </div>

                                    <div className="signup-checkbox-wrapper">
                                        <input type="checkbox" />
                                        <div>I guarantee that I am at least 18 years old.</div>
                                    </div>


                                </div>

                                <button>Submit</button>
                            </form>
                            
                        </div>

                    </div>
                </div>
            </div>
            <img className="signup-btm-right-img" src={LoginBtmRightImg} alt="" />
        </div>
    )
}

export default Signup;