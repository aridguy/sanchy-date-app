import React from "react";
import hiw_profile from "../../assets/images/hiw_profile.svg";
import hiw_profile_two from "../../assets/images/hiw_profile_two.png";
import hiw_main_img from "../../assets/images/hiw_main_img.svg";
import hiw_sub_img from "../../assets/images/hiw_sub_img.svg";
import hiw_sub_two from "../../assets/images/hiw_sub_two.svg";
import chat_img from "../../assets/images/hiw_chat.png";
import chat_img_two from "../../assets/images/hiw_chat_two.png";
import hiw_profile_three from "../../assets/images/hiw_chat_three.svg";
import hiw_sm from "../../assets/images/hiw_sm.svg";

import "./HowItWorks.css";

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <div>
                <img className="w-100" src={hiw_sm} alt="how it works" />
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div className="d-flex justify-content-center align-items-start pt-4">
                        <img className="m-2" src={hiw_profile} alt="profile" />
                        <div className="m-2">
                            <h3>Set up profile details</h3>
                            <p>Our community is filled with unique individuals such as yourself. <br />
                                Therefore, the need for you to provide neccessary information about <br /> yourself. </p>
                        </div>
                    </div>
                    <div className="hiw-image">
                        <div><img src={hiw_main_img} className="rounded" alt="main" /></div>
                        {/* <div><img src={hiw_main_img} className="rounded" alt="main" /></div> */}
                        {/* <div className="sub"><img src={hiw_sub_img} className="rounded" alt="sub" /></div> */}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div className="hiw-image">
                        <div><img src={hiw_sub_two} className="rounded" alt="main" /></div>
                        <div className="sub"><img src={hiw_sub_img} className="rounded" alt="sub" /></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-start mt-4">
                        <img className="m-2" src={hiw_profile_two} alt="profile" />
                        <div className="mt-2">
                            <h3>Explore our commnity</h3>
                            <p>
                                You explore our community to meet people and create connections <br />
                                that will become something magical to say the least. This feature <br />
                                allows you to meet people and choose those you want to meet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div className="d-flex justify-content-center align-items-start pt-4">
                        <img className="m-2" src={hiw_profile_two} alt="profile" />
                        <div className="m-2">
                            <h3>Go On Date</h3>
                            <p>
                                Our platform allows you to post a date request to know people <br />
                                that might be interested in going for drink, dinner or downtown. <br />
                                You can talk more on the details in the chat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="hiw-chat_img"><img src={chat_img} className="rounded" alt="main" /></div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex hiw-image-container justify-content-between align">
                    <div>
                        <div className="hiw-chat_img"><img src={chat_img_two} className="rounded" alt="main" /></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-start pt-4">
                        <img className="m-2" src={hiw_profile_three} alt="profile" />
                        <div className="m-2">
                            <h3>Chat with people</h3>
                            <p>
                            You also get to chat with other members of the community.<br /> 
                            You get to talk about secrets and desires. You can also share photos <br /> and videos with other members of Quickdate. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;