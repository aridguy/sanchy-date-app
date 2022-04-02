import React from "react";
import './Banner.css';
import banner_couples from "../../assets/images/banner-couples.png";
const Banner =()=>{
    return (
        <div className=" d-flex justify-content-between align-items-center text-white banner-container">
            <h2>Ready to find New Friends, Dates, Models or people next door.</h2>
            <img src={banner_couples} alt="banner-couples" />
        </div>
    )
}

export default Banner;